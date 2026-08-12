export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  /** Short description of the specific engagement/result — "what we helped them with". */
  helpedWith: string;
  /** Recorded client testimonial (with sound) — click-to-play, not muted/looping. */
  videoPath?: string | null;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "MacroView took our raw footage and turned it into a content machine. We went from posting once a month to twice a week without adding headcount.",
    author: "Alex R.",
    role: "Business Coach",
    helpedWith: "Short-form content system + weekly posting cadence for a $20K/mo coaching offer.",
    videoPath: null,
  },
  {
    id: "t2",
    quote:
      "The difference between our before-and-after content is embarrassing. These guys understand visual storytelling at a level I have not seen from other agencies.",
    author: "Jordan M.",
    role: "High-Ticket Coach",
    helpedWith: "Full ad creative overhaul for a low-ticket to high-ticket funnel relaunch.",
    videoPath: null,
  },
  {
    id: "t3",
    quote: "Video testimonial coming soon — drop the real clip in here once it's ready.",
    author: "Your Client",
    role: "Add a case study",
    helpedWith: "Add what you helped this client achieve.",
    videoPath: null,
  },
];
