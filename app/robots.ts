import type { MetadataRoute } from "next";

const SITE_URL = "https://abdulazeem3255.github.io/islamic-countdown";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
