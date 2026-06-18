"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
      <span className="font-sans text-[11px] tracking-[0.4em] text-text-secondary uppercase">
        Scroll
      </span>
      <div className="w-px h-10 bg-border relative overflow-hidden">
        <motion.div
          className="w-full h-full bg-accent absolute top-0 left-0"
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
