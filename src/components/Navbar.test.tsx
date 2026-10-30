import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "./Navbar";
import { BOOK_CALL_URL, WHATSAPP_URL } from "@/data/config";

const renderNavbar = (scrolled: boolean) =>
  render(
    <MemoryRouter>
      <Navbar scrolled={scrolled} />
    </MemoryRouter>,
  );

describe("<Navbar>", () => {
  it("renders the Macroview wordmark", () => {
    const { container } = renderNavbar(false);
    expect(container.querySelector(".funnel-wordmark")).toHaveTextContent("Macroview");
  });

  it("offers WhatsApp next to Book a Call", () => {
    renderNavbar(false);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
    expect(screen.getByRole("link", { name: "Contact me on WhatsApp" })).toHaveAttribute("href", WHATSAPP_URL);
    const cta = screen.getByRole("link", { name: /book a call/i });
    expect(cta).toHaveAttribute("href", BOOK_CALL_URL);
    expect(cta).toHaveAttribute("target", "_blank");
  });

  it("toggles the .scrolled class based on the prop", () => {
    const { container, rerender } = renderNavbar(false);
    const nav = container.querySelector(".funnel-nav");
    expect(nav).not.toHaveClass("scrolled");
    rerender(
      <MemoryRouter>
        <Navbar scrolled={true} />
      </MemoryRouter>,
    );
    expect(nav).toHaveClass("scrolled");
  });
});
