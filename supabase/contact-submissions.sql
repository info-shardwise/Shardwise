create table if not exists public.contact_submissions (
  id uuid primary key,
  created_at timestamptz not null default now(),
  name text not null check (length(name) between 1 and 120),
  email text not null check (length(email) between 1 and 254),
  service text not null default '' check (length(service) <= 120),
  message text not null check (length(message) between 1 and 5000),
  notification_status text not null default 'pending' check (notification_status in ('pending', 'sent', 'failed')),
  gmail_message_id text
);
alter table public.contact_submissions enable row level security;
revoke all on public.contact_submissions from anon, authenticated;
grant select, insert, update on public.contact_submissions to service_role;
-- No public policies: only the server-side service role can access submissions.
