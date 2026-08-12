import { GMAIL_COMPOSE_URL } from "@/data/config";
import { scrollToSection } from "@/hooks/useScrollDots";
import { Footer } from "@/components/Footer";
import { SocialIcons } from "@/components/shared/SocialIcons";

export const BookSection = () => (
  <section
    id="book"
    className="bg-radial-blue"
    style={{ background: "var(--black)" }}
  >
    <div
      className="container-edge"
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        className="snap-content"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "80px 0",
        }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: "11px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--dim)",
          }}
        >
          Start a project
        </span>

        <h2
          className="font-display"
          style={{
            fontSize: "clamp(48px, 8vw, 104px)",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            color: "var(--white-c)",
            margin: "32px 0 36px",
          }}
        >
          HAVE SOMETHING<br />
          WORTH MAKING?<br />
          <span style={{ color: "var(--blue)" }}>LET'S TALK.</span>
        </h2>

        <p
          className="body-l"
          style={{ maxWidth: "60ch", margin: "0 auto 40px" }}
        >
          Tell us what you are building, where you are stuck, and what a strong result looks like.
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={GMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book a Discovery Call
          </a>
          <a
            href="#portfolio"
            className="btn btn-outline"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("portfolio");
            }}
          >
            See Portfolio
          </a>
        </div>

        <div style={{ marginTop: "28px", display: "flex", justifyContent: "center" }}>
          <SocialIcons />
        </div>
      </div>
    </div>
    <Footer />
  </section>
);
