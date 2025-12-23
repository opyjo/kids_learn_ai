-- Create trinket_submissions table for student assignment submissions
-- This migration was applied via Supabase MCP

CREATE TABLE IF NOT EXISTS trinket_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  trinket_url TEXT NOT NULL,
  status TEXT CHECK (status IN ('submitted', 'reviewed', 'graded')) DEFAULT 'submitted',
  feedback TEXT,
  grade TEXT,
  reviewed_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
  reviewed_at TIMESTAMP WITH TIME ZONE,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(student_id, lesson_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_trinket_submissions_student ON trinket_submissions(student_id);
CREATE INDEX IF NOT EXISTS idx_trinket_submissions_lesson ON trinket_submissions(lesson_id);
CREATE INDEX IF NOT EXISTS idx_trinket_submissions_status ON trinket_submissions(status);

-- Enable Row Level Security
ALTER TABLE trinket_submissions ENABLE ROW LEVEL SECURITY;

-- Students can view their own submissions
CREATE POLICY "Students can view own submissions" ON trinket_submissions
  FOR SELECT USING (auth.uid() = student_id);

-- Students can insert their own submissions
CREATE POLICY "Students can insert own submissions" ON trinket_submissions
  FOR INSERT WITH CHECK (auth.uid() = student_id);

-- Students can update their own submissions (before graded)
CREATE POLICY "Students can update own submissions" ON trinket_submissions
  FOR UPDATE USING (auth.uid() = student_id AND status = 'submitted');

-- Admins can view all submissions
CREATE POLICY "Admins can view all submissions" ON trinket_submissions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can update all submissions (for feedback)
CREATE POLICY "Admins can update all submissions" ON trinket_submissions
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Add comments
COMMENT ON TABLE trinket_submissions IS 'Stores student Trinket embed submissions for lesson assignments';
COMMENT ON COLUMN trinket_submissions.trinket_url IS 'The Trinket embed URL (e.g., https://trinket.io/embed/python/abc123)';
COMMENT ON COLUMN trinket_submissions.status IS 'Submission status: submitted, reviewed, or graded';
COMMENT ON COLUMN trinket_submissions.feedback IS 'Teacher feedback comments';
COMMENT ON COLUMN trinket_submissions.grade IS 'Optional grade (A, B, C or numeric)';

