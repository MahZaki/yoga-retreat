# YogaRetreatAdvisor — Architecture Document

> **Last updated:** November 2026
> **Purpose:** Technical reference for AI assistants and developers working on this codebase. Read this before writing any code.

---

## 1. Project Overview

**YogaRetreatAdvisor** is a full-stack Next.js web application with three revenue pillars:

| Pillar | Mechanism |
|---|---|
| **SEO / Content** | 60+ blog posts and location pages targeting high-intent yoga retreat keywords |
| **Affiliate / Monetization** | Referral links and commission on retreat bookings |
| **Lead Generation** | Newsletter capture via Resend; email sequences to build audience |

The site is authored under the persona of **Sarah Mitchell** (see `references/sarah-author-bio.md`).

---

## 2. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | **Next.js** (App Router) | 16.2.6 |
| Runtime | **React** | 19.2.4 |
| Language | JavaScript (no TypeScript) | — |
| Styling | **CSS Modules** (.module.css per component/page) | — |
| Database | **Supabase** (PostgreSQL) | — |
| Email | **Resend** + @react-email/components | — |
| Analytics | **Google Analytics 4** via @next/third-parties/google | — |
| Ads | **Google AdSense** (ca-pub-3442420145961648) | — |
| Deployment | **Vercel** | — |

WARNING: This is Next.js 16 with React 19 — breaking changes from older versions exist.
Always read node_modules/next/dist/docs/ before using any Next.js API.
Do not rely on training data for Next.js conventions.

---

## 3. Repository Structure

yogaretreat/
app/                       Next.js App Router — all routes live here
  layout.js                Root layout: metadata, OG tags, GA, AdSense, JSON-LD
  globals.css              Global CSS reset and design tokens
  page.js                  Homepage
  blog/                    60+ SEO blog post routes
    page.js                Blog index listing
    [slug]/                Each blog post is its own folder with page.js
  retreats/                Retreat directory
    page.js                Retreat listing/search page
    [slug]/page.js         Dynamic retreat detail page
  destinations/page.js     Destination overview page
  retreat-matcher/page.js  Interactive quiz to match users with retreat types
  about/                   About Sarah Mitchell
  contact/                 Contact form page
  privacy/                 Privacy policy
  terms/                   Terms of service
  api/
    contact/               Contact form submission → Resend email
    newsletter/            Newsletter signup → Resend list

components/
  BlogPost.js              MANDATORY wrapper for ALL blog posts
  Navbar.js + .module.css
  Footer.js + .module.css
  Newsletter.js + .module.css

content/
  cluster-yoga-retreats.json   Retreat cluster/keyword grouping data

emails/                    React Email templates used by Resend

references/                AI and editorial reference files — READ BEFORE WRITING CONTENT
  blog-post-template.js    STARTING POINT for every new blog post
  voice.md                 Brand voice, sentence rhythm, anti-patterns
  sarah-author-bio.md      Author persona full bio
  keyword-master-list.md   SEO keyword strategy and clusters
  rewrite-tracker.md       Which posts have been rewritten
  blog-rewrites-master.md  Rewrite briefs and instructions
  opinions.md              Sarah established opinions on retreats
  humour.md                Tone calibration for humour
  stories.md               Personal anecdotes to draw from
  stats.md                 Verifiable stats for content

public/                    Static assets (images, icons)
AGENTS.md                  AI agent rules and guardrails
ARCHITECTURE.md            This file
next.config.mjs            Next.js configuration
jsconfig.json              Path aliases (@/ maps to root)
package.json               Dependencies and scripts

---

## 4. Routing and Page Inventory

### 4.1 Static Routes

| URL | File | Purpose |
|---|---|---|
| / | app/page.js | Homepage |
| /retreats | app/retreats/page.js | Retreat directory listing |
| /retreats/[slug] | app/retreats/[slug]/page.js | Individual retreat detail |
| /destinations | app/destinations/page.js | Browse retreats by destination |
| /retreat-matcher | app/retreat-matcher/page.js | Interactive quiz / matcher tool |
| /blog | app/blog/page.js | Blog index |
| /about | app/about/page.js | About Sarah Mitchell |
| /contact | app/contact/page.js | Contact form |
| /privacy | app/privacy/page.js | Privacy policy |
| /terms | app/terms/page.js | Terms of service |

### 4.2 Blog Posts (60+ pages, each in its own folder under app/blog/)

Each blog post lives at /blog/[post-slug]/page.js. All use the BlogPost wrapper component.

