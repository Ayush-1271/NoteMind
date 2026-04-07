"use client";

export function PrivacyFAQ() {
  const faqs = [
    "What models are supported by NodeMind?",
    "How does ChromaDB manage the semantic routing?",
    "Can I use MongoDB Atlas instead of a local instance?",
    "Is NodeMind strictly for Python architectures?",
    "How do I view the React Flow canvas?",
    "Does NodeMind send my codebase to a centralized server?",
    "When will the pip package be officially published?"
  ];

  return (
    <section className="w-full max-w-4xl py-24 border-b border-white/5 space-y-32">
      {/* Privacy / Session Isolation */}
      <div>
        <h2 className="text-xl font-mono text-white font-bold mb-6">Session Isolation & Privacy</h2>
        <p className="text-gray-400 font-mono text-sm max-w-2xl leading-relaxed">
          <span className="text-gray-500">[*]</span> Each user prompt creates a new timestamped `.brain/` directory locally. NodeMind processes your tasks in strictly isolated environments without polluting semantic search indices. Read docs on <a href="#" className="underline underline-offset-4 text-white hover:text-gray-300">file isolation</a>.
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
