export default function Marquee() {
  const text = "REACT.JS · NEXT.JS 14 · TYPESCRIPT · AI INTEGRATIONS · FRAMER MOTION · PRISMA ORM · TAILWIND CSS · OPENAI · CLAUDE API · NODE.JS · SSR/SSG · ";

  return (
    <section 
      className="relative w-full border-y border-border bg-surface h-14 flex items-center overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}
    >
      {/* Animated Sweep Line */}
      <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
        <div className="w-1/3 h-full bg-linear-to-r from-transparent via-accent to-transparent animate-sweep" />
      </div>

      <div className="flex w-max whitespace-nowrap animate-[marquee_30s_linear_infinite] will-change-transform">
        <span className="font-display text-[20px] text-text-secondary tracking-widest mx-4">{text}</span>
        <span className="font-display text-[20px] text-text-secondary tracking-widest mx-4">{text}</span>
        <span className="font-display text-[20px] text-text-secondary tracking-widest mx-4">{text}</span>
        <span className="font-display text-[20px] text-text-secondary tracking-widest mx-4">{text}</span>
      </div>
    </section>
  );
}
