<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in node_modules/next/dist/docs/ before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:blog-agent-rules -->
# MANDATORY BLOG POST RULES

Whenever creating or rewriting a blog post for YogaRetreatAdvisor, you MUST STRICTLY FOLLOW these rules:
1. Template Enforcement: Every single blog post MUST be built using the BlogPost wrapper component (import BlogPost from '@/components/BlogPost'). Do not use raw HTML layouts or manually import the Navbar/Footer. Use references/blog-post-template.js as the starting point.
2. Immediate Audience Answer: The very first element in the content body MUST be the <p className={s.introBrief}> tag. Inside this tag, you MUST directly and concisely answer the primary search intent/keyword to optimize for the featured snippet. No fluff, just the answer.
<!-- END:blog-agent-rules -->

<!-- BEGIN:architecture-overview -->
# Architecture Overview

Read ARCHITECTURE.md for the full technical reference. Summary below.

## Project
YogaRetreatAdvisor — Next.js 16 / React 19 / App Router / CSS Modules / Supabase / Resend / Vercel.
Live at: https://www.yogaretreatadvisor.com

## Goals (all three matter equally)
1. SEO — rank on Google for yoga retreat keywords and drive organic traffic
2. Affiliate / Monetization — earn commissions via retreat booking referrals  
3. Lead Generation — grow email list via Resend newsletter

## Author persona
All content is written as Sarah Mitchell. Read references/sarah-author-bio.md and references/voice.md before writing anything.

## Key directories
- app/                  all routes (App Router). Routing = filesystem
- app/blog/[slug]/      60+ blog post pages. Each is its own folder
- app/retreats/[slug]/  retreat detail pages (dynamic, Supabase-backed, in progress)
- components/           BlogPost, Navbar, Footer, Newsletter
- references/           editorial and AI reference files. Read before writing any content
- emails/               React Email templates used by Resend
<!-- END:architecture-overview -->

<!-- BEGIN:coding-conventions -->
# Coding Conventions

1. JavaScript only — no TypeScript. Never add .ts or .tsx files.
2. CSS Modules only — no Tailwind, no inline styles for layout. Each page and component has a .module.css file.
3. Always use @/ imports — import X from '@/components/X', never relative ../../.
4. Server Components by default — only add 'use client' when strictly necessary (hooks, browser APIs).
5. API routes — use app/api/[name]/route.js with named exports GET, POST, etc. Never pages/api/.
6. Metadata — export a metadata object from each page.js. Never use Head tags.
7. File naming — page.js + page.module.css for routes. ComponentName.js + ComponentName.module.css for components.
<!-- END:coding-conventions -->

<!-- BEGIN:content-rules -->
# Content Rules

## Voice — non-negotiable
Read references/voice.md in full before writing any content. Key principles:
- Write as Sarah Mitchell, not as a wellness brand
- Short sentences. One-sentence paragraphs are fine. Never three consecutive long sentences.
- Always include a price figure. Never say affordable or luxury without a number.
- Open with a scene, a fact, or a direct statement. Never a rhetorical question.
- Headers in sentence case. Never keyword-stuffed title case.

## SEO — keyword discipline
- Do not create a blog post for a slug that already exists (see Section 4.2 of ARCHITECTURE.md)
- Target keyword goes in: title, first paragraph, first h2, and URL slug
- Refer to references/keyword-master-list.md before choosing a keyword target

## Structured data
- Blog posts automatically get Article JSON-LD from BlogPost.js
- Retreat pages should have Product or Review schema manually added
<!-- END:content-rules -->

<!-- BEGIN:database-rules -->
# Database Rules (Supabase)

## Connection
- Client-side: use NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY
- Server-side / API routes: use SUPABASE_SERVICE_ROLE_KEY for privileged operations
- NEVER expose SUPABASE_SERVICE_ROLE_KEY to the client or browser

## Tables (see ARCHITECTURE.md section 5.2 for full schema)
- retreats — core listing data. status field: pending | active | rejected
- retreat_owners — owner accounts linked to Supabase Auth
- bookings — traveler booking requests. No payment processing in v1.

## Row Level Security (RLS)
- Always enable RLS on all tables
- Retreat owners may only read/write their own retreats and bookings
- Anonymous users may only read active retreats
- Admin actions require service role key (server-side only)

## Status workflow
Retreats: pending (submitted) → active (approved) | rejected
Bookings: pending → confirmed | cancelled
<!-- END:database-rules -->

<!-- BEGIN:new-features-guidance -->
# Guidance for New Features

## Retreat Directory
- Pages live at /retreats/[slug] using app/retreats/[slug]/page.js
- Data comes from Supabase retreats table where status = active
- Use generateStaticParams for static generation with revalidate for ISR
- Add Product or Review JSON-LD schema to each retreat detail page

## Retreat Owner Portal
- Route: /portal/ (protected via Supabase Auth session check)
- Owners can: submit listings, edit their own listings, view/manage booking requests
- Use Supabase Auth signInWithOtp (magic link) — no password auth
- Redirect unauthenticated users to /portal/login

## Booking Management
- Travelers submit requests via a form on /retreats/[slug]
- Request is inserted into bookings table with status = pending
- Resend sends email notification to retreat owner on new booking
- Owner confirms/declines from their portal at /portal/bookings
- Resend sends email to traveler on status change
- No payment processing in v1

## Admin Panel
- Route: /admin/ — server-side auth check using service role key
- Features: approve/reject listings, view all bookings, manage newsletter
- Keep admin routes out of the sitemap and robots.txt
<!-- END:new-features-guidance -->

<!-- BEGIN:env-variables -->
# Environment Variables

| Variable | Purpose | Client-safe? |
|---|---|---|
| NEXT_PUBLIC_GA_MEASUREMENT_ID | Google Analytics 4 | Yes |
| RESEND_API_KEY | Resend email API | No — server only |
| NEXT_PUBLIC_SUPABASE_URL | Supabase URL | Yes |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Supabase anon key | Yes |
| SUPABASE_SERVICE_ROLE_KEY | Supabase admin key | No — server only, never expose |

All vars live in .env.local (not committed to git).
<!-- END:env-variables -->
