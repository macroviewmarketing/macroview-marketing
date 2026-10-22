import { BookCallButton } from "@/components/funnel/BookCallButton";
import { Wordmark } from "@/components/Wordmark";
import { scrollToSection } from "@/hooks/useScrollDots";

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar = ({ scrolled }: NavbarProps) => (
  <nav className={`funnel-nav${scrolled ? " scrolled" : ""}`} aria-label="Primary">
    <div className="funnel-wrap funnel-nav-inner">
      <a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("hero");
        }}
      >
        <span className="funnel-brand"><img src="/brand/macroview.png" alt="" width="40" height="40" /><Wordmark /></span>
      </a>

      <BookCallButton size="sm" />
    </div>
  </nav>
);
