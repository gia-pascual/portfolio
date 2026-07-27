# Gianni Pascual — Portfolio Website

A multi-page portfolio built with Next.js (App Router), React, TypeScript, and
Tailwind CSS for Gianni Pascual — Bookkeeper, US Tax Support Specialist, and
QuickBooks Online ProAdvisor.

## Pages

- `/` — Home (hero, about preview, services, portfolio preview, certifications strip, CTA)
- `/about` — Full professional profile, experience, internship timeline, technical skills
- `/portfolio` — Case study index
- `/portfolio/[slug]` — Individual case studies (QuickBooks setup, Form 1040, 1065, 1120-S)
- `/certifications` — Certificate gallery
- `/contact` — Contact details, contact form (Netlify Forms), FAQ

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploying to Netlify

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. In Netlify: **Add new site → Import an existing project**, select the repo.
3. Netlify reads `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Uses `@netlify/plugin-nextjs` for Next.js support (Netlify installs this
     automatically the first time it detects a Next.js site — no manual setup
     needed).
4. Deploy. The contact form on `/contact` uses Netlify Forms (`data-netlify="true"`)
   and will start capturing submissions automatically once deployed — no
   backend code required. Check **Site settings → Forms** in Netlify after
   the first deploy.

## Updating content

Almost everything on the site is driven from **`src/lib/data.ts`** — services,
portfolio items, certifications, the internship timeline, technical skills,
and FAQs. To add a new certification or case study, add an entry to the
relevant array there; no layout changes are needed.

- **New certification:** add an object to `certifications` in `src/lib/data.ts`,
  plus the certificate image in `public/certificates/` and a PDF (optional) in
  `public/documents/`.
- **New case study:** add an object to `portfolioItems`, then create a new
  page at `src/app/portfolio/<slug>/page.tsx` (copy an existing one, e.g.
  `form-1040/page.tsx`, as a starting point).
- **Resume / CV:** replace `public/resume/Gianni_Pascual_Resume.pdf` — the
  "Download CV" buttons already point to that path.
- **Calendly:** the Calendly link lives in `site.calendly` in
  `src/lib/data.ts`. Every "Book a Call" button reads from there, so updating
  it once updates the whole site.

## Sections built but not yet linked in navigation

Per the original brief, placeholders exist in the codebase for:

- Professional introduction video
- Additional case studies
- Client testimonials
- Additional certifications

These are tracked in `futureSections` in `src/lib/data.ts`. Flip the relevant
flag and add the content/component when ready — the surrounding layout does
not need to change.

## Before going live

Replace the placeholder domain `https://giannipascual.com` in three places
once a real domain is chosen: `src/app/layout.tsx` (`metadataBase`),
`src/app/sitemap.ts`, and `src/app/robots.ts`.

## Design notes

- **Palette:** deep navy, warm paper/off-white, soft gold accent, light
  stone-gray section backgrounds.
- **Type:** Fraunces (display/serif) for headings, Inter for body copy, IBM
  Plex Mono for data, labels, and dates — a nod to ledgers and statements.
- **Signature motif:** the "ledger rule" — a hairline divider paired with a
  small mono label — used as the section eyebrow throughout, echoing a
  statement or general ledger line item.
