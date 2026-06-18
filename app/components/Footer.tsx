"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUp, Mail } from "lucide-react";

const socials = [
  { Icon: Github, href: "#", name: "GitHub", label: "GitHub profile" },
  { Icon: Linkedin, href: "#", name: "LinkedIn", label: "LinkedIn profile" },
  { Icon: Mail, href: "mailto:sonidivyesh2004@gmail.com", name: "Email", label: "Send email" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative py-12 px-6 border-t border-white/5 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-accent/[0.04] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-display text-2xl font-black text-white tracking-tight">
              Divyesh<span className="text-accent">.</span>
            </span>
            <p className="text-muted text-sm">
              © {new Date().getFullYear()} · Built with Next.js & passion
            </p>
          </div>

          <div className="flex gap-3">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                aria-label={social.label}
                whileHover={{ y: -3 }}
                className="p-3 glass-card rounded-xl text-muted hover:text-accent transition-colors"
              >
                <social.Icon size={18} />
              </motion.a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-3 glass-card rounded-xl text-accent hover:bg-accent/10 transition-colors group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
