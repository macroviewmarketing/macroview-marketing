import { STATS } from "@/data/funnel";
import { BookCallButton } from "./BookCallButton";

export const StatsSection = () => (
  <section id="results" className="funnel-section">
    <div className="mx-auto max-w-5xl px-4 md:px-6">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {STATS.map((s) => (
          <div key={s.value} className="funnel-card p-5 md:p-6">
            <p className="funnel-stat">{s.value}</p>
            <p className="mt-2 text-[13px] leading-snug text-[var(--dim)]">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <BookCallButton />
      </div>
    </div>
  </section>
);
