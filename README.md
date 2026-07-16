# Personal Assistant — Homepage

Official homepage for **Personal Assistant**, an AI-powered Gmail productivity assistant
developed by **Takshashila AI Team**. This site is the public-facing homepage referenced by
Personal Assistant's Google OAuth consent screen and app verification review — it explains
what the app is, what it does, why it requests Gmail access, and how user data is handled.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**, statically exported (no
server required).

## Project structure

```
app/
  layout.tsx        – root layout, global SEO metadata, Navbar/Footer wrapper
  page.tsx           – homepage (Hero, Features, How It Works, Privacy, Permissions, About, Contact)
  privacy/page.tsx    – full Privacy Policy
  terms/page.tsx      – full Terms of Service
  robots.ts / sitemap.ts
  globals.css         – Tailwind + brand design tokens
components/           – Navbar, Footer, Hero, Features, HowItWorks, PrivacySection,
                          PermissionsSection, AboutSection, ContactSection, InboxIllustration
lib/site.ts            – shared site content/config (name, tagline, contact, nav links)
public/logo.svg         – Takshashila AI Team logo
render.yaml             – Render static-site build configuration
```

## Run locally

```
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```
npm run build
```

This produces a static export in `out/` (configured via `output: "export"` in
`next.config.ts`) — no Node server needed in production.

## Deploy on Render

`render.yaml` is already configured for a static deploy:

- **Build command:** `npm ci && npm run build`
- **Publish directory:** `./out`

Push to the connected GitHub repository and Render will build and deploy automatically.

## Before going live

- [ ] Set `signInUrl` in `lib/site.ts` to the live "Sign in with Google" / OAuth start URL once
      the Personal Assistant application is deployed.
- [ ] Confirm `site.url` in `lib/site.ts` matches the domain registered on the Google OAuth
      consent screen (currently `https://takshashilaai.tech`).
- [ ] Verify the Privacy Policy (`/privacy`) and Terms of Service (`/terms`) URLs match exactly
      what is entered in the Google Cloud Console OAuth consent screen configuration.
