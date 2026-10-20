import { ENGINE_STEPS } from "@/data/funnel";
import { BRAND_NAME } from "@/data/config";
import { BookCallButton } from "./BookCallButton";
import { SectionIntro } from "./SectionIntro";

export const EngineSection = () => (
  <section id="engine" className="funnel-section funnel-glow-top">
    <div className="mx-auto max-w-4xl px-4 md:px-6">
      <SectionIntro
        eyebrow="The Mechanism"
        title={
          <>
            Meet the <span className="funnel-accent">{BRAND_NAME} Engine.</span>
          </>
        }
      >
        We find where your content stops turning into revenue, then build the four pieces that fix it.
      </SectionIntro>

      <ol className="funnel-steps">
        {ENGINE_STEPS.map((step, i) => (
          <li key={step.title} className={`funnel-step${i % 2 ? " funnel-step-flip" : ""}`}>
            <span className="funnel-step-num" aria-hidden>
              {i + 1}
            </span>
            <div className="funnel-step-body">
              <h3 className="funnel-h3">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--text)]">{step.body}</p>
              <p className="funnel-step-tags mt-3">{step.tags.join(" · ")}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12 text-center">
        <BookCallButton />
      </div>
    </div>
  </section>
);
