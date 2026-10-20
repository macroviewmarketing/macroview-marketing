import { portfolioItems } from "@/data/portfolioItems";
import { SectionIntro } from "./SectionIntro";

export const WorkSection = () => (
  <section id="work" className="funnel-section border-t border-[var(--border-c)]">
    <div className="mx-auto max-w-5xl px-4 md:px-6">
      <SectionIntro eyebrow="The Work" title="Built to convert, not just to look good.">
        A few of the edits, ads and series we've produced for clients.
      </SectionIntro>

      <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3">
        {portfolioItems.map((p) => (
          <article key={p.id} className="funnel-card overflow-hidden">
            <div className="aspect-video" style={{ background: p.gradientFallback }}>
              <video
                className="h-full w-full object-cover"
                src={p.videoPath}
                aria-hidden
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
            <div className="p-3 md:p-5">
              <p className="funnel-step-tags">{p.category}</p>
              <h3 className="mt-1 text-sm font-bold text-white md:text-lg">{p.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
