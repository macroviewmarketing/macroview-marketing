import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { workGroups, moreWork } from "./selectedWork";

describe("selected work", () => {
  it("groups at least three examples from different clients in each format", () => {
    workGroups.forEach(group => {
      expect(group.items.length).toBeGreaterThanOrEqual(3);
      expect(new Set(group.items.map(item => item.client)).size).toBeGreaterThanOrEqual(3);
      group.items.forEach(item => {
        expect(existsSync(`public/video-asset/selected/${item.slug}.mp4`)).toBe(true);
        expect(existsSync(`public/video-asset/selected/${item.slug}.jpg`)).toBe(true);
      });
    });
  });
  it("preserves all 29 supplied links plus the original three", () => {
    expect(new Set([...workGroups.flatMap(g => g.items), ...moreWork].map(item => item.url)).size).toBe(32);
  });
});
