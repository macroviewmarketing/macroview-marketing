import { LegalLayout } from "@/components/LegalLayout";
import { BOOKING_EMAIL, BUSINESS_ADDRESS, TRADE_NAME } from "@/data/config";

const RefundPolicy = () => (
  <LegalLayout title="Refund &amp; Cancellation Policy" updated="September 4, 2026">
    <p>
      {TRADE_NAME} ("Macroview") provides content strategy, video production, paid
      advertising, and sales-funnel services. Because our work is custom and
      service-based rather than a physical or off-the-shelf product, refunds are
      handled as described below.
    </p>

    <h2>Before Work Begins</h2>
    <p>
      If you cancel after paying a deposit or first invoice but before we begin any
      work on your project, you're entitled to a full refund minus any payment
      processing fees already incurred.
    </p>

    <h2>Once Work Has Started</h2>
    <p>
      Once we've begun strategy, scripting, editing, or any other production work
      on your project, payments for that work are non-refundable, since the time
      and resources have already been committed. If you cancel mid-engagement, you
      remain responsible for any work completed up to the cancellation date, and
      we will deliver whatever has been completed at that point.
    </p>

    <h2>Monthly Retainers</h2>
    <ul>
      <li>Retainers renew on the billing cycle stated in your agreement unless cancelled beforehand.</li>
      <li>To cancel an ongoing retainer, notify us in writing at least 15 days before your next billing date; you will not be charged for the following cycle.</li>
      <li>We do not provide partial-month refunds for a cycle that has already started.</li>
    </ul>

    <h2>Revisions vs. Refunds</h2>
    <p>
      If a deliverable doesn't match the brief you approved, let us know within 7
      days of delivery — we'll revise it at no extra cost, within the revision
      rounds included in your agreement. Refunds are considered only where we are
      unable to deliver a workable revision that reasonably matches the agreed
      brief.
    </p>

    <h2>Digital Products</h2>
    <p>
      Any downloadable digital products we sell (such as editing presets or
      templates) are non-refundable once the download link has been accessed or
      the files delivered, except where the files are defective or materially
      different from their description — contact us and we'll fix or replace them.
    </p>

    <h2>How to Request a Refund</h2>
    <p>
      Email us at <a href={`mailto:${BOOKING_EMAIL}`}>{BOOKING_EMAIL}</a> with your
      name, the service or product purchased, and the reason for your request.
      Eligible refunds are processed to your original payment method within 7–14
      business days of approval.
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

export default RefundPolicy;
