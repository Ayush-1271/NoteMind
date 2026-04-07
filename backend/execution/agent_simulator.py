import os
import asyncio
import json
from google import genai
from google.genai import types
from backend.core.config import settings
from backend.core.queue import tui_log_queue
from backend.execution.agents import AGENT_PROMPTS
from backend.db.chroma_manager import semantic_search
from backend.api.websockets import manager
from backend.observer.translator import process_file, run_semantic_pass
import datetime

client = genai.Client(api_key=settings.gemini_api_key) if settings.gemini_api_key else None

async def push_log(msg: str):
    # Sends log to both Terminal TUI and React Flow Frontend
    tui_log_queue.put(msg)
    try:
        await manager.broadcast({"type": "log", "message": msg})
    except:
        pass

async def simulate_agent_swarm(prompt: str):
    await push_log(f"[STATUS] initiating  ⚡ Swarm initializing for: {prompt}")
    
    # Create isolated Session Directory
    session_id = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    brain_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), ".brain", f"session_{session_id}")
    
    if not os.path.exists(brain_dir):
        os.makedirs(brain_dir)

    # Sequence of execution
    agent_roles = ["Project_Manager", "Frontend_Engineer", "Backend_Engineer", "QA_Tester"]
    
    try:
        current_focus = prompt
        session_node_ids = []  # Track all nodes created this session
        
        for role in agent_roles:
            # Map role to STATUS key the frontend understands
            status_key = {
                'Project_Manager':   'pm',
                'Frontend_Engineer': 'frontend',
                'Backend_Engineer':  'backend',
                'QA_Tester':        'qa',
            }.get(role, role.lower())
            
            await push_log(f"[STATUS] {status_key}  Swarm cycle: {role} is investigating...")
            
            # Semantic Search Context
            search_results = []
            try:
                # Top 3 most relevant previous files
                raw_results = semantic_search(current_focus, n_results=3)
                if raw_results and "documents" in raw_results and raw_results["documents"]:
                    # Flatten Chroma DB response
                    for doc_batch in raw_results["documents"]:
                        for d in doc_batch:
                            search_results.append(d)
            except Exception as e:
                pass
                
            memory_string = "\\n--- Memory Retrieval ---\\n" + "\\n\\n".join(search_results) if search_results else ""
            
            full_prompt = f"Target Prompt: {prompt}\\nCurrent Focus: {current_focus}\\n{memory_string}"
            
            response_text = await _call_gemini(role, full_prompt)
            
            try:    
                data_list = json.loads(response_text)
                if isinstance(data_list, dict):
                    data_list = [data_list] # Normalise to list
            except json.JSONDecodeError as e:
                await push_log(f"[red]  {role} emitted invalid JSON: {e}. Skipping.[/red]")
                continue

            for data in data_list:
                thought = data.get("thought", "Acting")
                filename = data.get("filename", f"{role}_Thought.md")
                content = data.get("content", "")

                _write_to_brain(brain_dir, filename, content)
                file_path = os.path.join(brain_dir, filename)
                node_id = filename.replace('.md', '')
                await push_log(f"[STATUS] {status_key}  Node Created ({role}): {filename} | {thought}")
                
                # Natively trigger parser in-thread to instantly fire WebSockets
                await process_file(file_path)
                session_node_ids.append(node_id)
                
            await asyncio.sleep(2)
            
        # After ALL agents finish, run one semantic linking pass across all session nodes
        await run_semantic_pass(session_node_ids, push_log)
        await push_log("[bold blue]Swarm fully parsed task and successfully gracefully disconnected![/bold blue]")

    except Exception as e:
        await push_log(f"[bold red]Swarm Executor Error:[/bold red] {e}")

async def _call_gemini(role: str, context: str) -> str:
    system_instruction = AGENT_PROMPTS.get(role, "")
    
    if not client:
        return f'[{{ "thought":"Simulated dummy mode","filename":"{role}_Dummy.md","content":"---\\nowner: {role}\\n---\\n# Dummy Context\\nNo API key. [[Plan]]." }}]'
    
    try:
        response_schema = types.Schema(
            type=types.Type.ARRAY,
            items=types.Schema(
                type=types.Type.OBJECT,
                properties={
                    "thought": types.Schema(type=types.Type.STRING, description="Internal reasoning for the file."),
                    "filename": types.Schema(type=types.Type.STRING, description="Exact filename ending in .md"),
                    "content": types.Schema(type=types.Type.STRING, description="Raw markdown content. Escape tabs and quotes correctly."),
                },
                required=["thought", "filename", "content"]
            )
        )
        
        response = await asyncio.to_thread(
            client.models.generate_content,
            model='gemini-2.5-flash',
            contents=f"{system_instruction}\\n\\nCurrent Context:\\n{context}",
            config={
                'response_mime_type': 'application/json',
                'response_schema': response_schema
            }
        )
        return response.text
    except Exception as e:
        tui_log_queue.put(f"[red]Gemini API Exception: {e}[/red]")
        return '[]'

def _write_to_brain(brain_dir: str, filename: str, content: str):
    file_path = os.path.join(brain_dir, filename)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
