-- Migration: Add ai_activities column to lessons table
-- This column stores AI-related activities content for each lesson
-- Used for the "AI Lab" tab in the lesson viewer

-- Add the ai_activities column to the lessons table
ALTER TABLE lessons ADD COLUMN IF NOT EXISTS ai_activities TEXT;

-- Add a comment to describe the column
COMMENT ON COLUMN lessons.ai_activities IS 'AI-related activities content including opening hooks, AI playground links, discussion questions, and closing connections';

