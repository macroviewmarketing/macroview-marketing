import { BOOKING_EMAIL } from "./config";

export const inquiryUrl = (service: string) =>
  `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(`Inquiry: ${service}`)}`;

export const ORGANIC_PACKAGES = [
  { name: "Foundation", fit: "Establish a content routine", monthly: 600, upfront: 1700, listMonthly: 900, listUpfront: 2550, reels: 6, carousels: 2, variations: 0, calls: 1, review: "Monthly review", batches: "A monthly production plan" },
  { name: "Content Growth", fit: "Recommended for consistent content and testing", monthly: 1000, upfront: 2800, listMonthly: 1500, listUpfront: 4250, reels: 12, carousels: 4, variations: 2, calls: 1, review: "Monthly review plus a midmonth testing check", batches: "Two production batches per month" },
  { name: "Content Scale", fit: "A fuller, near-daily content calendar", monthly: 1600, upfront: 4500, listMonthly: 2400, listUpfront: 6800, reels: 20, carousels: 8, variations: 4, calls: 2, review: "Twice-monthly review", batches: "Two production batches per month" },
];

export const ONE_OFFS = [
  { name: "Content & Profile Audit", scope: "A focused review of your Instagram profile and recent content, with prioritized recommendations." },
  { name: "DM-to-Booked-Call Audit", scope: "A review of anonymized inquiry conversations and your booking journey. Implementation is quoted separately." },
  { name: "Content Strategy Sprint", scope: "One offer and audience: content pillars, a 30-day plan, 12 ideas with hooks, and one strategy call." },
  { name: "Organic Script Pack", scope: "10 short-form scripts with hooks, talking points and CTAs." },
  { name: "Carousel Pack", scope: "Five written and designed carousels. We agree slide counts and complexity before starting." },
  { name: "Video Editing Pack", scope: "Five ad or organic edits from your footage. Editing only; scripting is separate." },
];
