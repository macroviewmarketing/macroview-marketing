import { Tag } from "@/components/shared/Tag";

const PILLARS = [
  { num: "I", title: "Frame-perfect editing" },
  { num: "II", title: "Built for high-ticket coaches" },
  { num: "III", title: "Strategy before software" },
  { num: "IV", title: "Hook-first, conversion-minded edits" },
  { num: "V", title: "Clear turnaround times" },
];

export const WhySection = () => (
  <section id="why" style={{ background: "var(--deep)" }}>
    <div className="container-edge section-pad about-shell">
      <div className="snap-content why-grid about-grid">
        <div>
          <Tag>About the studio</Tag>
          <h2 className="display-m about-heading">
            DONE-FOR-YOU<br />
            <span>CONTENT.</span>
          </h2>
          <p className="body-l about-copy">
            We're a done-for-you content and video editing agency built for coaches and online
            entrepreneurs who are ready to scale. While most agencies focus on ad strategy, we
            focus on what actually moves the needle for high-ticket offers: consistent,
            high-converting creative — at the volume your ad spend demands.
          </p>
          <p className="body-l about-copy">
            We work with established coaches doing $10K–$50K+/month who have a proven offer but
            no time (or desire) to sit in an editing suite. You send the raw footage or ideas; we
            handle scripting, editing, and hook iteration so your content keeps converting and
            your ad accounts keep scaling.
          </p>
          <p className="body-l about-copy">
            No micromanaging. No one-off gigs. Just a reliable creative partner that plugs into
            your growth.
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
