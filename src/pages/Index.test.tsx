import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Index from "./Index";

const renderIndex = () =>
  render(
    <MemoryRouter>
      <Index />
    </MemoryRouter>,
  );

describe("<Index> page assembly", () => {
  it("renders the snap-root scroll container", () => {
    const { container } = renderIndex();
    expect(container.querySelector("main#snap-root")).not.toBeNull();
  });

  it("does NOT render the loading intro overlay", () => {
    const { container } = renderIndex();
    expect(container.querySelector(".loader")).toBeNull();
  });

  it("renders minimal navigation and grain without extra navigation chrome", () => {
    const { container } = renderIndex();
    expect(container.querySelector(".navbar")).not.toBeNull();
    expect(container.querySelector(".scroll-dots")).toBeNull();
    expect(container.querySelector("#cursor-dot")).toBeNull();
    expect(container.querySelector("#cursor-ring")).toBeNull();
    expect(container.querySelector(".grain-overlay")).not.toBeNull();
  });

  it("renders the eight portfolio sections in stable order", () => {
    const { container } = renderIndex();
    const ids = Array.from(container.querySelectorAll<HTMLElement>("section"))
      .map((s) => s.id)
      .filter(Boolean);
    expect(ids).toEqual([
      "hero",
      "solution",
      "who",
      "reviews",
      "portfolio",
      "results",
      "why",
      "book",
    ]);
  });

  it("does not interrupt the portfolio with CTA bands", () => {
    const { container } = renderIndex();
    const bands = Array.from(container.querySelectorAll<HTMLElement>(".cta-band"))
      .map((b) => b.dataset.variant)
      .filter(Boolean);
    expect(bands).toEqual([]);
  });

  it("renders the footer once at the bottom", () => {
    const { container } = renderIndex();
    expect(container.querySelectorAll("footer.footer")).toHaveLength(1);
  });

  it("does not render section dots", () => {
    const { container } = renderIndex();
    expect(container.querySelectorAll(".scroll-dots .nav-dot")).toHaveLength(0);
  });
});
