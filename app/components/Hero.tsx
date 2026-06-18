"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(imageRef.current, {
        scale: 0.88,
        opacity: 0,
        duration: 1.4,
        ease: "expo.out",
        delay: 0.5,
      });

      gsap.to(imageRef.current, {
        y: 12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });

      gsap.from(ctaRef.current?.children || [], {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen pt-28 pb-16 md:pt-32 md:pb-24 flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(900px,120vw)] h-[min(900px,120vw)] bg-[radial-gradient(circle,rgba(195,216,9,0.08)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div ref={headlineRef} className="relative z-20 text-center max-w-4xl mx-auto mb-10 md:mb-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-accent/20 text-sm text-accent mb-6"
        >
          <Sparkles size={14} />
          <span className="font-medium">Open to opportunities</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        </motion.div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-5">
          <span className="text-white">Hi, I&apos;m </span>
          <span className="text-gradient">Divyesh</span>
        </h1>

        <p className="text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed">
          Frontend Developer & AI Builder crafting{" "}
          <span className="text-foreground font-medium">fast</span>,{" "}
          <span className="text-foreground font-medium">accessible</span>, and{" "}
          <span className="text-foreground font-medium">motion-rich</span> web experiences.
        </p>
      </div>

      <div
        ref={imageRef}
        className="relative z-10 w-full flex justify-center items-center mb-10 md:mb-14"
      >
        <div className="relative w-56 h-[340px] sm:w-64 sm:h-[400px] md:w-[380px] md:h-[520px]">
          <div className="absolute -inset-8 bg-accent/15 blur-[100px] rounded-full opacity-50" />
          <div className="absolute inset-0 rounded-3xl border border-accent/20 bg-accent/5" />

          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.5)]">
            <Image
              src="/divyesh.png"
              alt="Divyesh Soni — Frontend Developer"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
          </div>

          <div className="absolute -bottom-4 -right-2 md:-right-6 glass-card px-4 py-3 rounded-2xl border-accent/20">
            <p className="text-xs text-muted uppercase tracking-widest font-bold">Based in</p>
            <p className="text-sm font-bold text-white">Ahmedabad, India</p>
          </div>

          <div className="absolute -top-2 -left-2 md:-left-6 glass-card px-4 py-3 rounded-2xl border-accent/20">
            <p className="text-xs text-muted uppercase tracking-widest font-bold">Focus</p>
            <p className="text-sm font-bold text-accent">React · Next.js · AI</p>
          </div>
        </div>
      </div>

      <div
        ref={ctaRef}
        className="relative z-20 flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none justify-center"
      >
        <button
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }
          className="btn-primary flex items-center justify-center gap-2 group"
        >
          View My Work
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="btn-secondary"
        >
          Get In Touch
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted/60">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent"
        />
      </div>
    </section>
  );
}
