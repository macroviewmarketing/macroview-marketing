import { GMAIL_COMPOSE_URL } from "@/data/config";
import { scrollToSection } from "@/hooks/useScrollDots";

export const HeroSection = () => (
  <section id="hero" style={{ background: "var(--black)" }}>
    <div className="container-edge section-pad hero-shell">
      <div className="snap-content two-col-hero">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span className="label-mono">Creative production for high-ticket coaches, business owners &amp; CEOs</span>
          </div>

          <h1 className="display-l hero-heading">
            SHORT-FORM CONTENT<br />
            THAT SCALES<br />
            <span>YOUR ADS.</span>
          </h1>

          <p className="body-l hero-summary">
            Macroview Digital Marketing is a creative production agency built exclusively for
            high-ticket coaches, business owners, and CEOs. We're not generalists — we specialize
            in low-ticket to high-ticket funnel content, scripting and editing the ads and
            short-form that scale your offer and convert at volume, without you touching an
            editing timeline.
          </p>

          <div className="hero-actions">
            <a
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book a Discovery Call
            </a>
            <a
              href="#portfolio"
              className="btn btn-outline"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("portfolio");
              }}
            >
              View Portfolio
            </a>
          </div>

          <div className="hero-proof" aria-label="Studio capabilities">
            <span>Scripting</span>
            <span>Editing</span>
            <span>Automations</span>
            <span>Funnel-Ready</span>
          </div>
        </div>

        <HeroPanel />
      </div>
    </div>
  </section>
);

const HeroPanel = () => (
  <div className="hero-panel">
    <div className="hero-placeholder glass-panel" aria-hidden>
      <img
        src="/Macroview%20-%20Logo.svg"
        alt=""
        className="hero-placeholder-mark"
      />
      <span className="micro-mono">Studio reel — coming soon</span>
    </div>
    <div className="hero-grid" />
    <div className="hero-orb" />
    <div className="hero-live">
      <span className="live-badge"><span className="dot" />Production online</span>
    </div>
    <div className="hero-vert-label">MVM / STUDIO 2026</div>

    <div className="hero-counter-row" aria-label="Production process">
      <div className="hero-counter">
        <span className="num">01</span>
        <span className="label">Brief</span>
      </div>
      <div className="hero-counter">
        <span className="num">02</span>
        <span className="label">Produce</span>
      </div>
      <div className="hero-counter">
        <span className="num">03</span>
        <span className="label">Publish</span>
      </div>
    </div>
  </div>
);
