-- New public Auth users are parents/guardians. Student roles are assigned from
-- app_metadata, which only trusted admin APIs can write. Existing profile rows,
-- credentials, parent-child links, enrolments, and progress are not modified.
ALTER TABLE public.profiles
  ALTER COLUMN role SET DEFAULT 'parent';

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
      WHEN NEW.raw_app_meta_data->>'account_type' = 'student' THEN 'student'
      -- Backward compatibility for the currently deployed inquiry approval
      -- route during rollout. Public email sign-up is confirmation-gated, so
      -- it cannot meet this trusted internal-email + pre-confirmed condition.
      WHEN NEW.raw_user_meta_data->>'account_type' = 'student'
        AND NEW.email LIKE 'student-%@accounts.kidslearnai.ca'
        AND NEW.email_confirmed_at IS NOT NULL
        THEN 'student'
      ELSE 'parent'
    END,
    'free'
  );
  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
