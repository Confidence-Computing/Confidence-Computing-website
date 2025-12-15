# Confidence Computing Website

A warm, single-page marketing site for Confidence Computing, built with React and Vite. The site uses data-driven content modules, sectioned layout, and a porch-light visual metaphor to communicate calm, human-centered technical help.

## Tech stack
- React + Vite (frontend lives in `frontend/`)
- CSS modules in `frontend/src/styles/global.css`
- Data modules for copy in `frontend/src/components/`
- Assets in `frontend/public/images/`

## Local setup
```bash
cd frontend
npm install
npm run dev    # start local dev server (default http://localhost:5173)
npm run build  # production build
npm run preview
```

## GitHub workflow
- Main branch: `master`
- Standard flow: pull latest, create a feature branch, open PR, merge to master.
- Commits trigger Netlify deploys once Netlify is connected to this repo (see below).

### Content updates (non-technical)
Follow `docs/content-update-workflow.md` to make your edits first, then publish once (saves Netlify build minutes).

## Netlify deployment
1) In Netlify, create a new site from Git and select this repository.
2) Base directory: `frontend`
3) Build command: `npm run build`
4) Publish directory: `frontend/dist`
5) Set environment variable `NODE_VERSION` to match local (e.g., `18`+).
Netlify will auto-deploy on pushes to master. Use Deploy Previews for PRs.

## Lighthouse (performance checks)
Run from `frontend/` while the app is served locally (`npm run dev` or `npm run preview`):
```bash
npx lighthouse http://localhost:5173 --preset=desktop --output=html --output-path=./lighthouse-desktop.html --chrome-flags="--headless"
npx lighthouse http://localhost:5173 --preset=mobile  --output=html --output-path=./lighthouse-mobile.html  --chrome-flags="--headless"
```
Open the generated HTML reports in a browser to review scores and audits.

## Connecting the contact form
The contact form is currently client-side only. To send messages to an email forwarder:
1) Choose a service (Netlify Forms, Formspree, or a lightweight API endpoint you control).
2) Update `frontend/src/sections/ContactSection.jsx` `handleSubmit` to POST the form data to that endpoint.
3) Add any required keys/URLs as environment variables in Netlify (e.g., `FORM_ENDPOINT`) and read them in the submit handler.
4) Keep validation and success messaging intact; show server errors inline on failure.

## Project layout
- `frontend/`: React app
- `frontend/public/images/`: brand and section imagery
- `frontend/src/components/`: structured copy/data modules
- `frontend/src/sections/`: page sections
- `frontend/src/layout/`: header/footer/main layout
