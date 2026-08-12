export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "MacroView took our raw footage and turned it into a content machine. We went from posting once a month to twice a week without adding headcount.",
    author: "Alex R.",
    role: "Business Coach",
  },
  {
    id: "t2",
    quote:
      "The difference between our before-and-after content is embarrassing. These guys understand visual storytelling at a level I have not seen from other agencies.",
    author: "Jordan M.",
    role: "Fitness Creator",
  },
  {
    id: "t3",
    quote: "Client testimonial coming soon — swap this slide for a real quote once you have one.",
    author: "Your Client",
    role: "Add a case study",
  },
  {
    id: "t4",
    quote: "Another slide, ready for a second testimonial — add a real quote when it's ready.",
    author: "Your Next Client",
    role: "Add a second case study",
  },
];
