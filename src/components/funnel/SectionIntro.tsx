import { ReactNode } from "react";

interface SectionIntroProps {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}

export const SectionIntro = ({ eyebrow, title, children }: SectionIntroProps) => (
  <header className="funnel-intro">
    <p className="funnel-eyebrow">{eyebrow}</p>
    <h2 className="funnel-title">{title}</h2>
    {children && <p className="funnel-sub">{children}</p>}
  </header>
);

/** Small tag marking a slot that is waiting on a real asset. */
export const PlaceholderTag = ({ children }: { children: ReactNode }) => (
  <span className="funnel-placeholder-tag">{children}</span>
);
