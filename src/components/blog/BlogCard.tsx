import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { BlogCategoryBadge } from "./BlogCategoryBadge";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    cover_image_url?: string | null;
    category: string;
    author_name: string;
    published_at: string | null;
    read_time_minutes: number;
    view_count: number;
    featured?: boolean;
  };
  variant?: "default" | "compact" | "featured";
}

function formatRelativeDate(dateStr: string | null): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 1) return "Aujourd'hui";
  if (diffDays === 1) return "Hier";
  if (diffDays < 7) return `Il y a ${diffDays} jours`;
  return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export function BlogCard({ post, variant = "default" }: BlogCardProps) {
  if (variant === "featured") {
    return (
      <Link to={`/blog/${post.slug}`} className="block group">
        <div className="flex flex-col md:flex-row gap-6 bg-card rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow border border-border/50">
          <div className="md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden">
            {post.cover_image_url ? (
              <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
            ) : (
              <div className="w-full h-full min-h-[200px] bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center">
                <FileText className="h-16 w-16 text-primary/50" />
              </div>
            )}
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <BlogCategoryBadge category={post.category} className="w-fit mb-3" />
            <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h2>
            <p className="mt-2 text-muted-foreground line-clamp-3">{post.excerpt}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <span>{post.author_name}</span>
              <span>·</span>
              <span>{formatRelativeDate(post.published_at)}</span>
              <span>·</span>
              <span>{post.read_time_minutes} min de lecture</span>
            </div>
            <p className="mt-4 text-sm font-medium text-primary group-hover:underline">Lire l'article →</p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${post.slug}`} className="block group h-full">
      <div className={cn(
        "h-full bg-card rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow border border-border/50 flex flex-col",
        variant === "compact" && "flex-row"
      )}>
        <div className={cn("aspect-video relative overflow-hidden", variant === "compact" && "w-1/3 aspect-auto")}>
          {post.cover_image_url ? (
            <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center">
              <FileText className="h-10 w-10 text-primary/50" />
            </div>
          )}
        </div>
        <div className="p-5 flex flex-col flex-1">
          <BlogCategoryBadge category={post.category} className="w-fit mb-2" />
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">{post.excerpt}</p>
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <span>{post.author_name}</span>
            <span>·</span>
            <span>{formatRelativeDate(post.published_at)}</span>
            <span>·</span>
            <span>{post.read_time_minutes} min</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
