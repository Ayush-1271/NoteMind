"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function InstallTerminal() {
  const [copied, setCopied] = useState(false);

  // The multi-line install and execution command.
  const commandText = "pip install nodemind\nnodemind start";

  const handleCopy = () => {
    navigator.clipboard.writeText(commandText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Install NodeMind</h2>
          <p className="text-muted">Start running your own observable multi-agent engine locally.</p>
        </div>

        <div className="bg-panel border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm max-w-2xl mx-auto">
          {/* Terminal Window Header */}
          <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02]">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="mx-auto text-xs font-mono text-muted/60">bash</div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 flex items-start justify-between group relative bg-black/40">
            <div className="flex flex-col font-mono text-sm md:text-base gap-2">
               <div className="flex items-center gap-4">
                 <span className="text-primary select-none">$</span>
                 <code className="text-white">pip install nodemind</code>
               </div>
               <div className="flex items-center gap-4">
                 <span className="text-primary select-none">$</span>
                 <code className="text-white">nodemind start</code>
               </div>
            </div>

            <button
              onClick={handleCopy}
              className="ml-4 p-2 rounded-md bg-white/5 hover:bg-white/10 text-muted hover:text-white transition-colors flex-shrink-0 mt-1"
              aria-label="Copy to clipboard"
            >
              {copied ? <Check className="w-5 h-5 text-accent-green" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
