"use client";

import { motion } from "framer-motion";

export function Stats() {
  return (
    <section className="w-full max-w-4xl py-24 border-b border-white/5">
      <h2 className="text-xl font-mono text-white font-bold mb-6">The open source AI coding agent</h2>
      <p className="text-gray-400 font-mono text-sm mb-20 max-w-2xl leading-relaxed">
        <span className="text-gray-500">[*]</span> With over <strong className="text-white">120,000</strong> GitHub stars, <strong className="text-white">800</strong> contributors, and over <strong className="text-white">10,000</strong> commits, NodeMind is used and trusted by over <strong className="text-white">5M</strong> developers every month.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-16">
        {/* Graph 1 */}
        <div className="flex flex-col items-center">
           <div className="w-full h-48 border-b border-l border-white/10 relative overflow-hidden flex items-end opacity-60 hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-white fill-none opacity-50" strokeWidth="0.5">
                 <path d="M0,100 L10,95 L20,90 L30,70 L40,65 L50,40 L60,30 L70,20 L80,10 L90,5 L100,0" vectorEffect="non-scaling-stroke"/>
              </svg>
           </div>
           <p className="font-mono text-xs text-gray-500 mt-6">Fig 1. <strong className="text-white">120K</strong> GitHub Stars</p>
        </div>

        {/* Graph 2 */}
        <div className="flex flex-col items-center">
           <div className="w-full h-48 relative grid grid-cols-10 grid-rows-10 gap-1 opacity-60 hover:opacity-100 transition-opacity">
              {Array.from({length: 100}).map((_, i) => (
                <div key={i} className={`w-full h-full rounded-sm ${Math.random() > 0.7 ? 'bg-white' : Math.random() > 0.4 ? 'bg-white/30' : 'bg-white/5'}`} />
              ))}
           </div>
           <p className="font-mono text-xs text-gray-500 mt-6">Fig 2. <strong className="text-white">800</strong> Contributors</p>
        </div>

        {/* Graph 3 */}
        <div className="flex flex-col items-center">
           <div className="w-full h-48 border-b border-white/10 relative flex items-end justify-between px-1 opacity-60 hover:opacity-100 transition-opacity">
              {Array.from({length: 24}).map((_, i) => (
                <div key={i} className="w-[1px] bg-white opacity-50" style={{ height: `${20 + Math.random() * 80}%` }} />
              ))}
           </div>
           <p className="font-mono text-xs text-gray-500 mt-6">Fig 3. <strong className="text-white">5M</strong> Monthly Devs</p>
        </div>
      </div>
    </section>
  );
}
