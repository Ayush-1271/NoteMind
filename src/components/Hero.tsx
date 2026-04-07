"use client";

export function Hero() {
  return (
    <section className="flex flex-col items-start w-full max-w-4xl pt-24 pb-12">
      <div className="flex items-center gap-3 font-mono text-xs text-gray-400 mb-8 border-l-2 border-white/20 pl-4">
        <span className="bg-white text-black px-2 py-0.5 rounded-sm font-semibold">New</span>
        <span>Desktop app available in beta on macOS, <span className="text-[#B9E986]">Windows</span>, and Linux. <a href="#" className="text-gray-500 hover:text-gray-300 underline underline-offset-2">Download now</a></span>
      </div>

      <h1 className="text-5xl md:text-6xl font-mono font-bold tracking-tight text-white mb-6 max-w-3xl leading-[1.1]">
        The open source AI coding agent
      </h1>

      <p className="text-lg font-mono text-gray-400 max-w-2xl leading-relaxed">
        Free models included or connect any model from any provider,
        <br />
        including Claude, GPT, Gemini and more.
      </p>
    </section>
  );
}
