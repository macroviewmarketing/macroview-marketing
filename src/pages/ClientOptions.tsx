import { useEffect } from "react";
import Index from "./Index";
import { OffersSection } from "@/components/funnel/OffersSection";

export default function ClientOptions() {
  useEffect(() => {
    const existing = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const tag = existing ?? document.createElement("meta");
    tag.name = "robots";
    tag.content = "noindex, nofollow, noarchive";
    if (!existing) document.head.appendChild(tag);
    const previousTitle = document.title;
    document.title = "Macroview | Client Options";
    return () => {
      tag.remove();
      document.title = previousTitle;
    };
  }, []);
  return <Index pricingContent={<OffersSection />} />;
}
