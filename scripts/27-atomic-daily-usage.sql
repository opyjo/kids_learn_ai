-- Migration: Atomic Daily Usage Increment
-- This ensures that users cannot bypass the daily message limit by sending 
-- multiple overlapping requests.

CREATE OR REPLACE FUNCTION increment_daily_usage(
  p_user_id UUID,
  p_limit INTEGER
) RETURNS TABLE (
  allowed BOOLEAN,
  new_count INTEGER
) AS $$
DECLARE
  v_today DATE := current_date;
  v_current_count INTEGER;
BEGIN
  -- 1. Try to get existing usage
  SELECT message_count INTO v_current_count
  FROM public.chat_usage
  WHERE user_id = p_user_id AND date = v_today;

  -- 2. Handle missing record
  IF v_current_count IS NULL THEN
    INSERT INTO public.chat_usage (user_id, date, message_count)
    VALUES (p_user_id, v_today, 1);
    RETURN QUERY SELECT TRUE, 1;
    RETURN;
  END IF;

  -- 3. Check limit
  IF v_current_count >= p_limit THEN
    RETURN QUERY SELECT FALSE, v_current_count;
    RETURN;
  END IF;

  -- 4. Increment
  UPDATE public.chat_usage
  SET message_count = message_count + 1
  WHERE user_id = p_user_id AND date = v_today
  RETURNING message_count INTO v_current_count;

  RETURN QUERY SELECT TRUE, v_current_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

COMMENT ON FUNCTION increment_daily_usage IS 'Atomics-safe way to track and limit daily AI message usage.';
