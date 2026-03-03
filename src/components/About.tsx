"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { Code2, Server, Cloud, GraduationCap } from "lucide-react";

const highlights = [
  { icon: Server, label: "Backend & Distributed Systems" },
  { icon: Code2, label: "Java, Spring Boot, Kafka" },
  { icon: Cloud, label: "AWS, Terraform, Docker" },
  { icon: GraduationCap, label: "IIT Roorkee Graduate" },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <AnimateOnScroll>
          <h2 className="section-title">About Me</h2>
          <div className="mt-2 h-1 w-12 rounded-full accent-bg" />
        </AnimateOnScroll>

        <div className="mt-12 grid lg:grid-cols-5 gap-12">
          <AnimateOnScroll className="lg:col-span-3">
            <div className="space-y-5 text-body leading-relaxed">
              <p>
                I&apos;m a backend-focused Software Engineer with strong foundations in
                Data Structures & Algorithms, Object-Oriented Programming, and Distributed
                Systems. I thrive on building systems that are scalable, resilient, and
                performant.
              </p>
              <p>
                With hands-on experience in <span className="text-heading font-medium">Java, Spring Boot, Kafka, and Elasticsearch</span>,
                I&apos;ve designed and delivered production-grade event-driven architectures and
                multi-tenant platforms serving the BFSI domain.
              </p>
              <p>
                My infrastructure expertise spans <span className="text-heading font-medium">AWS, Terraform, Docker, and HashiCorp tools</span> —
                enabling me to automate deployments, optimize costs, and maintain
                robust security practices.
              </p>
              <p>
                I&apos;m passionate about system design, performance optimization,
                and building tools that solve real-world problems at scale.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="lg:col-span-2" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="card p-5 flex flex-col items-center text-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl accent-bg-subtle flex items-center justify-center">
                    <item.icon size={20} className="accent-text" />
                  </div>
                  <span className="text-sm font-medium text-heading">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
