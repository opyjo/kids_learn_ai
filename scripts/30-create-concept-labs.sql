-- Concept Labs telemetry + validation harness (Phase 3).
-- Persists one row per completed lab attempt plus its interaction event stream,
-- and exposes an aggregate gain view for the baseline-vs-lab experiment.
-- See docs/RnD/novel-pedagogy-implementation.md §7-8 and lib/concept-labs/.
--
-- NOTE: run this in the Supabase SQL editor. Labs themselves live in the code
-- registry (lib/concept-labs/registry.ts), so there is no concept_labs table
-- yet; lab_id is stored as text and joins to the registry in app code.

-- One row per completed attempt. Probe answers and lab counts are denormalized
-- onto the session (one attempt = one row) for simple, join-free analysis.
CREATE TABLE IF NOT EXISTS lab_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lab_id TEXT NOT NULL,
  cohort TEXT NOT NULL CHECK (cohort IN ('baseline', 'labs-v1')),
  seed BIGINT NOT NULL,
  -- Predict probe (the pre-measure)
  predict_option TEXT,
  predict_correct BOOLEAN,
  predict_misconception TEXT,
  -- Apply probe (the post-measure)
  apply_option TEXT,
  apply_correct BOOLEAN,
  apply_misconception TEXT,
  -- Explain phase (labs arm only)
  explain_text TEXT,
  explain_rubric_score SMALLINT CHECK (explain_rubric_score BETWEEN 0 AND 2),
  -- Play-phase activity
  trained_sample_count INTEGER NOT NULL DEFAULT 0,
  test_count INTEGER NOT NULL DEFAULT 0,
  test_correct_count INTEGER NOT NULL DEFAULT 0,
  completed BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_lab_sessions_lab_cohort ON lab_sessions(lab_id, cohort);
CREATE INDEX IF NOT EXISTS idx_lab_sessions_user ON lab_sessions(user_id);

-- Append-only interaction stream. t_ms is milliseconds since session start
-- (no wall-clock, to avoid leaking timing PII); payload is the LabAction /
-- phase transition, so a session can be replayed for analysis.
CREATE TABLE IF NOT EXISTS lab_events (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  session_id UUID NOT NULL REFERENCES lab_sessions(id) ON DELETE CASCADE,
  t_ms INTEGER NOT NULL,
  payload JSONB NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_lab_events_session ON lab_events(session_id);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
ALTER TABLE lab_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE lab_events ENABLE ROW LEVEL SECURITY;

-- Children can record and read only their own sessions.
CREATE POLICY "Users insert own lab sessions" ON lab_sessions
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users view own lab sessions" ON lab_sessions
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Admins view all lab sessions" ON lab_sessions
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Events are readable/insertable only for a session the user owns.
CREATE POLICY "Users insert own lab events" ON lab_events
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM lab_sessions s
      WHERE s.id = lab_events.session_id AND s.user_id = auth.uid()
    )
  );

CREATE POLICY "Users view own lab events" ON lab_events
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM lab_sessions s
      WHERE s.id = lab_events.session_id AND s.user_id = auth.uid()
    )
  );

CREATE POLICY "Admins view all lab events" ON lab_events
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ---------------------------------------------------------------------------
-- Analysis convenience view (mirrors lib/concept-labs/analysis.ts).
-- security_invoker = true so it respects the caller's RLS: admins see the full
-- picture, a child only their own rows. The app's admin report route computes
-- the same numbers in TypeScript; this view is for ad-hoc SQL.
-- ---------------------------------------------------------------------------
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
WHERE completed
GROUP BY lab_id, cohort;

COMMENT ON TABLE lab_sessions IS 'One row per completed concept-lab attempt; probe answers denormalized for analysis. See lib/concept-labs.';
COMMENT ON TABLE lab_events IS 'Append-only interaction stream per lab session (t_ms since start); enables replay.';
COMMENT ON VIEW concept_lab_gain IS 'Per lab_id/cohort outcome aggregates (Hake normalized gain, misconception rates, rubric). Respects caller RLS.';
