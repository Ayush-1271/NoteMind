"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full max-w-4xl py-24 pb-32">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 font-mono text-xs text-gray-500">
        <div className="space-y-4">
          <h4 className="text-gray-400 font-bold mb-6">Product</h4>
          <Link href="https://github.com/gummybearansh/NodeMind/releases" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
            Releases
          </Link>
        </div>
        <div className="space-y-4">
          <h4 className="text-gray-400 font-bold mb-6">Resources</h4>
          <Link href="https://github.com/gummybearansh/NodeMind#readme" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
            Documentation
          </Link>
          <Link href="https://github.com/gummybearansh/NodeMind" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
            GitHub
          </Link>
        </div>
        <div className="col-span-2">
          {/* Empty columns to maintain grid structure from opencode */}
        </div>
      </div>
    </footer>
  );
}
