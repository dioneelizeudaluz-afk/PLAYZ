-- PLAYZ - FASE 2 - 0002 tables

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  display_name text,
  phone text,
  role text not null default 'user' check (role in ('user','admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists profiles_user_id_idx on public.profiles(user_id);
create index if not exists profiles_role_idx on public.profiles(role);
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

create table if not exists public.plans (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  price_mzn numeric(10,2) not null,
  duration_days integer not null,
  description text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists plans_active_idx on public.plans(active);
create trigger plans_set_updated_at
before update on public.plans
for each row execute function public.set_updated_at();

create table if not exists public.movies (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  cover_path text,
  category text,
  video_url text not null,
  access text not null default 'free' check (access in ('free','premium')),
  published boolean not null default false,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists movies_access_idx on public.movies(access);
create index if not exists movies_published_idx on public.movies(published);
create index if not exists movies_category_idx on public.movies(category);
create trigger movies_set_updated_at
before update on public.movies
for each row execute function public.set_updated_at();

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  plan_id uuid not null references public.plans(id) on delete restrict,
  amount_mzn numeric(10,2) not null,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  reference text,
  confirmed_by uuid references auth.users(id) on delete set null,
  confirmed_at timestamptz,
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists payments_user_idx on public.payments(user_id);
create index if not exists payments_status_idx on public.payments(status);
create trigger payments_set_updated_at
before update on public.payments
for each row execute function public.set_updated_at();

create table if not exists public.activation_codes (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  plan_id uuid not null references public.plans(id) on delete restrict,
  payment_id uuid references public.payments(id) on delete set null,
  user_id uuid references auth.users(id) on delete set null,
  status text not null default 'available' check (status in ('available','used','disabled')),
  used_at timestamptz,
  expires_at timestamptz,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);
create index if not exists activation_codes_code_idx on public.activation_codes(code);
create index if not exists activation_codes_status_idx on public.activation_codes(status);
create index if not exists activation_codes_plan_idx on public.activation_codes(plan_id);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  plan_id uuid not null references public.plans(id) on delete restrict,
  status text not null default 'active' check (status in ('active','expired','cancelled')),
  started_at timestamptz not null default now(),
  expires_at timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists subscriptions_user_idx on public.subscriptions(user_id);
create index if not exists subscriptions_status_idx on public.subscriptions(status);
create index if not exists subscriptions_expires_idx on public.subscriptions(expires_at);
create trigger subscriptions_set_updated_at
before update on public.subscriptions
for each row execute function public.set_updated_at();

create table if not exists public.admin_audit (
  id uuid primary key default gen_random_uuid(),
  admin_user_id uuid not null references auth.users(id) on delete cascade,
  action text not null,
  target_table text,
  target_id uuid,
  metadata jsonb,
  created_at timestamptz not null default now()
);
create index if not exists admin_audit_admin_idx on public.admin_audit(admin_user_id);
create index if not exists admin_audit_created_idx on public.admin_audit(created_at desc);

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.plans enable row level security;
alter table public.movies enable row level security;
alter table public.payments enable row level security;
alter table public.activation_codes enable row level security;
alter table public.subscriptions enable row level security;
alter table public.admin_audit enable row level security;
