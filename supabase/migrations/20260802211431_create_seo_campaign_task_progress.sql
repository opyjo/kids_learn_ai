create table if not exists public.seo_campaign_task_progress (
  task_key text primary key,
  status text not null default 'todo'
    check (status in ('todo', 'in_progress', 'done')),
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  updated_by uuid references public.profiles(id) on delete set null
);

comment on table public.seo_campaign_task_progress is
  'Shared admin progress for the static 90-day SEO and lead-generation checklist.';

alter table public.seo_campaign_task_progress enable row level security;

revoke all on table public.seo_campaign_task_progress from anon;
grant select, insert, update, delete
  on table public.seo_campaign_task_progress to authenticated;

create policy "Admins can view SEO campaign progress"
  on public.seo_campaign_task_progress
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.profiles
      where profiles.id = (select auth.uid())
        and profiles.role = 'admin'
    )
  );

create policy "Admins can create SEO campaign progress"
  on public.seo_campaign_task_progress
  for insert
  to authenticated
  with check (
    updated_by = (select auth.uid())
    and exists (
      select 1
      from public.profiles
      where profiles.id = (select auth.uid())
        and profiles.role = 'admin'
    )
  );

create policy "Admins can update SEO campaign progress"
  on public.seo_campaign_task_progress
  for update
  to authenticated
  using (
    exists (
      select 1
      from public.profiles
      where profiles.id = (select auth.uid())
        and profiles.role = 'admin'
    )
  )
  with check (
    updated_by = (select auth.uid())
    and exists (
      select 1
      from public.profiles
      where profiles.id = (select auth.uid())
        and profiles.role = 'admin'
    )
  );

create policy "Admins can delete SEO campaign progress"
  on public.seo_campaign_task_progress
  for delete
  to authenticated
  using (
    exists (
      select 1
      from public.profiles
      where profiles.id = (select auth.uid())
        and profiles.role = 'admin'
    )
  );