Current post slugs:
affordable-yoga-retreats, all-inclusive-yoga-retreat, ashtanga-yoga-retreat,
bali-vs-costa-rica-yoga-retreat, best-womens-yoga-retreats, best-yoga-retreats,
bodhi-tree-yoga-resort-review, couples-yoga-retreat, esalen-institute-review,
family-yoga-retreat, hot-yoga-retreat, how-to-book-yoga-retreat,
kamalaya-koh-samui-review, kripalu-yoga-retreat-review, luxury-yoga-retreats,
mens-yoga-retreat, silent-yoga-retreat, solo-female-yoga-retreat,
the-yoga-barn-ubud-review, vinyasa-yoga-retreat, weekend-yoga-retreat,
wellness-retreats, what-to-pack-yoga-retreat, womens-yoga-retreat,
yoga-and-meditation-retreat, yoga-retreat-bali, yoga-retreat-california,
yoga-retreat-cost, yoga-retreat-for-beginners, yoga-retreat-new-york,
yoga-retreat-portugal, yoga-retreat-thailand, yoga-retreat-tulum,
yoga-retreat-vs-fitness-camp, yoga-retreat-vs-teacher-training,
yoga-retreat-vs-wellness-resort, yoga-retreats, yoga-retreats-asia,
yoga-retreats-australia, yoga-retreats-brazil, yoga-retreats-colombia,
yoga-retreats-colorado, yoga-retreats-costa-rica, yoga-retreats-europe,
yoga-retreats-for-seniors, yoga-retreats-france, yoga-retreats-greece,
yoga-retreats-guatemala, yoga-retreats-hawaii, yoga-retreats-india,
yoga-retreats-italy, yoga-retreats-mexico, yoga-retreats-near-me,
yoga-retreats-nepal, yoga-retreats-new-zealand, yoga-retreats-peru,
yoga-retreats-spain, yoga-retreats-sri-lanka, yoga-retreats-uk,
yoga-teacher-training-retreat

### 4.3 API Routes

| Endpoint | File | Purpose |
|---|---|---|
| POST /api/contact | app/api/contact/route.js | Sends contact form email via Resend |
| POST /api/newsletter | app/api/newsletter/route.js | Subscribes user to Resend list |

### 4.4 Planned Routes (not yet built)

| URL | Purpose |
|---|---|
| /portal/ | Retreat owner dashboard (Supabase Auth protected) |
| /portal/login | Magic-link login for retreat owners |
| /portal/listings | Owner: manage their retreat listings |
| /portal/bookings | Owner: view and respond to booking requests |
| /admin/ | Internal admin panel (service-role protected) |

---

## 5. Data Architecture

### 5.1 Current State

Blog posts are hardcoded in their respective page.js files. No CMS is used.
Retreat cluster groupings live in content/cluster-yoga-retreats.json.

### 5.2 Planned: Supabase Integration

The retreat directory will be backed by Supabase (PostgreSQL). Planned schema:

retreats table:
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid()
  slug            text UNIQUE NOT NULL
  name            text NOT NULL
  description     text
  location_city   text
  location_country text
  price_from      numeric
  price_currency  text DEFAULT 'USD'
  duration_days   integer
  style           text[]    -- e.g. vinyasa, yin, restorative
  category        text[]    -- e.g. luxury, couples, budget
  images          text[]    -- array of image URLs
  website_url     text
  booking_url     text      -- affiliate or direct booking link
  status          text DEFAULT 'pending'   -- pending | active | rejected
  submitted_by    text      -- owner email, manual, or import
  created_at      timestamptz DEFAULT now()
  updated_at      timestamptz DEFAULT now()

retreat_owners table (Supabase Auth):
  id              uuid PRIMARY KEY REFERENCES auth.users
  email           text
  business_name   text
  created_at      timestamptz DEFAULT now()

bookings table:
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid()
  retreat_id      uuid REFERENCES retreats(id)
  traveler_name   text NOT NULL
  traveler_email  text NOT NULL
  start_date      date
  guests          integer DEFAULT 1
  status          text DEFAULT 'pending'   -- pending | confirmed | cancelled
  notes           text
  created_at      timestamptz DEFAULT now()

### 5.3 Retreat Submission Sources

1. Self-serve portal — Owners submit via a form; status starts as pending
2. Manual curation — Admin adds directly via Supabase dashboard or admin UI
3. Import/scrape — Bulk import scripts from BookYogaRetreats, Retreat Guru, etc.

---

## 6. Component Architecture

### 6.1 BlogPost — The Central Layout Component

Location: components/BlogPost.js
Reference template: references/blog-post-template.js

Every single blog post MUST be rendered inside BlogPost. This component:
- Renders Navbar and Footer automatically
- Sets the page title, meta description, and Open Graph tags
- Renders the article header (title, author byline, date, hero image)
- Applies consistent typography and reading-width layout
- Injects Article JSON-LD structured data for SEO

NEVER build a blog post as a raw layout. Always import and use BlogPost.

