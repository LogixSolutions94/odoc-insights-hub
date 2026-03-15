
-- Table blog_posts
CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image_url TEXT,
  category TEXT NOT NULL DEFAULT 'general'
    CHECK (category IN ('facturation','comptabilite','ia-documents','gestion-pme','tutoriel','general')),
  tags TEXT[] DEFAULT '{}',
  author_name TEXT NOT NULL DEFAULT 'Équipe Odoc',
  author_avatar_url TEXT,
  seo_title TEXT,
  seo_description TEXT,
  seo_keywords TEXT,
  og_image_url TEXT,
  status TEXT NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft','published','archived')),
  featured BOOLEAN DEFAULT false,
  read_time_minutes INTEGER DEFAULT 5,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  view_count INTEGER DEFAULT 0
);

-- Indexes
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_blog_posts_status ON public.blog_posts(status);
CREATE INDEX idx_blog_posts_category ON public.blog_posts(category);
CREATE INDEX idx_blog_posts_published_at ON public.blog_posts(published_at DESC);
CREATE INDEX idx_blog_posts_featured ON public.blog_posts(featured) WHERE featured = true;

-- Trigger updated_at
CREATE OR REPLACE FUNCTION public.update_blog_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.update_blog_updated_at();

-- increment_view_count function
CREATE OR REPLACE FUNCTION public.increment_view_count(post_slug TEXT)
RETURNS void AS $$
BEGIN
  UPDATE public.blog_posts
  SET view_count = view_count + 1
  WHERE slug = post_slug AND status = 'published';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read published posts" ON public.blog_posts
FOR SELECT USING (status = 'published');

CREATE POLICY "Service role can manage all posts" ON public.blog_posts
FOR ALL USING (auth.role() = 'service_role');
