-- Collaborative, report-only live lesson challenges.
ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS generation_source_hash TEXT;
ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS generated_at TIMESTAMPTZ;
ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS supersedes_quiz_id UUID REFERENCES quizzes(id) ON DELETE SET NULL;

ALTER TABLE quizzes DROP CONSTRAINT IF EXISTS quizzes_quiz_type_check;
ALTER TABLE quizzes ADD CONSTRAINT quizzes_quiz_type_check
  CHECK (quiz_type IN ('quick_check','term_finale','lesson_challenge'));
ALTER TABLE quizzes DROP CONSTRAINT IF EXISTS quizzes_scope_check;
ALTER TABLE quizzes ADD CONSTRAINT quizzes_scope_check CHECK (
  (quiz_type IN ('quick_check','lesson_challenge') AND lesson_id IS NOT NULL AND course_id IS NULL) OR
  (quiz_type = 'term_finale' AND course_id IS NOT NULL AND lesson_id IS NULL)
) NOT VALID;
-- New writes are constrained immediately. Validate legacy rows when they are
-- already compatible instead of making deployment fail on old mixed scopes.
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM quizzes
    WHERE NOT (
      (quiz_type IN ('quick_check','lesson_challenge') AND lesson_id IS NOT NULL AND course_id IS NULL) OR
      (quiz_type = 'term_finale' AND course_id IS NOT NULL AND lesson_id IS NULL)
    )
  ) THEN
    ALTER TABLE quizzes VALIDATE CONSTRAINT quizzes_scope_check;
  END IF;
END $$;

CREATE UNIQUE INDEX IF NOT EXISTS idx_one_published_lesson_challenge
  ON quizzes(lesson_id)
  WHERE quiz_type='lesson_challenge' AND status='published';
CREATE INDEX IF NOT EXISTS idx_quizzes_supersedes ON quizzes(supersedes_quiz_id);

ALTER TABLE quiz_games ADD COLUMN IF NOT EXISTS powerups_enabled BOOLEAN NOT NULL DEFAULT TRUE;
ALTER TABLE quiz_games ADD COLUMN IF NOT EXISTS team_mode BOOLEAN NOT NULL DEFAULT FALSE;

CREATE OR REPLACE FUNCTION publish_lesson_challenge(p_quiz_id UUID)
RETURNS BOOLEAN LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_lesson_id UUID;
BEGIN
  SELECT lesson_id INTO v_lesson_id
  FROM quizzes
  WHERE id=p_quiz_id AND quiz_type='lesson_challenge'
  FOR UPDATE;
  IF v_lesson_id IS NULL THEN
    RAISE EXCEPTION 'Lesson challenge not found';
  END IF;
  PERFORM pg_advisory_xact_lock(hashtextextended(v_lesson_id::text, 0));

  UPDATE quizzes SET status='archived', is_active=FALSE, updated_at=NOW()
  WHERE lesson_id=v_lesson_id
    AND quiz_type='lesson_challenge'
    AND status='published'
    AND id<>p_quiz_id;

  UPDATE quizzes SET status='published', is_active=TRUE, updated_at=NOW()
  WHERE id=p_quiz_id;
  RETURN FOUND;
END $$;
REVOKE ALL ON FUNCTION publish_lesson_challenge(UUID) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION publish_lesson_challenge(UUID) TO service_role;
