import { Link } from "react-router-dom";
import { getPosts } from "@/lib/blog";
import { MotionDiv } from "@/components/MotionDiv";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="mx-auto max-w-5xl py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <MotionDiv className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Le blog Odoc</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Analyses, conseils et bonnes pratiques sur l'IA documentaire, l'automatisation administrative et le pilotage financier pour les dirigeants de PME.
        </p>
      </MotionDiv>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <MotionDiv
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }}
            viewport={{ once: true }}
          >
            <Link to={`/blog/${post.slug}`} className="block group h-full">
              <div className="p-6 h-full bg-card rounded-lg shadow-card group-hover:shadow-card-hover transition-shadow flex flex-col">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">{post.category}</p>
                  <h2 className="mt-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="mt-3 text-muted-foreground text-sm">{post.summary}</p>
                </div>
                <div className="mt-4 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  Lire l'article →
                </div>
              </div>
            </Link>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
