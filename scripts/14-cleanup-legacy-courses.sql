-- Migration: Clean up legacy courses
-- These old courses were replaced by the 12-level curriculum structure in script 11
-- They should be removed to avoid confusion

-- First, unlink any lessons that might still be connected to these old courses
UPDATE lessons 
SET course_id = NULL 
WHERE course_id IN (
  SELECT id FROM courses 
  WHERE slug IN ('python-foundations', 'ai-ml', 'web-development')
);

-- Delete the legacy courses
DELETE FROM courses 
WHERE slug IN ('python-foundations', 'ai-ml', 'web-development');

-- Verify: After this migration, you should have exactly 12 courses
-- Run: SELECT title, slug, year_group, order_index FROM courses ORDER BY order_index;
-- Expected: Levels 1-12 under "Year 1: Foundations" and "Year 2: Applied AI"

