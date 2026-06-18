"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="w-full min-h-[60vh] flex flex-col items-center justify-center px-6 py-24 border-t border-border bg-surface text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center max-w-[800px]"
      >
        <h2 className="font-display text-[40px] md:text-[56px] lg:text-[96px] text-white leading-[0.9] mb-8">
          Let&apos;s build<br />something.
        </h2>
        
        <p className="font-sans text-[18px] text-text-secondary mb-12 max-w-[500px]">
          Available for frontend internships & freelance projects in Ahmedabad.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <a
            href="mailto:sonidivyesh2004@gmail.com"
            className="font-display text-[16px] md:text-[22px] tracking-wider bg-accent text-black px-8 py-4 md:px-12 md:py-5 hover:bg-white hover:scale-[1.02] transition-all duration-300"
          >
            SEND A MESSAGE →
          </a>
          
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[13px] text-text-dim tracking-[0.2em] uppercase hover:text-white transition-colors duration-200"
          >
            OR BOOK A CALL
          </a>
        </div>
      </motion.div>
    </section>
  );
}
