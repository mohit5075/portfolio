"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { BookOpen, Clock, ArrowRight, TrendingUp, Database, Shield, DollarSign } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  icon: typeof Database;
  gradient: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "kafka-clickhouse-analytics",
    title: "Building Real-Time Analytics with Kafka and ClickHouse",
    excerpt: "How we built a real-time analytics pipeline processing 5K+ events/sec with sub-second query latency using Kafka streams and ClickHouse's columnar storage.",
    date: "March 2026",
    readTime: "8 min read",
    tags: ["Kafka", "ClickHouse", "Real-Time", "Analytics"],
    icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "cdc-debezium",
    title: "Understanding Change Data Capture with Debezium",
    excerpt: "Deep dive into CDC patterns, implementing Debezium with Kafka Connect for real-time data synchronization across PostgreSQL, Elasticsearch, and data lakes.",
    date: "February 2026",
    readTime: "10 min read",
    tags: ["Debezium", "CDC", "Kafka", "PostgreSQL"],
    icon: Database,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "multi-tenant-saas",
    title: "Designing Multi-Tenant SaaS APIs",
    excerpt: "Architectural patterns for building secure, scalable multi-tenant systems with tenant isolation, dynamic configuration, and performance optimization strategies.",
    date: "January 2026",
    readTime: "12 min read",
    tags: ["Architecture", "Multi-Tenancy", "API Design", "Security"],
    icon: Shield,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "aws-cost-optimization",
    title: "Reducing AWS Costs Using Infrastructure Metrics",
    excerpt: "How we achieved 35% cost reduction by analyzing per-service CPU and memory utilization, right-sizing instances, and optimizing reserved capacity.",
    date: "December 2025",
    readTime: "7 min read",
    tags: ["AWS", "Cost Optimization", "DevOps", "Monitoring"],
    icon: DollarSign,
    gradient: "from-orange-500 to-red-500",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="section-title">Technical Blog</h2>
            <div className="mt-2 h-1 w-12 rounded-full accent-bg mx-auto" />
            <p className="section-subtitle mt-4">
              Insights, learnings, and deep dives from building distributed systems
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, idx) => (
            <AnimateOnScroll key={post.id} delay={idx * 0.12}>
              <Link href={`/blog/${post.id}`}>
                <article
                  className="group relative h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {/* Gradient accent bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${post.gradient}`}
                  />

                  <div className="p-8">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${post.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                      style={{
                        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                      }}
                    >
                      <post.icon size={28} className="text-white" />
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted mb-4">
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all leading-tight">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-body mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-1 rounded-full"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "rgba(255,255,255,0.6)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                      <BookOpen size={16} style={{ color: "var(--accent)" }} />
                      <span className={`bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent`}>
                        Read Article
                      </span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                        style={{ color: "var(--accent)" }}
                      />
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${post.gradient.split(" ")[1]}10 0%, transparent 70%)`,
                    }}
                  />
                </article>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        {/* View All Button */}
        <AnimateOnScroll delay={0.5}>
          <div className="mt-12 text-center">
            <Link href="/blog">
              <button
                className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, rgba(0,212,255,0.2) 0%, rgba(167,139,250,0.2) 100%)",
                  border: "1px solid rgba(0,212,255,0.4)",
                  color: "#00d4ff",
                  boxShadow: "0 8px 32px rgba(0,212,255,0.2)",
                }}
              >
                View All Articles →
              </button>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
