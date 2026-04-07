export const siteContent = {
  nav: {
    logo: "NodeMind",
    links: [
      { name: "Features", href: "#features" },
      { name: "Architecture", href: "#architecture" },
      { name: "Demo", href: "#demo" },
    ],
    cta: {
      text: "View GitHub",
      href: "https://github.com/placeholder/nodemind",
    },
  },
  hero: {
    headline: "The Real-Time Multi-Agent Execution Engine",
    subheadline:
      "NodeMind transforms autonomous AI execution into a live, observable graph where every task, dependency, decision, and blocker becomes structured memory.",
    ctas: [
      { text: "Launch Demo", href: "#demo", primary: true },
      { text: "View on GitHub", href: "https://github.com/placeholder/nodemind", primary: false },
    ],
  },
  install: {
    command: "pip install nodemind",
  },
  architecture: {
    title: "From Prompt to Autonomous System",
    description: "A transparent execution loop powered by local markdown memory and live web sockets.",
    steps: [
      { step: "1. Prompt", detail: "User enters project prompt." },
      { step: "2. Planner", detail: "Gemini plans agent architecture & breaks down tasks." },
      { step: "3. execution", detail: "Specialized agents emit Markdown memory nodes." },
      { step: "4. Graph Sync", detail: "Parser syncs nodes to SQLite and streams via WebSockets." },
      { step: "5. Intervene", detail: "Human-in-the-loop recovery when context breaks occur." },
    ],
  },
  features: [
    {
      title: "Graph-Based Memory",
      description: "Agents save their state as Markdown nodes, parsed into a living graph.",
    },
    {
      title: "Dependency-Aware Blocking",
      description: "Agents detect missing context and pause safely instead of hallucinating.",
    },
    {
      title: "Human-in-the-Loop Recovery",
      description: "Visually inspect stalled tasks and inject context to resume execution.",
    },
    {
      title: "Structured Execution Traces",
      description: "Full visibility into objective, reasoning, commands, and outputs.",
    },
  ],
  comparison: {
    traditional: [
      "Linear logging",
      "Hidden agent state",
      "Black-box execution",
      "Blind retries",
    ],
    nodemind: [
      "Graph memory",
      "Visible blockers",
      "Transparent execution traces",
      "Dependency-aware recovery",
    ],
  },
  footer: {
    statement: "Built for autonomous systems, hackathons, and developer-grade AI observability.",
    links: [
      { name: "GitHub", href: "https://github.com/placeholder/nodemind" },
      { name: "Docs", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
};
