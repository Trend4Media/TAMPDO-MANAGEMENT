-- TAMPDO MANAGEMENT — Grundschema
-- Interne Management- & Buchhaltungssoftware
-- Ausführen im Supabase-Projekt (SQL Editor oder `supabase db push`).

create extension if not exists "pgcrypto";

-- =========================================================
-- CRM: Talente
-- =========================================================
create table if not exists public.talents (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  handle      text,
  platform    text check (platform in ('TikTok', 'Instagram', 'YouTube', 'Twitch', 'Sonstige')),
  follower    integer default 0,
  status      text not null default 'onboarding'
              check (status in ('aktiv', 'onboarding', 'pausiert', 'beendet')),
  manager     text,
  email       text,
  notes       text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- =========================================================
-- Firmenkalender: Termine
-- =========================================================
create table if not exists public.events (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  event_date  date not null,
  talent_id   uuid references public.talents (id) on delete set null,
  type        text not null default 'Meeting'
              check (type in ('Shoot', 'Live', 'Meeting', 'Deadline')),
  notes       text,
  created_at  timestamptz not null default now()
);

-- =========================================================
-- Vertragsplattform: Verträge mit Freigabe-Workflow
-- =========================================================
create table if not exists public.contracts (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  partner      text,
  talent_id    uuid references public.talents (id) on delete set null,
  value_cents  bigint not null default 0,
  currency     text not null default 'EUR',
  status       text not null default 'entwurf'
               check (status in ('entwurf', 'freigabe', 'aktiv', 'beendet')),
  approved_by  text,
  approved_at  timestamptz,
  file_path    text,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- =========================================================
-- Buchhaltung: Buchungen (Einnahmen/Ausgaben)
-- =========================================================
create table if not exists public.bookings (
  id           uuid primary key default gen_random_uuid(),
  booking_date date not null default current_date,
  description  text not null,
  category     text,
  amount_cents bigint not null, -- positiv = Einnahme, negativ = Ausgabe
  currency     text not null default 'EUR',
  contract_id  uuid references public.contracts (id) on delete set null,
  created_at   timestamptz not null default now()
);

-- =========================================================
-- Row Level Security (nur eingeloggte Nutzer)
-- Feinere Rollen/Policies folgen im nächsten Schritt.
-- =========================================================
alter table public.talents   enable row level security;
alter table public.events    enable row level security;
alter table public.contracts enable row level security;
alter table public.bookings  enable row level security;

do $$
begin
  create policy "authenticated_all_talents" on public.talents
    for all to authenticated using (true) with check (true);
  create policy "authenticated_all_events" on public.events
    for all to authenticated using (true) with check (true);
  create policy "authenticated_all_contracts" on public.contracts
    for all to authenticated using (true) with check (true);
  create policy "authenticated_all_bookings" on public.bookings
    for all to authenticated using (true) with check (true);
exception
  when duplicate_object then null;
end $$;
