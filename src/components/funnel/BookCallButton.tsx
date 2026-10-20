import { ArrowRight } from "lucide-react";
import { BOOK_CALL_URL } from "@/data/config";

interface BookCallButtonProps {
  label?: string;
  size?: "sm" | "md";
  className?: string;
}

export const BookCallButton = ({ label = "Book a Call", size = "md", className = "" }: BookCallButtonProps) => (
  <a
    href={BOOK_CALL_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`funnel-btn${size === "sm" ? " funnel-btn-sm" : ""} ${className}`}
  >
    {label}
    {size === "md" && <ArrowRight aria-hidden className="h-3.5 w-3.5" />}
  </a>
);

export const CtaRow = ({ label }: { label?: string }) => (
  <div className="funnel-cta-row">
    <BookCallButton label={label} />
  </div>
);
