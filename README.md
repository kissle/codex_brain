# Codex Brain Monorepo

This repository contains a pnpm workspace with a Nuxt frontend.

## Structure

- `apps/frontend` – Nuxt 3 application
- `packages/basic-layer` – reusable Nuxt layer providing shared configuration

## Setup

Install dependencies from the workspace root:

```bash
pnpm install
```

Run the development server:

```bash
pnpm --filter nuxt-app dev
```

### Static assets

The workspace does not include a default favicon. To customize the Nuxt app
appearance, place your own `favicon.ico` under `apps/frontend/public/`. The path
is listed in `.gitignore` so your icon can remain local.
