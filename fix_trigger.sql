CREATE FUNCTION public.notify_sitemap_refresh()
RETURNS trigger AS $$
BEGIN
  IF NEW.status = 'published' THEN
    BEGIN
      PERFORM net.http_post(
        url := 'https://api.odocpilot.com/functions/v1/sitemap-refresh',
        headers := '{"Content-Type":"application/json"}'::jsonb,
        body := json_build_object('type', TG_OP, 'table', TG_TABLE_NAME, 'record', row_to_json(NEW))::text
      );
    EXCEPTION WHEN OTHERS THEN
      NULL;
    END;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_blog_post_published
AFTER INSERT OR UPDATE ON public.blog_posts
FOR EACH ROW EXECUTE FUNCTION public.notify_sitemap_refresh();
