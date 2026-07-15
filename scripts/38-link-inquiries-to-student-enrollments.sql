-- Link free-trial inquiries to the student account and course access created
-- when an administrator completes enrolment.

ALTER TABLE public.inquiries
  ADD COLUMN IF NOT EXISTS student_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS parent_profile_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS course_id UUID REFERENCES public.courses(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS onboarded_at TIMESTAMP WITH TIME ZONE;

-- A parent owns one or more separately authenticated student profiles. Keeping
-- each child as an auth user preserves all existing student progress foreign
-- keys while allowing siblings to share one parent email account.
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS parent_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS username TEXT;

ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_role_check;
ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_role_check
  CHECK (role IN ('student', 'parent', 'admin'));

CREATE UNIQUE INDEX IF NOT EXISTS idx_profiles_username_lower_unique
  ON public.profiles (LOWER(username))
  WHERE username IS NOT NULL;

ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_username_format_check;
ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_username_format_check
  CHECK (
    username IS NULL OR username ~ '^[a-z0-9][a-z0-9_-]{2,29}$'
  );

ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_parent_not_self_check;
ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_parent_not_self_check
  CHECK (parent_id IS NULL OR parent_id <> id);

CREATE INDEX IF NOT EXISTS idx_profiles_parent_id
  ON public.profiles(parent_id);

CREATE INDEX IF NOT EXISTS idx_inquiries_student_id
  ON public.inquiries(student_id);

CREATE INDEX IF NOT EXISTS idx_inquiries_parent_profile_id
  ON public.inquiries(parent_profile_id);

CREATE INDEX IF NOT EXISTS idx_inquiries_course_id
  ON public.inquiries(course_id);

COMMENT ON COLUMN public.inquiries.student_id IS
  'Student profile linked when the inquiry is fully enrolled.';
COMMENT ON COLUMN public.inquiries.parent_profile_id IS
  'Parent or guardian account that owns the enrolled child profile.';
COMMENT ON COLUMN public.inquiries.course_id IS
  'Course granted to the student when the inquiry is fully enrolled.';
COMMENT ON COLUMN public.inquiries.onboarded_at IS
  'Time the account/profile and course enrolment were completed.';
COMMENT ON COLUMN public.profiles.parent_id IS
  'Parent or guardian profile that owns this child account.';
COMMENT ON COLUMN public.profiles.username IS
  'Case-insensitive student login name. Parents and admins normally leave this null.';

-- Parent accounts are only created from trusted invite metadata. This role is
-- intentionally non-privileged; ownership is granted separately by parent_id.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    email,
    full_name,
    avatar_url,
    role,
    subscription_status
  )
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', ''),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture'),
    CASE
      WHEN NEW.raw_user_meta_data->>'account_type' = 'parent' THEN 'parent'
      ELSE 'student'
    END,
    'free'
  );
  RETURN NEW;
END;
$$;

-- Family pages intentionally read child records through authenticated server
-- handlers after verifying parent_id. No broad browser-readable child policy is
-- added, so internal child auth addresses stay private.
DROP POLICY IF EXISTS "Parents can view their children" ON public.profiles;

-- These functions are trigger-only. They must not also be callable as public
-- Data API RPC endpoints, especially because they run with definer privileges.
ALTER FUNCTION public.handle_new_user() SET search_path = '';
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

ALTER FUNCTION public.prevent_role_change() SET search_path = public;
REVOKE ALL ON FUNCTION public.prevent_role_change() FROM PUBLIC, anon, authenticated;
