import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { GrainOverlay } from "@/components/GrainOverlay";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { WhySection } from "@/components/sections/WhySection";
import { BookSection } from "@/components/sections/BookSection";
import { useScrollDots } from "@/hooks/useScrollDots";
import { useSnapObserver } from "@/hooks/useSnapObserver";

const Index = () => {
  const { scrolled } = useScrollDots();
  useSnapObserver("#snap-root", true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <GrainOverlay />
      <Navbar scrolled={scrolled} />

      <main id="snap-root">
        <HeroSection />
        <PortfolioSection />
        <ResultsSection />
        <WhySection />
        <BookSection />
      </main>
    </>
  );
};

export default Index;
