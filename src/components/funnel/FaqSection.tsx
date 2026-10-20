import { Plus } from "lucide-react";
import { faqs } from "@/data/faqs";
import { SectionIntro } from "./SectionIntro";

export const FaqSection = () => {
  const half = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, half), faqs.slice(half)];

  return (
    <section id="faq" className="funnel-section border-t border-[var(--border-c)] bg-[var(--deep)]">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <SectionIntro eyebrow="Common Questions" title="Questions? We've got you covered." />
        <div className="grid gap-x-10 md:grid-cols-2">
          {columns.map((col, i) => (
            <div key={i}>
              {col.map((f) => (
                <details key={f.id} className="funnel-faq">
                  <summary>
                    <span>{f.question}</span>
                    <Plus aria-hidden className="funnel-faq-icon h-4 w-4 shrink-0" />
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
