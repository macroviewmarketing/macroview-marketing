import { STATS } from "@/data/funnel";
import { CtaRow } from "./BookCallButton";

export const StatsSection = () => (
  <section id="results" className="funnel-stats-section">
    <div className="funnel-wrap">
      <div className="funnel-stats">
        {STATS.map((s) => (
          <div key={s.value} className="funnel-stat">
            <p className="funnel-stat-num">{s.value}</p>
            <p className="funnel-stat-label">{s.label}</p>
          </div>
        ))}
      </div>
      <CtaRow />
    </div>
  </section>
);
