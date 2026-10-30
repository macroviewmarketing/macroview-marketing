import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { SectionIntro } from "./SectionIntro";

import { workGroups, moreWork } from "@/data/selectedWork";

type WorkItem = (typeof workGroups)[number]["items"][number];
const WorkRail = ({ items, name }: { items: WorkItem[]; name: string }) => {
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
  }, [moving]);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const updateEdges = () => {
    const node = rail.current;
    if (node) {
      setAtStart(node.scrollLeft <= 1);
      setAtEnd(node.scrollLeft >= node.scrollWidth - node.clientWidth - 1);
    }
  };
  useEffect(() => {
    const node = rail.current;
    if (!node) return;
    const observer = new ResizeObserver(updateEdges);
    observer.observe(node);
    updateEdges();
    return () => observer.disconnect();
  }, []);

  const step = (direction: number) => {
    setPaused(true);
    const node = rail.current;
    if (node) {
      node.scrollBy({ left: direction * (node.querySelector("article")!.clientWidth + 24), behavior: reducedMotion ? "instant" : "smooth" });
    }
  };

  return (
    <div className="work-format">
      <div className="selected-work-toolbar">
        <h3 className="work-format-heading">{name}</h3>
        <div className="selected-work-controls" aria-label={`${name} controls`}>
          <button type="button" disabled={atStart} aria-label={`Previous ${name} video`} onClick={() => step(-1)}><ArrowLeft size={18} /></button>
          <button type="button" aria-label={paused ? `Resume ${name} previews` : `Pause ${name} previews`} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? <Play size={16} /> : <Pause size={16} />}</button>
          <button type="button" disabled={atEnd} aria-label={`Next ${name} video`} onClick={() => step(1)}><ArrowRight size={18} /></button>
        </div>
      </div>
      <div ref={rail} onScroll={updateEdges} className="selected-work-rail" role="region" aria-label={`${name} examples`} tabIndex={0}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
        onPointerDown={() => setPaused(true)} onWheel={() => setPaused(true)}
        onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); step(event.key === "ArrowRight" ? 1 : -1); } }}>
        <div className="selected-work-group">
            {items.map((work) => (
              <article className="selected-work-card" key={work.slug}>
                <a href={work.url} target="_blank" rel="noopener noreferrer"  aria-label={`Watch ${work.client}: ${work.title} on Frame.io`}>
                  <div className="selected-work-video">
                    {work.hasPreview ? <video src={`/video-asset/selected/${work.slug}.mp4`} poster={`/video-asset/selected/${work.slug}.jpg`} muted loop playsInline preload="none" aria-hidden="true" /> : <div className="work-link-preview"><Play size={36} aria-hidden="true" /><span>{work.title}</span><small>Watch on Frame.io</small></div>}
                    <span className="selected-work-client">{work.client}</span>
                    <span className="selected-work-watch">Watch full video <ArrowUpRight size={16} aria-hidden="true" /></span>
                  </div>
                  <h4>{work.title}</h4>
                </a>
                {work.handle && <a className="work-instagram" href={`https://www.instagram.com/${work.handle}/`} target="_blank" rel="noopener noreferrer" >@{work.handle}</a>}
              </article>
            ))}
          </div>
      </div>
    </div>
  );
};

export const WorkSection = () => {
  const [active, setActive] = useState(workGroups[0].name);
  const group = workGroups.find(item => item.name === active)!;
  return (
  <section id="work" className="funnel-section border-t border-[var(--f-border)]">
    <div className="funnel-wrap">
      <SectionIntro eyebrow="Selected Work" title={<>Different voices.<br />Formats that connect.</>}>
        Choose a format and scroll through the examples.
      </SectionIntro>
      <div className="complete-portfolio-cta">
        <a className="funnel-btn" href="https://f.io/cwqeAn15" target="_blank" rel="noopener noreferrer">Explore the complete portfolio <ArrowUpRight size={22} aria-hidden="true" /></a>
      </div>
      <div className="work-format-selector" role="group" aria-label="Video formats">
        {workGroups.map(item => <button key={item.name} type="button" aria-pressed={active === item.name} onClick={() => setActive(item.name)}>{item.name}</button>)}
      </div>
      <WorkRail key={group.name} name={group.name} items={group.items} />
      <p className="selected-work-hint">Scroll to explore. Select a video to watch with sound.</p>
      {moreWork.length > 0 && <details className="more-work">
        <summary>More client work</summary>
        <div className="more-work-grid">{moreWork.map(work => <a key={work.url} href={work.url} target="_blank" rel="noopener noreferrer"><strong>{work.client === "Unsorted" ? "More formats" : work.client}</strong><span>{work.title}</span><ArrowUpRight size={16} aria-hidden="true" /></a>)}</div>
      </details>}
    </div>
  </section>
);
};
