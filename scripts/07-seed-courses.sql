-- Seed courses data and link existing lessons
-- This creates the two courses and associates all existing lessons with Python Foundations

-- Insert Course 1: Python Foundations for AI
INSERT INTO courses (title, description, slug, order_index, age_range) 
VALUES (
  'Python Foundations for AI',
  'Master Python programming fundamentals to prepare for AI development',
  'python-foundations',
  1,
  '9-10'
) ON CONFLICT (slug) DO NOTHING;

-- Insert Course 2: AI & Machine Learning
INSERT INTO courses (title, description, slug, order_index, age_range)
VALUES (
  'AI & Machine Learning',
  'Explore AI concepts, train models, and build intelligent applications',
  'ai-ml',
  2,
  '9-10'
) ON CONFLICT (slug) DO NOTHING;

-- Link all existing lessons (with no course_id) to Python Foundations course
UPDATE lessons 
SET course_id = (SELECT id FROM courses WHERE slug = 'python-foundations')
WHERE course_id IS NULL;

-- Verify the update
-- You can run this query to check: SELECT COUNT(*) FROM lessons WHERE course_id IS NOT NULL;

