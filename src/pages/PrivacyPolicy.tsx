import { LegalLayout } from "@/components/LegalLayout";
import { BOOKING_EMAIL, BUSINESS_ADDRESS, TRADE_NAME } from "@/data/config";

const PrivacyPolicy = () => (
  <LegalLayout title="Privacy Policy" updated="September 4, 2026">
    <p>
      {TRADE_NAME} ("Macroview," "we," "us," or "our") respects your privacy. This
      Privacy Policy explains what information we collect through{" "}
      <a href="https://www.macroviewmarketing.com">macroviewmarketing.com</a> (the
      "Site"), how we use it, and the choices you have.
    </p>

    <h2>Information We Collect</h2>
    <p>We collect information you provide directly to us, such as when you:</p>
    <ul>
      <li>Book a call or contact us through email, our contact form, or WhatsApp</li>
      <li>Submit a client onboarding or brand-guideline form</li>
      <li>Purchase a product or service from us</li>
    </ul>
    <p>
      This may include your name, email address, phone number, business/brand name,
      social media handles, and any files, links, or messages you choose to share
      with us.
    </p>
    <p>
      We also automatically collect limited technical information when you visit the
      Site — such as browser type, device type, and general usage patterns — through
      standard analytics tools, to help us understand how the Site is used.
    </p>

    <h2>How We Use Your Information</h2>
    <ul>
      <li>To respond to inquiries and schedule calls</li>
      <li>To deliver the content, marketing, and creative services you engage us for</li>
      <li>To process payments and send invoices or receipts</li>
      <li>To send you service-related updates and, where you've agreed, occasional marketing communications</li>
      <li>To improve the Site and our services</li>
    </ul>

    <h2>How We Share Your Information</h2>
    <p>
      We do not sell your personal information. We may share it with:
    </p>
    <ul>
      <li>
        Service providers who help us operate — such as payment processors (e.g.
        PayMongo), email and scheduling tools, and cloud storage providers — solely
        to perform services on our behalf
      </li>
      <li>Authorities, when required by law or to protect our legal rights</li>
    </ul>

    <h2>Payment Information</h2>
    <p>
      Payments made through the Site are processed by third-party payment
      processors. We do not store your full card or bank account details on our
      servers — these are handled directly by our payment processor under its own
      privacy and security policies.
    </p>

    <h2>Data Retention</h2>
    <p>
      We retain your information for as long as needed to provide our services,
      comply with our legal and tax obligations (including Philippine BIR
      recordkeeping requirements), and resolve disputes.
    </p>

    <h2>Your Rights</h2>
    <p>
      Under the Philippine Data Privacy Act of 2012, you have the right to access,
      correct, or request deletion of your personal information, and to object to or
      withdraw consent for certain processing. To exercise these rights, contact us
      using the details below.
    </p>

    <h2>Cookies</h2>
    <p>
      The Site may use cookies or similar technologies to remember preferences and
      understand how visitors use the Site. You can disable cookies through your
      browser settings; some features may not function as intended if you do.
    </p>

    <h2>Children's Privacy</h2>
    <p>
      Our services are intended for businesses and individuals aged 18 and older. We
      do not knowingly collect information from children.
    </p>

    <h2>Changes to This Policy</h2>
    <p>
      We may update this Privacy Policy from time to time. Changes take effect once
      posted on this page, with the "Last updated" date revised accordingly.
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

export default PrivacyPolicy;
