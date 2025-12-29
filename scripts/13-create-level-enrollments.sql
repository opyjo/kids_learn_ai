-- Create level_enrollments table for tracking student access to specific levels
-- This replaces the subscription-based access model with per-level enrollment

CREATE TABLE IF NOT EXISTS level_enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  enrolled_by UUID REFERENCES profiles(id) ON DELETE SET NULL,  -- Admin who granted access
  notes TEXT,  -- Optional admin notes (e.g., "Paid via e-transfer Jan 15")
  UNIQUE(student_id, course_id)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_level_enrollments_student ON level_enrollments(student_id);
CREATE INDEX IF NOT EXISTS idx_level_enrollments_course ON level_enrollments(course_id);
CREATE INDEX IF NOT EXISTS idx_level_enrollments_enrolled_at ON level_enrollments(enrolled_at);

-- Enable Row Level Security
ALTER TABLE level_enrollments ENABLE ROW LEVEL SECURITY;

-- Students can view their own enrollments
CREATE POLICY "Students can view own enrollments" ON level_enrollments
  FOR SELECT USING (auth.uid() = student_id);

-- Admins can view all enrollments
CREATE POLICY "Admins can view all enrollments" ON level_enrollments
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can insert enrollments (grant access)
CREATE POLICY "Admins can grant enrollments" ON level_enrollments
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can delete enrollments (revoke access)
CREATE POLICY "Admins can revoke enrollments" ON level_enrollments
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can update enrollments (edit notes)
CREATE POLICY "Admins can update enrollments" ON level_enrollments
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Add comments for documentation
COMMENT ON TABLE level_enrollments IS 'Tracks which students have access to which levels (courses). Replaces subscription-based access.';
COMMENT ON COLUMN level_enrollments.student_id IS 'The student who has been granted access';
COMMENT ON COLUMN level_enrollments.course_id IS 'The level (course) the student has access to';
COMMENT ON COLUMN level_enrollments.enrolled_at IS 'When access was granted';
COMMENT ON COLUMN level_enrollments.enrolled_by IS 'Admin who granted the access';
COMMENT ON COLUMN level_enrollments.notes IS 'Optional notes (e.g., payment method, special circumstances)';

