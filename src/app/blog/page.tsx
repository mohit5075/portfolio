"use client";

import Link from "next/link";
import { ArrowLeft, Clock, BookOpen, TrendingUp, Database, Shield, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  icon: typeof Database;
  gradient: string;
  author: string;
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
    author: "Mohit Kumar",
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
    author: "Mohit Kumar",
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
    author: "Mohit Kumar",
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
    author: "Mohit Kumar",
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-theme sticky top-0 z-50 bg-alt backdrop-blur-lg">
        <div className="section-container py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-heading transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{
              background: "linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(167,139,250,0.1) 100%)",
              border: "1px solid rgba(0,212,255,0.2)",
            }}>
              <BookOpen size={16} className="text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Technical Blog</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-heading mb-6">
              Insights from Building
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Distributed Systems
              </span>
            </h1>
            
            <p className="text-xl text-body leading-relaxed">
              Deep dives into real-world challenges, architecture decisions, and lessons learned 
              from building production systems at scale.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">
              Featured Article
            </div>
            <Link href={`/blog/${featuredPost.id}`}>
              <div
                className="relative group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {/* Gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${featuredPost.gradient}`} />

                <div className="p-8 md:p-10">
                  <div className="grid md:grid-cols-5 gap-8">
                    <div className="md:col-span-3">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-muted mb-4">
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} />
                          {featuredPost.readTime}
                        </span>
                        <span>•</span>
                        <span>{featuredPost.date}</span>
                        <span>•</span>
                        <span>{featuredPost.author}</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-3xl font-bold text-heading mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                        {featuredPost.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-body mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {featuredPost.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium px-3 py-1.5 rounded-full"
                            style={{
                              background: "rgba(0,212,255,0.1)",
                              color: "#00d4ff",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2 flex items-center justify-center">
                      <div
                        className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${featuredPost.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                        style={{
                          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                        }}
                      >
                        <featuredPost.icon size={64} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${featuredPost.gradient.split(" ")[1]}10 0%, transparent 70%)`,
                  }}
                />
              </div>
            </Link>
          </motion.div>

          {/* All Posts */}
          <div>
            <div className="text-sm font-semibold text-heading mb-6 uppercase tracking-wider">
              All Articles
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * idx }}
                >
                  <Link href={`/blog/${post.id}`}>
                    <article
                      className="group relative h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {/* Gradient accent */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${post.gradient}`} />

                      <div className="p-6">
                        {/* Icon */}
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                          style={{
                            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                          }}
                        >
                          <post.icon size={24} className="text-white" />
                        </div>

                        {/* Meta */}
                        <div className="flex items-center gap-3 text-xs text-muted mb-3">
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {post.readTime}
                          </span>
                          <span>•</span>
                          <span>{post.date}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-heading mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-sm text-body mb-4 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-0.5 rounded-full"
                              style={{
                                background: "rgba(255,255,255,0.05)",
                                color: "rgba(255,255,255,0.6)",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${post.gradient.split(" ")[1]}10 0%, transparent 70%)`,
                        }}
                      />
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 p-8 rounded-2xl text-center"
            style={{
              background: "linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(167,139,250,0.1) 100%)",
              border: "1px solid rgba(0,212,255,0.2)",
            }}
          >
            <BookOpen size={32} className="mx-auto mb-4 text-cyan-400" />
            <h3 className="text-2xl font-bold text-heading mb-3">
              More Articles Coming Soon
            </h3>
            <p className="text-body max-w-2xl mx-auto">
              I regularly write about distributed systems, microservices architecture, 
              performance optimization, and lessons learned from building production systems.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
