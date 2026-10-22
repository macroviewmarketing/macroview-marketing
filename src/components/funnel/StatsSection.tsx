import { STATS } from "@/data/funnel";
import { CtaRow } from "./BookCallButton";

export const StatsSection = () => (
  <section id="results" className="funnel-stats-section">
    <div className="funnel-wrap">
      <div className="funnel-stats">
        {STATS.map((s) => (
          <div key={s.value} className="funnel-stat">
            <div className="funnel-result-copy">
              <p className="funnel-stat-num">{s.value}</p>
              <p className="funnel-stat-label">{s.label}</p>
            </div>
            <a className="funnel-result-profile" href={`https://www.instagram.com/${s.profile.handle}/`} target="_blank" rel="noopener noreferrer" aria-label={`${s.profile.name} on Instagram, ${s.profile.followers} followers`}>
              <img src={s.profile.image} alt={`${s.profile.name}'s Instagram profile`} loading="lazy" />
              <span className="funnel-result-handle">@{s.profile.handle} ↗</span>
              <span className="funnel-result-social-stats">
                <span><strong>{s.profile.followers}</strong> followers</span>
                <span><strong>{s.profile.posts}</strong> posts</span>
                <span><strong>{s.profile.following}</strong> following</span>
              </span>
            </a>
          </div>
        ))}
      </div>
      <p className="funnel-results-source">Results shared by our clients in their video testimonials. Instagram stats shown as captured in their supplied profile images.</p>
      <CtaRow />
    </div>
  </section>
);
