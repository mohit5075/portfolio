"use client";

import AnimateOnScroll from "./AnimateOnScroll";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    skills: ["Java", "Kotlin", "Spring Boot", "Hibernate", "JDBC"],
  },
  {
    title: "Distributed Systems",
    skills: ["Apache Kafka", "Elasticsearch", "Netflix Conductor"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Terraform", "Docker", "Nomad", "Consul"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Security",
    skills: ["JWT", "HashiCorp Vault"],
  },
  {
    title: "Testing & Observability",
    skills: ["JUnit", "Mockito", "Kibana"],
  },
  {
    title: "Core Concepts",
    skills: ["DSA", "OOPS", "Operating Systems", "Multithreading", "LLD", "HLD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-alt">
      <div className="section-container">
        <AnimateOnScroll>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="mt-2 h-1 w-12 rounded-full accent-bg" />
          <p className="section-subtitle">Tools and technologies I work with daily</p>
        </AnimateOnScroll>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <AnimateOnScroll key={category.title} delay={idx * 0.08}>
              <div className="card p-6 h-full">
                <h3 className="text-sm font-semibold accent-text uppercase tracking-wider mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 rounded-lg border text-heading font-medium transition-colors"
                      style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
