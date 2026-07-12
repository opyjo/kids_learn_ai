-- Extraction-ready adaptive practice sessions and immutable evidence events.
ALTER TABLE quiz_questions ADD COLUMN IF NOT EXISTS adaptive_difficulty SMALLINT;
ALTER TABLE quiz_questions ADD COLUMN IF NOT EXISTS variant_group TEXT;
ALTER TABLE quiz_questions ADD COLUMN IF NOT EXISTS learning_objective TEXT;
ALTER TABLE quiz_questions ADD COLUMN IF NOT EXISTS prerequisite_tags JSONB;
ALTER TABLE quiz_questions ADD COLUMN IF NOT EXISTS remediation TEXT;
UPDATE quiz_questions SET
  adaptive_difficulty = COALESCE(adaptive_difficulty, 1),
  variant_group = COALESCE(NULLIF(variant_group, ''), id::text),
  learning_objective = COALESCE(NULLIF(learning_objective, ''), concept_tag),
  prerequisite_tags = COALESCE(prerequisite_tags, '[]'::jsonb),
  remediation = COALESCE(NULLIF(remediation, ''), explanation, 'Review this concept with your teacher.')
WHERE adaptive_difficulty IS NULL OR variant_group IS NULL OR learning_objective IS NULL
  OR prerequisite_tags IS NULL OR remediation IS NULL;
ALTER TABLE quiz_questions ALTER COLUMN adaptive_difficulty SET DEFAULT 1;
ALTER TABLE quiz_questions ALTER COLUMN adaptive_difficulty SET NOT NULL;
ALTER TABLE quiz_questions ALTER COLUMN variant_group SET NOT NULL;
ALTER TABLE quiz_questions ALTER COLUMN learning_objective SET NOT NULL;
ALTER TABLE quiz_questions ALTER COLUMN prerequisite_tags SET DEFAULT '[]'::jsonb;
ALTER TABLE quiz_questions ALTER COLUMN prerequisite_tags SET NOT NULL;
ALTER TABLE quiz_questions ALTER COLUMN remediation SET NOT NULL;
ALTER TABLE quiz_questions DROP CONSTRAINT IF EXISTS quiz_questions_adaptive_difficulty_check;
ALTER TABLE quiz_questions ADD CONSTRAINT quiz_questions_adaptive_difficulty_check
  CHECK (adaptive_difficulty BETWEEN 1 AND 5);
ALTER TABLE quiz_questions DROP CONSTRAINT IF EXISTS quiz_questions_prerequisites_array_check;
ALTER TABLE quiz_questions ADD CONSTRAINT quiz_questions_prerequisites_array_check
  CHECK (jsonb_typeof(prerequisite_tags) = 'array');

CREATE TABLE IF NOT EXISTS adaptive_practice_sessions (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  algorithm_version TEXT NOT NULL DEFAULT 'rules-v1',
  seed TEXT NOT NULL,
  target_length SMALLINT NOT NULL DEFAULT 10 CHECK (target_length BETWEEN 1 AND 10),
  state JSONB NOT NULL,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','completed','fallback')),
  is_shadow BOOLEAN NOT NULL DEFAULT FALSE,
  started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '24 hours'),
  completed_at TIMESTAMPTZ
);
ALTER TABLE adaptive_practice_sessions ADD COLUMN IF NOT EXISTS expires_at TIMESTAMPTZ;
UPDATE adaptive_practice_sessions SET expires_at=started_at + INTERVAL '24 hours' WHERE expires_at IS NULL;
ALTER TABLE adaptive_practice_sessions ALTER COLUMN expires_at SET DEFAULT (NOW() + INTERVAL '24 hours');
ALTER TABLE adaptive_practice_sessions ALTER COLUMN expires_at SET NOT NULL;

CREATE TABLE IF NOT EXISTS adaptive_practice_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID NOT NULL REFERENCES adaptive_practice_sessions(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES quiz_questions(id) ON DELETE RESTRICT,
  position SMALLINT NOT NULL CHECK (position BETWEEN 1 AND 10),
  selection_reason TEXT NOT NULL CHECK (selection_reason IN ('due_or_weak','developing','retention','remediation')),
  confidence TEXT NOT NULL CHECK (confidence IN ('sure','unsure','guessing')),
  correct BOOLEAN NOT NULL,
  used_hint BOOLEAN NOT NULL DEFAULT FALSE,
  difficulty SMALLINT NOT NULL CHECK (difficulty BETWEEN 1 AND 5),
  mastery_before INTEGER NOT NULL CHECK (mastery_before BETWEEN 0 AND 100),
  mastery_after INTEGER NOT NULL CHECK (mastery_after BETWEEN 0 AND 100),
  remediation_shown BOOLEAN NOT NULL DEFAULT FALSE,
  idempotency_key UUID NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(session_id, position)
);

CREATE TABLE IF NOT EXISTS adaptive_practice_diagnostics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  event_type TEXT NOT NULL CHECK (event_type IN ('fallback','session_error')),
  reason TEXT NOT NULL,
  details JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_adaptive_sessions_user ON adaptive_practice_sessions(user_id, started_at DESC);
CREATE INDEX IF NOT EXISTS idx_adaptive_events_session ON adaptive_practice_events(session_id, position);
CREATE INDEX IF NOT EXISTS idx_adaptive_events_question ON adaptive_practice_events(question_id);
CREATE INDEX IF NOT EXISTS idx_adaptive_diagnostics_created ON adaptive_practice_diagnostics(created_at DESC);

