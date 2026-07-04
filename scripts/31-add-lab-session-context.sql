-- Add a context tag to lab_sessions so standalone-playground attempts are
-- never mixed into lesson-context analysis (research-integrity requirement).
--   'lesson'     : lab completed inside its lesson (Concept Lab tab)
--   'standalone' : lab completed from the /labs playground
-- Existing rows predate the playground, so the 'lesson' default is correct.

ALTER TABLE lab_sessions
  ADD COLUMN IF NOT EXISTS context TEXT NOT NULL DEFAULT 'lesson'
  CHECK (context IN ('lesson', 'standalone'));

CREATE INDEX IF NOT EXISTS idx_lab_sessions_context ON lab_sessions(context);

-- Recreate the gain view scoped to lesson-context sessions only, so the
-- baseline-vs-lab experiment numbers are never polluted by playground runs.
-- (Standalone within-lab gain is reported separately by the admin API.)
CREATE OR REPLACE VIEW concept_lab_gain
WITH (security_invoker = true) AS
SELECT
  lab_id,
  cohort,
  COUNT(*) AS n,
  AVG((predict_correct)::int)::numeric AS pre_correct_rate,
  AVG((apply_correct)::int)::numeric AS post_correct_rate,
  CASE
    WHEN AVG((predict_correct)::int) >= 1 THEN 0
    ELSE (AVG((apply_correct)::int) - AVG((predict_correct)::int))
         / (1 - AVG((predict_correct)::int))
  END AS normalized_gain,
  AVG((predict_misconception IS NOT NULL)::int)::numeric AS misconception_rate_predict,
  AVG((apply_misconception IS NOT NULL)::int)::numeric AS misconception_rate_apply,
  AVG(explain_rubric_score)::numeric AS avg_rubric_score
FROM lab_sessions
WHERE completed AND context = 'lesson'
GROUP BY lab_id, cohort;

COMMENT ON COLUMN lab_sessions.context IS 'Where the attempt happened: lesson (Concept Lab tab) or standalone (/labs playground). Keeps experiment data clean.';
