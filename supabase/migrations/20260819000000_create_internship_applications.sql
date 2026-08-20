create table public.internship_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  university text not null,
  program text not null,
  year_of_study text not null,
  python_experience text not null,
  teaching_experience text,
  why_interested text not null,
  citizenship_status text not null,
  is_at_least_18 boolean not null default false,
  can_commit_weekdays boolean not null default false,
  linkedin_url text,
  resume_filename text,
  resume_content_type text,
  resume_content text,
  status text not null default 'new',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.internship_applications enable row level security;

-- Admin-only read access
create policy "Admins can view applications"
on public.internship_applications
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

-- Admin-only update (status, notes)
create policy "Admins can update applications"
on public.internship_applications
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
  exists (
    select 1
    from public.profiles
    where profiles.id = (select auth.uid())
      and profiles.role = 'admin'
  )
);

-- Admin-only delete
create policy "Admins can delete applications"
on public.internship_applications
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

-- No public insert policy — inserts go through the service-role client in the API route

-- Revoke unnecessary grants from anon
revoke all on table public.internship_applications from anon;

-- Index for common queries
create index idx_internship_applications_status on public.internship_applications (status);
create index idx_internship_applications_created_at on public.internship_applications (created_at desc);
