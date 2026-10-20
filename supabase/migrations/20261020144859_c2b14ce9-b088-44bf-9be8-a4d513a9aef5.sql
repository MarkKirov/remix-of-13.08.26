create extension if not exists pg_net with schema extensions;

create or replace function public.notify_new_lead()
returns trigger
language plpgsql
security definer
set search_path = public, extensions
as $$
begin
  perform net.http_post(
    url := 'https://komilfo-business-beacon.lovable.app/api/public/lead-notify',
    body := jsonb_build_object('id', new.id),
    headers := '{"Content-Type":"application/json"}'::jsonb
  );
  return new;
end;
$$;

revoke all on function public.notify_new_lead() from public, anon, authenticated;

drop trigger if exists leads_notify_owner on public.leads;
create trigger leads_notify_owner
after insert on public.leads
for each row execute function public.notify_new_lead();