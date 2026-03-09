"use client";

import AnimateOnScroll from "./AnimateOnScroll";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C/C++", "Java", "Kotlin", "Python", "JavaScript"],
  },
  {
    title: "Backend Technologies",
    skills: ["SpringBoot", "Maven", "Hibernate", "JDBC", "Microservices"],
  },
  {
    title: "Datastores",
    skills: ["PostgreSQL", "MongoDB", "Elasticsearch", "ClickHouse"],
  },
  {
    title: "DevOps Technologies",
    skills: ["Terraform", "Docker", "AWS", "Ansible"],
  },
  {
    title: "Core Concepts",
    skills: ["DSA", "OS", "OOP", "Multithreading", "Design Patterns", "LLD", "HLD"],
  },
  {
    title: "Testing & Observability",
    skills: ["JUnit", "Mockito", "Kibana", "Superset", "Grafana", "Prometheus"],
  },
  {
    title: "Miscellaneous",
    skills: ["Kafka", "Debezium", "Javers", "Netflix Conductor", "Kong", "Camunda"],
  },
  {
    title: "AI & LLM Tools",
    skills: ["Github Copilot", "Claude", "LangChain"],
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
