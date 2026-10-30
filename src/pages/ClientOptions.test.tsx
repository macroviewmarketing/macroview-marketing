import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Index from "./Index";
import ClientOptions from "./ClientOptions";

afterEach(cleanup);

describe("public and warm-client pages", () => {
  it("keeps service pricing and the pricing-page link off the public page", () => {
    const { container } = render(<MemoryRouter><Index /></MemoryRouter>);
    expect(container.querySelector("#packages")).toBeNull();
    expect(container.querySelector(".offer-billing")).toBeNull();
    expect(container.textContent).not.toMatch(/\$497|\$600|\$1,000|\$1,600|\$1,700|\$2,800|\$4,500/);
    expect(container.querySelector('a[href*="client-options"]')).toBeNull();
    expect(screen.getByRole("link", { name: "Explore our work" })).toHaveAttribute("href", "#work");
  });

  it("retains pricing on the warm-client page and clears noindex after leaving", () => {
    const staticRobots = document.createElement("meta");
    staticRobots.name = "robots";
    staticRobots.content = "noindex, nofollow, noarchive";
    document.head.appendChild(staticRobots);
    const { container, unmount } = render(<MemoryRouter><ClientOptions /></MemoryRouter>);
    expect(container.querySelector("#packages")).not.toBeNull();
    expect(screen.getByRole("group", { name: "Payment schedule" })).toBeInTheDocument();
    expect(container.querySelector("#packages")).toHaveTextContent("$600");
    expect(container.querySelector("#ads")).toHaveTextContent("$497");
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute("content", "noindex, nofollow, noarchive");
    unmount();
    expect(document.querySelector('meta[name="robots"]')).toBeNull();
  });
});
