import type { Metadata } from "next";
import { articleCategories, sortedArticles } from "@/data/articles";
import PageHeader from "@/components/PageHeader";
import ArticlesBrowser from "@/components/ArticlesBrowser";

export const metadata: Metadata = {
  title: "Artikel",
  description: "Artikel tips mengajar, teknologi pendidikan, parenting, dan panduan aplikasi Qalby.",
};

export default function ArtikelPage() {
  return (
    <>
      <PageHeader
        eyebrow="Artikel"
        title="Wawasan untuk pendidik dan orang tua"
        description="Tips mengajar, teknologi pendidikan, parenting, dan panduan menggunakan aplikasi Qalby."
        crumbs={[{ label: "Beranda", href: "/" }, { label: "Artikel" }]}
      />
      <section className="container-site py-14">
        <ArticlesBrowser articles={sortedArticles()} categories={articleCategories} />
      </section>
    </>
  );
}
