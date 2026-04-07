import Link from "next/link";
import { siteContent } from "@/lib/site-content";
import { HeroGraphMock } from "./HeroGraphMock";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight animate-fade-in">
              The Open Multi-Agent <br className="hidden md:block"/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-cyan">Memory Engine</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "100ms" }}>
              {siteContent.hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
              {siteContent.hero.ctas.map((cta, i) => (
                <Link
                  key={i}
                  href={cta.href}
                  className={`px-8 py-3 rounded-md font-medium transition-all duration-300 w-full sm:w-auto text-center ${
                    cta.primary 
                    ? "bg-primary text-white hover:bg-primary-glow shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] border border-primary/50" 
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {cta.text}
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 mt-4 text-sm font-mono text-muted/80 animate-slide-up" style={{ animationDelay: "300ms" }}>
               <span>■ Local Markdown Vault</span>
               <span className="hidden sm:inline">■</span>
               <span>■ Live Execution Graph</span>
            </div>
          </div>

          <div className="w-full animate-fade-in" style={{ animationDelay: "400ms" }}>
            <HeroGraphMock />
          </div>
          
        </div>
      </div>
    </section>
  );
}
