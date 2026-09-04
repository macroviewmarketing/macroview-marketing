import { LegalLayout } from "@/components/LegalLayout";
import { BOOKING_EMAIL, BUSINESS_ADDRESS, LEGAL_ENTITY_NAME, TRADE_NAME } from "@/data/config";

const TermsAndConditions = () => (
  <LegalLayout title="Terms &amp; Conditions" updated="September 4, 2026">
    <p>
      These Terms &amp; Conditions ("Terms") govern your use of{" "}
      <a href="https://www.macroviewmarketing.com">macroviewmarketing.com</a> (the
      "Site") and any content-strategy, video production, paid advertising, or
      sales-funnel services (the "Services") provided by {TRADE_NAME}, operated by{" "}
      {LEGAL_ENTITY_NAME} ("Macroview," "we," "us," or "our"). By using the Site or
      engaging our Services, you agree to these Terms.
    </p>

    <h2>Our Services</h2>
    <p>
      Macroview is a content marketing agency offering done-for-you content
      strategy and production for coaches and consultants — including short-form
      and long-form video editing, social media content, paid ad creative, and
      conversion-focused sales funnels. The specific scope, deliverables, and
      turnaround time for any engagement are agreed with each client individually
      before work begins, typically through a discovery call and written proposal
      or retainer agreement.
    </p>

    <h2>Engagement &amp; Retainers</h2>
    <ul>
      <li>Services are generally delivered on a monthly retainer or fixed-scope project basis, as agreed per client.</li>
      <li>Work begins once a proposal or retainer agreement is confirmed and any required deposit or first payment is received.</li>
      <li>Turnaround times and revision rounds are set out in the applicable proposal or agreement.</li>
      <li>Clients are responsible for providing timely access to footage, brand assets, approvals, and feedback needed to deliver the work on schedule.</li>
    </ul>

    <h2>Payment</h2>
    <p>
      Fees, billing frequency, and accepted payment methods are set out in your
      proposal or invoice. Payments made through the Site are processed by
      third-party payment processors (such as PayMongo); by paying through the
      Site you also agree to that processor's applicable terms. Late or failed
      payments may result in a pause of active work until resolved.
    </p>

    <h2>Intellectual Property</h2>
    <p>
      Upon full payment for a deliverable, ownership of that final deliverable
      (e.g. an edited video, ad creative, or funnel asset) transfers to the client
      for their use. Macroview retains ownership of its own pre-existing tools,
      templates, presets, and internal production methods, and may showcase
      completed work in its portfolio and marketing materials unless the client
      requests otherwise in writing.
    </p>

    <h2>Client Responsibilities</h2>
    <p>
      You are responsible for the accuracy of the information, footage, and brand
      materials you provide, and for ensuring you have the rights to share them
      with us for production purposes. You agree not to use our Services for any
      unlawful, infringing, or misleading purpose.
    </p>

    <h2>Cancellations &amp; Refunds</h2>
    <p>
      Cancellation terms, notice periods, and refund eligibility are set out in
      our{" "}
      <a href="/refund-policy">Refund &amp; Cancellation Policy</a>.
    </p>

    <h2>Limitation of Liability</h2>
    <p>
      Our Services are provided on an "as is" basis. To the fullest extent
      permitted by Philippine law, Macroview is not liable for indirect,
      incidental, or consequential damages — including lost profits or lost
      opportunities — arising from your use of the Site or our Services. Our total
      liability for any claim is limited to the amount you paid us for the
      Services giving rise to that claim.
    </p>

    <h2>Termination</h2>
    <p>
      Either party may terminate an ongoing engagement in line with the notice
      period stated in the applicable proposal or retainer agreement. We reserve
      the right to suspend or terminate Services for non-payment or misuse.
    </p>

    <h2>Governing Law</h2>
    <p>
      These Terms are governed by the laws of the Republic of the Philippines. Any
      disputes arising from these Terms or our Services will be resolved in the
      appropriate courts of the Philippines.
    </p>

    <h2>Changes to These Terms</h2>
    <p>
      We may update these Terms from time to time. Changes take effect once posted
      on this page, with the "Last updated" date revised accordingly. Continued use
      of the Site or Services after changes are posted constitutes acceptance of
      the updated Terms.
    </p>

    <h2>Contact Us</h2>
    <p>
      {TRADE_NAME}
      <br />
      {BUSINESS_ADDRESS}
      <br />
      <a href={`mailto:${BOOKING_EMAIL}`}>{BOOKING_EMAIL}</a>
    </p>
  </LegalLayout>
);

export default TermsAndConditions;
