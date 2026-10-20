export const BRAND_NAME = "Macroview";

export const BOOKING_EMAIL = "macroviewdigital@gmail.com";

export const GMAIL_COMPOSE_URL =
  `https://mail.google.com/mail/?view=cm&to=${BOOKING_EMAIL}&su=Book%20a%20Call%20%E2%80%94%20Macroview`;

/**
 * PLACEHOLDER: paste the real calendar link here (Calendly, Cal.com, GHL).
 * Until it is set, every "Book a Call" button falls back to the Gmail compose window.
 */
export const BOOKING_URL: string | null = null;

/** Where every "Book a Call" button on the site points. */
export const BOOK_CALL_URL = BOOKING_URL ?? GMAIL_COMPOSE_URL;

export const PHONE_DISPLAY = "+63 949 463 4459";
export const PHONE_TEL = "+639494634459";

export const LINKEDIN_URL = "https://www.linkedin.com/company/macroviewdigital/";

export const INSTAGRAM_HANDLE = "@marcelinomarcc";
export const INSTAGRAM_URL = "https://www.instagram.com/marcelinomarcc/";
export const WHATSAPP_URL = `https://wa.me/${PHONE_TEL.replace(/\D/g, "")}`;

export const LOCATION = "Philippines";
export const TIMEZONE = "Asia/Manila";
export const UTC_OFFSET = "UTC+8";

/** Registered business address (per DTI/BIR Certificate of Registration). */
export const BUSINESS_ADDRESS = "Bangga Aton, Zone 2, 6115 City of Talisay, Negros Occidental, Philippines";

/** Registered trade name (DTI Business Name No. 7180861). */
export const TRADE_NAME = "Macroview Digital Marketing Services";

/** Registered proprietor (BIR Certificate of Registration). */
export const LEGAL_ENTITY_NAME = "Mark Jason Jamison Marcelino";

export const SITE_META = {
  title: "Macroview | Content and Ads That Turn Views Into Booked Calls",
  description:
    "Scripting, editing, ad creative and automations for high-ticket coaches, business owners and CEOs.",
  url: "https://www.macroviewmarketing.com",
};
