-- Pin search_path on SECURITY DEFINER functions so a future schema or
-- privilege change can't turn them into a search-path hijack. Matches
-- is_admin() and can_view_quiz_game(), which already set this.

ALTER FUNCTION public.increment_rate_limit(text, integer, text)
	SET search_path = public;

ALTER FUNCTION public.increment_daily_usage(uuid, integer)
	SET search_path = public;

ALTER FUNCTION public.update_lesson_notes_updated_at()
	SET search_path = public;
