-- Spaced review queue and per-concept mastery tracking.
ALTER TABLE quiz_questions ADD COLUMN IF NOT EXISTS concept_tag TEXT;
UPDATE quiz_questions SET concept_tag = 'general' WHERE concept_tag IS NULL OR btrim(concept_tag) = '';
ALTER TABLE quiz_questions ALTER COLUMN concept_tag SET DEFAULT 'general';
ALTER TABLE quiz_questions ALTER COLUMN concept_tag SET NOT NULL;

CREATE TABLE IF NOT EXISTS quiz_concept_mastery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  concept_tag TEXT NOT NULL,
  correct_count INTEGER NOT NULL DEFAULT 0,
  total_count INTEGER NOT NULL DEFAULT 0,
  mastery_score INTEGER NOT NULL DEFAULT 0 CHECK (mastery_score BETWEEN 0 AND 100),
  status TEXT NOT NULL DEFAULT 'learning' CHECK (status IN ('learning','practising','mastered')),
  last_practised_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, course_id, concept_tag)
);

CREATE TABLE IF NOT EXISTS quiz_review_queue (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES quiz_questions(id) ON DELETE CASCADE,
  due_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '2 days'),
  interval_step SMALLINT NOT NULL DEFAULT 0 CHECK (interval_step BETWEEN 0 AND 2),
  last_result BOOLEAN,
  last_reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, question_id)
);

CREATE INDEX IF NOT EXISTS idx_quiz_mastery_user ON quiz_concept_mastery(user_id, course_id);
CREATE INDEX IF NOT EXISTS idx_quiz_review_due ON quiz_review_queue(user_id, due_at);

ALTER TABLE quiz_concept_mastery ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_review_queue ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Students view own concept mastery" ON quiz_concept_mastery;
DROP POLICY IF EXISTS "Admins view concept mastery" ON quiz_concept_mastery;
DROP POLICY IF EXISTS "Students view own review queue" ON quiz_review_queue;
DROP POLICY IF EXISTS "Admins view review queues" ON quiz_review_queue;
CREATE POLICY "Students view own concept mastery" ON quiz_concept_mastery
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins view concept mastery" ON quiz_concept_mastery
  FOR SELECT USING (EXISTS (SELECT 1 FROM profiles WHERE id=auth.uid() AND role='admin'));
CREATE POLICY "Students view own review queue" ON quiz_review_queue
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins view review queues" ON quiz_review_queue
  FOR SELECT USING (EXISTS (SELECT 1 FROM profiles WHERE id=auth.uid() AND role='admin'));

CREATE OR REPLACE FUNCTION record_quiz_learning(
  p_user_id UUID, p_question_id UUID, p_correct BOOLEAN, p_is_review BOOLEAN DEFAULT FALSE
) RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_course_id UUID;
  v_concept TEXT;
  v_queue quiz_review_queue%ROWTYPE;
BEGIN
  SELECT COALESCE(q.course_id, l.course_id), qq.concept_tag
  INTO v_course_id, v_concept
  FROM quiz_questions qq
  JOIN quizzes q ON q.id = qq.quiz_id
  LEFT JOIN lessons l ON l.id = q.lesson_id
  WHERE qq.id = p_question_id;

  IF v_course_id IS NULL THEN RETURN; END IF;

  INSERT INTO quiz_concept_mastery (
    user_id, course_id, concept_tag, correct_count, total_count, mastery_score, status
  ) VALUES (
    p_user_id, v_course_id, COALESCE(NULLIF(v_concept,''),'general'),
    CASE WHEN p_correct THEN 1 ELSE 0 END, 1,
    CASE WHEN p_correct THEN 100 ELSE 0 END, 'learning'
  )
  ON CONFLICT (user_id, course_id, concept_tag) DO UPDATE SET
    correct_count = quiz_concept_mastery.correct_count + CASE WHEN p_correct THEN 1 ELSE 0 END,
    total_count = quiz_concept_mastery.total_count + 1,
    mastery_score = ROUND(quiz_concept_mastery.mastery_score * 0.7 + CASE WHEN p_correct THEN 30 ELSE 0 END),
    status = CASE
      WHEN quiz_concept_mastery.total_count + 1 >= 3
       AND ROUND(quiz_concept_mastery.mastery_score * 0.7 + CASE WHEN p_correct THEN 30 ELSE 0 END) >= 80
        THEN 'mastered'
      WHEN ROUND(quiz_concept_mastery.mastery_score * 0.7 + CASE WHEN p_correct THEN 30 ELSE 0 END) >= 50
        THEN 'practising'
      ELSE 'learning'
    END,
    last_practised_at = NOW();

  SELECT * INTO v_queue FROM quiz_review_queue
  WHERE user_id=p_user_id AND question_id=p_question_id FOR UPDATE;

  IF NOT p_is_review THEN
    INSERT INTO quiz_review_queue (user_id, course_id, question_id, due_at, interval_step, last_result)
    VALUES (p_user_id, v_course_id, p_question_id, NOW() + INTERVAL '2 days', 0, p_correct)
    ON CONFLICT (user_id, question_id) DO UPDATE SET
      due_at = CASE WHEN p_correct THEN LEAST(quiz_review_queue.due_at, NOW() + INTERVAL '2 days') ELSE NOW() + INTERVAL '2 days' END,
      interval_step = CASE WHEN p_correct THEN quiz_review_queue.interval_step ELSE 0 END,
      last_result = p_correct;
  ELSIF NOT p_correct THEN
    UPDATE quiz_review_queue SET due_at=NOW() + INTERVAL '2 days', interval_step=0,
      last_result=FALSE, last_reviewed_at=NOW()
    WHERE user_id=p_user_id AND question_id=p_question_id;
  ELSIF v_queue.interval_step = 0 THEN
    UPDATE quiz_review_queue SET due_at=NOW() + INTERVAL '7 days', interval_step=1,
      last_result=TRUE, last_reviewed_at=NOW()
    WHERE user_id=p_user_id AND question_id=p_question_id;
  ELSIF v_queue.interval_step = 1 THEN
    UPDATE quiz_review_queue SET due_at=NOW() + INTERVAL '30 days', interval_step=2,
      last_result=TRUE, last_reviewed_at=NOW()
    WHERE user_id=p_user_id AND question_id=p_question_id;
  ELSE
    DELETE FROM quiz_review_queue WHERE user_id=p_user_id AND question_id=p_question_id;
  END IF;
END $$;
REVOKE ALL ON FUNCTION record_quiz_learning FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION record_quiz_learning TO service_role;
