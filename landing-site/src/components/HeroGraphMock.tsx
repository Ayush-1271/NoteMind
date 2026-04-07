"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle2, MessageSquare, Code2, Database } from "lucide-react";

type NodeStatus = "idle" | "active" | "blocked" | "recovered" | "done";

interface GraphNode {
  id: string;
  label: string;
  type: "task" | "message" | "db";
  status: NodeStatus;
  x: number;
  y: number;
}

export function HeroGraphMock() {
  const [nodes, setNodes] = useState<GraphNode[]>([
    { id: "1", label: "User Prompt", type: "message", status: "done", x: 50, y: 20 },
    { id: "2", label: "Frontend Agent", type: "task", status: "done", x: 20, y: 50 },
    { id: "3", label: "Backend Agent", type: "task", status: "active", x: 80, y: 50 },
    { id: "4", label: "DB Schema", type: "db", status: "idle", x: 50, y: 80 },
  ]);

  // Simulate a live context break and human recovery loop
  useEffect(() => {
    const sequence = async () => {
      // 1. Backend gets blocked
      await new Promise((r) => setTimeout(r, 2000));
      setNodes((prev) =>
        prev.map((n) => (n.id === "3" ? { ...n, status: "blocked" } : n))
      );

      // 2. Wait
      await new Promise((r) => setTimeout(r, 2000));

      // 3. Human injects context / Node is recovered
      setNodes((prev) =>
        prev.map((n) => (n.id === "3" ? { ...n, status: "recovered" } : n))
      );

      // 4. Proceed to DB
      await new Promise((r) => setTimeout(r, 1500));
      setNodes((prev) =>
        prev.map((n) => {
          if (n.id === "3") return { ...n, status: "done" };
          if (n.id === "4") return { ...n, status: "active" };
          return n;
        })
      );
      
      // 5. DB done, reset after a while
      await new Promise((r) => setTimeout(r, 2000));
      setNodes((prev) =>
        prev.map((n) => {
          if (n.id === "4") return { ...n, status: "done" };
          return n;
        })
      );
      
      // Infinite loop reset
      setTimeout(sequence, 3000);
    };

    sequence();
  }, []);

  const getStatusColor = (status: NodeStatus) => {
    switch (status) {
      case "blocked": return "border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)] text-red-500 scale-105 z-10 bg-red-950/40";
      case "recovered": return "border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)] text-amber-500 bg-amber-950/40";
      case "active": return "border-primary shadow-[0_0_15px_rgba(99,102,241,0.5)] text-primary bg-primary/10 scale-105 z-10";
      case "done": return "border-accent-green text-accent-green bg-accent-green/5";
      default: return "border-border text-muted bg-panel";
    }
  };

  const getIcon = (type: string, status: NodeStatus) => {
    if (status === "blocked") return <AlertCircle className="w-4 h-4" />;
    if (status === "done" || status === "recovered") return <CheckCircle2 className="w-4 h-4" />;
    if (type === "message") return <MessageSquare className="w-4 h-4" />;
    if (type === "db") return <Database className="w-4 h-4" />;
    return <Code2 className="w-4 h-4" />;
  };

  return (
    <div className="relative w-full aspect-video max-w-2xl mx-auto border border-white/5 rounded-xl bg-panel/30 backdrop-blur-sm overflow-hidden flex items-center justify-center p-8 shadow-2xl">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      
      {/* Edges (SVG paths connecting nodes conceptually based on their positions. Hardcoding simple lines for the specific layout) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <motion.path
          d="M 50% 20% L 20% 50%"
          stroke="var(--color-border)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 4"
        />
        <motion.path
          d="M 50% 20% L 80% 50%"
          stroke="var(--color-border)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 4"
        />
        <motion.path
          d="M 20% 50% L 50% 80%"
          stroke="var(--color-border)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 4"
        />
        <motion.path
          d="M 80% 50% L 50% 80%"
          stroke={nodes[2].status === "done" ? "var(--color-accent-green)" : "var(--color-border)"}
          strokeWidth="2"
          fill="none"
          strokeDasharray={nodes[2].status === "done" ? "none" : "4 4"}
          animate={{ strokeDashoffset: [0, 20] }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className={`absolute flex items-center gap-3 px-4 py-2 border rounded-full transition-all duration-500 font-mono text-sm shadow-xl backdrop-blur-md ${getStatusColor(
            node.status
          )}`}
          style={{ top: `${node.y}%`, left: `${node.x}%`, transform: 'translate(-50%, -50%)' }}
          layout
        >
          {getIcon(node.type, node.status)}
          <span className="font-medium whitespace-nowrap">{node.label}</span>
          
          {/* Status Indicator pulse */}
          {node.status === "active" && (
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary animate-ping" />
          )}
          {node.status === "blocked" && (
             <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 animate-ping" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
