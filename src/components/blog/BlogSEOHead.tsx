import { SEOHead } from "@/components/SEOHead";

interface BlogSEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  publishedTime?: string;
  category?: string;
  keywords?: string;
}

export function BlogSEOHead({
  title = "Blog Odoc — Facturation IA et gestion documentaire pour PME",
  description = "Tutoriels, bonnes pratiques et actualités sur la facturation automatique, la gestion documentaire IA et la comptabilité pour TPE/PME.",
  canonical = "/blog",
  ogImage,
  ogType = "website",
  publishedTime,
  category,
  keywords,
}: BlogSEOHeadProps) {
  return (
    <SEOHead
      title={title}
      description={description}
      canonical={canonical}
      ogImage={ogImage}
      ogType={ogType}
    />
  );
}
