import { ENGINE_STEPS } from "@/data/funnel";
import { BRAND_NAME } from "@/data/config";
import { CtaRow } from "./BookCallButton";
import { SectionIntro } from "./SectionIntro";

export const EngineSection = () => (
  <section id="engine" className="funnel-section funnel-glow-top border-t border-[var(--f-border)]">
    <div className="funnel-wrap">
      <SectionIntro
        eyebrow="The Mechanism"
        title={
          <>
            Meet the <span className="funnel-accent">{BRAND_NAME} Engine.</span>
          </>
        }
      >
        A clear handoff from your expertise to finished content, with a review cycle that informs the next batch.
      </SectionIntro>

      <ol className="funnel-steps">
        {ENGINE_STEPS.map((step, i) => (
          <li key={step.title} className="funnel-step">
            <span className="funnel-step-mark" aria-hidden>
              <span className="funnel-step-num">{i + 1}</span>
            </span>
            <div className="funnel-step-body">
              <h3 className="funnel-step-title">{step.title}</h3>
              <p className="funnel-step-text">{step.body}</p>
              <p className="funnel-step-tags">{step.tags.join(" · ")}</p>
            </div>
          </li>
        ))}
      </ol>

      <CtaRow />
    </div>
  </section>
);
