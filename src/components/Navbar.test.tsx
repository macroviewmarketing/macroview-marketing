import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "./Navbar";
import { BOOK_CALL_URL } from "@/data/config";

const renderNavbar = (scrolled: boolean) =>
  render(
    <MemoryRouter>
      <Navbar scrolled={scrolled} />
    </MemoryRouter>,
  );

describe("<Navbar>", () => {
  it("renders the Macroview wordmark with brand-mark icon", () => {
    const { container } = renderNavbar(false);
    expect(screen.getByText(/MACRO/)).toBeInTheDocument();
    expect(screen.getByText("VIEW")).toBeInTheDocument();
    const mark = container.querySelector(".nav-logo-mark");
    expect(mark?.tagName).toBe("IMG");
    expect(mark).toHaveAttribute("src", expect.stringContaining("Logo.svg"));
  });

  it("has a single Book a Call CTA and no section menu", () => {
    renderNavbar(false);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);
    const cta = screen.getByRole("link", { name: /book a call/i });
    expect(cta).toHaveAttribute("href", BOOK_CALL_URL);
    expect(cta).toHaveAttribute("target", "_blank");
  });

  it("toggles the .scrolled class based on the prop", () => {
    const { container, rerender } = renderNavbar(false);
    const nav = container.querySelector(".navbar");
    expect(nav).not.toHaveClass("scrolled");
    rerender(
      <MemoryRouter>
        <Navbar scrolled={true} />
      </MemoryRouter>,
    );
    expect(nav).toHaveClass("scrolled");
  });
});
