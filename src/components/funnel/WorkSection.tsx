import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { SectionIntro } from "./SectionIntro";

const selectedWork = [
  { client: "NEXE", title: "Fitness Education Reel", detail: "Fat Loss Myths", slug: "nexe", url: "https://f.io/3bCTAA5k" },
  { client: "Isa", title: "Fitness Coaching Educational Video", detail: "Which Program", slug: "isa", url: "https://f.io/nKXmQUDf" },
  { client: "Kate", title: "Fitness Coaching Ad", detail: "Stop Leaving Your Results on the Table", slug: "kate", url: "https://f.io/Oh2mP_GV" },
];

export const WorkSection = () => {
  const rail = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [visible, setVisible] = useState(false);
  const moving = !paused && !hovered && !focused && !reducedMotion && visible;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (rail.current) observer.observe(rail.current);
    return () => { preference.removeEventListener("change", update); observer.disconnect(); };
  }, []);

  useEffect(() => {
    rail.current?.querySelectorAll("video").forEach((video) => {
      if (moving) void video.play().catch(() => {});
      else if (!video.paused) video.pause();
    });
    if (!moving) return;
    let frame = 0;
    let previous = 0;
    let position = rail.current?.scrollLeft ?? 0;
    const advance = (now: number) => {
      const node = rail.current;
      if (node) {
        const group = node.querySelector<HTMLElement>(".selected-work-group");
        const cycle = group ? group.offsetWidth + 24 : 0;
        if (previous) position += Math.min(now - previous, 50) * 0.025;
        if (cycle && position >= cycle) position -= cycle;
        node.scrollLeft = position;
      }
      previous = now;
      frame = requestAnimationFrame(advance);
    };
    frame = requestAnimationFrame(advance);
    return () => cancelAnimationFrame(frame);
  }, [moving]);

  const step = (direction: number) => {
    setPaused(true);
    const node = rail.current;
    if (node) {
      const cycle = node.querySelector<HTMLElement>(".selected-work-group")!.offsetWidth + 24;
      if (direction < 0 && node.scrollLeft < 1) node.scrollLeft = cycle;
      if (direction > 0 && node.scrollLeft >= cycle) node.scrollLeft -= cycle;
      node.scrollBy({ left: direction * (node.querySelector("article")!.clientWidth + 24), behavior: reducedMotion ? "instant" : "smooth" });
    }
  };

  return (
    <section id="work" className="funnel-section border-t border-[var(--f-border)]">
      <div className="funnel-wrap">
        <SectionIntro eyebrow="Selected Work" title={<>Real coaches.<br />Content in motion.</>}>
          Education, storytelling and ad creative for coaches. Explore a few recent edits, or browse the complete portfolio.
        </SectionIntro>
        <div className="selected-work-toolbar">
          <a className="selected-work-portfolio" href="https://f.io/cwqeAn15" target="_blank" rel="noopener noreferrer">
            Complete portfolio <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <div className="selected-work-controls" aria-label="Portfolio controls">
            <button type="button" aria-label="Previous video" onClick={() => step(-1)}><ArrowLeft size={18} /></button>
            <button type="button" aria-label={paused ? "Resume previews" : "Pause previews"} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? <Play size={16} /> : <Pause size={16} />}</button>
            <button type="button" aria-label="Next video" onClick={() => step(1)}><ArrowRight size={18} /></button>
          </div>
        </div>
        <div ref={rail} className="selected-work-rail" role="region" aria-label="Selected video work" tabIndex={0}
          onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
          onPointerDown={() => setPaused(true)} onWheel={() => setPaused(true)}
          onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); step(event.key === "ArrowRight" ? 1 : -1); } }}>
          {[0, 1, 2].map((copy) => (
            <div className="selected-work-group" key={copy} aria-hidden={copy > 0 ? true : undefined}>
              {selectedWork.map((work) => (
                <article className="selected-work-card" key={work.slug}>
                  <a href={work.url} target="_blank" rel="noopener noreferrer" tabIndex={copy > 0 ? -1 : 0} aria-label={`Watch ${work.client}: ${work.title} on Frame.io`}>
                    <div className="selected-work-video">
                      <video src={`/video-asset/selected/${work.slug}.mp4`} poster={`/video-asset/selected/${work.slug}.jpg`} muted loop playsInline preload="none" aria-hidden="true" />
                      <span className="selected-work-client">{work.client}</span>
                      <span className="selected-work-watch">Watch full video <ArrowUpRight size={16} aria-hidden="true" /></span>
                    </div>
                    <h3>{work.title}</h3>
                    <p>{work.detail}</p>
                  </a>
                </article>
              ))}
            </div>
          ))}
        </div>
        <p className="selected-work-hint">Scroll to explore. Select a video to watch with sound.</p>
      </div>
    </section>
  );
};
