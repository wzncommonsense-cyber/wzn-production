import type { MetadataRoute } from "next";

const routes = ["", "/diensten", "/portfolio", "/prijzen", "/werkwijze", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://wznproduction.nl${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
