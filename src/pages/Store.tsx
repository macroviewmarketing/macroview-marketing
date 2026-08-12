import { Link } from "react-router-dom";
import { GrainOverlay } from "@/components/GrainOverlay";
import { Footer } from "@/components/Footer";
import { Tag } from "@/components/shared/Tag";
import { GMAIL_COMPOSE_URL } from "@/data/config";
import { products, type Product } from "@/data/products";

const ProductCard = ({ p }: { p: Product }) => {
  const isFree = p.price === "Free";
  const href = isFree ? p.downloadUrl : p.storeUrl;

  return (
    <article className="surface-card glass-panel stagger-child" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
        <span
          className="font-mono"
          style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--blue)" }}
        >
          {p.category}
        </span>
        {isFree && (
          <span
            className="font-mono"
            style={{
              fontSize: "9px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--cyan)",
              border: "1px solid rgba(0, 212, 255, 0.3)",
              borderRadius: "2px",
              padding: "2px 8px",
            }}
          >
            Free
          </span>
        )}
      </div>

      <h3 className="font-display" style={{ fontSize: "24px", color: "var(--white-c)", letterSpacing: "0.03em" }}>
        {p.name}
      </h3>

      <p className="body-m" style={{ flex: 1 }}>{p.description}</p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
        {!isFree && (
          <span className="font-display" style={{ fontSize: "22px", color: "var(--white-c)" }}>
            ${p.price}
          </span>
        )}
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginLeft: "auto" }}>
            {isFree ? "Download" : "Buy Now"}
          </a>
        ) : (
          <span
            className="btn btn-outline"
            aria-disabled="true"
            style={{ marginLeft: "auto", opacity: 0.5, cursor: "not-allowed" }}
          >
            Coming Soon
          </span>
        )}
      </div>
    </article>
  );
};

const Store = () => (
  <>
    <GrainOverlay />
    <nav className="navbar scrolled" aria-label="Store navigation">
      <Link to="/" className="nav-logo">
        <img src="/Macroview%20-%20Logo.svg" alt="" aria-hidden className="nav-logo-mark" />
        <span>MACRO<span className="accent">VIEW</span></span>
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Back to site</Link>
      </div>
      <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: "10px" }}>
        Book a Call
      </a>
    </nav>

    <main style={{ paddingTop: "132px", background: "var(--black)", minHeight: "100dvh" }}>
      <div className="container-edge section-pad">
        <header style={{ textAlign: "center", marginBottom: "56px" }}>
          <Tag>The Store</Tag>
          <h1 className="display-m" style={{ color: "var(--white-c)", marginTop: "28px" }}>
            PRESETS BUILT<br />
            <span style={{ color: "var(--blue)" }}>FOR THE EDIT.</span>
          </h1>
          <p className="body-l" style={{ maxWidth: "56ch", margin: "24px auto 0" }}>
            Premiere Pro, After Effects, and caption presets pulled straight from our own
            production pipeline — including a few free ones to try first.
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </main>

    <Footer />
  </>
);

export default Store;
