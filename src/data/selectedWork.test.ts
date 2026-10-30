import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { workGroups, moreWork, visibleWorkGroups } from "./selectedWork";

describe("selected work", () => {
  it("uses the supplied categories and available local previews", () => {
    expect(workGroups.map(g => g.name)).toEqual(["This vs That", "Tier lists", "Miro board vids", "Talking Head / Meta Ads", "Educational reels", "Stories & brand films"]);
    workGroups.flatMap(g => g.items).filter(item => item.hasPreview).forEach(item => {
      expect(existsSync(`public/video-asset/selected/${item.slug}.mp4`)).toBe(true);
      expect(existsSync(`public/video-asset/selected/${item.slug}.jpg`)).toBe(true);
    });
  });
  it("never repeats a carousel video or places the same creator beside themselves", () => {
    const items = workGroups.flatMap(g => g.items);
    expect(new Set(items.map(i => i.slug)).size).toBe(items.length);
    expect(new Set(items.map(i => i.url)).size).toBe(items.length);
    [...workGroups, ...visibleWorkGroups].forEach(group => group.items.slice(1).forEach((item, index) => {
      expect(item.client).not.toBe(group.items[index].client);
    }));
    expect(items.some(i => i.slug === "noriko-pinned")).toBe(false);
  });
  it("keeps 34 distinct edits and removes alternate shares", () => {
    expect(new Set(workGroups.flatMap(g => g.items).map(item => item.url)).size).toBe(34);
    expect(moreWork).toEqual([]);
  });
});
