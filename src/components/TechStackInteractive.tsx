"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Tech {
  name: string;
  icon: string;
  description: string;
  proficiency: number;
  color: string;
}

interface TechCategory {
  title: string;
  color: string;
  icon: string;
  technologies: Tech[];
}

const techStack: TechCategory[] = [
  {
    title: "Languages",
    color: "#00d4ff",
    icon: "💻",
    technologies: [
      { name: "Java", icon: "☕", description: "Primary language for backend services", proficiency: 95, color: "#f89820" },
      { name: "Kotlin", icon: "🎯", description: "Modern JVM language", proficiency: 85, color: "#7f52ff" },
      { name: "Python", icon: "🐍", description: "ML & scripting automation", proficiency: 80, color: "#3776ab" },
      { name: "C/C++", icon: "⚡", description: "System programming & algorithms", proficiency: 75, color: "#00599c" },
      { name: "JavaScript", icon: "🟨", description: "Frontend & Node.js", proficiency: 70, color: "#f7df1e" },
    ],
  },
  {
    title: "Streaming",
    color: "#ff6b6b",
    icon: "⚡",
    technologies: [
      { name: "Kafka", icon: "🌊", description: "Event streaming platform", proficiency: 90, color: "#231f20" },
      { name: "Debezium", icon: "🔄", description: "Change Data Capture", proficiency: 85, color: "#ff6600" },
      { name: "Kafka Connect", icon: "🔌", description: "Data integration framework", proficiency: 85, color: "#231f20" },
    ],
  },
  {
    title: "Databases",
    color: "#6bcf7f",
    icon: "💾",
    technologies: [
      { name: "PostgreSQL", icon: "🐘", description: "Primary relational database", proficiency: 90, color: "#336791" },
      { name: "MongoDB", icon: "🍃", description: "Document store", proficiency: 85, color: "#47a248" },
      { name: "ClickHouse", icon: "🏠", description: "Real-time analytics OLAP", proficiency: 85, color: "#ffcc01" },
      { name: "Elasticsearch", icon: "🔍", description: "Search & analytics engine", proficiency: 90, color: "#00bfb3" },
      { name: "Redis", icon: "🔴", description: "In-memory cache", proficiency: 80, color: "#dc382d" },
    ],
  },
  {
    title: "DevOps",
    color: "#ffd93d",
    icon: "🚀",
    technologies: [
      { name: "AWS", icon: "☁️", description: "Cloud infrastructure", proficiency: 85, color: "#ff9900" },
      { name: "Terraform", icon: "🏗️", description: "Infrastructure as Code", proficiency: 80, color: "#7b42bc" },
      { name: "Docker", icon: "🐳", description: "Containerization", proficiency: 90, color: "#2496ed" },
      { name: "Ansible", icon: "🤖", description: "Configuration management", proficiency: 75, color: "#ee0000" },
    ],
  },
  {
    title: "Security",
    color: "#a78bfa",
    icon: "🔐",
    technologies: [
      { name: "Vault", icon: "🔒", description: "Secrets management", proficiency: 85, color: "#000000" },
      { name: "JWT", icon: "🎫", description: "Token-based authentication", proficiency: 90, color: "#d63aff" },
      { name: "OAuth 2.0", icon: "🔑", description: "Authorization framework", proficiency: 85, color: "#3c873a" },
    ],
  },
  {
    title: "Observability",
    color: "#f472b6",
    icon: "📊",
    technologies: [
      { name: "Kibana", icon: "📈", description: "Log visualization", proficiency: 85, color: "#00bfb3" },
      { name: "Grafana", icon: "📉", description: "Metrics dashboards", proficiency: 80, color: "#f46800" },
      { name: "Prometheus", icon: "🔥", description: "Metrics collection", proficiency: 75, color: "#e6522c" },
    ],
  },
];

