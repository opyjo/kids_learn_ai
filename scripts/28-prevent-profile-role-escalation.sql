-- 28-prevent-profile-role-escalation.sql
--
-- SECURITY FIX (critical): prevent privilege escalation via self-service.
--
-- The "Users can update own profile" UPDATE policy in 02-setup-rls.sql only
-- checks `auth.uid() = id` (and has no WITH CHECK). Because it never constrains
-- which COLUMNS change, any authenticated user could run the following from the
-- browser and instantly become an admin, defeating every requireAdmin() / RLS
-- admin check in the app:
--
--     supabase.from('profiles').update({ role: 'admin' }).eq('id', myId)
--
-- A BEFORE UPDATE trigger is used (rather than only a policy WITH CHECK) because
-- it compares OLD/NEW directly, fires even for the service role, and avoids the
-- RLS self-reference/recursion pitfalls of subquerying `profiles` inside its own
-- policy. Legitimate role changes are still allowed for privileged backends
-- (the service-role admin client) and for existing admins.

CREATE OR REPLACE FUNCTION public.prevent_role_change()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Only care when `role` actually changes; all other profile edits are fine.
  IF NEW.role IS DISTINCT FROM OLD.role THEN
    -- Allow trusted paths to change roles:
    --   * service_role  -> the server-side admin client (getSupabaseAdminClient)
    --   * existing admins editing their own row
    IF coalesce(auth.role(), '') = 'service_role' OR OLD.role = 'admin' THEN
      RETURN NEW;
    END IF;

    RAISE EXCEPTION 'Changing role is not permitted';
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS enforce_no_role_change ON public.profiles;

CREATE TRIGGER enforce_no_role_change
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.prevent_role_change();

-- Defense in depth: also give the UPDATE policy an explicit WITH CHECK so the
-- intent is documented at the policy layer (the trigger is the real enforcement).
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);
