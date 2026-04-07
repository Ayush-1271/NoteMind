"use client";

import { useState } from "react";

export function PrivacyFAQ() {
  const faqs = [
    "What is NodeMind?",
    "How do I use NodeMind?",
    "Do I need extra AI subscriptions to use NodeMind?",
    "Can I use my existing AI subscriptions with NodeMind?",
    "Can I only use NodeMind in the terminal?",
    "How much does NodeMind cost?",
    "What about data and privacy?"
  ];

  return (
    <section className="w-full max-w-4xl py-24 border-b border-white/5 space-y-32">
      {/* Privacy */}
      <div>
        <h2 className="text-xl font-mono text-white font-bold mb-6">Built for privacy first</h2>
        <p className="text-gray-400 font-mono text-sm max-w-2xl leading-relaxed">
          <span className="text-gray-500">[*]</span> NodeMind does not store any of your code or context data, so that it can operate in privacy sensitive environments. Learn more about <a href="#" className="underline underline-offset-4 text-white hover:text-gray-300">privacy</a>.
        </p>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-xl font-mono text-white font-bold mb-12">FAQ</h2>
        <div className="space-y-6 lg:space-y-8 font-mono text-sm text-gray-300 font-bold">
          {faqs.map((faq, i) => (
            <div key={i} className="flex items-start gap-4 cursor-pointer group hover:text-white transition-colors">
              <span className="text-gray-600 font-normal">+</span>
              <span>{faq}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
