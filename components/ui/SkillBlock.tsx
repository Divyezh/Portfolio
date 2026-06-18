"use client";

import { motion } from "framer-motion";
import { SkillBlockItem } from "@/lib/skills";

interface SkillBlockProps {
  block: SkillBlockItem;
  index: number;
}

export default function SkillBlock({ block, index }: SkillBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-8 border border-transparent hover:border-border transition-all duration-300 hover:-translate-y-1 bg-surface/0 hover:bg-surface/30 relative"
    >
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-accent transition-colors duration-300"></div>
      
      <h3 className="font-display text-3xl text-white mb-6 underline decoration-accent decoration-2 underline-offset-8">
        {block.category}
      </h3>
      
      <ul className="flex flex-col gap-3">
        {block.skills.map((skill) => (
          <li key={skill} className="font-sans text-[15px] text-text-secondary flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-accent/50 rounded-full inline-block" />
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
