"use client";

import { useState, useEffect } from "react";

export function TerminalDemo() {
  const [typedCommand, setTypedCommand] = useState("");
  const commandToType = "Add a vector database memory layer to the agent using ChromaDB";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedCommand(commandToType.substring(0, i));
      i++;
      if (i > commandToType.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-t border-b border-white/10 bg-[#070707] py-12 flex items-start -mx-6 md:-mx-12 px-6 md:px-12 relative overflow-hidden">
      {/* Left Pane - Editor/Agent View */}
      <div className="flex-1 max-w-4xl pr-8 font-mono text-xs md:text-sm text-gray-400 space-y-8">
        
        {/* Step 1 */}
        <div className="space-y-2">
          <p className="text-gray-500"># Install dependencies</p>
          <p className="text-gray-300">$ <span className="text-white">pip install chromadb sentence-transformers</span></p>
          <p className="text-[#B9E986]">INFO  Successfully installed chromadb-0.4.22 sentence-transformers-2.2.2</p>
        </div>

        {/* Diff View */}
        <div className="border border-white/10 rounded-sm overflow-hidden bg-[#0A0A0A]">
          <div className="bg-[#121212] px-4 py-2 border-b border-white/5 text-gray-500">
            + Edit backend/memory/chroma_store.py
          </div>
          <div className="p-4 grid grid-cols-[auto_1fr] gap-4">
            <div className="text-right text-gray-600 select-none">
              11<br/>12<br/>13<br/>14<br/>15<br/>16
            </div>
            <div>
              <span className="text-gray-500">class VectorMemory:</span><br/>
              <span className="text-gray-500">{"    def __init__(self, persist_dir: str):"}</span><br/>
              <span className="text-gray-400">{"        self.client = chromadb.PersistentClient(path=persist_dir)"}</span><br/>
              <span className="bg-red-500/20 text-red-300 block -mx-2 px-2">{"        # self.collection = self.client.create_collection('memory')"}</span><br/>
              <span className="bg-green-500/20 text-green-300 block -mx-2 px-2">{"        self.collection = self.client.get_or_create_collection('agent_memory')"}</span><br/>
              <span className="text-gray-400">{"        self.emb_fn = embedding_functions.DefaultEmbeddingFunction()"}</span><br/>
            </div>
          </div>
        </div>

        {/* User Prompt Input */}
        <div className="pt-8 border-t border-white/5">
          <div className="text-gray-400 flex flex-col gap-1">
            <span className="text-[#888] mb-2">{typedCommand}</span>
            <div className="text-gray-600">developer</div>
          </div>
          <div className="mt-6 text-gray-300 flex items-center gap-2">
            <div className="w-2 h-4 bg-white animate-pulse" /> I&apos;ll help you integrate ChromaDB vector storage...
          </div>
        </div>
      </div>

      {/* Right Pane - Sidebar */}
      <div className="w-80 hidden lg:block border-l border-white/10 pl-8 pt-2 font-mono text-xs space-y-8 h-full min-h-[400px]">
        
        <div>
          <h3 className="text-gray-500 mb-2 uppercase">LSP</h3>
          <ul className="text-gray-400 space-y-1">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> python pyright</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> ruff</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-gray-500 mb-2 uppercase">Todo</h3>
          <ul className="text-gray-400 space-y-1.5">
            <li className="text-white">[x] Install ChromaDB</li>
            <li>[ ] Initialize VectorMemory class</li>
            <li>[ ] Connect to Agent execution loop</li>
            <li>[ ] Add semantic search endpoint</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
