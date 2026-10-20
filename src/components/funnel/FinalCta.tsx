import { Instagram } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/data/config";
import { IconWhatsApp } from "@/components/shared/SocialIcons";
import { BookCallButton } from "./BookCallButton";

export const FinalCta = () => (
  <section id="book" className="funnel-section funnel-glow-top text-center">
    <div className="mx-auto max-w-3xl px-4 md:px-6">
      <h2 className="funnel-h2 !text-[clamp(34px,6vw,60px)]">
        Stop posting content that doesn't convert. <span className="funnel-accent block">Book a call today.</span>
      </h2>
      <BookCallButton className="mt-10" />

      <p className="mt-10 text-sm text-[var(--dim)]">Prefer to message us first?</p>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="funnel-btn funnel-btn-outline">
          <IconWhatsApp />
          WhatsApp
        </a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="funnel-btn funnel-btn-outline">
          <Instagram aria-hidden />
          Instagram
        </a>
      </div>
    </div>
  </section>
);
