import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Index from "./Index";

describe("<Index> page assembly", () => {
  it("renders the snap-root scroll container", () => {
    const { container } = render(<Index />);
    expect(container.querySelector("main#snap-root")).not.toBeNull();
  });

  it("does NOT render the loading intro overlay", () => {
    const { container } = render(<Index />);
    expect(container.querySelector(".loader")).toBeNull();
  });

  it("renders minimal navigation and grain without extra navigation chrome", () => {
    const { container } = render(<Index />);
    expect(container.querySelector(".navbar")).not.toBeNull();
    expect(container.querySelector(".scroll-dots")).toBeNull();
    expect(container.querySelector("#cursor-dot")).toBeNull();
    expect(container.querySelector("#cursor-ring")).toBeNull();
    expect(container.querySelector(".grain-overlay")).not.toBeNull();
  });

  it("renders the five portfolio sections in stable order", () => {
    const { container } = render(<Index />);
    const ids = Array.from(container.querySelectorAll<HTMLElement>("section"))
      .map((s) => s.id)
      .filter(Boolean);
    expect(ids).toEqual([
      "hero",
      "portfolio",
      "results",
      "why",
      "book",
    ]);
  });

  it("does not interrupt the portfolio with CTA bands", () => {
    const { container } = render(<Index />);
    const bands = Array.from(container.querySelectorAll<HTMLElement>(".cta-band"))
      .map((b) => b.dataset.variant)
      .filter(Boolean);
    expect(bands).toEqual([]);
  });

  it("renders the footer once at the bottom", () => {
    const { container } = render(<Index />);
    expect(container.querySelectorAll("footer.footer")).toHaveLength(1);
  });

  it("does not render section dots", () => {
    const { container } = render(<Index />);
    expect(container.querySelectorAll(".scroll-dots .nav-dot")).toHaveLength(0);
  });
});
