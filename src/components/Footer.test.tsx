import { describe, it, expect } from "vitest";
import { render as rtlRender, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Footer } from "./Footer";
import {
  BOOKING_EMAIL,
  BUSINESS_ADDRESS,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/data/config";

const render = (ui: React.ReactElement) => rtlRender(<MemoryRouter>{ui}</MemoryRouter>);

describe("<Footer>", () => {
  it("links the booking email via mailto:", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: BOOKING_EMAIL })).toHaveAttribute("href", `mailto:${BOOKING_EMAIL}`);
  });

  it("links the phone via tel:", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: PHONE_DISPLAY })).toHaveAttribute("href", `tel:${PHONE_TEL}`);
  });

  it("links WhatsApp, Instagram and LinkedIn in new tabs", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /whatsapp/i })).toHaveAttribute("href", WHATSAPP_URL);
    expect(screen.getByRole("link", { name: /instagram/i })).toHaveAttribute("href", INSTAGRAM_URL);
    const linkedin = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedin).toHaveAttribute("href", LINKEDIN_URL);
    expect(linkedin).toHaveAttribute("target", "_blank");
  });

  it("links the legal pages", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Privacy" })).toHaveAttribute("href", "/privacy-policy");
    expect(screen.getByRole("link", { name: "Terms" })).toHaveAttribute("href", "/terms-and-conditions");
    expect(screen.getByRole("link", { name: "Refunds" })).toHaveAttribute("href", "/refund-policy");
  });

  it("shows the registered business address", () => {
    render(<Footer />);
    expect(screen.getByText(BUSINESS_ADDRESS)).toBeInTheDocument();
  });

  it("displays the current year in the copyright line", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${year} Macroview\\.`))).toBeInTheDocument();
  });
});
