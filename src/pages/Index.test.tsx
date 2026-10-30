import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Index from "./Index";
import { BOOK_CALL_URL, INSTAGRAM_URL, WHATSAPP_URL } from "@/data/config";
import { faqs } from "@/data/faqs";

const renderIndex = () =>
  render(
    <MemoryRouter>
      <Index />
    </MemoryRouter>,
  );

describe("<Index> funnel page", () => {
  it("renders the funnel sections in order", () => {
    const { container } = renderIndex();
    const ids = Array.from(container.querySelectorAll<HTMLElement>("section"))
      .map((s) => s.id)
      .filter(Boolean);
    expect(ids).toEqual(["hero", "work", "results", "testimonials", "engine", "services", "faq", "book"]);
  });

  it("has one h1 with the headline", () => {
    renderIndex();
    const h1 = screen.getAllByRole("heading", { level: 1 });
    expect(h1).toHaveLength(1);
    expect(h1[0]).toHaveTextContent(/Content that makes your expertise easier to see\./);
  });

  it("repeats the Book a Call CTA and every one points at the booking URL", () => {
    renderIndex();
    const ctas = screen.getAllByRole("link", { name: /book a call/i });
    expect(ctas.length).toBeGreaterThanOrEqual(6);
    ctas.forEach((cta) => expect(cta).toHaveAttribute("href", BOOK_CALL_URL));
  });

  it("embeds the client testimonials without video placeholders", () => {
    const { container } = renderIndex();
    expect(container.querySelector('[data-placeholder="hero-video"]')).toBeNull();
    expect(container.querySelectorAll('[data-placeholder="testimonial-video"]')).toHaveLength(0);
    expect(screen.getByTitle("Kate testimonial")).toHaveAttribute("src", "https://player.vimeo.com/video/1238233784");
    expect(screen.getByTitle("Leon testimonial")).toHaveAttribute("src", "https://player.vimeo.com/video/1238233787");
    expect(screen.getByTitle("Candice testimonial")).toHaveAttribute("src", "https://player.vimeo.com/video/1238233785");
    expect(screen.queryByText("Result coming soon")).not.toBeInTheDocument();
    expect(within(container.querySelector("#testimonials")!).getByText("Kate")).toBeInTheDocument();
    expect(screen.getByText("Leon")).toBeInTheDocument();
    expect(container.querySelector("#testimonials")).toHaveTextContent("Candice");
  });

  it("offers WhatsApp and Instagram next to the final call to action", () => {
    renderIndex();
    expect(screen.getByRole("link", { name: "WhatsApp" })).toHaveAttribute("href", WHATSAPP_URL);
    expect(screen.getByRole("link", { name: "Instagram" })).toHaveAttribute("href", INSTAGRAM_URL);
  });

  it("renders every FAQ question", () => {
    renderIndex();
    faqs.forEach((f) => expect(screen.getByText(f.question)).toBeInTheDocument());
  });

  it("does not use the old brand names", () => {
    const { container } = renderIndex();
    expect(container.textContent).not.toMatch(/MacroView Digital|Macroview Marketing|\bMVD\b|\bMVM\b/);
  });

  it("renders the footer once", () => {
    const { container } = renderIndex();
    expect(container.querySelectorAll("footer.footer")).toHaveLength(1);
  });
});
