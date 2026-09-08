# Gianni Pascual — Portfolio Website

A multi-page portfolio built with Next.js (App Router), React, TypeScript, and
Tailwind CSS for Gianni Pascual — Bookkeeper, US Tax Support Specialist, and
QuickBooks Online ProAdvisor.

## Pages

- `/` — Home (hero, about preview, services, portfolio preview, certifications strip, CTA)
- `/about` — Full professional profile, experience, internship timeline, technical skills
- `/portfolio` — Case study index, grouped into **Bookkeeping** and **Tax Preparation**
- `/portfolio/[slug]` — Individual case studies (QuickBooks setup with video demos, Form 1040, 1065, 1120-S)
- `/certifications` — Certificate gallery
- `/contact` — Contact details, contact form, FAQ

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploying to Vercel

This project needs no special configuration for Vercel — it auto-detects
Next.js and handles the build. Push the whole project to GitHub, then in
Vercel: **Add New → Project → Import** your repository, and deploy.

**Important:** when updating files on GitHub, always replace the entire
project (or edit individual files in place) — never delete the whole `src`
folder and re-upload only a few files. Next.js needs every file in `src` to
build (the root layout, global styles, and every page/component); removing
the folder and only restoring some of them will break the build.

## Contact form

The contact form currently points to a placeholder Formspree endpoint
(`https://formspree.io/f/YOUR_FORM_ID`). To make it actually deliver messages
to your email:

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form and copy the endpoint URL it gives you (looks like
   `https://formspree.io/f/abc123xy`).
3. In `src/app/contact/page.tsx`, replace `YOUR_FORM_ID` in the form's
   `action` attribute with your real endpoint.
4. Commit the change — Vercel will redeploy automatically, and submissions
   will start arriving in your email.

## Updating content

Almost everything on the site is driven from **`src/lib/data.ts`** — services,
portfolio items (with their `group`: "Bookkeeping" or "Tax Preparation"),
certifications, video demos, the internship timeline, technical skills, and
FAQs. To add a new certification or case study, add an entry to the relevant
array there; no layout changes are needed.

- **New certification:** add an object to `certifications` in `src/lib/data.ts`,
  plus the certificate image in `public/certificates/` and a PDF (optional) in
  `public/documents/`.
- **New case study:** add an object to `portfolioItems` (set `group` to
  `"Bookkeeping"` or `"Tax Preparation"`), then create a new page at
  `src/app/portfolio/<slug>/page.tsx` (copy an existing one as a starting
  point). Leave `image` unset to get the branded placeholder card, or point
  it at a real screenshot/document cover once you have one.
- **New video demo:** add an entry to `qboVideoDemos` (or a new array for a
  different case study) in `src/lib/data.ts`, using the YouTube video ID
  (the part after `youtu.be/` in the share link).
- **Resume / CV:** replace `public/resume/Gianni_Pascual_Resume.pdf` — the
  "Download CV" buttons already point to that path.
- **Calendly:** the Calendly link lives in `site.calendly` in
  `src/lib/data.ts`. Every "Book a Call" button reads from there.

## Sections built but not yet linked in navigation

Per the original brief, placeholders exist in the codebase for:

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
