import os
import re
from datetime import datetime
from backend.db.mongo_manager import get_nodes_collection, get_edges_collection
from backend.db.chroma_manager import add_node_to_vector_db
from backend.api.websockets import manager

OWNER_PATTERN = re.compile(r'^owner:\s*(.*?)\s*$', re.MULTILINE)

async def process_file(file_path: str):
    """
    Phase 1 only: parse file, store in MongoDB + ChromaDB, broadcast addNode.
    Semantic linking is handled separately by run_semantic_pass() after all nodes exist.
    """
    if not os.path.exists(file_path):
        return

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Failed to read file {file_path}: {e}")
        return

    filename = os.path.basename(file_path)
    node_id  = filename.replace('.md', '')

    owner_match = OWNER_PATTERN.search(content)
    owner       = owner_match.group(1).strip() if owner_match else "Unknown"

    # Upsert MongoDB
    nodes_col = get_nodes_collection()
    now       = datetime.utcnow()
    node_doc  = {
        "_id":        node_id,
        "id":         node_id,
        "filename":   filename,
        "content":    content,
        "type":       "thought",
        "owner":      owner,
        "updated_at": now,
    }
    try:
        await nodes_col.update_one(
            {"_id": node_id},
            {"$set": node_doc, "$setOnInsert": {"created_at": now}},
            upsert=True
        )
    except Exception as e:
        print(f"Mongo node upsert failed: {e}")

    # Store vector embedding
    try:
        add_node_to_vector_db(
            node_id=node_id,
            content=content,
            metadata={"filename": filename, "owner": owner}
        )
    except Exception as e:
        print(f"ChromaDB insert failed: {e}")

    # Broadcast node immediately — no edges yet
    try:
        await manager.broadcast({
            "type": "addNode",
            "node": {
                "id":   node_id,
                "type": "custom",
                "data": {
                    "label":   node_id,
                    "owner":   owner,
                    "content": content,
                },
            },
            "edges": [],
        })
    except Exception as e:
        print(f"WS addNode broadcast failed: {e}")

    print(f"Node broadcast: '{node_id}' ({owner})")


async def run_semantic_pass(node_ids: list, push_log_fn):
    """
    Phase 2: After all nodes exist, run ChromaDB semantic search across
    every node and wire 2-3 cross-owner edges per node.
    Called once by agent_simulator after the full swarm completes.
    """
    from backend.db.chroma_manager import semantic_search

    nodes_col = get_nodes_collection()
    edges_col = get_edges_collection()

    await push_log_fn("[STATUS] semantic_search  🕸️  Running semantic search across all nodes...")

    all_semantic_edges = []

    for node_id in node_ids:
        node_doc = await nodes_col.find_one({"_id": node_id})
        if not node_doc:
            continue

        owner   = node_doc.get("owner", "Unknown")
        content = node_doc.get("content", "")

        try:
            results = semantic_search(content, n_results=25)
        except Exception as e:
            print(f"Semantic search failed for {node_id}: {e}")
            continue

        if not results or "ids" not in results or not results["ids"]:
            continue

        edges_found = 0
        for match_id in results["ids"][0]:
            if edges_found >= 3:
                break
            if match_id == node_id or match_id not in node_ids:
                continue

            match_doc = await nodes_col.find_one({"_id": match_id})
            if not match_doc or match_doc.get("owner") == owner:
                continue  # Skip same-owner

            edge_id  = f"{match_id}-->{node_id}"
            edge_doc = {
                "_id":               edge_id,
                "id":                edge_id,
                "source":            match_id,
                "target":            node_id,
                "relationship_type": "semantic_match",
            }
            try:
                await edges_col.update_one(
                    {"_id": edge_id},
                    {"$set": edge_doc},
                    upsert=True
                )
                all_semantic_edges.append(edge_doc)
                edges_found += 1
            except Exception:
                pass

    if all_semantic_edges:
        await push_log_fn(f"[STATUS] linking  🔗 Linking {len(all_semantic_edges)} cross-agent semantic connections...")
        # Broadcast all edges in one shot
        await manager.broadcast({
            "type":  "semanticLink",
            "edges": all_semantic_edges,
        })
        await push_log_fn(f"[STATUS] complete  ✅ Graph complete — {len(node_ids)} nodes, {len(all_semantic_edges)} semantic edges")
    else:
        await push_log_fn("[STATUS] complete  ✅ Graph complete — no cross-owner links found yet (add more prompts)")
