"use client";

import Link from "next/link";
import { Download } from "lucide-react";

export function Header() {
  return (
    <header className="w-full border-b border-white/5 py-6 px-6 md:px-12 flex items-center justify-between z-50">
      <Link href="/" className="font-mono text-2xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
        NodeMind
      </Link>
      
      <div className="flex items-center gap-6 font-mono text-sm">
        <Link href="https://github.com/gummybearansh/NodeMind" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
          GitHub <span className="text-gray-500">[120K]</span>
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white transition-colors">Docs</Link>
        <Link href="#" className="text-gray-300 hover:text-white transition-colors">CLI</Link>
        <Link href="#" className="text-gray-300 hover:text-white transition-colors">Enterprise</Link>
        <button className="flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white px-4 py-1.5 rounded-sm transition-colors">
          <Download className="w-4 h-4" />
          Free
        </button>
      </div>
    </header>
  );
}
