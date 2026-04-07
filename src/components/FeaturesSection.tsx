import { siteContent } from "@/lib/site-content";

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {siteContent.features.map((feature, idx) => (
             <div 
               key={idx} 
               className="bg-panel/40 border border-white/5 p-8 rounded-2xl hover:bg-panel/80 hover:border-white/10 transition-colors group"
             >
               <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent-cyan opacity-80 group-hover:opacity-100" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
               <p className="text-muted font-medium leading-relaxed">
                 {feature.description}
               </p>
             </div>
           ))}
         </div>
       </div>
    </section>
  );
}
