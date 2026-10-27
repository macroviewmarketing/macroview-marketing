import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { OffersSection } from "./OffersSection";

it("switches all retainer prices between monthly installments and upfront totals", () => {
  render(<OffersSection />);
  const monthly = screen.getByRole("button", { name: "Monthly", exact: true });
  const upfront = screen.getByRole("button", { name: "3-Month Retainer", exact: true });
  expect(monthly).toHaveAttribute("aria-pressed", "true");
  ["$600", "$1,000", "$1,600"].forEach(price => expect(screen.getByText(price, {exact: false, selector: ".offer-price-values > span"})).toBeInTheDocument());
  ["$900", "$1,500", "$2,400"].forEach(price => expect(screen.getByText(price, {selector: "s"})).toBeInTheDocument());
  fireEvent.click(upfront);
  ["$2,550", "$4,250", "$6,800"].forEach(price => expect(screen.getByText(price, {selector: "s"})).toBeInTheDocument());
  expect(upfront).toHaveAttribute("aria-pressed", "true");
  ["$1,700", "$2,800", "$4,500"].forEach(price => expect(screen.getByText(price, {exact: false, selector: ".offer-price-values > span"})).toBeInTheDocument());
  expect(screen.getByText(/Both options cover a three-month commitment/)).toBeInTheDocument();
  fireEvent.click(monthly);
  expect(screen.getByText("$600", {exact: false, selector: ".offer-price-values > span"})).toBeInTheDocument();
});
