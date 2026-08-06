-- Immutable, versioned records of a parent's legal acceptance. Writes are
-- performed only by trusted server code or the auth-user creation trigger.
CREATE TABLE public.legal_consents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subject_user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  consent_type text NOT NULL CHECK (consent_type IN ('parent_account', 'child_account')),
  terms_version text NOT NULL,
  privacy_version text NOT NULL,
  consent_version text NOT NULL,
  source text NOT NULL,
  accepted_at timestamptz NOT NULL DEFAULT timezone('utc', now()),
  CONSTRAINT legal_consents_subject_check CHECK (
    (consent_type = 'parent_account' AND parent_user_id = subject_user_id)
    OR
    (consent_type = 'child_account' AND parent_user_id <> subject_user_id)
  ),
  CONSTRAINT legal_consents_version_unique UNIQUE (
    parent_user_id,
    subject_user_id,
    consent_type,
    terms_version,
    privacy_version,
    consent_version
  )
);

CREATE INDEX legal_consents_parent_accepted_idx
  ON public.legal_consents (parent_user_id, accepted_at DESC);

ALTER TABLE public.legal_consents ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.legal_consents FROM PUBLIC, anon, authenticated;
GRANT SELECT ON TABLE public.legal_consents TO authenticated;
GRANT ALL ON TABLE public.legal_consents TO service_role;

CREATE POLICY "Parents can view their own legal consent history"
  ON public.legal_consents
  FOR SELECT
  TO authenticated
  USING ((SELECT auth.uid()) = parent_user_id);

-- Email/password sign-up can require email confirmation, so there may be no
-- authenticated session available after signUp. Record the acceptance in the
-- same transaction that creates the Auth user instead of trusting a later UI
-- step. These metadata fields are evidence of the user's declaration only;
-- they are never used for authorization.
CREATE SCHEMA IF NOT EXISTS private;

CREATE OR REPLACE FUNCTION private.record_parent_signup_consent()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  IF NEW.raw_user_meta_data->>'parent_guardian_confirmed' = 'true'
    AND NULLIF(NEW.raw_user_meta_data->>'terms_version', '') IS NOT NULL
    AND NULLIF(NEW.raw_user_meta_data->>'privacy_version', '') IS NOT NULL
    AND NULLIF(NEW.raw_user_meta_data->>'parent_consent_version', '') IS NOT NULL
  THEN
    INSERT INTO public.legal_consents (
      parent_user_id,
      subject_user_id,
      consent_type,
      terms_version,
      privacy_version,
      consent_version,
      source
    )
    VALUES (
      NEW.id,
      NEW.id,
      'parent_account',
      NEW.raw_user_meta_data->>'terms_version',
      NEW.raw_user_meta_data->>'privacy_version',
      NEW.raw_user_meta_data->>'parent_consent_version',
      'email_signup'
    )
    ON CONFLICT ON CONSTRAINT legal_consents_version_unique DO NOTHING;
  END IF;

  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION private.record_parent_signup_consent() FROM PUBLIC, anon, authenticated;

CREATE TRIGGER on_auth_user_parent_signup_consent
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION private.record_parent_signup_consent();
