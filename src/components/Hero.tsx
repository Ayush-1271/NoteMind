"use client";

export function Hero() {
  return (
    <section className="flex flex-col items-start w-full max-w-4xl pt-24 pb-12">


      <h1 className="text-5xl md:text-6xl font-mono font-bold tracking-tight text-white mb-6 max-w-3xl leading-[1.1]">
        Graph Memory for Multi-Agent AI Systems
      </h1>

      <p className="text-lg font-mono text-gray-400 max-w-2xl leading-relaxed">
        Replace the linear context window with a persistent, semantic knowledge graph —
        <br />
        shared across every agent in your swarm.
      </p>
    </section>
  );
}
