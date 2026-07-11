-- Native quiz and live game system. Safe after or instead of migration 10.
CREATE TABLE IF NOT EXISTS quizzes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  quiz_type TEXT NOT NULL DEFAULT 'quick_check',
  status TEXT NOT NULL DEFAULT 'draft',
  passing_score INTEGER NOT NULL DEFAULT 67,
  time_limit_minutes INTEGER,
  is_active BOOLEAN NOT NULL DEFAULT FALSE,
  created_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS course_id UUID REFERENCES courses(id) ON DELETE CASCADE;
ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS quiz_type TEXT NOT NULL DEFAULT 'quick_check';
ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'draft';
ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS created_by UUID REFERENCES profiles(id) ON DELETE SET NULL;
ALTER TABLE quizzes ALTER COLUMN lesson_id DROP NOT NULL;
ALTER TABLE quizzes DROP CONSTRAINT IF EXISTS quizzes_quiz_type_check;
ALTER TABLE quizzes ADD CONSTRAINT quizzes_quiz_type_check CHECK (quiz_type IN ('quick_check','term_finale'));
ALTER TABLE quizzes DROP CONSTRAINT IF EXISTS quizzes_status_check;
ALTER TABLE quizzes ADD CONSTRAINT quizzes_status_check CHECK (status IN ('draft','published','archived'));
ALTER TABLE quizzes DROP CONSTRAINT IF EXISTS quizzes_scope_check;
ALTER TABLE quizzes ADD CONSTRAINT quizzes_scope_check CHECK (
  (quiz_type = 'quick_check' AND lesson_id IS NOT NULL) OR
  (quiz_type = 'term_finale' AND course_id IS NOT NULL)
);

CREATE TABLE IF NOT EXISTS quiz_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_id UUID NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  question_type TEXT NOT NULL DEFAULT 'multiple_choice',
  options JSONB NOT NULL DEFAULT '[]',
  correct_answer JSONB NOT NULL,
  explanation TEXT,
  hint TEXT,
  misconception_tag TEXT,
  points INTEGER NOT NULL DEFAULT 1000,
  order_index INTEGER NOT NULL DEFAULT 0,
  time_limit_seconds INTEGER NOT NULL DEFAULT 30,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE quiz_questions ADD COLUMN IF NOT EXISTS hint TEXT;
ALTER TABLE quiz_questions ADD COLUMN IF NOT EXISTS misconception_tag TEXT;
ALTER TABLE quiz_questions ADD COLUMN IF NOT EXISTS time_limit_seconds INTEGER NOT NULL DEFAULT 30;
ALTER TABLE quiz_questions DROP CONSTRAINT IF EXISTS quiz_questions_question_type_check;
ALTER TABLE quiz_questions ADD CONSTRAINT quiz_questions_question_type_check CHECK (
  question_type IN ('multiple_choice','true_false','code_output','code_ordering')
);
-- Existing installations stored correct_answer as TEXT. Convert it into valid JSON strings.
DO $$ BEGIN
  IF (SELECT data_type FROM information_schema.columns WHERE table_name='quiz_questions' AND column_name='correct_answer') = 'text' THEN
    ALTER TABLE quiz_questions ALTER COLUMN correct_answer TYPE JSONB USING to_jsonb(correct_answer);
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS quiz_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  quiz_id UUID NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
  score INTEGER NOT NULL DEFAULT 0,
  max_score INTEGER NOT NULL DEFAULT 0,
  percentage INTEGER NOT NULL DEFAULT 0,
  passed BOOLEAN NOT NULL DEFAULT FALSE,
  answers JSONB NOT NULL DEFAULT '[]',
  time_taken_seconds INTEGER,
  attempt_number INTEGER NOT NULL DEFAULT 1,
  is_official BOOLEAN NOT NULL DEFAULT FALSE,
  completed_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE quiz_attempts ADD COLUMN IF NOT EXISTS attempt_number INTEGER NOT NULL DEFAULT 1;
ALTER TABLE quiz_attempts ADD COLUMN IF NOT EXISTS is_official BOOLEAN NOT NULL DEFAULT FALSE;

