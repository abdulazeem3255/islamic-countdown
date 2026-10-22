import type { MetadataRoute } from "next";
import { EVENTS } from "../lib/events";

const SITE_URL = "https://islamic-countdown.pages.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().split("T")[0];
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "daily", priority: 1 },
    ...EVENTS.map((e) => ({
      url: `${SITE_URL}/${e.slug}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.9,
    })),
  ];
}
