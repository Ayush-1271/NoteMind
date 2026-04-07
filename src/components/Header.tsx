"use client";

import Link from "next/link";
import { Github } from "lucide-react";

export function Header() {
  return (
    <header className="w-full border-b border-white/5 py-6 px-6 md:px-12 flex items-center justify-between z-50">
      <Link href="/" className="font-mono text-2xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
        NodeMind
      </Link>
      
      <div className="flex items-center gap-6 font-mono text-sm">
        <Link href="https://github.com/gummybearansh/NodeMind" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
          <Github className="w-5 h-5" />
          GitHub
        </Link>
        <Link href="https://github.com/gummybearansh/NodeMind#readme" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
          Docs
        </Link>
      </div>
    </header>
  );
}
