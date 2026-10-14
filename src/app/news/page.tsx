import type { Metadata } from "next";
import { sortedNews } from "@/data/news";
import PageHeader from "@/components/PageHeader";
import NewsList from "@/components/NewsList";

export const metadata: Metadata = {
  title: "News",
  description: "Berita terbaru Qalby: rilis fitur, pembaruan aplikasi, kegiatan, dan pengumuman.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News"
        title="Kabar terbaru Qalby"
        description="Rilis fitur, pembaruan aplikasi, kegiatan, dan pengumuman penting."
        crumbs={[{ label: "Beranda", href: "/" }, { label: "News" }]}
      />
      <section className="container-site max-w-4xl py-14 pb-24">
        <div className="card px-6 py-2 sm:px-10">
          <NewsList items={sortedNews()} />
        </div>
      </section>
    </>
  );
}
