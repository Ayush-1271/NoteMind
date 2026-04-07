"use client";

import { useState, useEffect } from "react";
import { Terminal, Check, AlertTriangle, UserCog, Play } from "lucide-react";

const logLines = [
  { text: "> Initializing NodeMind Engine...", type: "system", delay: 500 },
  { text: "> Loading project prompt: \"Build auth API\"", type: "prompt", delay: 1000 },
  { text: "Spawning Planner Agent...", type: "agent", delay: 1500 },
  { text: "[Planner] Created 2 sub-tasks: DB Schema, API Endpoints", type: "agent", delay: 2000 },
  { text: "Spawning DB Agent...", type: "agent", delay: 2500 },
  { text: "[DB Agent] Attempting to connect to PostgreSQL...", type: "agent", delay: 3500 },
  { text: "[ERROR] Context Break: Database connection string missing", type: "error", delay: 4500 },
  { text: "Execution Blocked. Awaiting Human Injection...", type: "system", delay: 5000 },
  { text: "[Human] Injected context: 'postgres://user:pass@localhost:5432/db'", type: "human", delay: 7000 },
  { text: "[DB Agent] Context received. Resuming execution.", type: "agent", delay: 7500 },
  { text: "[DB Agent] Schema 'Users' created successfully. Task Complete.", type: "agent", delay: 8500 }
];

export function LiveExecutionDemo() {
  const [lines, setLines] = useState<typeof logLines>([]);
  
  useEffect(() => {
    let timers: NodeJS.Timeout[] = [];
    
    const runSimulation = () => {
      setLines([]);
      logLines.forEach((line) => {
        const t = setTimeout(() => {
          setLines(prev => [...prev, line]);
        }, line.delay);
        timers.push(t);
      });
      // Loop
      const tRefresh = setTimeout(runSimulation, 12000);
      timers.push(tRefresh);
    };

    runSimulation();

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="demo" className="py-24 relative bg-panel/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Observable Execution</h2>
          <p className="text-muted text-lg max-w-2xl">Watch agents think and collaborate. Intervene safely when context breaks.</p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-xl font-mono text-sm">
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-accent-green/80"></div>
            </div>
            <div className="mx-auto flex items-center gap-2 text-muted text-xs font-semibold uppercase tracking-wider">
              <Terminal className="w-3 h-3" />
              NodeMind Console
            </div>
          </div>

          {/* Body */}
          <div className="p-6 h-[350px] overflow-y-auto hide-scrollbar flex flex-col gap-2">
            {lines.map((line, i) => (
              <div key={i} className="animate-fade-in flex items-start gap-3">
                {line.type === "system" && <Play className="w-4 h-4 text-primary mt-0.5 shrink-0" />}
                {line.type === "prompt" && <span className="text-accent-cyan mt-0.5 font-bold shrink-0">~</span>}
                {line.type === "agent" && <Check className="w-4 h-4 text-muted mt-0.5 shrink-0" />}
                {line.type === "error" && <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />}
                {line.type === "human" && <UserCog className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />}
                
                <span className={`
                  ${line.type === 'system' ? 'text-primary font-bold' : ''}
                  ${line.type === 'prompt' ? 'text-white' : ''}
                  ${line.type === 'agent' ? 'text-muted' : ''}
                  ${line.type === 'error' ? 'text-red-400 font-bold bg-red-500/10 px-2 py-0.5 rounded' : ''}
                  ${line.type === 'human' ? 'text-amber-400 font-bold' : ''}
                `}>
                  {line.text}
                </span>
              </div>
            ))}
            {/* Blinking cursor effect */}
            <div className="animate-pulse w-2 h-4 bg-muted/50 mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