### 6.2 Navbar

Persistent site navigation. Auto-included via BlogPost; manually imported on non-blog pages.

### 6.3 Footer

Site footer with internal links and newsletter CTA. Auto-included via BlogPost; manually imported on non-blog pages.

### 6.4 Newsletter

Standalone newsletter signup widget. Can be dropped into any page independently.

---

## 7. Styling System

- Methodology: CSS Modules. Each component and page has a co-located .module.css file.
- Global tokens: defined in app/globals.css (colors, typography scale, spacing).
- No Tailwind. Do not add Tailwind unless explicitly instructed.
- Path alias: @/ maps to the project root (e.g., @/components/BlogPost).

---

## 8. SEO Architecture

### 8.1 Metadata

Root defaults in app/layout.js with per-page overrides via exported metadata objects.
metadataBase: https://www.yogaretreatadvisor.com
title template: '%s | YogaRetreatAdvisor'

### 8.2 Structured Data (JSON-LD)

| Schema | Where |
|---|---|
| Organization | app/layout.js (site-wide) |
| Article | Injected by BlogPost.js on all blog posts |
| Product / Review | To be added to retreat detail pages |

### 8.3 Keyword Strategy

| File | Purpose |
|---|---|
| references/keyword-master-list.md | Full keyword list with intent mapping |
| content/cluster-yoga-retreats.json | Topic clusters for internal linking |
| references/googlekeywordstats.csv | Search volume data from Google Search Console |

---

## 9. Email System

Provider: Resend
Templates: emails/ directory using @react-email/components

POST /api/contact    — sends contact form to sarah@yogaretreatadvisor.com
POST /api/newsletter — adds subscriber to Resend audience list

Required env var: RESEND_API_KEY

---

## 10. Analytics and Monetization

Google Analytics 4   — NEXT_PUBLIC_GA_MEASUREMENT_ID env var; loaded in root layout
Google AdSense       — Publisher ID ca-pub-3442420145961648; script in head of root layout
Affiliate links      — Retreat booking_url column in Supabase; tracked affiliate links per retreat

---

## 11. Planned Features (Roadmap)

### 11.1 Retreat Directory (Supabase-backed)
- Replace static/hardcoded retreat data with live Supabase queries
- Filter by: destination, style, price range, duration, category
- SEO-friendly dynamic pages at /retreats/[slug]
- Use generateStaticParams + ISR (revalidate) for performance

### 11.2 Retreat Owner Portal (Self-Serve)
- Supabase Auth — magic link (signInWithOtp), no passwords
- Dashboard at /portal/
- Owners can: submit listings, edit their details, view/respond to booking requests
- Listing status workflow: pending → active | rejected

### 11.3 Booking Management (v1 — no payment processing)
- Travelers submit requests via a form on /retreats/[slug]
- Inserted into bookings table with status = pending
- Retreat owner notified via Resend email
- Owner confirms/declines from /portal/bookings
- Traveler notified via Resend on status change

### 11.4 Admin Panel (Internal)
- Route at /admin/ — server-side auth check with service role key
- Approve/reject/edit submitted retreat listings
- View all bookings across all retreats
- Manage newsletter subscribers
- Excluded from sitemap and robots.txt

---

## 12. Environment Variables

| Variable | Purpose | Exposed to Client? |
|---|---|---|
| NEXT_PUBLIC_GA_MEASUREMENT_ID | Google Analytics 4 Measurement ID | Yes |
| RESEND_API_KEY | Resend email API key | No — server only |
| NEXT_PUBLIC_SUPABASE_URL | Supabase project URL | Yes |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Supabase anonymous key | Yes |
| SUPABASE_SERVICE_ROLE_KEY | Supabase service role key | No — server only, NEVER expose |

All vars in .env.local — never commit this file (it is in .gitignore).

---

## 13. Development Workflow

npm install       Install dependencies
npm run dev       Start dev server at http://localhost:3000
npm run lint      Run ESLint
npm run build     Production build (only when validating)

Deployment: automatic on push to main via Vercel.

---

## 14. Key Conventions

1. File naming: page.js + page.module.css for routes; ComponentName.js + ComponentName.module.css for components.
2. Imports: Always use @/ alias (@/components/BlogPost), never relative ../../.
3. No TypeScript. Plain JavaScript only. Never add .ts or .tsx files.
4. No Tailwind. CSS Modules only.
5. Server Components by default. Only add 'use client' when strictly necessary (hooks, browser APIs, interactivity).
6. API routes: Use app/api/[name]/route.js with named exports GET, POST, etc. Never pages/api/.
7. Metadata: Export a metadata object from each page.js. Never use Head tags.
8. Before writing any Next.js API: Read node_modules/next/dist/docs/ for the actual current API.
