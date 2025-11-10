-- Create courses table to group lessons by course
-- This allows organizing lessons into "Python Foundations for AI" and "AI & Machine Learning"

CREATE TABLE IF NOT EXISTS courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  slug TEXT UNIQUE NOT NULL,
  order_index INTEGER NOT NULL,
  age_range TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_courses_slug ON courses(slug);
CREATE INDEX IF NOT EXISTS idx_courses_order ON courses(order_index);

-- Enable Row Level Security
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- Everyone can view courses
CREATE POLICY "Everyone can view courses" ON courses
  FOR SELECT USING (true);

-- Only admins can manage courses
CREATE POLICY "Admins can manage courses" ON courses
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Add comment to table
COMMENT ON TABLE courses IS 'Stores course information to group lessons by curriculum';
COMMENT ON COLUMN courses.slug IS 'URL-friendly identifier for the course (e.g., python-foundations)';
COMMENT ON COLUMN courses.age_range IS 'Target age range for the course (e.g., 9-10)';

