export type SkillBlockItem = {
  id: string;
  category: string;
  skills: string[];
};

export const skillsData: SkillBlockItem[] = [
  {
    id: "frontend",
    category: "FRONTEND ENGINEERING",
    skills: [
      "React.js / Next.js 14",
      "TypeScript / JavaScript ES6+",
      "Tailwind CSS / Framer Motion",
    ],
  },
  {
    id: "ai",
    category: "AI & LLM INTEGRATIONS",
    skills: [
      "Anthropic Claude API",
      "OpenAI API / Gemini API",
      "Prompt Engineering Pipelines",
      "AI Workflow Automation",
    ],
  },
  {
    id: "backend",
    category: "BACKEND & DATA",
    skills: [
      "Node.js / Express.js",
      "Prisma ORM / PostgreSQL",
      "MongoDB / Firebase",
      "JWT Auth / REST APIs",
    ],
  },
  {
    id: "tools",
    category: "TOOLS",
    skills: [
      "Git / GitHub / Vercel",
      "Docker (basics)",
      "VS Code / Antigravity",
      "Component Libraries",
    ],
  },
];
