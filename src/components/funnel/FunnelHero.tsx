import { Play } from "lucide-react";
import { HERO } from "@/data/funnel";
import { BookCallButton } from "./BookCallButton";
import { PlaceholderTag } from "./SectionIntro";

const HeroVideo = () =>
  HERO.videoPath ? (
    <video
      className="h-full w-full object-cover"
      src={HERO.videoPath}
      poster={HERO.videoPoster ?? undefined}
      controls
      playsInline
      preload="metadata"
    />
  ) : (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4" data-placeholder="hero-video">
      <span className="funnel-unmute">
        <span className="funnel-unmute-icon">
          <Play aria-hidden className="h-5 w-5 translate-x-0.5" fill="currentColor" />
        </span>
        <span>
          <strong>Watch the intro</strong>
          <small>Video coming soon</small>
        </span>
      </span>
      <PlaceholderTag>Placeholder</PlaceholderTag>
    </div>
  );

export const FunnelHero = () => (
  <section id="hero" className="funnel-hero">
    <div className="funnel-wrap">
      <h1 className="funnel-h1">
        <span className="funnel-h1-line">{HERO.headlineLine1} </span>
        <span className="funnel-h1-line">
          {HERO.headlineLine2} <span className="funnel-accent">{HERO.headlineAccent}</span>
        </span>
      </h1>

      <div className="funnel-video">
        <HeroVideo />
      </div>

      <BookCallButton label="Book a Strategy Call" />
    </div>
  </section>
);
