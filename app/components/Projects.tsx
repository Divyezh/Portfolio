"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "AI Website Builder",
    description:
      "A high-performance platform for building and visualizing AI-powered web experiences with real-time previews and modern tooling.",
    tech: ["Next.js", "Three.js", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Projects"
          title="Selected work"
          description="A snapshot of what I've been building — more projects coming soon."
        />

        <div className="flex flex-col gap-20 md:gap-28">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-10 lg:gap-16 items-center`}
            >
              <div className="w-full lg:w-3/5 group relative">
                <span className="absolute -top-6 -left-2 font-display text-7xl md:text-8xl font-black text-white/[0.04] select-none pointer-events-none">
                  0{i + 1}
                </span>
                <div className="absolute inset-0 bg-accent/15 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/8 neon-border aspect-video glass-card !p-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>
              </div>

              <div className="w-full lg:w-2/5 flex flex-col gap-6">
                <div>
                  <span className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3 block">
                    Featured Project
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 bg-accent/8 border border-accent/15 text-accent text-xs font-bold rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <a href={project.live} className="btn-primary text-sm !py-3 flex items-center gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="btn-secondary text-sm !py-3 flex items-center gap-2"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
