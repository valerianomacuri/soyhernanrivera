# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint (flat config via `eslint.config.mjs`)

There is no test setup yet.

## Architecture

Next.js 16.3.8 (App Router, React 19, TypeScript, Tailwind CSS v4). The home page (`/`) is the "Experiencia Origen" landing page — a single-page, mobile-first sales funnel for a daygame workshop in Lima, with WhatsApp as the sole conversion CTA.

- `app/page.tsx` — composes the 12 landing-page sections in order.
- `app/components/landing/` — one component per section, plus shared helpers (`WhatsAppButton`, `StickyWhatsappButton`, `Reveal` scroll-animation wrapper, `SectionHeading`, `TestimonialCard`, `InteractionVideo`, `YouTubeEmbed`).
- `app/lib/whatsapp.ts` — exports the fixed `wa.me/message/...` CTA link.
- `app/lib/analytics.ts` — Meta Pixel / GA4 lead-tracking helper (reads `NEXT_PUBLIC_META_PIXEL_ID`/`NEXT_PUBLIC_GA4_MEASUREMENT_ID`).
- `content/business.json` — editable business facts (coach name/bio, workshop date, slots, practice zone, reschedule policy) consumed by the section components; business-specific values are intentionally left as bracketed placeholders (`[NOMBRE]`, `[FECHA]`, etc.) for the business owner to fill in.
- `.env.local.example` — template for the required `NEXT_PUBLIC_*` env vars (Pixel/GA4 IDs, site URL); copy to `.env.local` with real values before launch.
- `app/globals.css` — Tailwind v4 theme tokens (dark/gold palette: `--color-ink`, `--color-gold`, etc. via `@theme inline`) plus the `.reveal` scroll-animation CSS, no separate `tailwind.config.*`.
- `app/layout.tsx` — Oswald (display) + Inter (body) fonts, Open Graph/metadata, GA4 + Meta Pixel base `<Script>` tags.
- `app/opengraph-image.tsx` — generates the share-preview image via `next/og` (no static asset needed).
- Path alias `@/*` maps to the repo root (`tsconfig.json`).

**Important:** per `AGENTS.md`, this Next.js install may include breaking changes vs. training data. Check `node_modules/next/dist/docs/` for the current APIs before relying on prior Next.js knowledge.
