import type { MetadataRoute } from "next";

const BASE = "https://www.thespokesman.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/video-samples", "/testimonials", "/pricing", "/book-a-call", "/explainer-videos", "/blog-to-vlog", "/social-media-ads"];
  return pages.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));
}
