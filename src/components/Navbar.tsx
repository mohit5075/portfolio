"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Github, Linkedin, Moon, Sun, Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
        style={scrolled ? { backgroundColor: "color-mix(in srgb, var(--bg) 80%, transparent)", borderBottom: "1px solid var(--border)" } : undefined}
      >
        <nav className="section-container flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a href="#" className="text-lg font-bold tracking-tight gradient-text">
            Mohit Kumar Goyal
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "accent-text accent-bg-subtle"
                    : "text-muted hover:text-heading"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/mohit5075"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted hover:text-heading transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohit1609/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted hover:text-heading transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted hover:text-heading transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="https://drive.google.com/file/d/1FyWha9rj6yxY_aJQmtRC8QhZb2Nop4pl/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex btn-primary !py-2 !px-4 !text-xs">
              <Download size={14} />
              Resume
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-muted"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-20 backdrop-blur-xl lg:hidden"
            style={{ backgroundColor: "color-mix(in srgb, var(--bg) 95%, transparent)" }}
          >
            <nav className="section-container flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "accent-text accent-bg-subtle"
                      : "text-muted"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1FyWha9rj6yxY_aJQmtRC8QhZb2Nop4pl/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center mt-4"
                onClick={handleNavClick}
              >
                <Download size={16} />
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
