"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-panel/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-primary to-accent-cyan flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                N
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                {siteContent.nav.logo}
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {siteContent.nav.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              href={siteContent.nav.cta.href}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-colors bg-white/5 border border-white/10 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              {siteContent.nav.cta.text}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted hover:text-white p-2"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-panel border-b border-white/5 shadow-2xl">
          {siteContent.nav.links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-muted hover:text-white hover:bg-white/5"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={siteContent.nav.cta.href}
            className="block px-3 py-2 mt-4 rounded-md text-base font-medium text-white bg-primary hover:bg-primary/90 text-center"
          >
            {siteContent.nav.cta.text}
          </Link>
        </div>
      </div>
    </nav>
  );
}
