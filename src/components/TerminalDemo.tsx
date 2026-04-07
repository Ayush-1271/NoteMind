"use client";

import { useState, useEffect } from "react";

export function TerminalDemo() {
  const [typedCommand, setTypedCommand] = useState("");
  const commandToType = "add a new field for signups that validates that they are 18 years old";
  
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
          <p className="text-gray-500"># Create migration for date_of_birth column</p>
          <p className="text-gray-300">$ <span className="text-white">cd /workspace && php artisan make:migration add_date_of_birth_to_users_table</span></p>
          <p className="text-[#B9E986]">INFO  Migration [database/migrations/2026...add_date_of_birth] created successfully.</p>
        </div>

        {/* Diff View */}
        <div className="border border-white/10 rounded-sm overflow-hidden bg-[#0A0A0A]">
          <div className="bg-[#121212] px-4 py-2 border-b border-white/5 text-gray-500">
            + Edit database/migrations/2026_04_07_add_date_of_birth.php
          </div>
          <div className="p-4 grid grid-cols-[auto_1fr] gap-4">
            <div className="text-right text-gray-600 select-none">
              11<br/>12<br/>13<br/>14<br/>15<br/>16
            </div>
            <div>
              <span className="text-gray-500">public function up(): void</span><br/>
              <span className="text-gray-500">{"{"}</span><br/>
              <span className="text-gray-400">{"  Schema::table('users', function (Blueprint $table) {"}</span><br/>
              <span className="bg-red-500/20 text-red-300 block -mx-2 px-2">{"    //"}</span><br/>
              <span className="bg-green-500/20 text-green-300 block -mx-2 px-2">{"    $table->date('date_of_birth')->after('name');"}</span><br/>
              <span className="text-gray-400">{"  });"}</span><br/>
              <span className="text-gray-500">{"}"}</span>
            </div>
          </div>
        </div>

        {/* User Prompt Input */}
        <div className="pt-8 border-t border-white/5">
          <div className="text-gray-400 flex flex-col gap-1">
            <span className="text-[#888] mb-2">{typedCommand}</span>
            <div className="text-gray-600">davidhill</div>
          </div>
          <div className="mt-6 text-gray-300 flex items-center gap-2">
            <div className="w-2 h-4 bg-white animate-pulse" /> I'll help you add an age verification field...
          </div>
        </div>
      </div>

      {/* Right Pane - Sidebar */}
      <div className="w-80 hidden lg:block border-l border-white/10 pl-8 pt-2 font-mono text-xs space-y-8 h-full min-h-[400px]">
        
        <div>
          <h3 className="text-gray-500 mb-2 uppercase">LSP</h3>
          <ul className="text-gray-400 space-y-1">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> php intelephense</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> typescript</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-gray-500 mb-2 uppercase">Todo</h3>
          <ul className="text-gray-400 space-y-1.5">
            <li className="text-white">[x] Create migration</li>
            <li>[ ] Update User model with fillable</li>
            <li>[ ] Add 18+ validation to CreateNewUser</li>
            <li>[ ] Update registration form</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
