"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
            ? "backdrop-blur-md bg-bg/80 border-b border-border py-4"
            : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a
            href="#"
            className="font-display text-[28px] text-accent leading-none tracking-wide"
          >
            DS
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-sm tracking-widest uppercase text-text-secondary hover:text-accent transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            <a
              href="mailto:sonidivyesh2004@gmail.com"
              className="font-sans text-sm tracking-widest uppercase border border-accent text-accent px-5 py-2 hover:bg-accent hover:text-black transition-colors duration-200"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white hover:text-accent transition-colors z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-30 flex flex-col items-center justify-center transition-opacity duration-300 ${isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-display text-4xl text-white hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:sonidivyesh2004@gmail.com"
            className="mt-4 font-sans text-sm tracking-widest uppercase border border-accent text-accent px-8 py-3 hover:bg-accent hover:text-black transition-colors duration-200"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </>
  );
}
