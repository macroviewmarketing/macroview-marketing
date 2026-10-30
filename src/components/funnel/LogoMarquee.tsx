import { CLIENT_LOGOS, type ClientLogo } from "@/data/funnel";

const Chip = ({ logo, copy }: { logo: ClientLogo; copy: boolean }) => (
  <li className="funnel-chip" data-placeholder={logo.placeholder ? "client-logo" : undefined}>
    <a className="client-profile-link" href={`https://www.instagram.com/${logo.handle}/`} target="_blank" rel="noopener noreferrer" tabIndex={copy ? -1 : 0}>
    {logo.logoPath ? (
      <span className="funnel-client-portrait"><img src={logo.logoPath} alt="" loading="lazy" /></span>
    ) : (
      <span className="funnel-chip-avatar" aria-hidden>
        {logo.name.charAt(0)}
      </span>
    )}
    <span>
      <span className="funnel-chip-name">{logo.name}</span>
      <span className="funnel-chip-detail">@{logo.handle}</span>
    </span>
    </a>
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
            <Chip key={logo.name} logo={logo} copy={copy} />
          ))}
        </ul>
      ))}
    </div>
  </section>
);
