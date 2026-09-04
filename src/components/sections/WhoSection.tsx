import { Quote } from "lucide-react";
import { Tag } from "@/components/shared/Tag";
import { testimonials, type Testimonial } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const VideoTestimonialCard = ({ t }: { t: Testimonial }) => (
  <figure
    className="surface-card glass-panel"
    style={{ display: "flex", flexDirection: "column", gap: "16px", margin: 0, height: "100%", padding: "16px" }}
  >
    {t.videoPath ? (
      <video
        className="testimonial-video-frame"
        src={t.videoPath}
        controls
        playsInline
        preload="metadata"
      />
    ) : (
      <span className="glass-icon-chip" style={{ width: "40px", height: "40px" }}>
        <Quote fill="currentColor" size={16} />
      </span>
    )}

    <blockquote className="body-m" style={{ margin: 0, color: "var(--text)" }}>
      {t.quote}
    </blockquote>
    <p
      className="font-mono"
      style={{ fontSize: "10.5px", letterSpacing: "0.04em", color: "var(--dim)", margin: 0, lineHeight: 1.5 }}
    >
      {t.helpedWith}
    </p>
    <figcaption
      className="font-mono"
      style={{
        fontSize: "10px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--dim)",
        marginTop: "auto",
      }}
    >
      {t.author} · {t.role}
    </figcaption>
  </figure>
);

export const WhoSection = () => (
  <section id="who" style={{ background: "var(--black)", overflow: "hidden" }}>
    <div aria-hidden className="who-bg-glow" />
    <div className="container-edge section-pad" style={{ position: "relative", zIndex: 1 }}>
      <header className="snap-content" style={{ textAlign: "center", marginBottom: "64px" }}>
        <Tag>Client Results</Tag>
        <h2 className="display-m" style={{ color: "var(--white-c)", marginTop: "28px" }}>
          TRUSTED BY<br />
          HIGH-TICKET<br />
          <span style={{ color: "var(--blue)" }}>COACHES.</span>
        </h2>
      </header>

      <Carousel opts={{ align: "start", loop: true }} className="snap-content">
        <CarouselContent>
          {testimonials.map((t) => (
            <CarouselItem key={t.id} style={{ flexBasis: "min(300px, 100%)" }}>
              <VideoTestimonialCard t={t} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="social-icon-link" />
        <CarouselNext className="social-icon-link" />
      </Carousel>
    </div>
  </section>
);
