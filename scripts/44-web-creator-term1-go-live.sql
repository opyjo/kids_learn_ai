-- Open Web Creator Term 1 only after all eight lessons have been synchronized.

DO $$
DECLARE
  web_course_id UUID;
  lesson_count INTEGER;
  teacher_note_count INTEGER;
BEGIN
  SELECT id
  INTO web_course_id
  FROM public.courses
  WHERE slug = 'web-creator-term-1-foundations';

  IF web_course_id IS NULL THEN
    RAISE EXCEPTION 'Web Creator Term 1 course is missing. Apply script 43 first.';
  END IF;

  SELECT COUNT(*)
  INTO lesson_count
  FROM public.lessons
  WHERE course_id = web_course_id;

  SELECT COUNT(*)
  INTO teacher_note_count
  FROM public.teacher_notes AS notes
  JOIN public.lessons AS lessons ON lessons.id = notes.lesson_id
  WHERE lessons.course_id = web_course_id;

  IF lesson_count <> 8 THEN
    RAISE EXCEPTION
      'Web Creator Term 1 requires exactly 8 lessons before go-live; found %.',
      lesson_count;
  END IF;

  IF teacher_note_count <> 8 THEN
    RAISE EXCEPTION
      'Web Creator Term 1 requires 8 teacher guides before go-live; found %.',
      teacher_note_count;
  END IF;

  UPDATE public.courses
  SET is_coming_soon = false,
      updated_at = NOW()
  WHERE id = web_course_id;
END $$;

-- Verification:
-- SELECT slug, is_coming_soon
-- FROM public.courses
-- WHERE slug = 'web-creator-term-1-foundations';
