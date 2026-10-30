import { BookCallButton } from "@/components/funnel/BookCallButton";
import { WHATSAPP_URL } from "@/data/config";
import { IconWhatsApp } from "@/components/shared/SocialIcons";
import { Wordmark } from "@/components/Wordmark";
import { scrollToSection } from "@/hooks/useScrollDots";

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar = ({ scrolled }: NavbarProps) => (
  <nav className={`funnel-nav${scrolled ? " scrolled" : ""}`} aria-label="Primary">
    <div className="funnel-wrap funnel-nav-inner">
      <a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("hero");
        }}
      >
        <span className="funnel-brand"><img src="/brand/macroview.png" alt="" width="40" height="40" /><Wordmark /></span>
      </a>

      <div className="funnel-nav-actions"><a className="funnel-btn funnel-btn-sm funnel-btn-ghost whatsapp-contact" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><IconWhatsApp />Contact me on WhatsApp</a><BookCallButton size="sm" /></div>
    </div>
  </nav>
);
