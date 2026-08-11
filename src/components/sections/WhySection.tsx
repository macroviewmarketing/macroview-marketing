import { Tag } from "@/components/shared/Tag";

const PILLARS = [
  { num: "I", title: "Frame-perfect editing" },
  { num: "II", title: "Built for creator scale" },
  { num: "III", title: "Strategy before software" },
  { num: "IV", title: "Retention-minded output" },
  { num: "V", title: "Clear turnaround times" },
];

export const WhySection = () => (
  <section id="why" style={{ background: "var(--deep)" }}>
    <div className="container-edge section-pad about-shell">
      <div className="snap-content why-grid about-grid">
        <div>
          <Tag>About the studio</Tag>
          <h2 className="display-m about-heading">
            SMALL TEAM.<br />
            <span>SERIOUS OUTPUT.</span>
          </h2>
          <p className="body-l about-copy">
            MacroView is a focused production partner for creators and personal brands. We turn
            rough ideas and raw footage into a consistent body of work.
          </p>
          <p className="body-l about-copy">
            Direct communication, clear timelines, and craft that serves the story.
          </p>
        </div>

        <div className="about-principles" aria-label="Studio principles">
          {PILLARS.map((pillar) => (
            <div key={pillar.num} className="pillar-row stagger-child">
              <span className="font-mono about-number">{pillar.num}</span>
              <span className="font-display about-principle">{pillar.title}</span>
              <span className="pillar-arrow font-mono" aria-hidden>—</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
