-- Create class_schedules table for live-class scheduling
-- One row per weekly recurring class slot (a course can have multiple cohorts,
-- e.g. Ages 9-10 on Mondays and Ages 11-13 on Wednesdays).
-- "Next occurrence" is computed at read time in the app (lib/schedule-utils.ts).

CREATE TABLE IF NOT EXISTS class_schedules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  label TEXT,  -- e.g. 'Ages 9-10 Cohort'
  day_of_week SMALLINT NOT NULL CHECK (day_of_week BETWEEN 0 AND 6),  -- 0=Sunday
  start_time TIME NOT NULL,  -- local wall-clock time in the schedule's timezone
  duration_minutes INTEGER NOT NULL DEFAULT 60,
  timezone TEXT NOT NULL DEFAULT 'America/Toronto',  -- IANA timezone name
  meeting_link TEXT,  -- Zoom URL; sensitive, only visible to enrolled students/admins
  meeting_notes TEXT,  -- e.g. passcode, 'join 5 minutes early'
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_class_schedules_course ON class_schedules(course_id);

-- Enable Row Level Security
ALTER TABLE class_schedules ENABLE ROW LEVEL SECURITY;

-- Enrolled students can view schedules for their levels (includes meeting_link).
-- Intentionally NO public SELECT policy: the meeting link must never be
-- publicly readable. Public pages show day/time only via the server admin
-- client with an explicit non-sensitive column list.
CREATE POLICY "Enrolled students can view course schedules" ON class_schedules
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM level_enrollments
      WHERE level_enrollments.course_id = class_schedules.course_id
        AND level_enrollments.student_id = auth.uid()
    )
  );

-- Admins can view all schedules
CREATE POLICY "Admins can view all schedules" ON class_schedules
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can create schedules
CREATE POLICY "Admins can create schedules" ON class_schedules
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can update schedules
CREATE POLICY "Admins can update schedules" ON class_schedules
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can delete schedules
CREATE POLICY "Admins can delete schedules" ON class_schedules
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Add comments for documentation
COMMENT ON TABLE class_schedules IS 'Weekly recurring live-class slots per course/cohort. Next occurrence computed in app code.';
COMMENT ON COLUMN class_schedules.label IS 'Cohort label shown to students, e.g. Ages 9-10 Cohort';
COMMENT ON COLUMN class_schedules.day_of_week IS 'Day of week, 0=Sunday .. 6=Saturday';
COMMENT ON COLUMN class_schedules.start_time IS 'Local wall-clock start time in the schedule timezone';
COMMENT ON COLUMN class_schedules.timezone IS 'IANA timezone name, e.g. America/Toronto';
COMMENT ON COLUMN class_schedules.meeting_link IS 'Zoom/meeting URL; visible only to enrolled students and admins via RLS';
COMMENT ON COLUMN class_schedules.is_active IS 'Inactive schedules are hidden from students';
