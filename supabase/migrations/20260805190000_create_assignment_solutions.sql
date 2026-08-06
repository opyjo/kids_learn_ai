-- Teacher-only worked solutions for take-home assignments.
-- Kept separate from lessons so enrolled students cannot query model answers.

CREATE TABLE IF NOT EXISTS public.assignment_solutions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID NOT NULL UNIQUE REFERENCES public.lessons(id) ON DELETE CASCADE,
  solution_code TEXT NOT NULL,
  review_notes TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_assignment_solutions_lesson_id
  ON public.assignment_solutions(lesson_id);

ALTER TABLE public.assignment_solutions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins can manage assignment solutions"
  ON public.assignment_solutions;

CREATE POLICY "Admins can manage assignment solutions"
  ON public.assignment_solutions
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM public.profiles
      WHERE profiles.id = (SELECT auth.uid())
        AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1
      FROM public.profiles
      WHERE profiles.id = (SELECT auth.uid())
        AND profiles.role = 'admin'
    )
  );

-- Explicit grants keep the table usable on projects where new public tables
-- are no longer exposed to the Data API by default. RLS still limits every
-- operation to admins, while anonymous requests cannot reach the table.
REVOKE ALL ON TABLE public.assignment_solutions FROM anon;
GRANT SELECT, INSERT, UPDATE, DELETE
  ON TABLE public.assignment_solutions TO authenticated;
GRANT ALL ON TABLE public.assignment_solutions TO service_role;

COMMENT ON TABLE public.assignment_solutions IS
  'Admin-only worked solutions and review guides for take-home assignments.';
