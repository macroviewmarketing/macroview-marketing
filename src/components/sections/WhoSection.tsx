import { Play } from "lucide-react";
import { Tag } from "@/components/shared/Tag";
import { testimonials, type Testimonial } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const TYPES = [
  { sticker: "/coach-sticker.svg",              label: "Coaches" },
  { sticker: "/educator-sticker.svg",           label: "Educators" },
  { sticker: "/lifestyle-creators-sticker.svg", label: "Lifestyle Creators" },
  { sticker: "/podcast-sticker.svg",            label: "Podcasters" },
];

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
      <div className="testimonial-video-frame testimonial-video-placeholder">
        <span className="glass-icon-chip" style={{ width: "56px", height: "56px" }}>
          <Play fill="currentColor" style={{ marginLeft: "2px" }} />
        </span>
        <span className="micro-mono">Video coming soon</span>
      </div>
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
    <img
      src="/blue-glow.png"
      alt=""
      aria-hidden
      className="who-bg-glow"
    />
    <div className="container-edge section-pad" style={{ position: "relative", zIndex: 1 }}>
      <header className="snap-content" style={{ textAlign: "center", marginBottom: "64px" }}>
        <Tag>Client Results</Tag>
        <h2 className="display-m" style={{ color: "var(--white-c)", marginTop: "28px" }}>
          TRUSTED BY<br />
          HIGH-TICKET<br />
          <span style={{ color: "var(--blue)" }}>COACHES.</span>
        </h2>
      </header>

      <Carousel opts={{ align: "start", loop: true }} className="snap-content" style={{ marginBottom: "72px" }}>
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

      <span
        className="section-label"
        style={{ display: "flex", justifyContent: "center", marginBottom: "28px" }}
      >
        Who We Work With
      </span>
      <div className="who-grid">
        {TYPES.map((t) => (
          <div key={t.label} className="who-card glass-panel stagger-child">
            <img src={t.sticker} alt="" aria-hidden className="who-sticker" />
            <span
              className="font-display"
              style={{ fontSize: "24px", color: "var(--white-c)", letterSpacing: "0.04em" }}
            >
              {t.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
