import Link from "next/link";
import { siteContent } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-panel/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-gradient-to-tr from-primary to-accent-cyan flex items-center justify-center font-bold text-white text-xs">
                N
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                {siteContent.nav.logo}
              </span>
            </div>
            <p className="text-muted text-sm max-w-sm">
              {siteContent.footer.statement}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              {siteContent.nav.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2">
              {siteContent.footer.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} {siteContent.nav.logo}. All rights reserved.
          </p>
          <div className="flex gap-4 p-2 text-xs text-muted/50 font-mono">
            <span>STATUS: OPERATIONAL</span>
            <span className="w-2 h-2 rounded-full bg-accent-green self-center animate-pulse"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
