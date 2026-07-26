-- Server-authoritative live-game timing, recovery, and presence.
ALTER TABLE public.quiz_games
  ADD COLUMN IF NOT EXISTS question_deadline_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS paused_remaining_ms INTEGER,
  ADD COLUMN IF NOT EXISTS state_version BIGINT NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS host_last_seen_at TIMESTAMPTZ;

ALTER TABLE public.quiz_game_players
  ADD COLUMN IF NOT EXISTS last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

ALTER TABLE public.quiz_games
  DROP CONSTRAINT IF EXISTS quiz_games_paused_remaining_ms_check;
ALTER TABLE public.quiz_games
  ADD CONSTRAINT quiz_games_paused_remaining_ms_check
  CHECK (paused_remaining_ms IS NULL OR paused_remaining_ms >= 0);

-- Preserve the remaining time for games that were already running when this
-- migration was deployed.
WITH ordered_questions AS (
  SELECT
    quiz_id,
    time_limit_seconds,
    ROW_NUMBER() OVER (
      PARTITION BY quiz_id
      ORDER BY order_index, id
    ) - 1 AS question_index
  FROM public.quiz_questions
)
UPDATE public.quiz_games AS game
SET question_deadline_at =
  game.question_started_at +
  make_interval(secs => question.time_limit_seconds)
FROM ordered_questions AS question
WHERE game.status = 'question'
  AND game.question_deadline_at IS NULL
  AND game.question_started_at IS NOT NULL
  AND question.quiz_id = game.quiz_id
  AND question.question_index = game.current_question_index;

-- Any authenticated participant request may ask the service-role API to run
-- this reconciliation. The conditional UPDATE is idempotent and concurrency
-- safe, so only one request can move an expired question into review.
CREATE OR REPLACE FUNCTION public.reconcile_live_quiz_deadline(p_game_id UUID)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  UPDATE public.quiz_games
  SET
    status = 'review',
    question_deadline_at = NULL,
    paused_remaining_ms = NULL,
    state_version = state_version + 1
  WHERE id = p_game_id
    AND status = 'question'
    AND auto_reveal
    AND question_deadline_at IS NOT NULL
    AND question_deadline_at <= clock_timestamp();

  RETURN FOUND;
END;
$$;

REVOKE ALL ON FUNCTION public.reconcile_live_quiz_deadline(UUID)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.reconcile_live_quiz_deadline(UUID)
  TO service_role;

CREATE INDEX IF NOT EXISTS idx_game_players_presence
  ON public.quiz_game_players(game_id, last_seen_at DESC);

COMMENT ON COLUMN public.quiz_games.question_deadline_at IS
  'Authoritative server deadline for the active question.';
COMMENT ON COLUMN public.quiz_games.paused_remaining_ms IS
  'Time remaining when a question is paused.';
COMMENT ON COLUMN public.quiz_games.state_version IS
  'Optimistic concurrency version for host state transitions.';
COMMENT ON COLUMN public.quiz_game_players.last_seen_at IS
  'Last successful participant heartbeat used by the host dashboard.';
