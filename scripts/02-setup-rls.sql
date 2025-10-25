-- Row Level Security (RLS) Policies
-- This script sets up security policies to protect user data

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE code_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE completed_lessons ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Lessons policies
CREATE POLICY "Everyone can view lessons" ON lessons
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage lessons" ON lessons
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Student progress policies
CREATE POLICY "Students can view own progress" ON student_progress
  FOR SELECT USING (auth.uid() = student_id);

CREATE POLICY "Students can update own progress" ON student_progress
  FOR INSERT WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Students can modify own progress" ON student_progress
  FOR UPDATE USING (auth.uid() = student_id);

CREATE POLICY "Admins can view all progress" ON student_progress
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Code submissions policies
CREATE POLICY "Students can view own submissions" ON code_submissions
  FOR SELECT USING (auth.uid() = student_id);

CREATE POLICY "Students can create own submissions" ON code_submissions
  FOR INSERT WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Admins can view all submissions" ON code_submissions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Completed lessons policies
CREATE POLICY "Students can view own completed lessons" ON completed_lessons
  FOR SELECT USING (auth.uid() = student_id);

CREATE POLICY "Students can mark lessons complete" ON completed_lessons
  FOR INSERT WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Admins can view all completed lessons" ON completed_lessons
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
