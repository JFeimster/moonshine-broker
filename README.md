# Moonshine Capital — Broker Recruitment Landing

Next.js (App Router) + Tailwind landing page for recruiting Funding Partners / Commercial Loan Brokers.

## Run locally
```bash
npm install
npm run dev
```

## Configure
Copy env file:
```bash
cp .env.example .env.local
```

Set:
- `NEXT_PUBLIC_BOOKING_URL` (booking link)

## Lead capture
Leads POST to `/api/lead` and are logged server-side by default.
Replace the `console.log` in `app/api/lead/route.ts` with your CRM/email integration.

## Deploy
Push to GitHub and import into Vercel. No extra config needed.
