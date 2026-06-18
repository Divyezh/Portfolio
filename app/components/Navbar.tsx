"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-6",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex justify-between items-center rounded-2xl px-5 py-3 transition-all duration-500",
          scrolled
            ? "glass border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        )}
      >
        <motion.a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display text-xl md:text-2xl font-black tracking-tight text-accent glow-text"
        >
          D.
        </motion.a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, i) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={(e) => handleClick(e, link.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-300",
                  isActive ? "text-accent" : "text-muted hover:text-foreground"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-accent/10 rounded-xl border border-accent/20 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="btn-primary text-sm !py-2.5 !px-5 flex items-center gap-1.5"
          >
            Hire Me
            <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2 rounded-xl hover:bg-white/5 transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden glass mt-3 mx-4 rounded-2xl overflow-hidden border-white/5"
          >
            <div className="flex flex-col p-3 gap-1">
              {navLinks.map((link) => {
                const id = link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={cn(
                      "text-base font-medium p-3 rounded-xl transition-colors",
                      activeSection === id
                        ? "text-accent bg-accent/10"
                        : "text-muted hover:text-foreground hover:bg-white/5"
                    )}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                className="btn-primary text-center mt-2 !py-3"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
