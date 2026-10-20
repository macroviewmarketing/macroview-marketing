import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { GrainOverlay } from "@/components/GrainOverlay";
import { Footer } from "@/components/Footer";
import { Wordmark } from "@/components/Wordmark";
import { BOOK_CALL_URL } from "@/data/config";

interface LegalLayoutProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export const LegalLayout = ({ title, updated, children }: LegalLayoutProps) => (
  <>
    <GrainOverlay />
    <nav className="navbar scrolled" aria-label="Legal navigation">
      <Link to="/" className="nav-logo">
        <Wordmark />
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Back to site</Link>
      </div>
      <a
        href={BOOK_CALL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
        style={{ padding: "10px 20px", fontSize: "10px" }}
      >
        Book a Call
      </a>
    </nav>

    <main style={{ paddingTop: "132px", background: "var(--black)", minHeight: "100dvh" }}>
      <div className="container-edge section-pad" style={{ maxWidth: "760px", margin: "0 auto" }}>
        <header style={{ marginBottom: "48px" }}>
          <span className="font-mono label-mono">Legal</span>
          <h1 className="display-m" style={{ color: "var(--white-c)", marginTop: "12px", fontSize: "clamp(32px, 5vw, 48px)" }}>
            {title}
          </h1>
          <p className="font-mono label-mono" style={{ marginTop: "12px" }}>
            Last updated: {updated}
          </p>
        </header>

        <div className="legal-body">{children}</div>
      </div>
    </main>

    <Footer />
  </>
);
