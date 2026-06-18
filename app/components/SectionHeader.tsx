"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex flex-col gap-3 mb-16 md:mb-20",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span className="text-accent text-xs font-bold uppercase tracking-[0.35em]">
        {label}
      </span>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed mt-1">
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-2 h-px w-20 bg-gradient-to-r from-accent via-accent/60 to-transparent",
          align === "center" && "mx-auto bg-gradient-to-r from-transparent via-accent to-transparent w-32"
        )}
      />
    </motion.div>
  );
}
