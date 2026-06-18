"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Code2,
  Palette,
  Zap,
  Database,
  FileCode,
  Server,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

interface Skill {
  name: string;
  icon: LucideIcon;
}

const line1Skills: Skill[] = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Code2 },
  { name: "TypeScript", icon: FileCode },
  { name: "Tailwind CSS", icon: Palette },
];

const line2Skills: Skill[] = [
  { name: "GSAP", icon: Zap },
  { name: "Node.js", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "Framer Motion", icon: Zap },
];

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <div className="flex-shrink-0 w-44 md:w-56 glass-card p-6 md:p-8 rounded-2xl flex flex-col items-center gap-4 group mx-3 hover:-translate-y-1">
      <div className="w-14 h-14 rounded-2xl bg-accent/8 flex items-center justify-center group-hover:bg-accent/15 group-hover:scale-110 transition-all duration-300">
        <Icon size={26} className="text-accent" />
      </div>
      <span className="text-sm font-bold text-white group-hover:text-accent transition-colors">
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(line1Ref.current, {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: "none",
      });

      gsap.fromTo(
        line2Ref.current,
        { xPercent: -50 },
        { xPercent: 0, repeat: -1, duration: 25, ease: "none" }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative mb-12">
        <SectionHeader
          label="Skills"
          title="Tools I work with daily"
          description="Technologies I use to build performant, polished frontends and full-stack features."
          align="center"
        />
      </div>

      <div className="flex flex-col gap-6 fade-mask-x">
        <div className="flex overflow-hidden">
          <div ref={line1Ref} className="flex whitespace-nowrap">
            {[...line1Skills, ...line1Skills].map((skill, i) => (
              <SkillCard key={`l1-${i}`} skill={skill} />
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden">
          <div ref={line2Ref} className="flex whitespace-nowrap">
            {[...line2Skills, ...line2Skills, ...line2Skills].map((skill, i) => (
              <SkillCard key={`l2-${i}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
