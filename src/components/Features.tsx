"use client";

export function Features() {
  const features = [
    { title: "[*] Graph Memory", description: "Every agent output is atomized into individual Markdown notes stored locally in .brain/." },
    { title: "[*] Semantic Linking", description: "Notes are embedded into ChromaDB via vector similarity, replacing massive context dumps." },
    { title: "[*] Bound Token Costs", description: "Token costs stay fixed. Agents navigate the graph, ensuring token usage scales at O(k) not O(n²)." },
    { title: "[*] Collaborative Visibility", description: "Agents are no longer black boxes. Every decision is a node in the graph, visible to everyone." },
    { title: "[*] Real-Time React Flow", description: "Real-time visualizer mapping the entire agent pipeline in strict swimlane columns." },
    { title: "[*] WebSocket Pipeline", description: "FastAPI backend streams node additions and semantic edge links instantly to the frontend." }
  ];

  return (
    <section className="w-full max-w-4xl py-24 border-b border-white/5">
      <h2 className="text-xl font-mono text-white font-bold mb-8">What is NodeMind?</h2>
      <p className="text-gray-400 font-mono text-sm mb-12 max-w-2xl leading-relaxed">
        NodeMind replaces the flat, repeating context dump with a persistent knowledge graph, solving the Black Box problem and Token Explosion problem inherent to multi-agent frameworks.
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
