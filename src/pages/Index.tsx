import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FunnelHero } from "@/components/funnel/FunnelHero";
import { LogoMarquee } from "@/components/funnel/LogoMarquee";
import { StatsSection } from "@/components/funnel/StatsSection";
import { EngineSection } from "@/components/funnel/EngineSection";
import { WorkSection } from "@/components/funnel/WorkSection";
import { TestimonialsSection } from "@/components/funnel/TestimonialsSection";
import { FaqSection } from "@/components/funnel/FaqSection";
import { FinalCta } from "@/components/funnel/FinalCta";
import { useScrollDots } from "@/hooks/useScrollDots";

const Index = () => {
  const { scrolled } = useScrollDots();

  return (
    <>
      <Navbar scrolled={scrolled} />

      <main id="snap-root" className="funnel">
        <FunnelHero />
        <LogoMarquee />
        <StatsSection />
        <EngineSection />
        <WorkSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCta />
        <Footer />
      </main>
    </>
  );
};

export default Index;
