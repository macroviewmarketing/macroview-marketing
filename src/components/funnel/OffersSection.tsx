import { useState } from "react";
import { ORGANIC_PACKAGES, ONE_OFFS, inquiryUrl } from "@/data/offers";
import { SectionIntro } from "./SectionIntro";
import { BookCallButton } from "./BookCallButton";

const money = (n: number) => `$${n.toLocaleString("en-US")}`;

export const OffersSection = () => {
  const [billing, setBilling] = useState<"monthly" | "upfront">("monthly");
  return (
  <>
    <section id="packages" className="funnel-section border-t border-[var(--f-border)]">
      <div className="funnel-wrap">
        <SectionIntro eyebrow="Organic content" title="Choose a rhythm you can sustain.">
          Three months to establish a workflow, learn from the response, and refine your content. All prices USD. Deliverable quantities below are monthly.
        </SectionIntro>
        <div className="offer-billing" role="group" aria-label="Payment schedule">
          <button type="button" aria-pressed={billing === "monthly"} onClick={() => setBilling("monthly")}>Monthly</button>
          <button type="button" aria-pressed={billing === "upfront"} onClick={() => setBilling("upfront")}>3-Month Retainer</button>
        </div>
        <p className="offer-billing-note">Both options cover a three-month commitment. Deliverables are per month.</p>
        <div className="offer-grid" aria-live="polite">
          {ORGANIC_PACKAGES.map((p) => (
            <article className={`offer-card${p.name === "Content Growth" ? " offer-featured" : ""}`} key={p.name}>
              <p className="funnel-eyebrow">{p.fit}</p>
              <h3>{p.name}</h3>
              <p className="offer-price">{money(billing === "monthly" ? p.monthly : p.upfront)} <small>{billing === "monthly" ? "per month · 3 monthly payments" : "for 3 months paid in full"}</small></p>
              <p className="offer-payment">{billing === "monthly" ? `${money(p.monthly * 3)} total over three months.` : `About ${money(Math.round(p.upfront / 3))}/month, paid upfront.`}</p>
              <p className="offer-saving">{billing === "monthly" ? `Or pay ${money(p.upfront)} upfront and save ${money(p.monthly * 3 - p.upfront)}.` : `Save ${money(p.monthly * 3 - p.upfront)} vs monthly installments.`}</p>
              <ul>
                <li><strong>{p.reels}</strong> original scripted and edited reels</li>
                <li><strong>{p.carousels}</strong> written and designed carousels</li>
                <li><strong>{p.variations}</strong> additional Trial Reels variations</li>
                <li><strong>{p.reels + p.carousels}</strong> original assets · <strong>{p.reels + p.carousels + p.variations}</strong> total exports</li>
                <li>{p.calls} strategy {p.calls === 1 ? "call" : "calls"} per month</li>
                <li>{p.review}</li>
                <li>{p.batches}</li>
              </ul>
              <a className="funnel-btn" href={inquiryUrl(p.name)}>Ask about {p.name}</a>
            </article>
          ))}
        </div>
        <div className="offer-note">
          <h3>Included in every organic package</h3>
          <p>Onboarding, an initial profile and content audit, monthly research and calendar, recording guidance, captions for delivered assets, and CTA recommendations. Videos are up to 60 seconds in one vertical format, with one consolidated revision round per batch. We correct errors against the approved brief. You supply usable footage, approve claims and scripts, publish the content, and share insights for review.</p>
          <h3>Trial Reels planning and review</h3>
          <p>Test selected ideas with new audiences and use the findings to guide future content, where the feature is available on your account. A trial is a publishing mode: sharing an original reel as a trial does not create another asset. Additional variations reuse included source footage for a different opening, shorter cut or revised structure; new concepts and reshoots are separate.</p>
          <p>Cadence depends on your budget, filming capacity and business priorities. 28 original assets do not mean a unique post every day of every month.</p>
        </div>
      </div>
    </section>
    <section id="ads" className="funnel-section border-t border-[var(--f-border)]">
      <div className="funnel-wrap">
        <SectionIntro eyebrow="Paid creative & campaigns" title="Creative production. Campaign management. Separate scopes." />
        <div className="offer-grid offer-grid-two">
          <article className="offer-card">
            <h3>Ad Creative Pack</h3><p className="offer-price">$397 <small>one-off</small></p>
            <p>Five scripts and five edited vertical ads for one offer and audience, using footage you supply.</p>
            <ul><li>Focused briefing and recording guidance</li><li>Five final outputs up to 60 seconds</li><li>Natural cuts and basic captions/text</li><li>One consolidated script revision and one edit revision round</li></ul>
            <p>Outputs may be concepts or variations suited to the brief. Extra versions, formats, filming, extensive stock sourcing, complex animation and rush work are quoted separately.</p>
            <a className="funnel-btn" href={inquiryUrl("$397 Ad Creative Pack")}>Discuss ad creative</a>
          </article>
          <article className="offer-card">
            <h3>Paid Ads Management</h3><p className="offer-price">Custom quote</p>
            <p>Campaign planning, setup, optimization and reporting, scoped after reviewing your offer, tracking and customer journey.</p>
            <ul><li>Platform and account fit confirmed before agreement</li><li>Media spend is paid separately</li><li>Creative production is a separate scope</li><li>Landing pages and tracking implementation are explicitly scoped</li></ul>
            <p>Organic engagement is useful feedback; it does not establish paid conversion performance.</p>
            <BookCallButton label="Discuss campaign support" />
          </article>
        </div>
      </div>
    </section>
    <section id="one-offs" className="funnel-section border-t border-[var(--f-border)]">
      <div className="funnel-wrap">
        <SectionIntro eyebrow="One focused next step" title="Start with the bottleneck.">Need clarity or a specific deliverable? Start here. All prices USD; scope and delivery dates are agreed before payment.</SectionIntro>
        <div className="offer-grid">
          {ONE_OFFS.map((o) => <article key={o.name} className="offer-card"><h3>{o.name}</h3><p className="offer-price">{money(o.price)}</p><p>{o.scope}</p><a className="offer-link" href={inquiryUrl(o.name)}>Request details ↗</a></article>)}
        </div>
        <div className="offer-note"><h3>Already getting inquiries but struggling to book calls?</h3><p>Start with our $97 DM-to-Booked-Call Audit. We diagnose the issue before recommending qualification questions, follow-up changes or booking-page improvements. Ongoing DM handling is separate.</p><a className="offer-link" href={inquiryUrl("$97 DM-to-Booked-Call Audit")}>Request the $97 audit ↗</a></div>
        <div className="offer-note"><h3>Before we start</h3><p>Organic retainers have a three-month initial commitment, including when paid monthly. Video length, footage limits, revision scope, delivery dates, approval deadlines, taxes, cancellation, refunds and renewal terms are confirmed in your written proposal before payment. Posting, community management, DM handling, sales calls and ad spend are excluded unless separately agreed.</p><p>We do not guarantee leads, booked calls, revenue, follower growth or virality. Client testimonials describe individual experiences.</p></div>
      </div>
    </section>
  </>
  );
};
