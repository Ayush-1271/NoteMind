import { siteContent } from "@/lib/site-content";
import { ShieldAlert, Fingerprint } from "lucide-react";

export function ComparisonSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Why Build on NodeMind</h2>
          <p className="text-muted text-lg">Replacing black-box logs with structured, auditable memory.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Traditional */}
          <div className="bg-panel P-8 rounded-2xl border border-red-500/20 p-8">
             <div className="flex items-center gap-3 mb-6">
                <ShieldAlert className="text-red-500 w-6 h-6" />
                <h3 className="text-xl font-bold text-white">Traditional Logs</h3>
             </div>
             <ul className="space-y-4">
               {siteContent.comparison.traditional.map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-muted">
                    <span className="text-red-500 font-bold mt-1">✕</span>
                    {item}
                 </li>
               ))}
             </ul>
          </div>
          
          {/* NodeMind */}
          <div className="bg-gradient-to-br from-panel to-primary/10 p-8 rounded-2xl border border-primary/30 shadow-[0_0_40px_rgba(99,102,241,0.1)]">
             <div className="flex items-center gap-3 mb-6">
                <Fingerprint className="text-accent-cyan w-6 h-6" />
                <h3 className="text-xl font-bold text-white">NodeMind Engine</h3>
             </div>
             <ul className="space-y-4">
               {siteContent.comparison.nodemind.map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-foreground">
                    <span className="text-accent-green font-bold mt-1">✓</span>
                    {item}
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
