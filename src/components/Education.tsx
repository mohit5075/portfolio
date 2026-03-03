"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { GraduationCap, MapPin, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-padding bg-alt">
      <div className="section-container">
        <AnimateOnScroll>
          <h2 className="section-title">Education</h2>
          <div className="mt-2 h-1 w-12 rounded-full accent-bg" />
        </AnimateOnScroll>

        <AnimateOnScroll className="mt-14">
          <div className="card p-8 sm:p-10 max-w-2xl">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl accent-bg-subtle flex items-center justify-center shrink-0">
                <GraduationCap size={28} className="accent-text" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-heading">
                  Indian Institute of Technology, Roorkee
                </h3>
                <p className="accent-text font-medium mt-1">
                  B.Tech in Electrical Engineering
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-body">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    Roorkee, India
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award size={14} />
                    CGPA: 8.23 / 10
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
