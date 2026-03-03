"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "JEE Advanced",
    rank: "AIR 1768",
    description: "All India Rank 1768 in Joint Entrance Examination Advanced",
  },
  {
    title: "JEE Mains",
    rank: "AIR 1502",
    description: "All India Rank 1502 in Joint Entrance Examination Mains",
  },
  {
    title: "VITEEE",
    rank: "AIR 9",
    description: "All India Rank 9 in VIT Engineering Entrance Examination",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="section-container">
        <AnimateOnScroll>
          <h2 className="section-title">Achievements</h2>
          <div className="mt-2 h-1 w-12 rounded-full accent-bg" />
        </AnimateOnScroll>

        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <AnimateOnScroll key={idx} delay={idx * 0.12}>
              <div className="card p-6 sm:p-8 text-center group">
                <div className="w-14 h-14 mx-auto rounded-2xl accent-bg-subtle flex items-center justify-center mb-4 transition-colors">
                  <Trophy size={24} className="accent-text" />
                </div>
                <h3 className="text-sm font-semibold accent-text uppercase tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="text-3xl font-bold text-heading mb-2">
                  {item.rank}
                </p>
                <p className="text-sm text-muted">
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
