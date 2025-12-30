-- Add unique constraint on (course_id, order_index) for lessons table
-- This enables upsert operations for the lesson sync feature

-- First, check for any duplicate entries and handle them if necessary
-- This query will show duplicates (run manually to check before applying constraint):
-- SELECT course_id, order_index, COUNT(*) 
-- FROM lessons 
-- GROUP BY course_id, order_index 
-- HAVING COUNT(*) > 1;

-- Add the unique constraint
ALTER TABLE lessons
ADD CONSTRAINT lessons_course_order_unique 
UNIQUE (course_id, order_index);

-- Add comment for documentation
COMMENT ON CONSTRAINT lessons_course_order_unique ON lessons IS 
'Ensures each lesson has a unique order_index within its course. Required for the file sync feature to work correctly.';

