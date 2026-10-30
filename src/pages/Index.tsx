import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FunnelHero } from "@/components/funnel/FunnelHero";
import { LogoMarquee } from "@/components/funnel/LogoMarquee";
import { StatsSection } from "@/components/funnel/StatsSection";
import { EngineSection } from "@/components/funnel/EngineSection";
import { FounderSection } from "@/components/funnel/FounderSection";
import { WorkSection } from "@/components/funnel/WorkSection";
import { TestimonialsSection } from "@/components/funnel/TestimonialsSection";
import { FaqSection } from "@/components/funnel/FaqSection";
import { ServicesSection } from "@/components/funnel/ServicesSection";
import type { ReactNode } from "react";
import { FinalCta } from "@/components/funnel/FinalCta";
import { useScrollDots } from "@/hooks/useScrollDots";

const Index = ({ pricingContent }: { pricingContent?: ReactNode }) => {
  const { scrolled } = useScrollDots();

  return (
    <>
      <Navbar scrolled={scrolled} />

      <main id="snap-root" className="funnel">
        <FunnelHero showPricing={Boolean(pricingContent)} />
        <WorkSection />
        <LogoMarquee />
        <StatsSection />
        <TestimonialsSection />
        <FounderSection />
        <EngineSection />
        {pricingContent ?? <ServicesSection />}
        <FaqSection />
        <FinalCta />
        <Footer />
      </main>
    </>
  );
};

export default Index;
