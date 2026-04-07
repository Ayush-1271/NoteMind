import queue

# A thread-safe queue to pass messages from the background FastAPI threads to the Textual UI main thread.
tui_log_queue = queue.Queue()
