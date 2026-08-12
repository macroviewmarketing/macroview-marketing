export type ProductCategory = "Premiere Pro" | "After Effects" | "Captions";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number | "Free";
  description: string;
  /** External storefront link (Gumroad/Payhip/etc). Leave null until the real link exists. */
  storeUrl: string | null;
  /** Direct download link for free items only. */
  downloadUrl?: string | null;
}

// Placeholder catalogue — swap names/prices/storeUrl for the real products
// before this page goes live. Nothing here links anywhere yet.
export const products: Product[] = [
  {
    id: "pr1",
    name: "High-Ticket Hook Pack",
    category: "Premiere Pro",
    price: 29,
    description: "Drag-and-drop hook + transition presets built for short-form coach content.",
    storeUrl: null,
  },
  {
    id: "pr2",
    name: "Retention Cut Preset Bundle",
    category: "Premiere Pro",
    price: 39,
    description: "Pacing and J/L-cut presets tuned for high-retention short-form edits.",
    storeUrl: null,
  },
  {
    id: "ae1",
    name: "Kinetic Caption Motion Pack",
    category: "After Effects",
    price: 34,
    description: "Animated title and caption-emphasis templates for AE.",
    storeUrl: null,
  },
  {
    id: "cap1",
    name: "Coach Caption Style Bundle",
    category: "Captions",
    price: 19,
    description: "Caption style presets for the Macroview Captions app, tuned for talking-head content.",
    storeUrl: null,
  },
  {
    id: "free1",
    name: "Starter Hook Pack (Free)",
    category: "Premiere Pro",
    price: "Free",
    description: "A small taste of the Hook Pack — 3 free presets, no strings attached.",
    storeUrl: null,
    downloadUrl: null,
  },
];
