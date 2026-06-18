"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/projects";
import Tag from "./Tag";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isDesktopRight = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="group flex flex-col lg:flex-row items-center w-full min-h-[400px] border-b border-border py-16 gap-12 lg:gap-8"
    >
      <div
        className={`w-full lg:w-[60%] flex flex-col ${isDesktopRight ? "lg:order-1" : "lg:order-2 lg:pl-16"
          }`}
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="font-display text-[120px] leading-none text-border group-hover:text-accent/15 transition-colors duration-500">
            {project.number}
          </span>
          <h3 className="font-display text-4xl lg:text-5xl text-white">
            {project.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>

        <p className="font-sans text-base lg:text-lg text-text-secondary max-w-xl mb-8 leading-relaxed">
          {project.description}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm text-accent hover:underline decoration-1 underline-offset-4 w-max"
        >
          View Project →
        </a>
      </div>

      <div
        className={`w-full lg:w-[40%] ${isDesktopRight ? "lg:order-2" : "lg:order-1"
          }`}
      >
        <div
          className="relative w-full aspect-4/3 bg-surface border border-border group-hover:-translate-y-2 transition-transform duration-500 ease-out overflow-hidden lg:cursor-none"
          data-cursor="view"
        >
          <div className="h-8 border-b border-border bg-surface flex items-center px-4 gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
          </div>
          <div className="absolute inset-0 top-8 bg-linear-to-br from-surface to-accent/5"></div>
        </div>
      </div>
    </motion.div>
  );
}
