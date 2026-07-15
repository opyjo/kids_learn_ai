-- Separate family-account creation from course enrollment while preserving all
-- existing inquiry records, account links, and level_enrollments.

ALTER TABLE public.inquiries
  DROP CONSTRAINT IF EXISTS inquiries_status_check;

ALTER TABLE public.inquiries
  ADD CONSTRAINT inquiries_status_check
  CHECK (
    status IN (
      'new',
      'contacted',
      'trial_scheduled',
      'account_created',
      'enrolled',
      'declined'
    )
  );

COMMENT ON COLUMN public.inquiries.status IS
  'Inquiry workflow status. account_created is used for new account-only approvals; enrolled is retained for legacy records.';
