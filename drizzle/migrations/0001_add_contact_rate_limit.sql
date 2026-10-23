CREATE TABLE public.contact_rate_limits (
  key_hash text PRIMARY KEY,
  window_started_at timestamptz NOT NULL DEFAULT now(),
  request_count integer NOT NULL DEFAULT 0
);
GRANT ALL ON public.contact_rate_limits TO service_role;
ALTER TABLE public.contact_rate_limits ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service role manages contact rate limits"
  ON public.contact_rate_limits
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
CREATE OR REPLACE FUNCTION public.consume_contact_rate_limit(_key_hash text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  current_count integer;
BEGIN
  INSERT INTO public.contact_rate_limits (key_hash, window_started_at, request_count)
  VALUES (_key_hash, now(), 1)
  ON CONFLICT (key_hash) DO UPDATE
  SET window_started_at = CASE
        WHEN public.contact_rate_limits.window_started_at < now() - interval '10 minutes' THEN now()
        ELSE public.contact_rate_limits.window_started_at
      END,
      request_count = CASE
        WHEN public.contact_rate_limits.window_started_at < now() - interval '10 minutes' THEN 1
        ELSE public.contact_rate_limits.request_count + 1
      END
  RETURNING request_count INTO current_count;

  RETURN current_count <= 5;
END;
$$;
REVOKE EXECUTE ON FUNCTION public.consume_contact_rate_limit(text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.consume_contact_rate_limit(text) TO service_role;