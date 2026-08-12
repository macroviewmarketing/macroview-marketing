import { Instagram } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/data/config";

export const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.47 14.38c-.29-.15-1.71-.85-1.98-.94-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.5.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.91-2.18-.24-.57-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.03c.15.2 2.06 3.15 5 4.42.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.71-.7 1.96-1.38.24-.67.24-1.25.17-1.38-.07-.12-.27-.2-.56-.34z" />
    <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.08L2 22l5.05-1.33A9.96 9.96 0 0 0 12.02 22C17.55 22 22 17.52 22 12S17.55 2 12.02 2zm0 18.13c-1.65 0-3.19-.46-4.5-1.26l-.32-.19-3 .79.8-2.93-.21-.3A8.09 8.09 0 0 1 3.9 12c0-4.48 3.65-8.13 8.12-8.13S20.14 7.52 20.14 12s-3.65 8.13-8.12 8.13z" />
  </svg>
);

export const SocialIcons = ({ className = "" }: { className?: string }) => (
  <div className={`social-icons ${className}`}>
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon-link"
      aria-label="Message us on WhatsApp"
    >
      <IconWhatsApp />
    </a>
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon-link"
      aria-label="MacroView on Instagram"
    >
      <Instagram />
    </a>
  </div>
);

export const SocialCtaButtons = ({ className = "" }: { className?: string }) => (
  <div className={`social-cta-row ${className}`}>
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-social-large btn-whatsapp"
    >
      <IconWhatsApp />
      Message on WhatsApp
    </a>
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-social-large btn-instagram"
    >
      <Instagram />
      DM on Instagram
    </a>
  </div>
);
