# Batch 4 asset reuse notes

Batch 4 adapts interaction patterns and field concepts into the existing public Next.js application. Donor UI, persistence, authentication, and service integrations were not transplanted.

- `JFeimster/PartnerLaunch/components/MarketingToolkit.tsx`: reusable, categorized message-library pattern informed the selectable channels and editable outreach/marketing drafts. Proprietary conversion language and unsupported performance claims were excluded.
- `JFeimster/PartnerLaunch/components/PartnerNetwork.tsx`: partner-profession grouping informed the profession-specific referral workbench. Its localStorage partner directory, mock partner records, and account workflows were excluded.
- `JFeimster/PartnerLaunch/components/PartnerAcademy.tsx`: searchable course catalog concepts informed the searchable public field academy. Unsupported masterclass performance claims, inaccessible course promises, account gates, and progress state were excluded.
- `JFeimster/PartnerLaunch/components/IdeaGenerator.tsx`: a niche-first generation workflow informed structured audience/problem inputs in the deterministic marketing composer. The donor's Gemini dependency, generated-widget library, and localStorage persistence were excluded.
- `JFeimster/broker-followup-machine/knowledge/messaging/` and `knowledge/workflows/`: permission-based, stage-aware follow-up concepts informed the outreach and referral sequences. The public utilities do not automate or send messages.
- `JFeimster/Agency-in-a-Box/academy/quick-start/`, `academy/videos/`, and `campaigns.js`: quick-start sequencing, training resource signposts, and campaign planning informed the first-month pack and lessons. Linked resources point to current public Moonshine routes; unavailable courses are not reproduced.
- `JFeimster/partner-command-center/README.md`, `growth.js`, and `widgets/`: canonical attribution, consent, and ownership boundaries were preserved. The public site does not duplicate authenticated partner operations, campaign-link mutation, CRM, or referral ledger behavior.
- Current application `content/products.ts`, `content/operator-guides.ts`, `content/launch.ts`, `content/site.ts`, `content/ctas.ts`, and `lib/attribution.ts`: funding categories, prospecting guidance, first-month plan, canonical destinations, and supported application attribution remain the source of truth.
