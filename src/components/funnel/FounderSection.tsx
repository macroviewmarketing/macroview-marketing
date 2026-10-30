import { ArrowUpRight } from "lucide-react";

export const FounderSection = () => (
  <section id="founder" className="funnel-section founder-section border-t border-[var(--f-border)]" aria-labelledby="founder-title">
    <div className="funnel-wrap founder-layout">
      <figure className="founder-portrait">
        <img src="/images/marc-founder.jpg" alt="Marc, founder of Macroview, seated in a cinema" width="900" height="1200" loading="lazy" />
        <figcaption>Marc Marcelino <span>Founder, Macroview</span></figcaption>
      </figure>
      <div className="founder-story">
        <p className="funnel-eyebrow">Meet the person behind Macroview</p>
        <h2 id="founder-title" className="funnel-title">A filmmaker’s eye.<br />A purpose for every frame.</h2>
        <p className="founder-lead">I’m Marc, a video editor, colorist and filmmaker based in the Philippines. I run Macroview.</p>
        <p>My work spans film and the everyday content that helps a business show up online. Across both, I pay attention to the same things: the story, the pacing, and what the viewer takes away.</p>
        <p>At Macroview, I bring that approach to content for coaches, educators and business owners. From an educational reel to an ad, the goal is to make your expertise clear and give your message room to connect.</p>
        <p>That means thinking beyond the edit: shaping the idea, planning what to record, and bringing the visuals and sound together into something that feels like you.</p>
        <a className="funnel-btn founder-cta" href="https://calendly.com/macroviewmarketing/30min" target="_blank" rel="noopener noreferrer">Let’s talk about your content <ArrowUpRight size={18} aria-hidden="true" /></a>
      </div>
    </div>
  </section>
);
