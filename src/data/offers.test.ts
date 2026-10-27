import { describe, it, expect } from "vitest";
import { ORGANIC_PACKAGES, ONE_OFFS, inquiryUrl } from "./offers";

describe("public offers", () => {
  it("preserves the approved three-month totals, savings, and monthly output", () => {
    expect(ORGANIC_PACKAGES.map(p => [p.monthly * 3, p.upfront, p.monthly * 3 - p.upfront, p.reels + p.carousels, p.reels + p.carousels + p.variations])).toEqual([
      [1800, 1700, 100, 8, 8], [3000, 2800, 200, 16, 18], [4800, 4500, 300, 28, 32],
    ]);
  });
  it("routes service inquiries to the existing business email without pretending to take payment", () => {
    ONE_OFFS.forEach(o => {
      const url = new URL(inquiryUrl(o.name));
      expect(url.protocol).toBe("mailto:");
      expect(url.pathname).toBe("macroviewdigital@gmail.com");
      expect(url.searchParams.get("subject")).toBe(`Inquiry: ${o.name}`);
    });
  });
});
