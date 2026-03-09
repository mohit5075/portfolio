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
      "Built an event-driven data lifecycle platform using Kafka Connect, automating archival, export, and restoration across PostgreSQL, Elasticsearch, and MinIO, with policy management backed by MongoDB",
      "Implemented a reporting platform using Postgres, CDC, Kafka, ClickHouse, Jasper processing 5K+ events/sec with sub-second latency and enabling near real-time analytics on transaction data",
      "Delivered a multi-channel notification service (in-app, SMS, email) handling 100K+ notifications/day, alongside a touchless audit trail using Kafka, Debezium, and Javers for compliance-ready object versioning",
      "Reduced AWS infrastructure costs by ~35% by analyzing per-service CPU and memory utilization using Nomad metrics and Kibana dashboards, driving informed capacity optimization decisions",
      "Owned platform operational services, including a License Server managing the full lifecycle of license keys via License4J and a process-mining service to monitor and analyze Camunda workflows using Optimize",
      "Built and operated a BFSI Decision-as-a-Service (DaaS) platform integrating multiple third-party providers, with tenant onboarding APIs, dynamic configuration, and workflow orchestration using Netflix Conductor and Kong",
      "Improved system performance and scalability by tuning Elasticsearch ILM policies and shard allocation, achieving ~30% faster query response times, while sustaining 1000+ requests/min at p99 < 75 ms",
      "Automated cloud infra and service provisioning using Terraform (EC2, RDS, VPC) and Ansible (Nomad, Consul, ElasticSearch)",
      "Delivered a multi-tenant OCR microservice using Python/Flask with around 85% accuracy, exposing REST APIs for template management and document processing, with metadata persisted in PostgreSQL",
      "Secured service access using JWT and API keys with HashiCorp Vault and managed scalable document storage on AWS S3",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Societe Generale",
    period: "May 2022 – Jul 2022",
    type: "Internship",
    highlights: [
      "Contributed to a chat automation solution on SG private cloud platform (DoItNow), designing end-to-end chat flows for cloud services including database, storage, networking, and security",
      "Implemented MVP with Decision Tree approach using front end technologies like HTML, CSS, JS",
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
