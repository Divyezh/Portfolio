"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import divyeshImg from "@/app/divyesh.png";

export default function Hero() {
  return (
    <motion.section
      className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]"
      initial={{ backgroundColor: "#000000" }}
      animate={{ backgroundColor: "#0a0a0a" }}
      transition={{ duration: 0.8 }}
    >
      {/* CENTERED HERO IMAGE */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      >
        <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[650px] z-10">
          <Image
            src={divyeshImg}
            alt="Divyesh Soni"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </motion.div>

      {/* 3D MASCOT / BADGE (OPTION B) */}
      <div className="absolute top-[60%] lg:top-1/2 right-[5%] lg:right-[15%] -translate-y-1/2 z-20">
        <motion.div
          className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] lg:w-[200px] lg:h-[200px] bg-[#0a0a0a] rounded-full flex flex-col items-center justify-center cursor-pointer shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 15 }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-accent animate-[pulse_2s_ease-in-out_infinite] mb-2"></div>
          <span className="font-sans font-semibold text-[12px] lg:text-[14px] text-white text-center leading-snug tracking-[0.08em] uppercase">
            AVAILABLE
            <br />
            FOR HIRE
          </span>
        </motion.div>
      </div>

      {/* TAGLINE */}
      <motion.div
        className="absolute bottom-[12%] lg:bottom-[15%] left-[24px] lg:left-[48px] z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      >
        <p className="font-sans text-[20px] lg:text-[28px] text-white leading-[1.3] max-w-[380px]">
          Your code builds
          <br />
          your future.
        </p>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        className="absolute bottom-[24px] lg:bottom-[48px] left-[24px] lg:left-[48px] z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <p className="font-sans text-[13px] text-[#aaaaaa] animate-[pulse_2s_ease-in-out_infinite]">
          Scroll
        </p>
      </motion.div>
    </motion.section>
  );
}
