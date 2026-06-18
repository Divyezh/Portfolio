"use client";

import { motion } from "framer-motion";
import { Briefcase, FolderKanban, MapPin, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";

const stats = [
  { label: "Experience", value: "Intern", icon: Briefcase },
  { label: "Projects", value: "1+", icon: FolderKanban },
  { label: "Status", value: "Open to Work", icon: Users },
  { label: "Location", value: "Ahmedabad", icon: MapPin },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          label="About Me"
          title="Building interfaces that feel alive"
          description="I bridge design and engineering to ship products that are fast, accessible, and visually striking."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              I&apos;m a passionate{" "}
              <span className="text-foreground font-semibold">Frontend Developer</span> and{" "}
              <span className="text-foreground font-semibold">AI Builder</span> focused on
              performance, accessibility, and high-end aesthetics. I create digital experiences
              that leave a lasting impact.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              My approach combines the precision of modern engineering with creative, futuristic
              design — from AI-driven applications to motion-heavy interfaces, I care about
              every pixel.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {["React", "Next.js", "TypeScript", "GSAP", "Three.js"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-accent/10 text-accent border border-accent/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card p-6 rounded-2xl group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <stat.icon size={18} className="text-accent" />
                </div>
                <span className="text-accent text-[11px] font-bold uppercase tracking-[0.2em] block mb-1">
                  {stat.label}
                </span>
                <span className="text-xl md:text-2xl font-black text-white font-display">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
