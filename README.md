# Rentmeister Total Home Service — Website Redesign

A production-ready React + TypeScript + Vite frontend redesign for **Rentmeister Total Home Service**.

## Highlights

- React 19 + TypeScript + Vite
- Tailwind CSS 4 styling system
- React Router multi-page experience
- Dark theme default with light theme toggle
- Mobile-first responsive layout
- Sticky transparent-to-solid header on scroll
- Home, Services, About, Reviews, Promotions, Request a Quote, and Careers pages
- Review carousel, trust badges, service cards, and CTA flows
- Dockerized with multi-stage build and Nginx serving

## Brand & Business Content Included

- Family-owned positioning since 1953
- Utah service areas: Davis, Weber, Morgan, and Salt Lake Counties
- Core services: Heating, Cooling, Plumbing, Electrical, Outdoor Kitchens
- 4.7 Google rating and 991+ reviews references
- Calls to action with placeholder phone number: **(801) 399-4633**
- Tagline support:
  - "Experienced & Reliable Service Since 1953"
  - "Your Home's Comfort is Our Family's Pledge"

## Local Development

```bash
npm install
npm run dev
```

Build production bundle:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Docker

Build and run:

```bash
docker compose build
docker compose up -d
```

App URL:

- http://localhost:60050

Health check:

- http://localhost:60050/health

## Project Structure

- `src/components` — shared UI components (header, footer, hero, reveal animations, carousel)
- `src/pages` — routed pages
- `src/data/siteContent.ts` — service/business content model
- `src/hooks/useTheme.ts` — dark/light theme behavior

## Notes

- Frontend-only project (no backend/API)
- Form on Request a Quote page is client-side
- Nginx config includes SPA fallback (`try_files ... /index.html`)
