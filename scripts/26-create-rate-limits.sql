-- Migration: Create rate limits table for minute-level tracking
-- This table helps prevent spamming the AI API across serverless functions.

CREATE TABLE IF NOT EXISTS public.rate_limits (
    identifier TEXT PRIMARY KEY,
    count INTEGER DEFAULT 1,
    reset_at TIMESTAMP WITH TIME ZONE DEFAULT (now() + interval '1 minute'),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Secure the table - only the service_role (Admin Client) should manage this
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- Atomic increment function
-- This handles the "reset if expired" logic in a single database call
CREATE OR REPLACE FUNCTION increment_rate_limit(
    p_identifier TEXT,
    p_limit INTEGER,
    p_window_interval TEXT DEFAULT '1 minute'
) RETURNS BOOLEAN AS $$
DECLARE
    v_count INTEGER;
    v_reset_at TIMESTAMP WITH TIME ZONE;
BEGIN
    -- Get current state
    SELECT count, reset_at INTO v_count, v_reset_at
    FROM public.rate_limits
    WHERE identifier = p_identifier;

    -- If no record or expired, reset
    IF v_count IS NULL OR v_reset_at < now() THEN
        INSERT INTO public.rate_limits (identifier, count, reset_at)
        VALUES (p_identifier, 1, now() + p_window_interval::interval)
        ON CONFLICT (identifier) DO UPDATE
        SET count = 1, reset_at = EXCLUDED.reset_at, updated_at = now();
        RETURN TRUE;
    END IF;

    -- Check if limit reached
    IF v_count >= p_limit THEN
        RETURN FALSE;
    END IF;

    -- Increment
    UPDATE public.rate_limits
    SET count = count + 1, updated_at = now()
    WHERE identifier = p_identifier;

    RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

COMMENT ON TABLE public.rate_limits IS 'Tracks per-minute rate limits for API routes to prevent abuse in serverless environments.';
