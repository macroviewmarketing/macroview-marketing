import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { GrainOverlay } from "@/components/GrainOverlay";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { WhoSection } from "@/components/sections/WhoSection";
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
        <SolutionSection />
        <PortfolioSection />
        <ResultsSection />
        <WhoSection />
        <WhySection />
        <BookSection />
      </main>
    </>
  );
};

export default Index;
