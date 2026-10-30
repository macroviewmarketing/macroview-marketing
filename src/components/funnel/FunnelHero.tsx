import { HERO } from "@/data/funnel";
import { WHATSAPP_URL } from "@/data/config";
import { scrollToSection } from "@/hooks/useScrollDots";

export const FunnelHero = ({ showPricing = false }: { showPricing?: boolean }) => (
  <section id="hero" className="funnel-hero offer-hero">
    <div className="funnel-wrap">
      <p className="funnel-eyebrow">Organic content & ad creative</p>
      <h1 className="funnel-h1">
        <span className="funnel-h1-line">{HERO.headlineLine1} </span>
        <span className="funnel-h1-line">{HERO.headlineLine2} <span className="funnel-accent">{HERO.headlineAccent}</span></span>
      </h1>
      <p className="offer-hero-sub">Macroview helps coaches and service businesses turn their knowledge into consistent organic content and ad creative. We plan, script, and edit, while you bring your expertise and record the footage.</p>
      <div className="funnel-cta-row">
        <a className="funnel-btn" href={showPricing ? "#packages" : "#work"} onClick={(e) => { e.preventDefault(); scrollToSection(showPricing ? "packages" : "work"); }}>{showPricing ? "Explore packages" : "Explore our work"}</a>
        <a className="funnel-btn funnel-btn-ghost" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Message us</a>
      </div>
    </div>
  </section>
);
