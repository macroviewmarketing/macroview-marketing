import { ReactNode } from "react";

interface SectionIntroProps {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}

export const SectionIntro = ({ eyebrow, title, children }: SectionIntroProps) => (
  <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
    <p className="funnel-eyebrow">{eyebrow}</p>
    <h2 className="funnel-h2 mt-3">{title}</h2>
    {children && <p className="funnel-lead mt-4">{children}</p>}
  </header>
);

/** Small tag marking a slot that is waiting on a real asset. */
export const PlaceholderTag = ({ children }: { children: ReactNode }) => (
  <span className="funnel-placeholder-tag">{children}</span>
);
