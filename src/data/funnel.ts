/**
 * Content for the single-page funnel. Anything marked `placeholder` renders as a
 * visible "coming soon" slot until the real asset is added here.
 */

export const HERO = {
  /** Two lines on desktop; the accent word is drawn in red at the end of line two. */
  headlineLine1: "Content and Ads That Turn",
  headlineLine2: "Views Into",
  headlineAccent: "Booked Calls.",
  /** PLACEHOLDER: path or URL to the hero video (e.g. "/video-asset/intro.mp4"). */
  videoPath: null as string | null,
  videoPoster: null as string | null,
};

export interface ClientLogo {
  name: string;
  detail: string;
  logoPath?: string;
  placeholder?: boolean;
}

/** PLACEHOLDER: replace with real client names, logos and follower counts. */
export const CLIENT_LOGOS: ClientLogo[] = Array.from({ length: 6 }, (_, i) => ({
  name: `Client ${i + 1}`,
  detail: "Logo coming soon",
  placeholder: true,
}));

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "847K+", label: "Organic views in 30 days for one creator" },
  { value: "4.2x", label: "ROAS on paid video ads for a coaching client" },
  { value: "0→60K", label: "Subscribers in under 90 days" },
  { value: "48h", label: "Short-form turnaround, from 48 to 72 hours" },
];

export interface EngineStep {
  title: string;
  body: string;
  tags: string[];
}

export const ENGINE_STEPS: EngineStep[] = [
  {
    title: "Find What's Leaking",
    body: "We look at your offer, content and funnel to find where attention is failing to turn into calls, and which fix moves revenue first.",
    tags: ["Offer Review", "Funnel Audit", "Content Audit"],
  },
  {
    title: "Script the Content",
    body: "Hooks, scripts and a content calendar built around your offer, so every post has a job to do instead of chasing vanity likes.",
    tags: ["Content Strategy", "Scripting", "Hook Engineering"],
  },
  {
    title: "Produce and Publish",
    body: "You send raw footage. We edit the short form, long form and thumbnails, and keep you posting on a schedule without touching a timeline.",
    tags: ["Short Form", "Long Form", "Thumbnails"],
  },
  {
    title: "Scale and Automate",
    body: "Direct-response ad creative for cold traffic, plus the GHL and Make automations behind it, so no lead slips through.",
    tags: ["Ad Creative", "GHL Automations", "Make Automations"],
  },
];

export interface VideoTestimonial {
  id: string;
  name: string;
  /** e.g. "$10K → $30K/mo". Left empty until confirmed by the client. */
  result?: string;
  /** What `result` measures, e.g. "Revenue growth". */
  resultLabel?: string;
  videoPath?: string | null;
  placeholder?: boolean;
}

/** PLACEHOLDER: videos are in edit. Add `videoPath` and `result` as each one is ready. */
export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  { id: "kate", name: "Kate", videoPath: null, placeholder: true },
  { id: "leon", name: "Leon", videoPath: null, placeholder: true },
  { id: "candice", name: "Candice", videoPath: null, placeholder: true },
];