CREATE TABLE IF NOT EXISTS quiz_games (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_id UUID NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
  host_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  code TEXT NOT NULL UNIQUE CHECK (char_length(code) = 6),
  status TEXT NOT NULL DEFAULT 'lobby' CHECK (status IN ('lobby','question','review','paused','finished')),
  current_question_index INTEGER NOT NULL DEFAULT -1,
  question_started_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  ended_at TIMESTAMPTZ
);
CREATE TABLE IF NOT EXISTS quiz_game_teams (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  game_id UUID NOT NULL REFERENCES quiz_games(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  UNIQUE(game_id, name)
);
CREATE TABLE IF NOT EXISTS quiz_game_players (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  game_id UUID NOT NULL REFERENCES quiz_games(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  team_id UUID REFERENCES quiz_game_teams(id) ON DELETE SET NULL,
  display_name TEXT NOT NULL,
  score INTEGER NOT NULL DEFAULT 0,
  correct_answers INTEGER NOT NULL DEFAULT 0,
  total_response_ms BIGINT NOT NULL DEFAULT 0,
  fifty_fifty_available BOOLEAN NOT NULL DEFAULT TRUE,
  hint_available BOOLEAN NOT NULL DEFAULT TRUE,
  second_chance_available BOOLEAN NOT NULL DEFAULT TRUE,
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(game_id, user_id)
);
CREATE TABLE IF NOT EXISTS quiz_game_answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  game_id UUID NOT NULL REFERENCES quiz_games(id) ON DELETE CASCADE,
  player_id UUID NOT NULL REFERENCES quiz_game_players(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES quiz_questions(id) ON DELETE CASCADE,
  answer JSONB NOT NULL,
  correct BOOLEAN NOT NULL,
  points INTEGER NOT NULL DEFAULT 0,
  time_taken_ms INTEGER NOT NULL DEFAULT 0,
  power_up TEXT,
  attempt_number INTEGER NOT NULL DEFAULT 1,
  answered_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(game_id, player_id, question_id, attempt_number)
);

CREATE INDEX IF NOT EXISTS idx_quizzes_lesson ON quizzes(lesson_id);
CREATE INDEX IF NOT EXISTS idx_quizzes_course ON quizzes(course_id);
CREATE INDEX IF NOT EXISTS idx_questions_quiz_order ON quiz_questions(quiz_id, order_index);
CREATE INDEX IF NOT EXISTS idx_attempts_user_quiz ON quiz_attempts(user_id, quiz_id);
CREATE INDEX IF NOT EXISTS idx_game_players_game ON quiz_game_players(game_id);
CREATE INDEX IF NOT EXISTS idx_game_answers_game_question ON quiz_game_answers(game_id, question_id);

ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_games ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_game_teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_game_players ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_game_answers ENABLE ROW LEVEL SECURITY;

-- Remove the old policies that exposed answers to every visitor.
DROP POLICY IF EXISTS "Anyone can view active quizzes" ON quizzes;
DROP POLICY IF EXISTS "Anyone can view quiz questions" ON quiz_questions;
DROP POLICY IF EXISTS "Admins can manage quizzes" ON quizzes;
DROP POLICY IF EXISTS "Admins can manage quiz questions" ON quiz_questions;
DROP POLICY IF EXISTS "Admins manage quizzes" ON quizzes;
DROP POLICY IF EXISTS "Admins manage questions" ON quiz_questions;
CREATE POLICY "Admins manage quizzes" ON quizzes FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id=auth.uid() AND role='admin')
) WITH CHECK (EXISTS (SELECT 1 FROM profiles WHERE id=auth.uid() AND role='admin'));
CREATE POLICY "Admins manage questions" ON quiz_questions FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id=auth.uid() AND role='admin')
) WITH CHECK (EXISTS (SELECT 1 FROM profiles WHERE id=auth.uid() AND role='admin'));
DROP POLICY IF EXISTS "Users can view own quiz attempts" ON quiz_attempts;
DROP POLICY IF EXISTS "Users can create own quiz attempts" ON quiz_attempts;
DROP POLICY IF EXISTS "Admins can view all quiz attempts" ON quiz_attempts;
DROP POLICY IF EXISTS "Users view own attempts" ON quiz_attempts;
DROP POLICY IF EXISTS "Admins view attempts" ON quiz_attempts;
CREATE POLICY "Users view own attempts" ON quiz_attempts FOR SELECT USING (auth.uid()=user_id);
CREATE POLICY "Admins view attempts" ON quiz_attempts FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id=auth.uid() AND role='admin')
);
-- Writes and question delivery happen only through authenticated server routes.

CREATE OR REPLACE FUNCTION can_view_quiz_game(p_game_id UUID)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM quiz_games g LEFT JOIN quiz_game_players p ON p.game_id=g.id
    WHERE g.id=p_game_id AND (g.host_id=auth.uid() OR p.user_id=auth.uid())
  )
$$;
REVOKE ALL ON FUNCTION can_view_quiz_game FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION can_view_quiz_game TO authenticated;
DROP POLICY IF EXISTS "Game participants view game state" ON quiz_games;
DROP POLICY IF EXISTS "Game participants view teams" ON quiz_game_teams;
DROP POLICY IF EXISTS "Game participants view players" ON quiz_game_players;
CREATE POLICY "Game participants view game state" ON quiz_games FOR SELECT USING (can_view_quiz_game(id));
CREATE POLICY "Game participants view teams" ON quiz_game_teams FOR SELECT USING (can_view_quiz_game(game_id));
CREATE POLICY "Game participants view players" ON quiz_game_players FOR SELECT USING (can_view_quiz_game(game_id));

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname='supabase_realtime' AND tablename='quiz_games') THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE quiz_games;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname='supabase_realtime' AND tablename='quiz_game_teams') THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE quiz_game_teams;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname='supabase_realtime' AND tablename='quiz_game_players') THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE quiz_game_players;
  END IF;
END $$;

-- Service-role-only atomic answer recording. The API computes correctness from
-- protected answer keys, then this function inserts and increments exactly once.
CREATE OR REPLACE FUNCTION record_live_quiz_answer(
  p_game_id UUID, p_player_id UUID, p_question_id UUID, p_answer JSONB,
  p_correct BOOLEAN, p_points INTEGER, p_time_taken_ms INTEGER,
  p_power_up TEXT, p_attempt_number INTEGER
) RETURNS BOOLEAN LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO quiz_game_answers (
    game_id, player_id, question_id, answer, correct, points,
    time_taken_ms, power_up, attempt_number
  ) VALUES (
    p_game_id, p_player_id, p_question_id, p_answer, p_correct, p_points,
    p_time_taken_ms, p_power_up, p_attempt_number
  );
  UPDATE quiz_game_players SET
    score = score + p_points,
    correct_answers = correct_answers + CASE WHEN p_correct THEN 1 ELSE 0 END,
    total_response_ms = total_response_ms + p_time_taken_ms
  WHERE id = p_player_id AND game_id = p_game_id;
  RETURN TRUE;
EXCEPTION WHEN unique_violation THEN
  RETURN FALSE;
END $$;
REVOKE ALL ON FUNCTION record_live_quiz_answer FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION record_live_quiz_answer TO service_role;