export default function TechStackInteractive() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredTech, setHoveredTech] = useState<Tech | null>(null);

  return (
    <section id="tech-stack" className="section-padding bg-alt">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="section-title">Technology Stack</h2>
            <div className="mt-2 h-1 w-12 rounded-full accent-bg mx-auto" />
            <p className="section-subtitle mt-4">
              Technologies I use to build scalable, production-ready systems
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-3 gap-8">
          {techStack.map((category, idx) => (
            <AnimateOnScroll key={category.title} delay={idx * 0.1}>
              <motion.div
                className="relative"
                onHoverStart={() => setSelectedCategory(category.title)}
                onHoverEnd={() => setSelectedCategory(null)}
              >
                <div
                  className="relative rounded-2xl p-6 transition-all duration-300 cursor-pointer"
                  style={{
                    background: selectedCategory === category.title
                      ? `linear-gradient(135deg, ${category.color}20 0%, ${category.color}10 100%)`
                      : "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${selectedCategory === category.title ? category.color : "rgba(255,255,255,0.1)"}`,
                    boxShadow: selectedCategory === category.title ? `0 20px 60px ${category.color}30` : "none",
                  }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${category.color}40 0%, ${category.color}20 100%)`,
                      }}
                    >
                      {category.icon}
                    </div>
                    <h3
                      className="text-xl font-bold"
                      style={{
                        color: selectedCategory === category.title ? category.color : "var(--text-heading)",
                      }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    {category.technologies.map((tech, techIdx) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 + techIdx * 0.05 }}
                        onHoverStart={() => setHoveredTech(tech)}
                        onHoverEnd={() => setHoveredTech(null)}
                      >
                        <div
                          className="relative p-3 rounded-xl transition-all duration-300"
                          style={{
                            background: hoveredTech?.name === tech.name
                              ? `linear-gradient(135deg, ${tech.color}20 0%, ${tech.color}10 100%)`
                              : "rgba(255,255,255,0.02)",
                            border: `1px solid ${hoveredTech?.name === tech.name ? tech.color : "rgba(255,255,255,0.05)"}`,
                          }}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">{tech.icon}</span>
                            <div className="flex-1">
                              <div className="font-semibold text-sm text-heading">
                                {tech.name}
                              </div>
                              <AnimatePresence>
                                {hoveredTech?.name === tech.name && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="text-xs text-muted mt-1"
                                  >
                                    {tech.description}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>

                          {/* Proficiency bar */}
                          <div className="relative h-1.5 rounded-full overflow-hidden bg-white/5">
                            <motion.div
                              className="absolute inset-y-0 left-0 rounded-full"
                              style={{
                                background: `linear-gradient(90deg, ${tech.color} 0%, ${tech.color}80 100%)`,
                              }}
                              initial={{ width: 0 }}
                              animate={{ width: `${tech.proficiency}%` }}
                              transition={{ delay: idx * 0.1 + techIdx * 0.05 + 0.3, duration: 0.8 }}
                            />
                          </div>

                          {/* Glow effect on hover */}
                          {hoveredTech?.name === tech.name && (
                            <motion.div
                              className="absolute inset-0 rounded-xl blur-xl opacity-20 pointer-events-none"
                              style={{ backgroundColor: tech.color }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0.2 }}
                            />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Outer glow on category hover */}
                {selectedCategory === category.title && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl blur-2xl opacity-30 pointer-events-none -z-10"
                    style={{ backgroundColor: category.color }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                  />
                )}
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Floating tooltip for hovered tech */}
        <AnimatePresence>
          {hoveredTech && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
            >
              <div
                className="px-6 py-3 rounded-2xl shadow-2xl"
                style={{
                  background: "rgba(0,0,0,0.95)",
                  backdropFilter: "blur(20px)",
                  border: `2px solid ${hoveredTech.color}`,
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{hoveredTech.icon}</span>
                  <div>
                    <div className="font-bold text-white">{hoveredTech.name}</div>
                    <div className="text-sm" style={{ color: hoveredTech.color }}>
                      {hoveredTech.proficiency}% Proficiency
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
