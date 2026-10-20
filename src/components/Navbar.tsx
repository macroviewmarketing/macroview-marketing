import { BookCallButton } from "@/components/funnel/BookCallButton";
import { scrollToSection } from "@/hooks/useScrollDots";

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar = ({ scrolled }: NavbarProps) => (
  <nav className={`navbar${scrolled ? " scrolled" : ""}`} aria-label="Primary">
    <a
      href="#hero"
      className="nav-logo"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("hero");
      }}
    >
      <img
        src="/Macroview%20-%20Logo.svg"
        alt=""
        aria-hidden
        className="nav-logo-mark"
      />
      <span>MACRO<span className="accent">VIEW</span></span>
    </a>

    <BookCallButton size="sm" />
  </nav>
);
