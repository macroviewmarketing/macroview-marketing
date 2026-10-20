import { CLIENT_LOGOS, type ClientLogo } from "@/data/funnel";

const LogoPill = ({ logo }: { logo: ClientLogo }) => (
  <li className="funnel-logo-pill" data-placeholder={logo.placeholder ? "client-logo" : undefined}>
    {logo.logoPath ? (
      <img src={logo.logoPath} alt="" className="h-9 w-9 rounded-full object-cover" />
    ) : (
      <span className="funnel-logo-avatar" aria-hidden>
        {logo.name.charAt(0)}
      </span>
    )}
    <span className="text-left">
      <span className="block text-sm font-bold text-white">{logo.name}</span>
      <span className="block text-[11px] text-[var(--dim)]">{logo.detail}</span>
    </span>
  </li>
);

export const LogoMarquee = () => (
  <section aria-label="Clients" className="border-y border-[var(--border-c)] py-10">
    <p className="funnel-eyebrow text-center !text-[var(--dim)]">Trusted by coaches and brands</p>
    <div className="funnel-marquee mt-6">
      {/* The list is rendered twice so the loop scrolls seamlessly; the copy is hidden from screen readers. */}
      {[false, true].map((copy) => (
        <ul key={String(copy)} className="funnel-marquee-track" aria-hidden={copy || undefined}>
          {CLIENT_LOGOS.map((logo) => (
            <LogoPill key={logo.name} logo={logo} />
          ))}
        </ul>
      ))}
    </div>
  </section>
);
