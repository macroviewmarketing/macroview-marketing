import { CLIENT_LOGOS, type ClientLogo } from "@/data/funnel";

const Chip = ({ logo }: { logo: ClientLogo }) => (
  <li className="funnel-chip" data-placeholder={logo.placeholder ? "client-logo" : undefined}>
    {logo.logoPath ? (
      <img src={logo.logoPath} alt="" className="h-12 w-12 shrink-0 rounded-full object-cover" />
    ) : (
      <span className="funnel-chip-avatar" aria-hidden>
        {logo.name.charAt(0)}
      </span>
    )}
    <span>
      <span className="funnel-chip-name">{logo.name}</span>
      <span className="funnel-chip-detail">{logo.detail}</span>
    </span>
  </li>
);

export const LogoMarquee = () => (
  <section aria-label="Clients" className="funnel-trust">
    <p className="funnel-trust-label">Trusted by coaches, creators &amp; brands</p>
    <div className="funnel-marquee">
      {/* The list is rendered twice so the loop scrolls seamlessly; the copy is hidden from screen readers. */}
      {[false, true].map((copy) => (
        <ul key={String(copy)} className="funnel-marquee-track" aria-hidden={copy || undefined}>
          {CLIENT_LOGOS.map((logo) => (
            <Chip key={logo.name} logo={logo} />
          ))}
        </ul>
      ))}
    </div>
  </section>
);
