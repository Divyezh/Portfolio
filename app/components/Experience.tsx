"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    role: "Frontend Developer",
    period: "Internship",
    type: "Frontend · React · Next.js",
    desc: "Leading the development of highly interactive AI-powered web applications using Next.js and React.",
  },
  {
    role: "Full Stack Developer",
    period: "Foundation",
    type: "Node.js · Express · APIs",
    desc: "Built and optimized full-stack features — connecting frontend interfaces with backend APIs using Node.js and Express.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-elevated/50 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <SectionHeader
          label="Experience"
          title="Where I've grown"
          description="Hands-on experience building real products across the frontend and full stack."
          align="center"
        />

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent md:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block md:w-1/2" />

                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent glow-border ring-4 ring-background z-10" />

                <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-10">
                  <div className="glass-card p-6 md:p-8 rounded-2xl group hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-accent text-xs font-bold uppercase tracking-widest">
                        {exp.period}
                      </span>
                      <span className="text-white/20">·</span>
                      <span className="text-muted text-xs font-medium">{exp.type}</span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-black text-white group-hover:text-accent transition-colors mb-3">
                      {exp.role}
                    </h3>
                    <p className="text-muted leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
