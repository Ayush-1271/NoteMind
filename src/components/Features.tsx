"use client";

export function Features() {
  const features = [
    { title: "[*] Total Codebase Awareness", description: "NodeMind uses ChromaDB to embed and understand your entire project structure automatically." },
    { title: "[*] Continuous Memory", description: "Long-term execution memory ensures context isn't lost between multiple agent sessions." },
    { title: "[*] Multi-Agent Architecture", description: "Spawns specialized agents to handle debugging, refactoring, and generation simultaneously." },
    { title: "[*] Terminal Native", description: "Built fully as a lightning-fast CLI tool so you never have to leave your keyboard." },
    { title: "[*] Bring Your Own Model", description: "Connect to Google Gemini, OpenAI, Claude, or local open-source models effortlessly." },
    { title: "[*] Framework Agnostic", description: "Works identically well on Python, Node, Next.js, Go, or any codebase you throw at it." }
  ];

  return (
    <section className="w-full max-w-4xl py-24 border-b border-white/5">
      <h2 className="text-xl font-mono text-white font-bold mb-8">What is NodeMind?</h2>
      <p className="text-gray-400 font-mono text-sm mb-12 max-w-2xl leading-relaxed">
        NodeMind is an AI-powered developer agent that understands your project structure, executes complex architectural tasks, and helps you build faster directly from your terminal.
      </p>

      <ul className="space-y-8 font-mono text-sm text-gray-400 max-w-3xl">
        {features.map((feature, i) => (
          <li key={i} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 group">
            <span className="text-white font-semibold whitespace-nowrap md:w-56">{feature.title}</span>
            <span className="text-gray-500 group-hover:text-gray-300 transition-colors">{feature.description}</span>
          </li>
        ))}
      </ul>

      <button className="mt-16 flex items-center gap-2 border border-white/20 bg-white text-black px-6 py-2 rounded-sm font-semibold hover:bg-gray-200 transition-colors">
        Read docs <span className="text-lg leading-none">→</span>
      </button>
    </section>
  );
}
