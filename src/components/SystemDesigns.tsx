"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { Network, Zap, BarChart3, FileText, ArrowRight, Clock, Database, Cloud } from "lucide-react";
import Link from "next/link";

interface SystemDesign {
  id: string;
  title: string;
  icon: typeof Network;
  description: string;
  tags: string[];
  complexity: string;
  gradient: string;
  highlights: string[];
}

const systemDesigns: SystemDesign[] = [
  {
    id: "notification-system",
    title: "Notification System",
    icon: Zap,
    description: "Multi-channel notification service handling 100K+ notifications/day across email, SMS, and push",
    tags: ["Kafka", "SpringBoot", "Redis", "WebSockets"],
    complexity: "High",
    gradient: "from-red-500 to-pink-500",
    highlights: [
      "Event-driven architecture",
      "Retry mechanisms & dead-letter queues",
      "Template management",
      "Delivery tracking & analytics",
    ],
  },
  {
    id: "rate-limiter",
    title: "Distributed Rate Limiter",
    icon: Clock,
    description: "Token bucket algorithm implementation with Redis for API gateway protection",
    tags: ["Redis", "Sliding Window", "Token Bucket"],
    complexity: "Medium",
    gradient: "from-yellow-500 to-orange-500",
    highlights: [
      "Token bucket algorithm",
      "Distributed synchronization",
      "Per-user & per-endpoint limits",
      "Graceful degradation",
    ],
  },
  {
    id: "analytics-pipeline",
    title: "Real-Time Analytics Pipeline",
    icon: BarChart3,
    description: "Stream processing pipeline with Kafka, ClickHouse handling 5K+ events/sec with sub-second latency",
    tags: ["Kafka", "ClickHouse", "Flink", "Superset"],
    complexity: "High",
    gradient: "from-blue-500 to-cyan-500",
    highlights: [
      "CDC with Debezium",
      "Real-time aggregations",
      "Materialized views",
      "Time-series optimization",
    ],
  },
  {
    id: "document-processing",
    title: "Document Processing Platform",
    icon: FileText,
    description: "OCR microservice with 85% accuracy for multi-tenant document extraction and classification",
    tags: ["Python", "Flask", "Tesseract", "S3"],
    complexity: "Medium",
    gradient: "from-purple-500 to-indigo-500",
    highlights: [
      "Template-based extraction",
      "ML model integration",
      "Async processing queue",
      "Version control & audit trail",
    ],
  },
];

export default function SystemDesigns() {
  return (
    <section id="system-designs" className="section-padding">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="section-title">System Design Case Studies</h2>
            <div className="mt-2 h-1 w-12 rounded-full accent-bg mx-auto" />
            <p className="section-subtitle mt-4">
              Deep dives into production-grade distributed systems I've designed and built
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {systemDesigns.map((design, idx) => (
            <AnimateOnScroll key={design.id} delay={idx * 0.15}>
              <Link href={`/system-designs/${design.id}`}>
                <div
                  className="group relative h-full overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${design.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${design.gradient} flex items-center justify-center`}
                        style={{
                          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                        }}
                      >
                        <design.icon size={28} className="text-white" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full ${
                            design.complexity === "High"
                              ? "bg-red-500/20 text-red-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {design.complexity}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-heading mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      {design.title}
                    </h3>
                    <p className="text-sm text-body mb-6 leading-relaxed">
                      {design.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {design.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${design.gradient}`} />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {design.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1.5 rounded-full"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "rgba(255,255,255,0.7)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                      <span className={`bg-gradient-to-r ${design.gradient} bg-clip-text text-transparent`}>
                        View Architecture
                      </span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                        style={{ color: "var(--accent)" }}
                      />
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div
                    className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, ${design.gradient.split(" ")[1]} 0%, ${design.gradient.split(" ")[3]} 100%)`,
                    }}
                  />
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Info Banner */}
        <AnimateOnScroll delay={0.6}>
          <div
            className="mt-12 p-6 rounded-2xl text-center"
            style={{
              background: "linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(167,139,250,0.1) 100%)",
              border: "1px solid rgba(0,212,255,0.2)",
            }}
          >
            <div className="flex items-center justify-center gap-3 text-sm text-body">
              <Database size={20} className="text-cyan-400" />
              <span>Each design includes architecture diagrams, scaling strategies, and trade-off analysis</span>
              <Cloud size={20} className="text-purple-400" />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
