-- Add is_coming_soon column to courses table
-- This allows marking courses as coming soon before content is added

ALTER TABLE courses ADD COLUMN IF NOT EXISTS is_coming_soon BOOLEAN DEFAULT FALSE;

-- Add comment
COMMENT ON COLUMN courses.is_coming_soon IS 'Indicates if the course is coming soon (content not yet available)';

-- Insert Course 3: Web Development
INSERT INTO courses (title, description, slug, order_index, age_range, is_coming_soon) 
VALUES (
  'Web Development',
  'Build websites and web applications',
  'web-development',
  3,
  '9-10',
  true
) ON CONFLICT (slug) DO UPDATE SET is_coming_soon = true;

-- Verify the update
-- You can run this query to check: SELECT title, slug, is_coming_soon FROM courses ORDER BY order_index;

