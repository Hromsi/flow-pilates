import type { MetadataRoute } from "next";

import { studioDocuments } from "@/data/documents";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const documents: MetadataRoute.Sitemap = studioDocuments.map((document) => ({
    url: `${siteUrl}${document.href}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...pages, ...documents];
}
