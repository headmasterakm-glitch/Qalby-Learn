import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { activeApps } from "@/data/apps";
import { articles } from "@/data/articles";
import { news } from "@/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/aplikasi", "/artikel", "/news", "/tentang", "/kontak", "/masuk"].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
  }));
  return [
    ...pages,
    ...activeApps.map((a) => ({ url: `${site.url}/aplikasi/${a.slug}`, lastModified: new Date() })),
    ...articles.map((a) => ({ url: `${site.url}/artikel/${a.slug}`, lastModified: new Date(a.date) })),
    ...news.map((n) => ({ url: `${site.url}/news/${n.slug}`, lastModified: new Date(n.date) })),
  ];
}
