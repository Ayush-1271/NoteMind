import sys
import threading
import uvicorn
import os

from backend.tui.app import NodeMindTUI
from backend.observer.watcher import BrainWatcher

def run_server():
    # Uvicorn handles its own asyncio loop
    uvicorn.run("backend.api.server:app", host="0.0.0.0", port=8000, log_level="error")

def main():
    if len(sys.argv) > 1 and sys.argv[1] == "start":
        
        # 1. Start Watchdog Observer
        brain_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), ".brain")
        watcher = BrainWatcher(brain_dir, loop=None) 
        watcher.start()
        
        # 2. Start FastAPI server asynchronously in background
        server_thread = threading.Thread(target=run_server, daemon=True)
        server_thread.start()
        
        # 3. Start Textual App blockingly in main thread
        app = NodeMindTUI()
        app.run()
        
        # 4. Graceful Cleanup after TUI closes
        watcher.stop()
        print("NodeMind shutdown gracefully.")
    else:
        print("Usage: nodemind start")
        print("(For local testing, just run `python -m backend.cli start`)")

if __name__ == "__main__":
    main()
