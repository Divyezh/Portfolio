"use client";

import { LinkedinIcon, GithubIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-bg pt-[80px] pb-[48px] px-6 lg:px-[48px] border-t border-[#1a1a1a]">
      {/* ZONE 2: BRAND BLOCK */}
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="font-sans font-black text-[clamp(32px,8vw,120px)] leading-[1.1] text-white tracking-tight">
          © Divyesh Soni
        </h2>
        <p className="font-sans font-normal text-[18px] text-[#888888] mt-3">
          Frontend Developer & AI Builder
        </p>
      </div>

      {/* ZONE 3: SOCIAL ICONS ROW */}
      <div className="flex justify-center items-center mt-[48px]">
        <a
          href="https://www.linkedin.com/in/divyesh-soni-60a5bb2a6/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-[52px] h-[52px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-full hover:bg-[#2a2a2a] hover:scale-105 transition-all duration-200"
        >
          <LinkedinIcon size={20} color="#ffffff" strokeWidth={1.5} />
        </a>

        <span className="text-[#333333] text-[20px] mx-[20px] animate-[spin_8s_linear_infinite] select-none">
          ✳
        </span>

        <a
          href="https://github.com/Divyezh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-[52px] h-[52px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-full hover:bg-[#2a2a2a] hover:scale-105 transition-all duration-200"
        >
          <GithubIcon size={20} color="#ffffff" strokeWidth={1.5} />
        </a>

        <span className="text-[#333333] text-[20px] mx-[20px] animate-[spin_8s_linear_infinite] select-none">
          ✳
        </span>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-[52px] h-[52px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-full hover:bg-[#2a2a2a] hover:scale-105 transition-all duration-200"
        >
          <TwitterIcon size={20} color="#ffffff" strokeWidth={1.5} />
        </a>
      </div>

      {/* ZONE 4: BOTTOM NAV BAR */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full mt-[64px] gap-6 lg:gap-0 max-w-[1280px] mx-auto">
        {/* LEFT GROUP */}
        <div className="flex flex-wrap justify-center gap-[12px]">
          {/* PILL 1 */}
          <a
            href="#work"
            className="group flex items-center gap-[16px] bg-transparent border-[1.5px] border-[#2a2a2a] rounded-full py-[14px] px-[28px] hover:bg-[#1a1a1a] hover:border-[#3a3a3a] transition-all duration-250 ease-in-out"
          >
            <span className="font-sans font-semibold text-[14px] uppercase tracking-[0.08em] text-white">
              WORK
            </span>
            <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-white group-hover:bg-accent transition-colors duration-250 ease-in-out">
              <span className="text-[#0a0a0a] group-hover:text-white text-[14px] leading-none mb-0.5">
                →
              </span>
            </div>
          </a>
          {/* PILL 2 */}
          <a
            href="#skills"
            className="group flex items-center gap-[16px] bg-transparent border-[1.5px] border-[#2a2a2a] rounded-full py-[14px] px-[28px] hover:bg-[#1a1a1a] hover:border-[#3a3a3a] transition-all duration-250 ease-in-out"
          >
            <span className="font-sans font-semibold text-[14px] uppercase tracking-[0.08em] text-white">
              SKILLS
            </span>
            <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-white group-hover:bg-accent transition-colors duration-250 ease-in-out">
              <span className="text-[#0a0a0a] group-hover:text-white text-[14px] leading-none mb-0.5">
                →
              </span>
            </div>
          </a>
          {/* PILL 3 */}
          <a
            href="mailto:sonidivyesh2004@gmail.com"
            className="group flex items-center gap-[16px] bg-transparent border-[1.5px] border-[#2a2a2a] rounded-full py-[14px] px-[28px] hover:bg-[#1a1a1a] hover:border-[#3a3a3a] transition-all duration-250 ease-in-out"
          >
            <span className="font-sans font-semibold text-[14px] uppercase tracking-[0.08em] text-white">
              CONTACT
            </span>
            <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-white group-hover:bg-accent transition-colors duration-250 ease-in-out">
              <span className="text-[#0a0a0a] group-hover:text-white text-[14px] leading-none mb-0.5">
                →
              </span>
            </div>
          </a>
        </div>

        {/* RIGHT GROUP */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-[16px] bg-white border-none rounded-full py-[14px] px-[28px] hover:bg-[#e0e0e0] transition-colors duration-200 cursor-pointer"
        >
          <span className="font-sans font-semibold text-[14px] uppercase text-[#0a0a0a]">
            GO UP
          </span>
          <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-[#0a0a0a]">
            <span className="text-white text-[14px] leading-none mb-0.5">↑</span>
          </div>
        </button>
      </div>

      {/* ZONE 5: FINE PRINT ROW */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full mt-[32px] max-w-[1280px] mx-auto gap-4 md:gap-0">
        <span className="font-sans text-[12px] text-text-dim">
          sonidivyesh2004@gmail.com
        </span>
        <span className="font-sans text-[12px] text-[#333333]">
          Ahmedabad, India · 2025
        </span>
        <span className="font-sans text-[12px] text-text-dim">
          Built with Next.js + Framer Motion
        </span>
      </div>
    </footer>
  );
}
