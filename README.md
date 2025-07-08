# Codex Brain Monorepo

This repository contains a pnpm workspace with a Nuxt 4 frontend.

## Structure

 - `apps/frontend` – Nuxt 4 application (root component in `app/app.vue`)
 - `packages/basic-layer` – reusable Nuxt layer providing shared configuration
 - `packages/note-core` – domain model and business logic for notes
- `packages/note-api` – REST API layer persisting notes to PostgreSQL
- `packages/note-ui` – UI components and pages for managing notes
- `packages/artefact-core` – domain model and business logic for artefacts
- `packages/artefact-api` – API layer for storing artefacts (mocked)
- `packages/artefact-ui` – UI components for artefacts (mocked)
- `docs/artefact-stories.md` – user stories and diagrams for referencing artefacts in notes

## Setup

Install dependencies from the workspace root:

```bash
pnpm install
```

Run the development server:

```bash
pnpm --filter nuxt-app dev
```

Run tests across the workspace:

```bash
pnpm test
```

### Static assets

The workspace does not include a default favicon. To customize the Nuxt app
appearance, place your own `favicon.ico` under `apps/frontend/public/`. The path
is listed in `.gitignore` so your icon can remain local.
