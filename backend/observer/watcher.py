import os
import asyncio
from watchdog.observers import Observer
from watchdog.events import PatternMatchingEventHandler
from backend.observer.translator import process_file

class BrainHandler(PatternMatchingEventHandler):
    def __init__(self, loop: asyncio.AbstractEventLoop):
        super().__init__(patterns=["*.md"], ignore_directories=True)
        self.loop = loop

    def on_created(self, event):
        self._process(event.src_path)

    def on_modified(self, event):
        self._process(event.src_path)
        
    def _process(self, path):
        # We spawn the translation coroutine.
        # If no explicit loop is provided, we run it synchronously in the watchdog thread.
        if self.loop and self.loop.is_running():
            asyncio.run_coroutine_threadsafe(process_file(path), self.loop)
        else:
            try:
                # Provide a fresh loop for this thread if none exists
                asyncio.run(process_file(path))
            except Exception as e:
                print(f"Watcher error applying process_file: {e}")

class BrainWatcher:
    def __init__(self, watch_dir: str, loop: asyncio.AbstractEventLoop):
        self.watch_dir = watch_dir
        self.loop = loop
        self.observer = Observer()
        self.handler = BrainHandler(self.loop)

    def start(self):
        if not os.path.exists(self.watch_dir):
            os.makedirs(self.watch_dir)
        self.observer.schedule(self.handler, self.watch_dir, recursive=True)
        self.observer.start()
        print(f"Started BrainWatcher on directory: {self.watch_dir}")

    def stop(self):
        self.observer.stop()
        self.observer.join()
        print("Stopped BrainWatcher")
