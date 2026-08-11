import { portfolioItems } from "@/data/portfolioItems";

export const PortfolioSection = () => (
  <section id="portfolio" style={{ background: "var(--deep)" }}>
    <div className="container-edge section-pad">
      <header
        className="snap-content"
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "24px",
          marginBottom: "48px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <span className="section-label">Selected projects</span>
          <h2 className="display-m" style={{ color: "var(--white-c)", marginTop: "20px" }}>
            WORK THAT<br /><span style={{ color: "var(--blue)" }}>HOLDS ATTENTION.</span>
          </h2>
        </div>
      </header>

      <div className="portfolio-grid">
        {portfolioItems.map((p) => (
          <article
            key={p.id}
            className={`portfolio-item stagger-child${p.span === "tall" ? " tall" : ""}`}
            style={{ background: p.gradientFallback }}
          >
            {p.videoPath ? (
              <video
                className="portfolio-item-bg"
                src={p.videoPath}
                loop
                muted
                playsInline
                preload="metadata"
                onMouseEnter={(event) => void event.currentTarget.play()}
                onMouseLeave={(event) => {
                  event.currentTarget.pause();
                  event.currentTarget.currentTime = 0;
                }}
              />
            ) : (
              <div
                className="portfolio-item-bg"
                style={{
                  background: p.imagePath
                    ? `url(${p.imagePath}) center / cover no-repeat`
                    : p.gradientFallback,
                }}
              />
            )}
            <div className="portfolio-grid-tex" />
            <div className="crosshair" />
            <div className="portfolio-overlay">
              <span
                className="font-mono"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--blue)",
                  marginBottom: "8px",
                }}
              >
                {p.category}
              </span>
              <h3
                className="font-display"
                style={{
                  fontSize: "26px",
                  color: "var(--white-c)",
                  letterSpacing: "0.04em",
                }}
              >
                {p.title}
              </h3>
            </div>
          </article>
        ))}

        <article className="portfolio-cta stagger-child">
          <div className="portfolio-cta-inner">
            <h3 className="portfolio-cta-text">
              WHAT YOU WANT,<br />
              <span style={{ color: "var(--blue)" }}>WE GET IT FOR YOU.</span>
            </h3>
          </div>
          <div className="portfolio-cta-ceo-wrap">
            <span className="portfolio-cta-ceo-name">Mark Jason</span>
            <img
              src="/CEO.svg"
              alt="Mark Jason — Owner of MVD"
              className="portfolio-cta-ceo"
            />
            <span className="portfolio-cta-ceo-role">Owner of MVD</span>
          </div>
        </article>
      </div>
    </div>
  </section>
);
