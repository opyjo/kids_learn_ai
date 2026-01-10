-- Migration: Restrict access to premium lessons
-- Only non-premium lessons are public. Premium lessons require enrollment.

-- 1. Drop the existing overly broad policy
DROP POLICY IF EXISTS "Everyone can view lessons" ON lessons;

-- 2. Create new policy for non-premium lessons (Free for everyone)
CREATE POLICY "Public can view free lessons" ON lessons
  FOR SELECT USING (is_premium = false);

-- 3. Create new policy for premium lessons (Requires enrollment)
-- Note: We check if the student has an enrollment for the course this lesson belongs to.
CREATE POLICY "Students can view enrolled premium lessons" ON lessons
  FOR SELECT USING (
    is_premium = true AND
    EXISTS (
      SELECT 1 FROM level_enrollments
      WHERE level_enrollments.student_id = auth.uid()
      AND level_enrollments.course_id = lessons.course_id
    )
  );

-- 4. Ensure Admins still have full access 
DROP POLICY IF EXISTS "Admins can view all lessons" ON lessons;
CREATE POLICY "Admins can view all lessons" ON lessons
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
