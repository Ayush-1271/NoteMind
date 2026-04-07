from textual.app import App, ComposeResult
from textual.widgets import Header, Footer, RichLog
from textual.containers import Container
from backend.core.queue import tui_log_queue

class NodeMindTUI(App):
    BINDINGS = [("ctrl+c", "quit", "Quit Daemon")]

    CSS = """
    #main-log {
        height: 100%;
        border: solid green;
    }
    """
    
    def compose(self) -> ComposeResult:
        yield Header(show_clock=True)
        self.log_widget = RichLog(id="main-log", highlight=True, markup=True)
        yield Container(self.log_widget)
        yield Footer()

    def on_mount(self) -> None:
        self.title = "NodeMind Backend Daemon"
        self.sub_title = "Swarm Intelligence Node"
        self.log_widget.write("[bold green]NodeMind Daemon Initialized.[/bold green]")
        self.log_widget.write("")
        self.log_widget.write("Services running:")
        self.log_widget.write(" - Visualizer:  [cyan]http://localhost:3000[/cyan]")
        self.log_widget.write(" - WebSockets:  [cyan]ws://localhost:8000/ws[/cyan]")
        self.log_widget.write(" - Chroma Host: Local Memory Active")
        self.log_widget.write(" - Watchdog:    Observing .brain directory")
        self.log_widget.write("")
        self.log_widget.write("[bold yellow]Ready to receive prompts via POST /api/prompt[/bold yellow]")
        self.log_widget.write("Press Ctrl+C to stop services and exit.\n")
        
        # Start checking the thread-safe queue for agent logging
        self.set_interval(0.5, self.check_logs)

    def check_logs(self):
        while not tui_log_queue.empty():
            msg = tui_log_queue.get()
            self.log_widget.write(msg)
