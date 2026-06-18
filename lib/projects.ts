export type Project = {
  id: string;
  number: string;
  title: string;
  tags: string[];
  description: string;
  link: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "velvet-ai",
    number: "01",
    title: "VELVET.AI",
    tags: ["Next.js 14", "Claude API", "Prisma", "TypeScript", "E2B Sandbox"],
    description:
      "AI-powered SaaS website builder that generates production-ready sites from natural language. Prompt-chaining pipeline delivers 90%+ structural accuracy. Real-time SSE streaming reduces perceived latency by 45%.",
    link: "https://github.com/Divyezh",
  },
];
