import { SectionIntro } from "./SectionIntro";
import { BookCallButton } from "./BookCallButton";

export const ServicesSection = () => (
  <section id="services" className="funnel-section border-t border-[var(--f-border)]">
    <div className="funnel-wrap">
      <SectionIntro eyebrow="How we can help" title="Content built around your business.">
        Start with your goals, your audience and the work you need off your plate. We will recommend the right scope together.
      </SectionIntro>
      <div className="offer-grid">
        <article className="offer-card"><h3>Organic content</h3><p>Research, scripts, edited reels and designed carousels that turn your expertise into a consistent content presence.</p></article>
        <article className="offer-card"><h3>Video editing & ad creative</h3><p>Short-form videos, long-form edits and ad creative shaped around your footage, message and brand.</p></article>
        <article className="offer-card"><h3>Strategy & focused projects</h3><p>Content audits, strategy sprints and focused creative projects to address your next bottleneck.</p></article>
      </div>
      <div className="funnel-cta-row" style={{ marginTop: 32 }}><BookCallButton label="Discuss your project" /></div>
    </div>
  </section>
);
