import { Tag } from "@/components/shared/Tag";
import { testimonials } from "@/data/testimonials";
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
        <Tag>Who We Work With</Tag>
        <h2 className="display-m" style={{ color: "var(--white-c)", marginTop: "28px" }}>
          BUILT FOR<br />
          CREATORS<br />
          <span style={{ color: "var(--blue)" }}>LIKE YOU.</span>
        </h2>
      </header>

      <div className="who-grid" style={{ marginBottom: "64px" }}>
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

      <Carousel opts={{ align: "start", loop: true }} className="snap-content">
        <CarouselContent>
          {testimonials.map((t) => (
            <CarouselItem key={t.id} style={{ flexBasis: "min(420px, 100%)" }}>
              <figure
                className="surface-card glass-panel"
                style={{ display: "flex", flexDirection: "column", gap: "20px", margin: 0, height: "100%" }}
              >
                <span
                  className="font-display"
                  aria-hidden
                  style={{
                    fontSize: "80px",
                    color: "var(--blue)",
                    lineHeight: 0.7,
                    opacity: 0.6,
                  }}
                >
                  “
                </span>
                <blockquote className="body-l" style={{ margin: 0, color: "var(--text)" }}>
                  {t.quote}
                </blockquote>
                <figcaption
                  className="font-mono"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--dim)",
                  }}
                >
                  {t.author} · {t.role}
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="social-icon-link" />
        <CarouselNext className="social-icon-link" />
      </Carousel>
    </div>
  </section>
);
