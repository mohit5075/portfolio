"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { Mail, Github, Linkedin, ExternalLink, ArrowUpRight, Phone } from "lucide-react";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:goyalmk2001@gmail.com",
    icon: Mail,
    handle: "goyalmk2001@gmail.com",
  },
  {
    label: "Phone",
    href: "tel:+916377203117",
    icon: Phone,
    handle: "+91 6377203117",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohit1609/",
    icon: Linkedin,
    handle: "linkedin.com/in/mohit1609",
  },
  {
    label: "GitHub",
    href: "https://github.com/mohit5075",
    icon: Github,
    handle: "github.com/mohit5075",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/mohit1609/",
    icon: ExternalLink,
    handle: "leetcode.com/u/mohit1609",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <AnimateOnScroll>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="section-title">Let&apos;s Connect</h2>
            <div className="mt-2 h-1 w-12 rounded-full accent-bg mx-auto" />
            <p className="section-subtitle">
              I&apos;m always open to discussing new opportunities, interesting projects,
              or just connecting with fellow engineers.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="mt-10">
          <div className="flex justify-center">
            <a
              href="mailto:goyalmk2001@gmail.com"
              className="btn-primary text-base px-8 py-4"
            >
              <Mail size={20} />
              Get In Touch
              <ArrowUpRight size={16} />
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="mt-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" && link.label !== "Phone" ? "_blank" : undefined}
                rel={link.label !== "Email" && link.label !== "Phone" ? "noopener noreferrer" : undefined}
                className="card p-5 flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl accent-bg-subtle flex items-center justify-center shrink-0 transition-colors">
                  <link.icon size={18} className="accent-text" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-heading">
                    {link.label}
                  </p>
                  <p className="text-xs text-muted truncate">
                    {link.handle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
