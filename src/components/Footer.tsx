"use client";

import { Github, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg-alt)" }}>
      <div className="section-container py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-muted">
            <span>Built with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>by Mohit Kumar Goyal</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mohit5075"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-heading transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohit1609/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-heading transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <p className="text-xs text-muted">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
