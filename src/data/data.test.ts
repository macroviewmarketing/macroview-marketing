import { describe, it, expect } from "vitest";
import {
  BOOKING_EMAIL,
  GMAIL_COMPOSE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  LINKEDIN_URL,
  LOCATION,
  TIMEZONE,
  UTC_OFFSET,
  SITE_META,
} from "./config";
import { BOOKING_URL, BOOK_CALL_URL } from "./config";
import { SECTIONS } from "./sections";
import { portfolioItems } from "./portfolioItems";
import { faqs } from "./faqs";
import { STATS, ENGINE_STEPS, VIDEO_TESTIMONIALS } from "./funnel";

describe("config", () => {
  it("BOOKING_EMAIL matches expected gmail", () => {
    expect(BOOKING_EMAIL).toBe("macroviewdigital@gmail.com");
    expect(BOOKING_EMAIL).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  });

  it("GMAIL_COMPOSE_URL contains the booking email and a subject", () => {
    expect(GMAIL_COMPOSE_URL).toContain(BOOKING_EMAIL);
    expect(GMAIL_COMPOSE_URL).toContain("view=cm");
    expect(GMAIL_COMPOSE_URL).toContain("su=");
  });

  it("phone display and tel formats are consistent", () => {
    expect(PHONE_DISPLAY).toBe("+63 949 463 4459");
    expect(PHONE_TEL).toBe("+639494634459");
    // tel link must be digits-only after the leading +
    expect(PHONE_TEL.slice(1)).toMatch(/^\d+$/);
    // display digits should equal tel digits
    expect(PHONE_DISPLAY.replace(/\D/g, "")).toBe(PHONE_TEL.replace(/\D/g, ""));
  });

  it("LinkedIn URL points to the company page", () => {
    expect(LINKEDIN_URL).toBe("https://www.linkedin.com/company/macroviewdigital/");
    expect(LINKEDIN_URL.startsWith("https://")).toBe(true);
  });

  it("studio location and timezone are set", () => {
    expect(LOCATION).toBe("Philippines");
    expect(TIMEZONE).toBe("Asia/Manila");
    expect(UTC_OFFSET).toBe("UTC+8");
  });

  it("Book a Call falls back to Gmail compose until a booking link is set", () => {
    expect(BOOK_CALL_URL).toBe(BOOKING_URL ?? GMAIL_COMPOSE_URL);
    expect(BOOK_CALL_URL.startsWith("https://")).toBe(true);
  });

  it("site meta has required fields", () => {
    expect(SITE_META.title.length).toBeGreaterThan(0);
    expect(SITE_META.description.length).toBeGreaterThan(0);
    expect(SITE_META.url).toMatch(/^https:\/\//);
  });
});

describe("sections registry", () => {
  it("declares the funnel sections in page order", () => {
    expect(SECTIONS.map((s) => s.id)).toEqual([
      "hero",
      "results",
      "engine",
      "work",
      "testimonials",
      "faq",
      "book",
    ]);
  });
});

describe("portfolio items", () => {
  it("contains exactly 6 entries", () => {
    expect(portfolioItems).toHaveLength(6);
  });

  it("every item has id/title/category/gradientFallback", () => {
    portfolioItems.forEach((p) => {
      expect(p.id).toBeTruthy();
      expect(p.title.length).toBeGreaterThan(0);
      expect(p.category.length).toBeGreaterThan(0);
      expect(p.gradientFallback).toContain("linear-gradient");
    });
  });

  it("ids are unique", () => {
    const ids = portfolioItems.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every item points to an mp4 video under /video-asset/", () => {
    portfolioItems.forEach((p) => {
      expect(p.videoPath).toBeDefined();
      expect(p.videoPath!).toMatch(/^\/video-asset\/.+\.mp4$/);
    });
  });

  it("the tall (hero) item is the YouTube series", () => {
    const tall = portfolioItems.find((p) => p.span === "tall");
    expect(tall?.id).toBe("p1");
    expect(tall?.title).toMatch(/YouTube/);
  });
});

describe("funnel content", () => {
  it("has three client results and four engine steps", () => {
    expect(STATS).toHaveLength(3);
    expect(ENGINE_STEPS).toHaveLength(4);
    ENGINE_STEPS.forEach((step) => expect(step.tags.length).toBeGreaterThan(0));
  });

  it("lists the three client video testimonials", () => {
    expect(VIDEO_TESTIMONIALS.map((t) => t.name)).toEqual(["Kate", "Leon", "Candice"]);
  });
});

describe("faqs", () => {
  it("has 9 entries", () => {
    expect(faqs).toHaveLength(9);
  });

  it("every FAQ has a non-trivial question and answer", () => {
    faqs.forEach((f) => {
      expect(f.question.length).toBeGreaterThan(8);
      expect(f.answer.length).toBeGreaterThan(40);
    });
  });

  it("ids are unique and follow f1..f9", () => {
    const ids = faqs.map((f) => f.id);
    expect(new Set(ids).size).toBe(ids.length);
    ids.forEach((id) => expect(id).toMatch(/^f\d$/));
  });
});
