"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TechIcon {
  name: string;
  icon: string;
  color: string;
  position: { x: number; y: number };
}

interface Particle {
  id: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

const techIcons: TechIcon[] = [
  {
    name: "Kafka",
    icon: "⚡",
    color: "#231F20",
    position: { x: 10, y: 20 },
  },
  {
    name: "Spring Boot",
    icon: "🍃",
    color: "#6DB33F",
    position: { x: 80, y: 30 },
  },
  {
    name: "ClickHouse",
    icon: "🏠",
    color: "#FFCC01",
    position: { x: 20, y: 70 },
  },
  {
    name: "AWS",
    icon: "☁️",
    color: "#FF9900",
    position: { x: 75, y: 75 },
  },
  {
    name: "Docker",
    icon: "🐳",
    color: "#2496ED",
    position: { x: 50, y: 15 },
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    color: "#336791",
    position: { x: 45, y: 80 },
  },
  {
    name: "Elasticsearch",
    icon: "🔍",
    color: "#00BFB3",
    position: { x: 15, y: 45 },
  },
  {
    name: "Terraform",
    icon: "🏗️",
    color: "#7B42BC",
    position: { x: 85, y: 55 },
  },
];

export default function TechOrbit() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles on mount to avoid hydration mismatch
  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(generatedParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="relative w-full h-[500px] rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(20,20,40,0.5) 0%, rgba(40,20,60,0.5) 100%)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Central node */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        animate={{
          x: mousePosition.x * 0.3,
          y: mousePosition.y * 0.3,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
      >
        <div
          className="relative w-24 h-24 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            boxShadow: "0 0 60px rgba(102, 126, 234, 0.6)",
          }}
        >
          <span className="text-4xl">💻</span>
          <div
            className="absolute inset-0 rounded-full opacity-50 animate-ping"
            style={{ backgroundColor: "#667eea" }}
          />
        </div>
      </motion.div>

      {/* Orbiting tech icons */}
      {techIcons.map((tech, idx) => (
        <motion.div
          key={tech.name}
          className="absolute"
          style={{
            left: `${tech.position.x}%`,
            top: `${tech.position.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: isHovered ? mousePosition.x * (0.1 + idx * 0.02) : 0,
            y: isHovered ? mousePosition.y * (0.1 + idx * 0.02) : 0,
          }}
          transition={{
            opacity: { delay: idx * 0.1, duration: 0.5 },
            scale: { delay: idx * 0.1, duration: 0.5, type: "spring" },
            x: { type: "spring", damping: 15, stiffness: 80 },
            y: { type: "spring", damping: 15, stiffness: 80 },
          }}
        >
          <motion.div
            className="relative group cursor-pointer"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: idx * 0.2,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.2 }}
          >
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center relative"
              style={{
                background: `linear-gradient(135deg, ${tech.color}40 0%, ${tech.color}20 100%)`,
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: `0 8px 32px ${tech.color}30`,
              }}
            >
              <span className="text-3xl relative z-10">{tech.icon}</span>
              
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle, ${tech.color}60 0%, transparent 70%)`,
                  filter: "blur(10px)",
                }}
              />
            </div>

            {/* Label */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              <div
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(0,0,0,0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: tech.color,
                }}
              >
                {tech.name}
              </div>
            </div>

            {/* Connection line to center (visible on hover) */}
            <svg
              className="absolute top-1/2 left-1/2 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity"
              style={{
                width: "200%",
                height: "200%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <line
                x1="50%"
                y1="50%"
                x2={`${50 - (tech.position.x - 50) * 0.5}%`}
                y2={`${50 - (tech.position.y - 50) * 0.5}%`}
                stroke={tech.color}
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>
          </motion.div>
        </motion.div>
      ))}

      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Animated particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
