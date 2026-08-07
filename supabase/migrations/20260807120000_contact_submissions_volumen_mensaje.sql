-- Optional volume + free-form message on contact form
alter table public.contact_submissions
  add column if not exists volumen text,
  add column if not exists mensaje text;
