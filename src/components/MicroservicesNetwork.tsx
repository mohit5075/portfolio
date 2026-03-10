"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
  icon: string;
}

interface Connection {
  from: string;
  to: string;
  animated?: boolean;
}

const nodes: Node[] = [
  { id: "gateway", label: "API Gateway", x: 50, y: 10, color: "#00d4ff", icon: "🚪" },
  { id: "auth", label: "Auth Service", x: 20, y: 30, color: "#a78bfa", icon: "🔐" },
  { id: "notification", label: "Notification", x: 80, y: 30, color: "#ff6b6b", icon: "🔔" },
  { id: "data", label: "Data Service", x: 35, y: 50, color: "#6bcf7f", icon: "📊" },
  { id: "analytics", label: "Analytics", x: 65, y: 50, color: "#ffd93d", icon: "📈" },
  { id: "kafka", label: "Kafka", x: 50, y: 70, color: "#231F20", icon: "⚡" },
  { id: "db", label: "Database", x: 20, y: 85, color: "#336791", icon: "💾" },
  { id: "cache", label: "Cache", x: 50, y: 85, color: "#DC382D", icon: "⚡" },
  { id: "storage", label: "S3 Storage", x: 80, y: 85, color: "#FF9900", icon: "🗄️" },
];

const connections: Connection[] = [
  { from: "gateway", to: "auth" },
  { from: "gateway", to: "notification", animated: true },
  { from: "gateway", to: "data" },
  { from: "gateway", to: "analytics" },
  { from: "auth", to: "db" },
  { from: "notification", to: "kafka", animated: true },
  { from: "data", to: "kafka", animated: true },
  { from: "analytics", to: "kafka", animated: true },
  { from: "kafka", to: "db" },
  { from: "data", to: "cache" },
  { from: "analytics", to: "storage" },
];

export default function MicroservicesNetwork() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [pulseNodes, setPulseNodes] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Simulate data flow
    const interval = setInterval(() => {
      const randomNode = nodes[Math.floor(Math.random() * nodes.length)].id;
      setPulseNodes(new Set([randomNode]));
      
      setTimeout(() => {
        setPulseNodes(new Set());
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getNodePosition = (nodeId: string) => {
    const node = nodes.find((n) => n.id === nodeId);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <section className="section-padding bg-alt">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="section-title">Microservices Architecture</h2>
            <div className="mt-2 h-1 w-12 rounded-full accent-bg mx-auto" />
            <p className="section-subtitle mt-4">
              Event-driven, scalable systems powering millions of transactions
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div
            className="relative w-full h-[600px] rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(10,10,30,0.8) 0%, rgba(30,10,50,0.8) 100%)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Grid background */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* SVG for connections */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0, 212, 255, 0.3)" />
                  <stop offset="100%" stopColor="rgba(167, 139, 250, 0.3)" />
                </linearGradient>
              </defs>

              {connections.map((conn, idx) => {
                const from = getNodePosition(conn.from);
                const to = getNodePosition(conn.to);
                const isActive = activeNode === conn.from || activeNode === conn.to;

                return (
                  <g key={idx}>
                    {/* Connection line */}
                    <motion.line
                      x1={`${from.x}%`}
                      y1={`${from.y}%`}
                      x2={`${to.x}%`}
                      y2={`${to.y}%`}
                      stroke={isActive ? "#00d4ff" : "url(#lineGradient)"}
                      strokeWidth={isActive ? "3" : "2"}
                      strokeDasharray={conn.animated ? "8,4" : "0"}
                      initial={{ pathLength: 0 }}
                      animate={{ 
                        pathLength: 1,
                        opacity: isActive ? 1 : 0.5,
                      }}
                      transition={{ duration: 1, delay: idx * 0.05 }}
                    />

                    {/* Animated data packet */}
                    {conn.animated && (
                      <motion.circle
                        r="4"
                        fill="#00d4ff"
                        initial={{ opacity: 0 }}
                        animate={{
                          offsetDistance: ["0%", "100%"],
                          opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: idx * 0.5,
                          ease: "linear",
                        }}
                        style={{
                          offsetPath: `path('M ${from.x} ${from.y} L ${to.x} ${to.y}')`,
                        }}
                      >
                        <animate
                          attributeName="cx"
                          from={`${from.x}%`}
                          to={`${to.x}%`}
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="cy"
                          from={`${from.y}%`}
                          to={`${to.y}%`}
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </motion.circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Nodes */}
            {nodes.map((node, idx) => (
              <motion.div
                key={node.id}
                className="absolute cursor-pointer group"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: pulseNodes.has(node.id) ? [1, 1.3, 1] : 1,
                }}
                transition={{ 
                  opacity: { delay: idx * 0.1 },
                  scale: { duration: 0.5 },
                }}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                whileHover={{ scale: 1.1 }}
              >
                <div
                  className="relative"
                  style={{
                    width: "80px",
                    height: "80px",
                  }}
                >
                  {/* Node circle with glassmorphism */}
                  <div
                    className="absolute inset-0 rounded-full flex flex-col items-center justify-center transition-all"
                    style={{
                      background: `linear-gradient(135deg, ${node.color}40 0%, ${node.color}20 100%)`,
                      backdropFilter: "blur(10px)",
                      border: `2px solid ${activeNode === node.id ? node.color : "rgba(255,255,255,0.2)"}`,
                      boxShadow: activeNode === node.id 
                        ? `0 0 30px ${node.color}80, inset 0 0 20px ${node.color}40`
                        : `0 8px 32px ${node.color}30`,
                    }}
                  >
                    <span className="text-2xl mb-1">{node.icon}</span>
                    <span className="text-[9px] font-semibold text-white text-center px-1">
                      {node.label}
                    </span>
                  </div>

                  {/* Pulse ring on activity */}
                  {pulseNodes.has(node.id) && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: `2px solid ${node.color}`,
                      }}
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 1 }}
                    />
                  )}

                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                    style={{ backgroundColor: node.color }}
                  />

                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    <div
                      className="px-3 py-1.5 rounded-lg text-xs font-medium"
                      style={{
                        background: "rgba(0,0,0,0.9)",
                        backdropFilter: "blur(10px)",
                        border: `1px solid ${node.color}`,
                        color: node.color,
                      }}
                    >
                      {node.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Legend */}
            <div className="absolute bottom-6 right-6 flex gap-4 text-xs">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)" }}>
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-white">Service</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)" }}>
                <div className="w-8 h-0.5 bg-cyan-500" style={{ backgroundImage: "linear-gradient(to right, #00d4ff 50%, transparent 50%)", backgroundSize: "8px 2px" }} />
                <span className="text-white">Data Flow</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
