import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface PublishBlogPostPayload {
  action: "create" | "update" | "publish" | "unpublish";
  slug: string;
  title?: string;
  excerpt?: string;
  content?: string;
  category?: string;
  tags?: string[];
  cover_image_url?: string;
  author_name?: string;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  og_image_url?: string;
  featured?: boolean;
  read_time_minutes?: number;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Auth check
    const authHeader = req.headers.get("Authorization");
    const secret = Deno.env.get("BLOG_WEBHOOK_SECRET");
    if (!secret || authHeader !== `Bearer ${secret}`) {
      return new Response(
        JSON.stringify({ success: false, error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const payload: PublishBlogPostPayload = await req.json();
    if (!payload.slug || !payload.action) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing slug or action" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Auto-calculate read_time if content provided and read_time not provided
    let readTime = payload.read_time_minutes;
    if (!readTime && payload.content) {
      readTime = Math.ceil(payload.content.split(/\s+/).length / 200);
    }

    const { action, slug } = payload;

    if (action === "create") {
      const { data, error } = await supabase
        .from("blog_posts")
        .insert({
          slug,
          title: payload.title || "Sans titre",
          excerpt: payload.excerpt || "",
          content: payload.content || "",
          category: payload.category || "general",
          tags: payload.tags || [],
          cover_image_url: payload.cover_image_url,
          author_name: payload.author_name || "Équipe Odoc",
          seo_title: payload.seo_title,
          seo_description: payload.seo_description,
          seo_keywords: payload.seo_keywords,
          og_image_url: payload.og_image_url,
          featured: payload.featured || false,
          read_time_minutes: readTime || 5,
          status: "draft",
        })
        .select("id")
        .single();

      if (error) throw error;
      return new Response(
        JSON.stringify({ success: true, action, slug, id: data.id }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (action === "update") {
      const updateData: Record<string, unknown> = {};
      if (payload.title) updateData.title = payload.title;
      if (payload.excerpt) updateData.excerpt = payload.excerpt;
      if (payload.content) updateData.content = payload.content;
      if (payload.category) updateData.category = payload.category;
      if (payload.tags) updateData.tags = payload.tags;
      if (payload.cover_image_url !== undefined) updateData.cover_image_url = payload.cover_image_url;
      if (payload.author_name) updateData.author_name = payload.author_name;
      if (payload.seo_title !== undefined) updateData.seo_title = payload.seo_title;
      if (payload.seo_description !== undefined) updateData.seo_description = payload.seo_description;
      if (payload.seo_keywords !== undefined) updateData.seo_keywords = payload.seo_keywords;
      if (payload.og_image_url !== undefined) updateData.og_image_url = payload.og_image_url;
      if (payload.featured !== undefined) updateData.featured = payload.featured;
      if (readTime) updateData.read_time_minutes = readTime;

      const { data, error } = await supabase
        .from("blog_posts")
        .update(updateData)
        .eq("slug", slug)
        .select("id")
        .single();

      if (error) throw error;
      if (!data) {
        return new Response(
          JSON.stringify({ success: false, error: "Article not found", slug }),
          { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      return new Response(
        JSON.stringify({ success: true, action, slug, id: data.id }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (action === "publish") {
      // Only set published_at if not already set
      const { data: existing } = await supabase
        .from("blog_posts")
        .select("id, published_at")
        .eq("slug", slug)
        .single();

      if (!existing) {
        return new Response(
          JSON.stringify({ success: false, error: "Article not found", slug }),
          { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const updateObj: Record<string, unknown> = { status: "published" };
      if (!existing.published_at) {
        updateObj.published_at = new Date().toISOString();
      }

      const { error } = await supabase
        .from("blog_posts")
        .update(updateObj)
        .eq("slug", slug);

      if (error) throw error;
      return new Response(
        JSON.stringify({ success: true, action, slug, id: existing.id }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (action === "unpublish") {
      const { data, error } = await supabase
        .from("blog_posts")
        .update({ status: "draft" })
        .eq("slug", slug)
        .select("id")
        .single();

      if (error) throw error;
      if (!data) {
        return new Response(
          JSON.stringify({ success: false, error: "Article not found", slug }),
          { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      return new Response(
        JSON.stringify({ success: true, action, slug, id: data.id }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: false, error: "Invalid action" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
