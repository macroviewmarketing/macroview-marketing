import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import {
  BOOKING_EMAIL,
  BOOK_CALL_URL,
  BRAND_NAME,
  BUSINESS_ADDRESS,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/data/config";
import { IconWhatsApp } from "@/components/shared/SocialIcons";
import { Wordmark } from "@/components/Wordmark";

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer funnel-footer">
      <div className="funnel-wrap">
        <div className="funnel-footer-row">
          <Link to="/" aria-label={`${BRAND_NAME} home`}>
            <Wordmark />
          </Link>

          <nav className="funnel-footer-nav" aria-label="Footer">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms-and-conditions">Terms</Link>
            <Link to="/refund-policy">Refunds</Link>
            <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer">Book a Call</a>
          </nav>

          <div className="funnel-footer-socials">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Message us on WhatsApp">
              <IconWhatsApp />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label={`${BRAND_NAME} on Instagram`}>
              <Instagram aria-hidden />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label={`${BRAND_NAME} on LinkedIn`}>
              <IconLinkedIn />
            </a>
          </div>
        </div>

        <div className="funnel-footer-base">
          <span>© {year} {BRAND_NAME}. All rights reserved.</span>
          <span>
            <a href={`mailto:${BOOKING_EMAIL}`}>{BOOKING_EMAIL}</a>
            {" · "}
            <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          </span>
        </div>
        <p className="mt-3 text-center text-[11px] leading-relaxed text-[var(--f-dim)] sm:text-left">{BUSINESS_ADDRESS}</p>
      </div>
    </footer>
  );
};
