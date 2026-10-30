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
        <h2 id="founder-title" className="funnel-title">Creative shaped<br />by sales.</h2>
        <p className="founder-lead">I’m Marc, founder of Macroview. I bring editing, creative direction and an understanding of sales together to create content with a reason to convert.</p>
        <p>I started editing four years ago. What began with shaping footage grew into a deeper interest in what makes someone pay attention, trust a business and decide to buy. Macroview grew from that curiosity into a collective of creators and editors.</p>
        <p>Over those four years, I’ve worked across e-commerce and high-ticket coaching, including coaches reporting $10K to $100K in monthly business revenue. Creating VSLs, sales videos and ads taught me to think about the whole sales ecosystem: how the content, the offer and the buying journey connect.</p>
        <p>That starts with the buyer: who the offer is for, what they want, the problems they need solved, and what they need to believe before buying. The message should meet them where they are, from first discovering you to considering your offer and deciding to act.</p>
        <p>That mix is my unfair advantage. I bring the visual craft, the creative direction and the sales thinking together, so the hook, story, proof and call to action work toward the same goal.</p>
        <a className="funnel-btn founder-cta" href="https://calendly.com/macroviewmarketing/30min" target="_blank" rel="noopener noreferrer">Let’s talk about your content <ArrowUpRight size={18} aria-hidden="true" /></a>
      </div>
    </div>
  </section>
);
