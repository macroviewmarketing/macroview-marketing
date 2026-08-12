import { Star } from "lucide-react";
import { Tag } from "@/components/shared/Tag";

export const ReviewsSection = () => (
  <section id="reviews" style={{ background: "var(--deep)" }}>
    <div className="container-edge section-pad">
      <header className="snap-content" style={{ textAlign: "center", marginBottom: "48px" }}>
        <Tag>Reviews</Tag>
        <h2 className="display-m" style={{ color: "var(--white-c)", marginTop: "28px" }}>
          DON'T JUST TAKE<br />
          <span style={{ color: "var(--blue)" }}>OUR WORD FOR IT.</span>
        </h2>
      </header>

      <div
        className="surface-card glass-panel snap-content"
        style={{
          maxWidth: "480px",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <span
          className="font-display"
          style={{ fontSize: "22px", color: "var(--white-c)", letterSpacing: "0.06em" }}
        >
          Trustpilot Reviews
        </span>
        <div style={{ display: "flex", gap: "6px" }} aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={20} color="var(--border-glow)" />
          ))}
        </div>
        <p className="body-s" style={{ color: "var(--dim)", margin: 0 }}>
          Reviews coming soon — this panel will embed our live Trustpilot rating once the profile
          is set up.
        </p>
        <span
          className="btn btn-outline"
          aria-disabled="true"
          style={{ opacity: 0.5, cursor: "not-allowed" }}
        >
          View on Trustpilot
        </span>
      </div>
    </div>
  </section>
);
