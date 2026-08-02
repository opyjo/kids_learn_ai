drop policy if exists "Anyone can create inquiries" on public.inquiries;

create policy "Public can create new inquiries"
on public.inquiries
for insert
to anon, authenticated
with check (
  status = 'new'
  and notes is null
  and student_id is null
  and parent_profile_id is null
  and course_id is null
  and onboarded_at is null
  and char_length(parent_name) between 2 and 100
  and char_length(parent_email) between 3 and 320
  and position('@' in parent_email) > 1
  and char_length(child_name) between 2 and 100
  and (parent_phone is null or char_length(parent_phone) between 7 and 30)
  and (how_heard is null or char_length(how_heard) <= 200)
  and (questions is null or char_length(questions) <= 1000)
  and created_at between now() - interval '5 minutes' and now() + interval '1 minute'
  and updated_at between now() - interval '5 minutes' and now() + interval '1 minute'
);

alter table public.inquiries
  add constraint inquiries_referrer_format_check
    check (referrer is null or referrer ~ '^https?://');

revoke select, update, delete, truncate, references, trigger
on table public.inquiries
from anon;

grant insert on table public.inquiries to anon;

revoke truncate, references, trigger
on table public.inquiries
from authenticated;
