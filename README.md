# Gianni Pascual — Portfolio Website (v2)

A multi-page portfolio built with Next.js (App Router), React, TypeScript, and
Tailwind CSS for Gianni Pascual — Virtual Bookkeeper, QuickBooks Online
ProAdvisor, and US Tax Support Specialist.

## What's new in this version

- **New profile photo** used across Home, About, and Contact.
- **Portfolio is now split into two clearly separated sections**: Bookkeeping
  and US Tax Preparation, each with its own header, intro, and background
  tint (Bookkeeping on light, Tax Preparation on dark navy), plus a sticky
  jump-link bar at the top of the page.
- **Three bookkeeping case studies** instead of one: QuickBooks Online Company
  Setup (with 3 embedded video walkthroughs), Accounts Receivable Management,
  and Accounts Payable Management — each with its own cover-page thumbnail
  pulled from the real case study PDF.
- **Certifications page now has two groups**: software/workflow certifications
  (QBO, Xero, training programs) and professional credentials (Civil Service
  Eligibility, TESDA NC III), so a government credential doesn't get mixed in
  with a QuickBooks badge.
- **Refined typography and visual polish**: a tuned type scale (`text-hero`,
  `text-display-lg`), a slightly richer navy/gold palette, and a `card-lift`
  hover treatment on cards for a more premium feel.
- Still built on the "ledger rule" signature motif — a hairline divider with
  a small mono label — used throughout as the section eyebrow.

## Pages

- `/` — Home
- `/about` — Full professional profile, experience, internship timeline, technical skills
- `/portfolio` — Case study index, split into Bookkeeping and US Tax Preparation
- `/portfolio/quickbooks-setup` — QBO case study with 3 video walkthroughs
- `/portfolio/accounts-receivable` — A/R case study
- `/portfolio/accounts-payable` — A/P case study
- `/portfolio/form-1040`, `/form-1065`, `/form-1120s` — Tax prep case studies
- `/certifications` — Certificate gallery, split into two groups
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

**Important:** when updating files on GitHub, upload the entire project (or
edit files in place) rather than deleting the `src` folder and only
restoring some files — Next.js needs every file in `src` to build.

## Contact form

The contact form points to a placeholder Formspree endpoint
(`https://formspree.io/f/YOUR_FORM_ID`). To make it deliver messages to your
email:

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form and copy its endpoint URL (looks like
   `https://formspree.io/f/abc123xy`).
3. In `src/app/contact/page.tsx`, replace `YOUR_FORM_ID` with your real
   endpoint.
4. Commit — Vercel redeploys automatically.

## Updating content

Almost everything is driven from **`src/lib/data.ts`**:

- **New case study:** add an object to `portfolioItems` (set `group` to
  `"Bookkeeping"` or `"Tax Preparation"`), then create a page at
  `src/app/portfolio/<slug>/page.tsx` (copy an existing one as a template).
- **New video demo:** add to `qboVideoDemos`, or create a new array
  (e.g. `taxVideoDemos`) and wire it into a case study page the same way,
  once the US tax preparation videos are ready. There's a
  `futureSections.taxPrepDemos` flag already reserved for this.
- **New certification:** add to `certifications` (software/workflow) or
  `professionalCredentials` (government/vocational), plus the image in
  `public/certificates/`.
- **Resume / CV:** replace `public/resume/Gianni_Pascual_Resume.pdf`.
- **Calendly:** update `site.calendly` in `src/lib/data.ts` — every "Book a
  Call" button reads from there.

## Before going live

Replace the placeholder domain `https://giannipascual.com` in
`src/app/layout.tsx` (`metadataBase`), `src/app/sitemap.ts`, and
`src/app/robots.ts` once a real domain is chosen.
