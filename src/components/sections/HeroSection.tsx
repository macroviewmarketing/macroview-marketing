import { GMAIL_COMPOSE_URL } from "@/data/config";
import { scrollToSection } from "@/hooks/useScrollDots";

export const HeroSection = () => (
  <section id="hero" style={{ background: "var(--black)" }}>
    <div className="container-edge section-pad hero-shell">
      <div className="snap-content two-col-hero">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span className="label-mono">Creative operations for creator-led brands</span>
          </div>

          <h1 className="display-l hero-heading">
            TURN IDEAS<br />
            INTO A CONTENT<br />
            <span>ENGINE.</span>
          </h1>

          <p className="body-l hero-summary">
            Strategy, editing, design, and distribution in one production system. You stay on
            camera. We keep the content moving.
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
              See Our Work
            </a>
          </div>

          <div className="hero-proof" aria-label="Studio capabilities">
            <span>Strategy</span>
            <span>Short-form</span>
            <span>Long-form</span>
            <span>Distribution</span>
          </div>
        </div>

        <HeroPanel />
      </div>
    </div>
  </section>
);

const HeroPanel = () => (
  <div className="hero-panel">
    <img src="/video-asset/gif-1.gif" alt="" aria-hidden className="hero-media" />
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
