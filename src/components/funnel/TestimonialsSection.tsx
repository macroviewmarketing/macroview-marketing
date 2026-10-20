import { Play } from "lucide-react";
import { VIDEO_TESTIMONIALS, type VideoTestimonial } from "@/data/funnel";
import { CtaRow } from "./BookCallButton";
import { PlaceholderTag, SectionIntro } from "./SectionIntro";

const TestimonialCard = ({ t }: { t: VideoTestimonial }) => (
  <figure className="funnel-tcard">
    <div className="funnel-tcard-media">
      {t.videoPath ? (
        <video src={t.videoPath} controls playsInline preload="metadata" />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4" data-placeholder="testimonial-video">
          <span className="funnel-play">
            <Play aria-hidden className="h-5 w-5 translate-x-0.5" fill="currentColor" />
          </span>
          <PlaceholderTag>Video in edit</PlaceholderTag>
        </div>
      )}
      <span className="funnel-badge">Video</span>
    </div>
    <figcaption className="funnel-tcard-info">
      <span className="funnel-tcard-name block">{t.name}</span>
      {t.result ? (
        <>
          <span className="funnel-tcard-value">{t.result}</span>
          <span className="funnel-tcard-label">{t.resultLabel ?? "Revenue growth"}</span>
        </>
      ) : (
        <>
          <span className="funnel-tcard-value pending">Result coming soon</span>
          <span className="funnel-tcard-label pending">Revenue growth</span>
        </>
      )}
    </figcaption>
  </figure>
);

export const TestimonialsSection = () => (
  <section id="testimonials" className="funnel-section border-t border-[var(--f-border)]">
    <div className="funnel-wrap">
      <SectionIntro
        eyebrow="In Their Words"
        title={
          <>
            <span className="funnel-accent block text-xl tracking-[0.2em]" aria-hidden>
              ★★★★★
            </span>
            Don't take our word for it.
          </>
        }
      />
    </div>
    <div className="funnel-testi-row">
      {VIDEO_TESTIMONIALS.map((t) => (
        <TestimonialCard key={t.id} t={t} />
      ))}
    </div>
    <div className="funnel-wrap">
      <CtaRow />
    </div>
  </section>
);
