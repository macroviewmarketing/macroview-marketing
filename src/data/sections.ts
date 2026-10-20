export const SECTIONS = [
  { id: "hero",         label: "Home" },
  { id: "results",      label: "Results" },
  { id: "engine",       label: "How It Works" },
  { id: "work",         label: "Work" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq",          label: "FAQ" },
  { id: "book",         label: "Book a Call" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

export const NAV_LINKS: { id: SectionId; label: string }[] = [
  { id: "engine",       label: "How It Works" },
  { id: "work",         label: "Work" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq",          label: "FAQ" },
];
