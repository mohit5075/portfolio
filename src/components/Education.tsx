"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { GraduationCap, MapPin, Award, BookOpen } from "lucide-react";

const educationData = [
  {
    institution: "Indian Institute of Technology, Roorkee",
    degree: "B.Tech in Electrical Engineering",
    location: "Roorkee, India",
    period: "Jul 2019 – May 2023",
    grade: "CGPA: 8.23 / 10",
  },
  {
    institution: "Indian Convent Senior Secondary School",
    degree: "Intermediate (CBSE Class 12)",
    location: "India",
    period: "Mar 2018 – Mar 2019",
    grade: "92.4%",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-alt">
      <div className="section-container">
        <AnimateOnScroll>
          <h2 className="section-title">Education</h2>
          <div className="mt-2 h-1 w-12 rounded-full accent-bg" />
        </AnimateOnScroll>

        <div className="mt-14 space-y-6">
          {educationData.map((edu, idx) => (
            <AnimateOnScroll key={idx} delay={idx * 0.15}>
              <div className="card p-6 sm:p-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl accent-bg-subtle flex items-center justify-center shrink-0">
                    {idx === 0 ? (
                      <GraduationCap size={24} className="accent-text" />
                    ) : (
                      <BookOpen size={24} className="accent-text" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-heading">
                      {edu.institution}
                    </h3>
                    <p className="accent-text font-medium mt-1 text-sm">
                      {edu.degree}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-body">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Award size={14} />
                        {edu.grade}
                      </span>
                      <span className="text-muted">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
