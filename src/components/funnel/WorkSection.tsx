import { portfolioItems } from "@/data/portfolioItems";
import { SectionIntro } from "./SectionIntro";

export const WorkSection = () => (
  <section id="work" className="funnel-section border-t border-[var(--f-border)]">
    <div className="funnel-wrap">
      <SectionIntro
        eyebrow="Inside The Work"
        title={
          <>
            From footage
            <br />
            to finished creative.
          </>
        }
      >
        A few of the edits, ads and series we've produced for clients.
      </SectionIntro>

      <div className="funnel-cases">
        {portfolioItems.map((p) => (
          <article key={p.id} className="funnel-case">
            <h3 className="funnel-case-name">{p.title}</h3>
            <div className="funnel-frame" style={{ background: p.gradientFallback }}>
              <span className="funnel-badge">{p.category}</span>
              <video src={p.videoPath} aria-hidden autoPlay muted loop playsInline preload="metadata" />
            </div>
            <ul className="funnel-bullets">
              <li>{p.title}</li>
              <li>{p.category} production</li>
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);
