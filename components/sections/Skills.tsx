"use client";

import { motion } from "framer-motion";
import SkillBlock from "../ui/SkillBlock";
import { skillsData } from "@/lib/skills";

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-surface">
      <div className="py-[64px] lg:py-[128px] max-w-[1280px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <span className="font-sans text-xs tracking-[0.3em] text-accent uppercase mb-6 block">
            CAPABILITIES
          </span>
          <h2 className="font-display text-[40px] md:text-[56px] lg:text-[72px] text-white leading-[0.9]">
            Full-Stack AI<br />Development.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {skillsData.map((block, index) => (
            <SkillBlock key={block.id} block={block} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
