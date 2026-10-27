export const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "work", label: "Work" },
  { id: "results", label: "Results" },
  { id: "testimonials", label: "Testimonials" },
  { id: "engine", label: "How It Works" },
  { id: "packages", label: "Packages" },
  { id: "ads", label: "Ad Creative" },
  { id: "one-offs", label: "One-offs" },
  { id: "faq", label: "FAQ" },
  { id: "book", label: "Book a Call" },
] as const;
export type SectionId = (typeof SECTIONS)[number]["id"];
