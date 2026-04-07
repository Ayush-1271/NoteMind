"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

type Tab = "pip" | "curl" | "npm" | "bun" | "brew" | "paru";

const commands: Record<Tab, string> = {
  pip: `cd $HOME\\Desktop
mkdir nodemind-test
cd nodemind-test
python -m venv testenv
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
.\\testenv\\Scripts\\Activate.ps1
pip uninstall nodemind -y
pip install --no-cache-dir "git+https://github.com/KunalMuk2205/NodeMind.git@feature/cli-onboarding-packaging"
nodemind setup
nodemind start`,
  curl: "curl -fsSL https://nodemind.dev/install | bash",
  npm: `npm install -g @ayush1271/nodemind
nodemind`,
  bun: "bun add -g nodemind",
  brew: "brew install nodemind",
  paru: "paru -S nodemind",
};

export function InstallTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("pip");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(commands[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs: Tab[] = ["pip", "npm", "curl", "bun", "brew", "paru"];

  return (
    <div className="w-full max-w-4xl border border-white/10 rounded-lg bg-[#0E0E0E] mt-8 mb-16 overflow-hidden">
      <div className="flex items-center border-b border-white/5 px-2 bg-[#121212] overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-sm font-mono transition-colors relative whitespace-nowrap ${
              activeTab === tab ? "text-white" : "text-gray-600 hover:text-gray-400"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-white" />
            )}
          </button>
        ))}
      </div>
      <div className="p-5 flex items-start justify-between">
        <code className="text-gray-400 font-mono text-sm leading-relaxed whitespace-pre overflow-x-auto group">
          {commands[activeTab]}<span className="text-white/20 select-none opacity-0 group-hover:opacity-100 transition-opacity ml-1">|</span>
        </code>
        <button
          onClick={handleCopy}
          className="text-gray-600 hover:text-white transition-colors ml-4 mt-1 flex-shrink-0"
          title="Copy"
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
