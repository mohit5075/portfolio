"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  type: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Azentio Software",
    period: "Nov 2023 – Present",
    type: "Full-time",
    highlights: [
      "Built an event-driven data lifecycle platform using Kafka Connect for real-time data ingestion, transformation, and routing across distributed systems",
      "Architected a multi-tenant BFSI Decision-as-a-Service platform supporting configurable rule engines and tenant isolation",
      "Integrated Netflix Conductor & Kong API Gateway for dynamic workflow orchestration and API management",
      "Reduced API latency by ~50% through async I/O patterns, thread pool tuning, and connection pooling optimizations",
      "Delivered a high-throughput notification system processing 100K+ notifications/day across email, SMS, and push channels",
      "Reduced AWS infrastructure costs by ~35% through resource right-sizing, reserved instances, and automated scaling policies",
      "Tuned Elasticsearch queries and indexing strategies achieving 30% faster query performance on large datasets",
      "Automated infrastructure provisioning using Terraform + Ansible for consistent, repeatable deployments",
      "Implemented JWT-based authentication with HashiCorp Vault for secrets management and certificate rotation",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Societe Generale",
    period: "May 2023 – Jul 2023",
    type: "Internship",
    highlights: [
      "Designed and implemented a chat automation system for the private cloud infrastructure team, reducing manual ticket resolution time",
      "Built a decision-tree based MVP for automated incident categorization and routing",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-alt">
      <div className="section-container">
        <AnimateOnScroll>
          <h2 className="section-title">Experience</h2>
          <div className="mt-2 h-1 w-12 rounded-full accent-bg" />
          <p className="section-subtitle">Where I&apos;ve built things that matter</p>
        </AnimateOnScroll>

        <div className="mt-14 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px border-theme" style={{ backgroundColor: "var(--border)" }} />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <AnimateOnScroll key={idx} delay={idx * 0.15}>
                <div className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full"
                    style={{ backgroundColor: "var(--accent)", border: "4px solid var(--bg)" }}
                  />

                  <div className="card p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-heading">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Briefcase size={14} className="accent-text" />
                          <span className="accent-text font-medium text-sm">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full accent-bg-subtle accent-text">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-body">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--accent)", opacity: 0.6 }} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
