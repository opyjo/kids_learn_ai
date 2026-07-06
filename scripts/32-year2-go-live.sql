-- Year 2 Go-Live: flip all 8 Year 2 term courses from "coming soon" to live.
-- Run in the Supabase SQL editor after the Year 2 lessons have been synced
-- (admin "Sync Lessons" button) and verified.
--
-- Prerequisite: the 8 course rows already exist (scripts/18-seed-year2-courses.sql).
-- This only changes their visibility.

UPDATE courses
SET is_coming_soon = false
WHERE slug IN (
  'year2-term-1-python-accelerated',
  'year2-term-2-loops-mastery',
  'year2-term-3-functions',
  'year2-term-4-data-structures',
  'year2-term-5-ai-deep-dive',
  'year2-term-6-apis',
  'year2-term-7-data-visualization',
  'year2-term-8-capstone'
);

-- Verify: all eight should now show is_coming_soon = false, ordered after Year 1.
SELECT slug, title, order_index, year_group, is_coming_soon
FROM courses
WHERE slug LIKE 'year2-term-%'
ORDER BY order_index;
