import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { workGroups, moreWork } from "./selectedWork";

describe("selected work", () => {
  it("uses the supplied categories and available local previews", () => {
    expect(workGroups.map(g => g.name)).toEqual(["This vs That", "Tier lists", "Visual Explainers", "Talking head", "Educational reels", "Stories & brand films"]);
    workGroups.flatMap(g => g.items).filter(item => item.hasPreview).forEach(item => {
      expect(existsSync(`public/video-asset/selected/${item.slug}.mp4`)).toBe(true);
      expect(existsSync(`public/video-asset/selected/${item.slug}.jpg`)).toBe(true);
    });
  });
  it("preserves all 35 updated links", () => {
    expect(new Set([...workGroups.flatMap(g => g.items), ...moreWork].map(item => item.url)).size).toBe(35);
  });
});
