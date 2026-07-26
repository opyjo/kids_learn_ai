alter table public.quizzes
  add column if not exists requested_difficulty text not null default 'standard';

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conrelid = 'public.quizzes'::regclass
      and conname = 'quizzes_requested_difficulty_check'
  ) then
    alter table public.quizzes
      add constraint quizzes_requested_difficulty_check
      check (
        requested_difficulty in (
          'easy',
          'standard',
          'challenging',
          'very_challenging'
        )
      );
  end if;
end
$$;

comment on column public.quizzes.requested_difficulty is
  'Admin-requested AI generation level. Existing and unspecified quizzes default to standard.';