ALTER TABLE adaptive_practice_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE adaptive_practice_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE adaptive_practice_diagnostics ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Students view own adaptive sessions" ON adaptive_practice_sessions;
DROP POLICY IF EXISTS "Admins view adaptive sessions" ON adaptive_practice_sessions;
DROP POLICY IF EXISTS "Students view own adaptive events" ON adaptive_practice_events;
DROP POLICY IF EXISTS "Admins view adaptive events" ON adaptive_practice_events;
DROP POLICY IF EXISTS "Admins view adaptive diagnostics" ON adaptive_practice_diagnostics;
CREATE POLICY "Students view own adaptive sessions" ON adaptive_practice_sessions
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins view adaptive sessions" ON adaptive_practice_sessions
  FOR SELECT USING (EXISTS (SELECT 1 FROM profiles WHERE id=auth.uid() AND role='admin'));
CREATE POLICY "Students view own adaptive events" ON adaptive_practice_events
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins view adaptive events" ON adaptive_practice_events
  FOR SELECT USING (EXISTS (SELECT 1 FROM profiles WHERE id=auth.uid() AND role='admin'));
CREATE POLICY "Admins view adaptive diagnostics" ON adaptive_practice_diagnostics
  FOR SELECT USING (EXISTS (SELECT 1 FROM profiles WHERE id=auth.uid() AND role='admin'));

CREATE OR REPLACE FUNCTION record_adaptive_practice_response(
  p_session_id UUID, p_user_id UUID, p_question_id UUID, p_position INTEGER,
  p_selection_reason TEXT, p_confidence TEXT, p_correct BOOLEAN, p_used_hint BOOLEAN,
  p_difficulty INTEGER, p_mastery_before INTEGER, p_mastery_after INTEGER,
  p_mastery_status TEXT, p_remediation_shown BOOLEAN, p_idempotency_key UUID,
  p_next_state JSONB, p_session_status TEXT
) RETURNS BOOLEAN LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_course_id UUID;
  v_concept TEXT;
  v_queue_step SMALLINT;
  v_queue_due TIMESTAMPTZ;
BEGIN
  PERFORM 1 FROM adaptive_practice_sessions
  WHERE id=p_session_id AND user_id=p_user_id AND status='active' AND expires_at > NOW() FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'Adaptive session is not active'; END IF;

  INSERT INTO adaptive_practice_events (
    session_id, user_id, question_id, position, selection_reason, confidence,
    correct, used_hint, difficulty, mastery_before, mastery_after,
    remediation_shown, idempotency_key
  ) VALUES (
    p_session_id, p_user_id, p_question_id, p_position, p_selection_reason,
    p_confidence, p_correct, p_used_hint, p_difficulty, p_mastery_before,
    p_mastery_after, p_remediation_shown, p_idempotency_key
  );

  SELECT COALESCE(q.course_id, l.course_id), qq.concept_tag
  INTO v_course_id, v_concept
  FROM quiz_questions qq
  JOIN quizzes q ON q.id=qq.quiz_id
  LEFT JOIN lessons l ON l.id=q.lesson_id
  WHERE qq.id=p_question_id;
  IF v_course_id IS NULL THEN RAISE EXCEPTION 'Adaptive question has no course'; END IF;

  INSERT INTO quiz_concept_mastery (
    user_id, course_id, concept_tag, correct_count, total_count, mastery_score, status
  ) VALUES (
    p_user_id, v_course_id, v_concept, CASE WHEN p_correct THEN 1 ELSE 0 END,
    1, p_mastery_after, p_mastery_status
  ) ON CONFLICT (user_id, course_id, concept_tag) DO UPDATE SET
    correct_count=quiz_concept_mastery.correct_count + CASE WHEN p_correct THEN 1 ELSE 0 END,
    total_count=quiz_concept_mastery.total_count + 1,
    mastery_score=p_mastery_after,
    status=p_mastery_status,
    last_practised_at=NOW();

  SELECT interval_step, due_at INTO v_queue_step, v_queue_due
  FROM quiz_review_queue WHERE user_id=p_user_id AND question_id=p_question_id FOR UPDATE;
  IF NOT FOUND THEN
    INSERT INTO quiz_review_queue (user_id, course_id, question_id, due_at, interval_step, last_result)
    VALUES (p_user_id, v_course_id, p_question_id, NOW() + INTERVAL '2 days', 0, p_correct);
  ELSIF v_queue_due <= NOW() THEN
    IF NOT p_correct THEN
      UPDATE quiz_review_queue SET due_at=NOW() + INTERVAL '2 days', interval_step=0,
        last_result=FALSE, last_reviewed_at=NOW()
      WHERE user_id=p_user_id AND question_id=p_question_id;
    ELSIF v_queue_step=0 THEN
      UPDATE quiz_review_queue SET due_at=NOW() + INTERVAL '7 days', interval_step=1,
        last_result=TRUE, last_reviewed_at=NOW()
      WHERE user_id=p_user_id AND question_id=p_question_id;
    ELSIF v_queue_step=1 THEN
      UPDATE quiz_review_queue SET due_at=NOW() + INTERVAL '30 days', interval_step=2,
        last_result=TRUE, last_reviewed_at=NOW()
      WHERE user_id=p_user_id AND question_id=p_question_id;
    ELSE
      DELETE FROM quiz_review_queue WHERE user_id=p_user_id AND question_id=p_question_id;
    END IF;
  END IF;

  UPDATE adaptive_practice_sessions SET
    state=p_next_state,
    status=p_session_status,
    completed_at=CASE WHEN p_session_status='active' THEN NULL ELSE NOW() END
  WHERE id=p_session_id;
  RETURN TRUE;
EXCEPTION WHEN unique_violation THEN
  RETURN FALSE;
END $$;
REVOKE ALL ON FUNCTION record_adaptive_practice_response FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION record_adaptive_practice_response TO service_role;
