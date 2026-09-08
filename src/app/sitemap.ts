import type { MetadataRoute } from "next";
import { portfolioItems } from "@/lib/data";

const baseUrl = "https://giannipascual.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/portfolio", "/certifications", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })
  );

  const portfolioRoutes = portfolioItems.map((item) => ({
    url: `${baseUrl}${item.href}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...portfolioRoutes];
}
