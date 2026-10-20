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
      <span className="funnel-play">
        <Play aria-hidden className="h-6 w-6 translate-x-0.5" fill="currentColor" />
      </span>
      <PlaceholderTag>Intro video coming soon</PlaceholderTag>
    </div>
  );

export const FunnelHero = () => (
  <section id="hero" className="funnel-section funnel-glow-top !pt-32 md:!pt-28">
    <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
      <h1 className="funnel-h1">
        {HERO.headlineLead} <span className="funnel-accent">{HERO.headlineAccent}</span>
      </h1>
      <p className="funnel-lead mx-auto mt-5 max-w-xl">{HERO.sub}</p>

      <div className="funnel-card funnel-video mx-auto mt-8 aspect-video w-full max-w-[720px] overflow-hidden">
        <HeroVideo />
      </div>

      <BookCallButton label="Watch the video, then book a call" className="mt-8" />
    </div>
  </section>
);
