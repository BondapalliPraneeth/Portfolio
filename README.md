# Bondapalli Praneeth — Portfolio

React + TypeScript + Vite + Tailwind v4, React Three Fiber (hero), Motion.

## Commands
- `npm install`
- `npm run dev` — http://localhost:5173
- `npm run build` — typecheck + production build into `dist/`
- `npm run preview` — serve the build

## Editing content (all in `src/data/`)
- `profile.ts` — name, tagline, status label, about, email, social links, resume path, contact form endpoint
- `projects.ts` — case studies. Add `repo:` / `demo:` URLs when confirmed
- `experience.ts`, `skills.ts`

## Resume
Replace `public/Praneeth-Resume.pdf`. Set `resumePath: null` in `profile.ts` for a disabled state.

## Contact form
Without an endpoint the section shows a working `mailto:` button. To enable the form, create a
Formspree form and paste its URL into `formEndpoint` in `profile.ts`.

## Deploy
`dist/` is static: Vercel / Netlify / Cloudflare Pages (build `npm run build`, output `dist`).
After you have a domain, add `public/sitemap.xml` and an `og:image`/`og:url` in `index.html`.
