import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Work from "@/components/sections/Work";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main className="flex flex-col items-center justify-between w-full">
        <Hero />
        <Marquee />
        <Work />
        <Skills />
        <About />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
