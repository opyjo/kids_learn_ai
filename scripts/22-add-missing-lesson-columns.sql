-- Add missing columns to lessons table that are required by the sync function
-- Migration applied: 2026-01-05

-- Add is_premium column (boolean, defaults to false)
ALTER TABLE lessons
ADD COLUMN IF NOT EXISTS is_premium BOOLEAN DEFAULT FALSE;

-- Add solution_code column (text, nullable)
ALTER TABLE lessons
ADD COLUMN IF NOT EXISTS solution_code TEXT;

-- Add comments for documentation
COMMENT ON COLUMN lessons.is_premium IS 'Indicates if the lesson requires premium subscription';
COMMENT ON COLUMN lessons.solution_code IS 'Expected solution code for admin reference';

