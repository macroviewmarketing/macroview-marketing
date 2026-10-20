import { Play } from "lucide-react";
import { VIDEO_TESTIMONIALS, type VideoTestimonial } from "@/data/funnel";
import { BookCallButton } from "./BookCallButton";
import { PlaceholderTag, SectionIntro } from "./SectionIntro";

const TestimonialCard = ({ t }: { t: VideoTestimonial }) => (
  <figure className="funnel-card funnel-testimonial m-0 overflow-hidden">
    <div className="relative aspect-[9/16] bg-[var(--surface)]">
      {t.videoPath ? (
        <video className="h-full w-full object-cover" src={t.videoPath} controls playsInline preload="metadata" />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4" data-placeholder="testimonial-video">
          <span className="funnel-play">
            <Play aria-hidden className="h-5 w-5 translate-x-0.5" fill="currentColor" />
          </span>
          <PlaceholderTag>Video in edit</PlaceholderTag>
        </div>
      )}
      <span className="funnel-video-badge">Video</span>
    </div>
    <figcaption className="p-4">
      <span className="block font-bold text-white">{t.name}</span>
      {t.result && <span className="funnel-accent mt-1 block text-lg font-extrabold">{t.result}</span>}
    </figcaption>
  </figure>
);

export const TestimonialsSection = () => (
  <section id="testimonials" className="funnel-section border-t border-[var(--border-c)]">
    <div className="mx-auto max-w-5xl px-4 md:px-6">
      <SectionIntro eyebrow="In Their Words" title="Don't take our word for it." />
      <div className="funnel-scroll-row">
        {VIDEO_TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.id} t={t} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <BookCallButton />
      </div>
    </div>
  </section>
);
