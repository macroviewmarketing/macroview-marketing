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
        <h2 id="founder-title" className="funnel-title">Understand the buyer.<br />Create with intent.</h2>
        <p className="founder-lead">I’m Marc, founder of Macroview and a creative director focused on content that helps people take the next step.</p>
        <p>I started editing in my first year of college, four years ago. Macroview grew alongside that work into a collective of creators and editors, sharing what we learn about craft, content and marketing.</p>
        <p>Three years editing e-commerce and direct-response ads with DOBO shaped how I think about creative. Today, that work includes creative direction for coaching businesses, including Mehdi Syed, alongside ads, reels and sales videos.</p>
        <p>I start with the buyer: who they are, what they want, what is holding them back, and where they are in the decision. The hook, story and offer should speak to that moment, whether someone is discovering you or deciding to work with you.</p>
        <p>That is what I bring to Macroview: an understanding of your audience and their buying journey, translated into content with a clear message and a reason to act.</p>
        <a className="funnel-btn founder-cta" href="https://calendly.com/macroviewmarketing/30min" target="_blank" rel="noopener noreferrer">Let’s talk about your content <ArrowUpRight size={18} aria-hidden="true" /></a>
      </div>
    </div>
  </section>
);
