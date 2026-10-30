import { afterEach, describe, expect, it, vi } from "vitest";
import { act, fireEvent, render, screen, cleanup } from "@testing-library/react";
import { WorkSection } from "./WorkSection";

afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals(); });

function startVisibleRail() {
  const frames = new Map<number, FrameRequestCallback>();
  let id = 0;
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => { frames.set(++id, callback); return id; });
  vi.stubGlobal("cancelAnimationFrame", (key: number) => frames.delete(key));
  vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue();
  vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
  const view = render(<WorkSection />);
  const observer = (globalThis as any).__mockIO.instances.find((item: any) => item.targets.size);
  act(() => observer.callback([{ isIntersecting: true }]));
  const tick = (time: number) => act(() => {
    const callbacks = [...frames.values()];
    frames.clear();
    callbacks.forEach(callback => callback(time));
  });
  return { ...view, tick };
}

describe("portfolio browsing", () => {
  it("advances to the next format after the end pause without copying cards", () => {
    const { container, tick } = startVisibleRail();
    expect(container.querySelectorAll(".selected-work-group")).toHaveLength(1);
    tick(100);
    tick(2400);
    expect(screen.getByRole("button", { name: "Tier lists", pressed: true })).toBeInTheDocument();
  });
  it("continues automatic advancement during hover, focus, swipe and wheel interaction", () => {
    const { tick } = startVisibleRail();
    const rail = screen.getByRole("region", { name: "This vs That examples" });
    fireEvent.mouseEnter(rail);
    fireEvent.focus(rail);
    fireEvent.pointerDown(rail);
    fireEvent.wheel(rail);
    tick(100);
    tick(2400);
    expect(screen.getByRole("button", { name: "Tier lists", pressed: true })).toBeInTheDocument();
  });
  it("still allows an explicit pause", () => {
    const { tick } = startVisibleRail();
    fireEvent.click(screen.getByRole("button", { name: "Pause This vs That previews" }));
    tick(100);
    tick(2400);
    expect(screen.getByRole("button", { name: "This vs That", pressed: true })).toBeInTheDocument();
  });
  it("continues from a manually changed scroll position", () => {
    const { tick } = startVisibleRail();
    const rail = screen.getByRole("region", { name: "This vs That examples" });
    Object.defineProperties(rail, { scrollWidth: { value: 1200 }, clientWidth: { value: 400 } });
    tick(100);
    rail.scrollLeft = 400;
    fireEvent.scroll(rail);
    tick(150);
    expect(rail.scrollLeft).toBeGreaterThan(400);
    expect(rail.scrollLeft).toBeLessThan(410);
  });
  it("stops at the last format and shows the portfolio button below the reel", () => {
    const { container, tick } = startVisibleRail();
    fireEvent.click(screen.getByRole("button", { name: "Stories & brand films" }));
    const observer = (globalThis as any).__mockIO.instances.find((item: any) => item.targets.size);
    act(() => observer.callback([{ isIntersecting: true }]));
    tick(100);
    tick(2400);
    expect(screen.getByRole("button", { name: "Stories & brand films", pressed: true })).toBeInTheDocument();
    expect(screen.queryByText("More client work")).not.toBeInTheDocument();
    expect(container.querySelector(".work-format")!.compareDocumentPosition(screen.getByRole("link", { name: /Explore the complete portfolio/ })) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });
});
