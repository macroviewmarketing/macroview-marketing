/**
 * Content for the single-page funnel. Anything marked `placeholder` renders as a
 * visible "coming soon" slot until the real asset is added here.
 */

export const HERO = {
  /** Two lines on desktop; the accent word is drawn in red at the end of line two. */
  headlineLine1: "Content that makes your",
  headlineLine2: "expertise",
  headlineAccent: "easier to see.",
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

/** Personal brands featured in the video testimonials. */
export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Kate Cummins", detail: "Fitness coach · Team Accomplish", logoPath: "/clients/kate.png" },
  { name: "Leon Vartanian", detail: "Amazon FBA coach", logoPath: "/clients/leon.png" },
  { name: "Candice", detail: "Ecommerce brand strategist", logoPath: "/clients/candice.png" },
];

export interface Stat {
  value: string;
  label: string;
  profile: { name: string; handle: string; image: string; followers: string; posts: string; following: string };
}

export const STATS: Stat[] = [
  { value: "$30,000+", label: "Clients signed in the first month", profile: { name: "Candice", handle: "candicecynthia.t", image: "/clients/candice.png", followers: "4,782", posts: "158", following: "1,729" } },
  { value: "$20,000", label: "Biggest day in coaching business revenue", profile: { name: "Leon Vartanian", handle: "leonvartanian", image: "/clients/leon.png", followers: "125K", posts: "145", following: "1,448" } },
  { value: "Best year", label: "2026 was her best year in business", profile: { name: "Kate Cummins", handle: "kate_teamaccomplish", image: "/clients/kate.png", followers: "34.7K", posts: "2,239", following: "742" } },
];

export interface EngineStep {
  title: string;
  body: string;
  tags: string[];
}

export const ENGINE_STEPS: EngineStep[] = [
  { title: "Plan", body: "We review your offer, audience and content, then develop topics, hooks, scripts and a calendar around your priorities. You approve the facts and scripts before filming.", tags: ["Research", "Scripts", "Calendar"] },
  { title: "Record", body: "You batch-record your expertise with our filming guidance, then upload usable footage. We agree requirements and approvals before production begins.", tags: ["Your expertise", "Recording guidance", "Footage handoff"] },
  { title: "Produce", body: "We edit reels, design carousels, and prepare captions and agreed trial variations. You review the batch and publish on your channels.", tags: ["Reels", "Carousels", "Captions"] },
  { title: "Review", body: "You share content insights and inquiry feedback. We review available watch-time, shares, profile activity and relevant inquiries to refine the next batch. Trials provide directional feedback, not controlled experiments.", tags: ["Insights", "Trial Reels", "Next batch"] },
];

export interface VideoTestimonial {
  id: string;
  name: string;
  /** e.g. "$10K → $30K/mo". Left empty until confirmed by the client. */
  result?: string;
  /** What `result` measures, e.g. "Revenue growth". */
  resultLabel?: string;
  videoPath?: string | null;
  vimeoId?: string;
  quote?: string;
  placeholder?: boolean;
}

/** Client-reported results and excerpts from their video testimonials. */
export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: "kate", name: "Kate", vimeoId: "1238233784",
    result: "Best year in business", resultLabel: "Kate on her 2026 results",
    quote: "In 10 years of business, this is by a mile the best team that I have ever worked with when it comes to efficiency, how professional they are.",
  },
  {
    id: "leon", name: "Leon", vimeoId: "1238233787",
    result: "$20,000", resultLabel: "Biggest day in coaching business revenue",
    quote: "After I started working with Marc and seeing how good he made the ads, my conversions went up and completely changed my business.",
  },
  {
    id: "candice", name: "Candice", vimeoId: "1238233785",
    result: "$30,000+ in clients", resultLabel: "Reported in the first month",
    quote: "In the first month of working with Marc, with his creative that we made for my coaching business, I was able to sign over $30,000 worth of clients.",
  },
];
