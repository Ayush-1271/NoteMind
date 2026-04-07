"use client";

export function Features() {
  const features = [
    { title: "[*] LSP enabled", description: "Automatically loads the right LSPs for the LLM" },
    { title: "[*] Multi-session", description: "Start multiple agents in parallel on the same project" },
    { title: "[*] Share links", description: "Share a link to any session for reference or to debug" },
    { title: "[*] GitHub Copilot", description: "Log in with GitHub to use your Copilot account" },
    { title: "[*] Any model", description: "75+ LLM providers through Models.dev, including local models" },
    { title: "[*] Any editor", description: "Available as a terminal interface, desktop app, and IDE extension" }
  ];

  return (
    <section className="w-full max-w-4xl py-24 border-b border-white/5">
      <h2 className="text-xl font-mono text-white font-bold mb-8">What is NodeMind?</h2>
      <p className="text-gray-400 font-mono text-sm mb-12 max-w-2xl leading-relaxed">
        NodeMind is an open source agent that helps you write code in your terminal, IDE, or desktop.
      </p>

      <ul className="space-y-8 font-mono text-sm text-gray-400 max-w-3xl">
        {features.map((feature, i) => (
          <li key={i} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 group">
            <span className="text-white font-semibold whitespace-nowrap md:w-48">{feature.title}</span>
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
