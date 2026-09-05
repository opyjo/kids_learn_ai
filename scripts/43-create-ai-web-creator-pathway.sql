-- AI Web Creator pathway
-- Adds editor metadata, multi-file web lesson starters, and three 8-week terms.

ALTER TABLE public.courses
  ADD COLUMN IF NOT EXISTS pathway_slug TEXT NOT NULL DEFAULT 'python-ai',
  ADD COLUMN IF NOT EXISTS editor_type TEXT NOT NULL DEFAULT 'python';

ALTER TABLE public.lessons
  ADD COLUMN IF NOT EXISTS starter_files JSONB NOT NULL DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS solution_files JSONB NOT NULL DEFAULT '{}'::jsonb;

DO $$
BEGIN
  ALTER TABLE public.courses
    ADD CONSTRAINT courses_editor_type_check
    CHECK (editor_type IN ('python', 'web', 'none'));
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

COMMENT ON COLUMN public.courses.pathway_slug IS
  'Top-level learning pathway used to group related course terms.';
COMMENT ON COLUMN public.courses.editor_type IS
  'Lesson workspace for the course: python, web, or none.';
COMMENT ON COLUMN public.lessons.starter_files IS
  'Starter files for multi-file lessons, such as html, css, and javascript.';
COMMENT ON COLUMN public.lessons.solution_files IS
  'Instructor solution files for multi-file lessons.';

-- Keep all existing courses in the core Python and AI pathway.
UPDATE public.courses
SET pathway_slug = 'python-ai'
WHERE pathway_slug IS NULL OR pathway_slug = '';

INSERT INTO public.courses (
  title,
  description,
  slug,
  order_index,
  age_range,
  term_number,
  badge_earned,
  project_name,
  year_group,
  is_coming_soon,
  pathway_slug,
  editor_type
)
VALUES
  (
    'Web Creator Term 1: Website Foundations',
    'Build a private, responsive website with HTML, CSS, accessibility, and introductory JavaScript. Every lesson includes a core mission plus age-appropriate power-ups.',
    'web-creator-term-1-foundations',
    17,
    '9-13',
    1,
    'Website Builder Badge',
    'My AI for Good Website',
    'AI Web Creator Pathway',
    true,
    'web-creator',
    'web'
  ),
  (
    'Web Creator Term 2: Interactive Websites',
    'Use JavaScript events, functions, forms, and page data to turn static pages into useful interactive experiences.',
    'web-creator-term-2-interactive',
    18,
    '9-13',
    2,
    'Interaction Designer Badge',
    'Interactive Quiz Website',
    'AI Web Creator Pathway',
    true,
    'web-creator',
    'web'
  ),
  (
    'Web Creator Term 3: AI Web Applications',
    'Design responsible AI-assisted web experiences while learning safe API patterns, privacy, testing, and human oversight.',
    'web-creator-term-3-ai-apps',
    19,
    '9-13',
    3,
    'Responsible AI Web Creator Certificate',
    'AI-Powered Web Capstone',
    'AI Web Creator Pathway',
    true,
    'web-creator',
    'web'
  )
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  order_index = EXCLUDED.order_index,
  age_range = EXCLUDED.age_range,
  term_number = EXCLUDED.term_number,
  badge_earned = EXCLUDED.badge_earned,
  project_name = EXCLUDED.project_name,
  year_group = EXCLUDED.year_group,
  -- Preserve an intentional go-live decision if this idempotent seed is rerun.
  is_coming_soon = courses.is_coming_soon,
  pathway_slug = EXCLUDED.pathway_slug,
  editor_type = EXCLUDED.editor_type,
  updated_at = NOW();

-- Verification after applying this script:
-- SELECT title, slug, pathway_slug, editor_type, is_coming_soon
-- FROM public.courses
-- WHERE pathway_slug = 'web-creator'
-- ORDER BY term_number;
