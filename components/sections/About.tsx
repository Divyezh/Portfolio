"use client";

import { motion } from "framer-motion";

export default function About() {
  const name = ["DIVYESH", "SONI"];

  return (
    <section id="about" className="py-[64px] lg:py-[128px] max-w-[1280px] mx-auto px-6 lg:px-12 relative w-full">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="font-display text-[48px] md:text-[72px] lg:text-[96px] leading-[0.85] text-white whitespace-pre-line mb-6">
            {name.map((word, i) => (
              <motion.span
                key={i}
                className="block"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-[20px] italic text-text-secondary"
          >
            &quot;Building tomorrow&apos;s products, today.&quot;
          </motion.p>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-12 lg:pt-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[18px] text-text-primary leading-relaxed"
          >
            I&apos;m a Frontend Developer and AI/SaaS builder from Ahmedabad, India,
            currently pursued an Integrated M.Sc. in Information Technology at
            Silver Oak University (2026). I obsess over building LLM-first products
            that solve real problems — fast, beautiful, and scalable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-12"
          >
            <div className="flex flex-col gap-2">
              <span className="font-display text-[36px] md:text-[48px] text-accent leading-none">3+</span>
              <span className="font-sans text-[13px] text-text-secondary uppercase tracking-wider">Years Building</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-display text-[36px] md:text-[48px] text-accent leading-none">2+</span>
              <span className="font-sans text-[13px] text-text-secondary uppercase tracking-wider">AI SaaS Products</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-display text-[36px] md:text-[48px] text-accent leading-none">40%</span>
              <span className="font-sans text-[13px] text-text-secondary uppercase tracking-wider">Avg Load Time Saved</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-border"
          >
            <p className="font-mono text-[13px] text-text-dim uppercase">
              Integrated M.Sc. IT · Silver Oak University, Ahmedabad · 2022–2026
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
