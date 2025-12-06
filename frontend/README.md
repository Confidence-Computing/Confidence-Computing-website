# Frontend Workspace

This folder contains the Confidence Computing React/Vite single-page experience.

## Prerequisites

- Node 18.x or newer (LTS recommended)

## Setup

1. `cd frontend`
2. `npm install` (installs React, Vite, and supporting plugins)

## Available commands

- `npm run dev` – start the Vite dev server with HMR
- `npm run build` – compile the production bundle in `dist/`
- `npm run preview` – locally preview the production build

## Project notes

- Static assets such as photos live under `public/images/` and are imported via absolute paths (e.g., `/images/hero-background.jpg`). Keep decorative imagery here and do not hard-code copy into images.
- `src/sections/` holds semantic React sections (Hero, Problem, Services, etc.) that consume structured data from `src/components/*.js`. Layout components live in `src/layout/`, while `src/styles/` defines the global theme tokens described in the design guides.
