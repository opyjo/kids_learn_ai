-- Migration: Secure level enrollments more strictly
-- Students should only see their own enrollments. Admins see everything.

-- 1. Ensure RLS is enabled
ALTER TABLE level_enrollments ENABLE ROW LEVEL SECURITY;

-- 2. Drop existing policies to refresh them
DROP POLICY IF EXISTS "Students can view own enrollments" ON level_enrollments;
DROP POLICY IF EXISTS "Admins can view all enrollments" ON level_enrollments;
DROP POLICY IF EXISTS "Admins can grant enrollments" ON level_enrollments;
DROP POLICY IF EXISTS "Admins can revoke enrollments" ON level_enrollments;
DROP POLICY IF EXISTS "Admins can update enrollments" ON level_enrollments;

-- 3. Student Policy: View own only
CREATE POLICY "Students can view own enrollments" ON level_enrollments
  FOR SELECT USING (auth.uid() = student_id);

-- 4. Admin Policies: Full access
CREATE POLICY "Admins have full access to enrollments" ON level_enrollments
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
