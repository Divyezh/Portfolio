"use client";

import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/lib/projects";

export default function Work() {
  return (
    <section id="work" className="py-[64px] lg:py-[128px] max-w-[1280px] mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <span className="font-sans text-xs tracking-[0.3em] text-accent uppercase mb-6 block">
          SELECTED WORK
        </span>
        <h2 className="font-display text-[40px] md:text-[56px] lg:text-[72px] text-white leading-[0.9]">
          Things I&apos;ve<br />Built.
        </h2>
      </motion.div>

      <div className="flex flex-col w-full">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
