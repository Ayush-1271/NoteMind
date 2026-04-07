"use client";

import { useState } from "react";
import Link from "next/link";

export function PrivacyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What models are supported by NodeMind?",
      a: "NodeMind natively uses Google Gemini 2.5 Flash for its structured outputs, but the architecture seamlessly connects to any model via custom prompt formatting (such as Claude, GPT-4o, or local Ollama)."
    },
    {
      q: "How does ChromaDB manage the semantic routing?",
      a: "Every agent note is embedded into a dense vector space using ChromaDB. When a new agent needs context, we run a semantic similarity search retrieving only the top-K relevant nodes instead of loading the entire chat history."
    },
    {
      q: "Can I use MongoDB Atlas instead of a local instance?",
      a: "Yes. Simply update the MONGO_DB_URL in your .env file to point to your MongoDB Atlas connection string."
    },
    {
      q: "Is NodeMind strictly for Python architectures?",
      a: "No! The developer agents can reason about any language (Python, Node.js, Go, Rust, etc.). NodeMind itself is just built in Python for native backend vector integrations."
    },
    {
      q: "Does NodeMind send my codebase to a centralized server?",
      a: "No. Your notes are stored entirely locally in your `.brain/` directory and embedded via the local ChromaDB instance or an API you control."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl py-24 border-b border-white/5 space-y-32">
      {/* Privacy / Session Isolation */}
      <div>
        <h2 className="text-xl font-mono text-white font-bold mb-6">Session Isolation & Privacy</h2>
        <p className="text-gray-400 font-mono text-sm max-w-2xl leading-relaxed">
          <span className="text-gray-500">[*]</span> Each user prompt creates a new timestamped {".brain/"} directory locally. NodeMind processes your tasks in strictly isolated environments without polluting semantic search indices. Read docs on <Link href="https://github.com/Ayush-1271/NoteMind/blob/main/FILE_ISOLATION.md" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-white hover:text-gray-300">file isolation</Link>.
        </p>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-xl font-mono text-white font-bold mb-12">FAQ</h2>
        <div className="space-y-4 font-mono text-sm text-gray-300">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/5 pb-4">
              <button 
                onClick={() => handleToggle(i)}
                className="flex items-start gap-4 text-left w-full group hover:text-white transition-colors"
              >
                <span className={`text-gray-600 font-normal transition-transform ${openIndex === i ? 'rotate-45' : ''}`}>
                  +
                </span>
                <span className="font-bold">{faq.q}</span>
              </button>
              
              {openIndex === i && (
                <div className="mt-4 ml-6 text-gray-500 leading-relaxed pr-8">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
