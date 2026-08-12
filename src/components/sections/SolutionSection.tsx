import { Tag } from "@/components/shared/Tag";
import {
  IconAdCreative,
  IconLongForm,
  IconShortForm,
  IconGhlAutomation,
  IconMakeAutomation,
  IconThumbnail,
  IconBrand,
} from "@/components/icons/ServiceIcons";

const SERVICES = [
  { num: "01", Icon: IconAdCreative,      title: "Ads",               desc: "Direct-response ad creative built to move cold traffic through your low-ticket to high-ticket funnel." },
  { num: "02", Icon: IconLongForm,        title: "Long Form",         desc: "Podcasts, YouTube, and webinars edited to build authority with buyers — not just watch time." },
  { num: "03", Icon: IconShortForm,       title: "Short Form",        desc: "Reels, Shorts, TikTok engineered to feed your funnel, not farm vanity likes." },
  { num: "04", Icon: IconGhlAutomation,   title: "GHL Automations",   desc: "GoHighLevel pipelines, follow-ups, and funnel logic built so no lead slips through." },
  { num: "05", Icon: IconMakeAutomation,  title: "Make Automations",  desc: "Backend workflows connecting your funnel, CRM, and content pipeline — no manual busywork." },
  { num: "06", Icon: IconThumbnail,       title: "Thumbnails",        desc: "Click-worthy visual identity for every upload, every channel." },
  { num: "07", Icon: IconBrand,           title: "Content Strategy",  desc: "Scripting, hook engineering, and a calendar built around your offer — not vanity metrics." },
];

export const SolutionSection = () => (
  <section id="solution" style={{ background: "var(--black)" }}>
    <img
      src="/Macroview%20-%20Logo.svg"
      alt=""
      aria-hidden
      className="solution-bg-mark"
    />
    <div className="container-edge section-pad" style={{ position: "relative", zIndex: 1 }}>
      <header className="snap-content" style={{ textAlign: "center", marginBottom: "64px" }}>
        <Tag>The System</Tag>
        <h2 className="display-m" style={{ color: "var(--white-c)", marginTop: "28px" }}>
          THE MVD<br />
          PRODUCTION<br />
          <span style={{ color: "var(--blue)" }}>ENGINE.</span>
        </h2>
      </header>

      <div className="service-grid">
        {SERVICES.map((s) => (
          <article key={s.num} className="service-card glass-panel stagger-child">
            <span className="num">{s.num}</span>
            <span className="icon glass-icon-chip"><s.Icon /></span>
            <h3 className="title">{s.title}</h3>
            <p className="desc">{s.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
