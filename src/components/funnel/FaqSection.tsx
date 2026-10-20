import { Plus } from "lucide-react";
import { faqs } from "@/data/faqs";
import { SectionIntro } from "./SectionIntro";

export const FaqSection = () => {
  const half = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, half), faqs.slice(half)];

  return (
    <section id="faq" className="funnel-section funnel-section-alt border-t border-[var(--f-border)]">
      <div className="funnel-wrap">
        <SectionIntro eyebrow="Common Questions" title="Questions? We've got you covered." />
        <div className="funnel-faq-list">
          {columns.map((col, i) => (
            <div key={i} className="funnel-faq-col">
              {col.map((f) => (
                <details key={f.id} className="funnel-faq">
                  <summary>
                    <span>{f.question}</span>
                    <Plus aria-hidden className="funnel-faq-icon h-[18px] w-[18px] shrink-0" />
                  </summary>
                  <p>{f.answer}</p>
                </details>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
