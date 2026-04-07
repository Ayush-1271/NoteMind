"use client";

export function Stats() {
  return (
    <section className="w-full max-w-4xl py-24 border-b border-white/5">
      <h2 className="text-xl font-mono text-white font-bold mb-6">Built for Scaling Agents</h2>
      <p className="text-gray-400 font-mono text-sm mb-20 max-w-2xl leading-relaxed">
        <span className="text-gray-500">[*]</span> As you add more agents to a swarm, the standard approach of passing conversation history breaks down. NodeMind&#39;s graph memory approach scales entirely differently.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-16">
        {/* Graph 1 */}
        <div className="flex flex-col items-center">
           <div className="w-full h-48 border-b border-l border-white/10 relative overflow-hidden flex items-end opacity-60 hover:opacity-100 transition-opacity p-2">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-red-500 fill-none opacity-80" strokeWidth="2">
                 <path d="M0,100 Q60,95 100,5" vectorEffect="non-scaling-stroke"/>
              </svg>
           </div>
           <p className="font-mono text-xs text-gray-400 mt-6 text-center">Standard Framework<br/><strong className="text-red-400">O(n²)</strong> Token Explosion</p>
        </div>

        {/* Graph 2 */}
        <div className="flex flex-col items-center">
           <div className="w-full h-48 border-b border-l border-white/10 relative overflow-hidden flex items-end opacity-60 hover:opacity-100 transition-opacity p-2">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-[#B9E986] fill-none opacity-80" strokeWidth="2">
                 <path d="M0,80 L100,80" vectorEffect="non-scaling-stroke"/>
              </svg>
           </div>
           <p className="font-mono text-xs text-gray-400 mt-6 text-center">NodeMind Graph Memory<br/><strong className="text-[#B9E986]">O(k)</strong> Constant Bound</p>
        </div>

        {/* Graph 3 */}
        <div className="flex flex-col items-center">
           <div className="w-full h-48 border-b border-white/10 relative flex items-end justify-between px-1 opacity-60 hover:opacity-100 transition-opacity">
              {Array.from({length: 24}).map((_, i) => (
                <div key={i} className="w-[1px] bg-white opacity-50" style={{ height: `${20 + Math.random() * 80}%` }} />
              ))}
           </div>
           <p className="font-mono text-xs text-gray-400 mt-6 text-center">Semantic Context<br/><strong className="text-white">Improves Over Time</strong></p>
        </div>
      </div>
    </section>
  );
}
