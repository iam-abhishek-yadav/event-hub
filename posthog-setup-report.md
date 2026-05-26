<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Event Hub Next.js App Router project. Here's a summary of what was set up:

- **`instrumentation-client.ts`** (new file): Initializes PostHog on the client side using the Next.js 15.3+ instrumentation API. Configured with a reverse proxy host (`/ingest`), exception capture enabled, and debug mode in development.
- **`next.config.ts`** (updated): Added reverse proxy rewrites for PostHog ingestion (`/ingest/*` → `us.i.posthog.com`) and asset serving (`/ingest/static/*`, `/ingest/array/*` → `us-assets.i.posthog.com`). Also set `skipTrailingSlashRedirect: true`.
- **`components/exploreBtn.tsx`** (updated): Added `posthog.capture('explore_events_clicked')` to the existing onClick handler.
- **`components/eventCard.tsx`** (updated): Added `'use client'` directive and `posthog.capture('event_card_clicked', { title, slug, location, date })` on link click.
- **`.env.local`** (created): PostHog public token and host stored as environment variables (`NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`, `NEXT_PUBLIC_POSTHOG_HOST`).

| Event | Description | File |
|-------|-------------|------|
| `explore_events_clicked` | User clicks the 'Explore Events' button on the homepage to scroll down to the events list | `components/exploreBtn.tsx` |
| `event_card_clicked` | User clicks on an event card to view details for a specific event (properties: title, slug, location, date) | `components/eventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1629997)
- [Explore Events button clicks](/insights/ZfqetXZx) — Daily trend of homepage CTA clicks
- [Event card clicks over time](/insights/M8SECQ63) — Daily trend of event detail page navigations
- [Homepage to event engagement funnel](/insights/T5Xm7AAt) — Conversion from Explore Events → event card click
- [Most clicked events](/insights/zfr5JgRz) — Bar chart of event card clicks broken down by event title
- [Unique users engaging with events](/insights/eP3CoXmg) — Daily active users clicking event cards

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
