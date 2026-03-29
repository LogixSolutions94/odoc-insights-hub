CREATE TABLE public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  source TEXT DEFAULT 'landing'
);

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public signup)
CREATE POLICY "Anyone can subscribe" ON public.newsletter_subscribers
FOR INSERT WITH CHECK (true);

-- Only service_role can read
CREATE POLICY "Service role can read subscribers" ON public.newsletter_subscribers
FOR SELECT USING (auth.role() = 'service_role');