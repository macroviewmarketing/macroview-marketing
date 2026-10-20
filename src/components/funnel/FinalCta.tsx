import { BookCallButton } from "./BookCallButton";

export const FinalCta = () => (
  <section id="book" className="funnel-section funnel-glow-top text-center">
    <div className="mx-auto max-w-3xl px-4 md:px-6">
      <h2 className="funnel-h2 !text-[clamp(34px,6vw,60px)]">
        Stop posting content that doesn't convert. <span className="funnel-accent block">Book a call today.</span>
      </h2>
      <BookCallButton className="mt-10" />
    </div>
  </section>
);
