"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringView, setIsHoveringView] = useState(false);

  const cursorX = useSpring(0, { damping: 25, stiffness: 200, mass: 0.5 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    // Only show custom cursor on desktop (fine pointers)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20); // 40px width / 2
      cursorY.set(e.clientY - 20); // 40px height / 2
      setIsVisible(true);
      
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="view"]')) {
        setIsHoveringView(true);
      } else {
        setIsHoveringView(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
      }}
      className={`fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-50 flex items-center justify-center transition-opacity duration-200 ${
        isHoveringView ? "opacity-100 bg-accent scale-100" : "opacity-0 scale-50"
      }`}
    >
      {isHoveringView && (
        <span className="font-sans text-[10px] text-black font-semibold uppercase tracking-wider">
          View
        </span>
      )}
    </motion.div>
  );
}
