import { Instagram } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/data/config";
import { IconWhatsApp } from "@/components/shared/SocialIcons";
import { BookCallButton } from "./BookCallButton";

export const FinalCta = () => (
  <section id="book" className="funnel-final border-t border-[var(--f-border)]">
    <div className="funnel-wrap">
      <h2 className="funnel-final-title">
        Bring your expertise. We'll help shape the content. <span className="funnel-accent">Find your next step.</span>
      </h2>
      <p className="funnel-final-sub">
        A 30-minute call to look at your offer, your content and your funnel, and where we'd start.
      </p>
      <div className="funnel-cta-row !mt-0">
        <BookCallButton />
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="funnel-btn funnel-btn-ghost">
          <IconWhatsApp />
          Contact me on WhatsApp
        </a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="funnel-btn funnel-btn-ghost">
          <Instagram aria-hidden />
          Instagram
        </a>
      </div>
      <p className="funnel-final-foot">Prefer to message first? WhatsApp and Instagram DMs go straight to us.</p>
    </div>
  </section>
);
