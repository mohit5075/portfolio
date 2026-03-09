"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20"
          style={{ backgroundColor: "var(--accent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-15"
          style={{ backgroundColor: "#a855f7", animationDelay: "1s" }}
        />
      </div>

      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)", color: "var(--text-muted)" }}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Software Engineer • Open to Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl mx-auto text-heading"
        >
          Building Scalable{" "}
          <span className="gradient-text">Backend Systems</span> &{" "}
          <span className="gradient-text">Distributed Platforms</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-body max-w-2xl mx-auto leading-relaxed"
        >
          Software Engineer with 2.5 years of experience building secure, scalable backend 
          systems using Java and SpringBoot. Strong foundation in DSA, OOPS, and distributed 
          systems, with hands-on AWS experience and a passion for logical problem-solving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary">
            View Projects
            <ArrowDown size={16} />
          </a>
          <a href="https://drive.google.com/file/d/1FyWha9rj6yxY_aJQmtRC8QhZb2Nop4pl/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Download size={16} />
            Download Resume
          </a>
          <a href="#contact" className="btn-secondary">
            <Mail size={16} />
            Contact Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 flex justify-center pt-2"
            style={{ borderColor: "var(--text-muted)" }}
          >
            <div className="w-1 h-2 rounded-full" style={{ backgroundColor: "var(--text-muted)" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
