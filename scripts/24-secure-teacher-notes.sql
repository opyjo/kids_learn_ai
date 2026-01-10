-- Migration: Secure teacher notes
-- Teacher notes should only be accessible to admins.

-- 1. Enable RLS (just in case it wasn't)
ALTER TABLE IF EXISTS teacher_notes ENABLE ROW LEVEL SECURITY;

-- 2. Drop any existing broad policies
DROP POLICY IF EXISTS "Anyone can view teacher notes" ON teacher_notes;
DROP POLICY IF EXISTS "Admins can manage teacher notes" ON teacher_notes;

-- 3. Create strict Admin-only policy
CREATE POLICY "Admins can manage teacher notes" ON teacher_notes
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- 4. Ensure students see nothing
-- (By default, RLS is 'deny all' if no policies match, so we don't need a explicit deny policy, 
-- but having only the admin policy ensures students receive 0 rows)
