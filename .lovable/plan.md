# Connect the lead form to Lovable Cloud

## Goal
Make the consultation lead form on the landing page actually persist submissions to the backend, so the clinic can collect real client requests.

## What we will build

1. Database table `public.leads` to store form submissions.
2. Row-level security and grants so the public form can insert safely.
3. A `submitLead` server function that validates input and writes to the table.
4. Update `LeadDialog.tsx` to call the server function instead of the simulated `setTimeout`.

## Technical details

- Table: `public.leads`
  - `id` uuid primary key
  - `name` text
  - `phone` text
  - `source` text (e.g. dialog title / context)
  - `agreed_to_policy` boolean
  - `created_at` timestamptz default now()
- GRANT INSERT to `anon` and `authenticated`, ALL to `service_role`.
- RLS policy: allow `INSERT` for public submissions.
- Server function: `createServerFn({ method: "POST" })` with Zod input validation.
- UI: async submission with loading state, success toast, and error handling.

## Success criteria
- Form validates client-side and server-side.
- Submitting the form writes a row to `public.leads`.
- User sees a confirmation toast and the dialog closes.
- Build passes.
