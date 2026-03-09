"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { ExternalLink, Github, Bot, Brain } from "lucide-react";

interface Project {
  title: string;
  description: string;
  icon: typeof Bot;
  highlights: string[];
  tags: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Emotion Recognition",
    description:
      "Developed a real-time emotion classifier using computer vision and audio processing techniques to analyse data from webcam.",
    icon: Brain,
    highlights: [
      "Built and trained a CNN model in TensorFlow and Keras for real-time emotion classification from facial expressions",
      "Successfully achieved a predictive accuracy of 70% across multiple emotion categories",
      "Integrated computer vision techniques using OpenCV for webcam data processing",
    ],
    tags: ["TensorFlow", "Keras", "CNN", "Python", "OpenCV", "Computer Vision"],
    github: "https://github.com/mohit5075",
  },
  {
    title: "Intelligent Document Q&A System",
    description:
      "Developed a Python service using LangChain for LLM integration, SpringBoot backend for auth and doc upload.",
    icon: Bot,
    highlights: [
      "Built LangChain-based service for intelligent document question-answering with LLM integration",
      "Developed Spring Boot backend with JWT authentication and document upload management",
      "Implemented a RAG pipeline significantly improving answer relevance by 45% reducing model hallucinations",
    ],
    tags: ["LangChain", "Spring Boot", "RAG", "Python", "Java", "LLM"],
    github: "https://github.com/mohit5075",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <AnimateOnScroll>
          <h2 className="section-title">Projects</h2>
          <div className="mt-2 h-1 w-12 rounded-full accent-bg" />
          <p className="section-subtitle">Things I&apos;ve built and shipped</p>
        </AnimateOnScroll>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <AnimateOnScroll key={idx} delay={idx * 0.15}>
              <div className="card p-6 sm:p-8 h-full flex flex-col group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl accent-bg-subtle flex items-center justify-center">
                    <project.icon size={24} className="accent-text" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-muted hover:text-heading transition-colors"
                        aria-label="GitHub repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-muted hover:text-heading transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-heading mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-body mb-4">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-body">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--accent)", opacity: 0.6 }} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full accent-bg-subtle accent-text"
                    >
                      {tag}
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
