-- Add course_id foreign key to lessons table
-- This links lessons to their parent course

-- Add the course_id column (nullable initially for migration)
ALTER TABLE lessons ADD COLUMN IF NOT EXISTS course_id UUID REFERENCES courses(id) ON DELETE CASCADE;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_lessons_course_id ON lessons(course_id);
CREATE INDEX IF NOT EXISTS idx_lessons_course_order ON lessons(course_id, order_index);

-- Add comment
COMMENT ON COLUMN lessons.course_id IS 'Foreign key linking lesson to its parent course';

