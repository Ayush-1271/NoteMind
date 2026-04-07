import { siteContent } from "@/lib/site-content";
import { GitCommitHorizontal, FileText, Database, Radio, RefreshCcw } from "lucide-react";

export function ArchitectureSection() {
  const steps = siteContent.architecture.steps;
  const icons = [GitCommitHorizontal, FileText, Database, Radio, RefreshCcw];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-white/[0.01] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">{siteContent.architecture.title}</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">{siteContent.architecture.description}</p>
        </div>

        <div className="relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-[50px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
           
           <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
             {steps.map((step, idx) => {
               const Icon = icons[idx % icons.length];
               return (
                 <div key={idx} className="relative flex flex-col items-center text-center group">
                   <div className="w-24 h-24 rounded-2xl bg-panel border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-300">
                      <Icon className="w-10 h-10 text-muted group-hover:text-primary transition-colors" />
                   </div>
                   <h3 className="font-mono text-sm text-white font-bold mb-2 uppercase tracking-tight">{step.step}</h3>
                   <p className="text-sm text-muted">{step.detail}</p>
                 </div>
               )
             })}
           </div>
        </div>
      </div>
    </section>
  );
}
