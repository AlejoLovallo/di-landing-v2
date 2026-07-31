# AGENTS.md — Destilería Independencia Landing (v2)

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # next build — TS errors are ignored (config), use lint for checks
pnpm lint         # ESLint via Next.js (no config file; built-in defaults)
```

- No `test` or `typecheck` script exists. No test framework installed.
- Node v24 (`.nvmrc`). Package manager **pnpm**.

## Stack

- Next.js 16 App Router (React 19), Tailwind v4, shadcn/ui (Base-Nova style), Base UI React.
- `next.config.mjs`: `typescript.ignoreBuildErrors: true`, `images.unoptimized: true`.

## Architecture

- **Single-page landing**. All routes are the homepage (`app/page.tsx`). No dynamic routes, API routes, or middleware.
- Components: mostly `"use client"`. Server components only in `app/layout.tsx` and `app/page.tsx`.
- `@/*` path alias maps to repo root (e.g. `@/components/hero`).

### Key dirs

| Directory | Purpose |
|-----------|---------|
| `app/actions/` | Server Actions (contact form submission) |
| `components/ui/` | shadcn/ui primitives (Button, Dialog, Input, Select, Textarea, Label) |
| `components/` | Page section components (Hero, Brands, Services, About, ContactModal, etc.) |
| `lib/i18n/dictionaries/` | Translation files: `es.ts` (default), `en.ts` |
| `lib/supabase/` | Supabase server client (returns `null` if env vars missing) |
| `lib/seo/` | SEO constants + JSON-LD structured data |
| `supabase/migrations/` | One migration (`contact_submissions` table, anon insert policy) |
| `public/` | Static assets, images, `llms.txt`, search sitemap, robots.txt |

### i18n

Custom implementation (no `next-intl`). Locale stored in `localStorage` (`di-locale` key). Default: `"es"`. Uses `LanguageProvider` React context in `components/language-provider.tsx`.

### Supabase

- Guest-friendly: no auth. `anon` key + RLS policy allows inserts on `contact_submissions`.
- `createClient()` returns `null` when env vars are missing — always guard with `isSupabaseConfigured()`.
- Env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (in `.env` — committed; `.env*.local` is gitignored).

### CSS

Tailwind v4 syntax: `@import 'tailwindcss'` (no `@tailwind` directives). Theme tokens via `@theme inline { ... }`. Dark theme via `.dark` class but site uses a single dark palette (`.dark` block exists in `globals.css` but unused).

### Images

Static paths are centralized in `lib/images.ts` — reference via `import { images } from "@/lib/images"`. Not optimized by Next.js (`images.unoptimized: true`).

## Deployment

- Linked to v0.dev project. Every merge to `main` auto-deploys to Vercel.
- `.vercel/` directory present (Vercel project config).
- Environment: `VERCEL_OIDC_TOKEN` in `.env.local` (gitignored).
