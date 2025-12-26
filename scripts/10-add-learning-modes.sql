-- Migration: Add Learning Modes System
-- This migration adds support for dual learning modes (self-paced and tutor-based)
-- along with supporting features: bookmarks, notes, quizzes, and coding challenges

-- ================================================
-- 1. Add learning_mode column to profiles
-- ================================================
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS learning_mode TEXT DEFAULT 'self_paced' 
CHECK (learning_mode IN ('self_paced', 'tutor_based'));

COMMENT ON COLUMN profiles.learning_mode IS 'User preferred learning mode: self_paced or tutor_based';

-- ================================================
-- 2. Bookmarks table
-- ================================================
CREATE TABLE IF NOT EXISTS bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

CREATE INDEX IF NOT EXISTS idx_bookmarks_user_id ON bookmarks(user_id);

ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own bookmarks" ON bookmarks
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own bookmarks" ON bookmarks
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own bookmarks" ON bookmarks
  FOR DELETE USING (auth.uid() = user_id);

COMMENT ON TABLE bookmarks IS 'Stores user bookmarked lessons for quick access';

-- ================================================
-- 3. Lesson Notes table
-- ================================================
CREATE TABLE IF NOT EXISTS lesson_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  content TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

CREATE INDEX IF NOT EXISTS idx_lesson_notes_user_id ON lesson_notes(user_id);
CREATE INDEX IF NOT EXISTS idx_lesson_notes_lesson_id ON lesson_notes(lesson_id);

ALTER TABLE lesson_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own notes" ON lesson_notes
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own notes" ON lesson_notes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own notes" ON lesson_notes
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own notes" ON lesson_notes
  FOR DELETE USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION update_lesson_notes_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_lesson_notes_updated_at
  BEFORE UPDATE ON lesson_notes
  FOR EACH ROW
  EXECUTE FUNCTION update_lesson_notes_updated_at();

COMMENT ON TABLE lesson_notes IS 'Stores per-lesson notes for self-paced learning';

-- ================================================
-- 4. Quizzes tables
-- ================================================
CREATE TABLE IF NOT EXISTS quizzes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  passing_score INTEGER DEFAULT 70 CHECK (passing_score >= 0 AND passing_score <= 100),
  time_limit_minutes INTEGER,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS quiz_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_id UUID NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  question_type TEXT DEFAULT 'multiple_choice' CHECK (question_type IN ('multiple_choice', 'true_false', 'code_output')),
  options JSONB NOT NULL DEFAULT '[]'::jsonb,
  correct_answer TEXT NOT NULL,
  explanation TEXT,
  points INTEGER DEFAULT 10,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS quiz_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  quiz_id UUID NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
  score INTEGER NOT NULL,
  max_score INTEGER NOT NULL,
  percentage INTEGER NOT NULL,
  passed BOOLEAN NOT NULL,
  answers JSONB NOT NULL DEFAULT '[]'::jsonb,
  time_taken_seconds INTEGER,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_quizzes_lesson_id ON quizzes(lesson_id);
CREATE INDEX IF NOT EXISTS idx_quiz_questions_quiz_id ON quiz_questions(quiz_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user_id ON quiz_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_quiz_id ON quiz_attempts(quiz_id);

ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active quizzes" ON quizzes
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage quizzes" ON quizzes
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Anyone can view quiz questions" ON quiz_questions
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM quizzes WHERE id = quiz_id AND is_active = true)
  );

CREATE POLICY "Admins can manage quiz questions" ON quiz_questions
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Users can view own quiz attempts" ON quiz_attempts
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own quiz attempts" ON quiz_attempts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can view all quiz attempts" ON quiz_attempts
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

COMMENT ON TABLE quizzes IS 'End-of-lesson quizzes for self-assessment';
COMMENT ON TABLE quiz_questions IS 'Questions belonging to quizzes';
COMMENT ON TABLE quiz_attempts IS 'User attempts at quizzes with scores';

-- ================================================
-- 5. Coding Challenges tables
-- ================================================
CREATE TABLE IF NOT EXISTS coding_challenges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  instructions TEXT,
  starter_code TEXT DEFAULT '',
  solution_code TEXT,
  hints JSONB DEFAULT '[]'::jsonb,
  test_cases JSONB NOT NULL DEFAULT '[]'::jsonb,
  difficulty TEXT DEFAULT 'easy' CHECK (difficulty IN ('easy', 'medium', 'hard')),
  points INTEGER DEFAULT 50,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS challenge_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  challenge_id UUID NOT NULL REFERENCES coding_challenges(id) ON DELETE CASCADE,
  code TEXT NOT NULL,
  output TEXT,
  tests_passed INTEGER DEFAULT 0,
  total_tests INTEGER DEFAULT 0,
  passed BOOLEAN DEFAULT false,
  hints_used INTEGER DEFAULT 0,
  attempt_number INTEGER DEFAULT 1,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_coding_challenges_lesson_id ON coding_challenges(lesson_id);
CREATE INDEX IF NOT EXISTS idx_challenge_attempts_user_id ON challenge_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_challenge_attempts_challenge_id ON challenge_attempts(challenge_id);

ALTER TABLE coding_challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenge_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active challenges" ON coding_challenges
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage challenges" ON coding_challenges
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Users can view own challenge attempts" ON challenge_attempts
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own challenge attempts" ON challenge_attempts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own challenge attempts" ON challenge_attempts
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all challenge attempts" ON challenge_attempts
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

COMMENT ON TABLE coding_challenges IS 'Practice coding challenges linked to lessons';
COMMENT ON TABLE challenge_attempts IS 'User attempts at coding challenges';


