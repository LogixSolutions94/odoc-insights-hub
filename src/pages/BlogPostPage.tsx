import { useParams, Link } from "react-router-dom";
import { getPostBySlug } from "@/lib/blog";
import { MotionDiv } from "@/components/MotionDiv";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <NotFound />;

  return (
    <article className="mx-auto max-w-3xl py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <MotionDiv>
        <header className="text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">{post.category}</p>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Publié le{" "}
            {new Date(post.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </header>

        <div
          className="mx-auto mt-12 prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-strong:text-foreground prose-li:marker:text-primary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 text-center bg-card p-8 rounded-lg shadow-card">
          <h3 className="text-xl font-semibold text-foreground">Vous voulez voir Odoc à l'œuvre ?</h3>
          <p className="mt-2 text-muted-foreground">Découvrez comment notre plateforme peut concrètement vous aider.</p>
          <div className="mt-6">
            <Link to="/contact">
              <Button>Demander une démo</Button>
            </Link>
          </div>
        </div>
      </MotionDiv>
    </article>
  );
}
