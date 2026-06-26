-- Contact form submissions table
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  apellido text not null,
  email text not null,
  telefono text not null,
  empresa text,
  motivo text not null,
  locale text not null default 'es',
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

drop policy if exists "Allow anonymous insert on contact_submissions" on public.contact_submissions;

create policy "Allow anonymous insert on contact_submissions"
  on public.contact_submissions
  for insert
  to anon, authenticated
  with check (true);
