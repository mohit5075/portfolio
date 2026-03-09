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
                I&apos;m a Software Engineer with 2.5 years of experience building secure, 
                scalable backend systems using Java and SpringBoot. With strong foundations in
                Data Structures & Algorithms, Object-Oriented Programming, and Distributed
                Systems, I thrive on solving complex technical challenges.
              </p>
              <p>
                My expertise spans <span className="text-heading font-medium">Java, SpringBoot, Kafka, PostgreSQL, Elasticsearch, and ClickHouse</span>,
                where I&apos;ve designed and delivered production-grade event-driven architectures and
                multi-tenant platforms serving the BFSI domain, processing thousands of events per second
                with sub-second latency.
              </p>
              <p>
                On the infrastructure side, I work extensively with <span className="text-heading font-medium">AWS, Terraform, Docker, Nomad, and HashiCorp Vault</span> —
                enabling automated deployments, cost optimization (achieved ~35% reduction), and
                robust security practices including JWT authentication and secrets management.
              </p>
              <p>
                I&apos;m passionate about system design, performance optimization, and building
                scalable solutions that solve real-world problems. I love exploring AI/LLM tools
                and continuously improving my craft through logical problem-solving.
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
