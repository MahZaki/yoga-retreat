/**
 * ─────────────────────────────────────────────────────────────────
 *  NEW BLOG POST TEMPLATE
 *  YogaRetreatAdvisor · yogaretreatadvisor.com
 * ─────────────────────────────────────────────────────────────────
 *
 *  HOW TO USE:
 *  1. Copy this file to:  app/blog/YOUR-SLUG/page.js
 *  2. Fill in every "TODO" field below
 *  3. Write the article body between the BlogPost tags
 *  4. Use <InlineImg> helper for body images above each H2
 *  5. Run the dev server and check /blog/YOUR-SLUG looks correct
 *
 *  MANDATORY BEFORE WRITING:
 *  Read all six reference files (see references/ directory):
 *    voice.md · humour.md · opinions.md · stats.md · stories.md · sarah-author-bio.md
 *
 *  IMAGE RULES (from blog-rewrites-master.md):
 *  - Fetch 3–5 Pexels images per post, download to /public/images/blog/
 *  - Place one full-width image above each major H2 using <InlineImg>
 *  - API key: bgOwLYzNCcO3RRdVO0Y1UeMJK4XOW4AuHGG3uwhqgiEddcVMf2PL7p16
 *
 *  CONTENT RULES:
 *  - Open with a scene, fact, or direct answer — never a question
 *  - Answer the primary keyword directly in the first paragraph
 *  - Use s.introBrief for the opening highlighted summary
 *  - Link to /blog/yoga-retreats (pillar) + 2–3 sibling posts
 *  - Include FAQ section with questions matching People Also Ask
 *  - One dry observation per ~800 words (see humour.md)
 *  - Stats: always use 14 retreats, 9 countries, $380–$4,200
 * ─────────────────────────────────────────────────────────────────
 */

import Image from 'next/image'
import Link from 'next/link'
import BlogPost from '@/components/BlogPost'
import s from '../yoga-retreats/page.module.css'

// ─── Metadata (controls <head> tags + OG cards) ─────────────────
export const metadata = {
  title: 'TODO: Page Title | YogaRetreatAdvisor',      // ~60 chars
  description: 'TODO: Meta description.',               // ~155 chars
  alternates: { canonical: 'https://www.yogaretreatadvisor.com/blog/TODO-SLUG' },
  openGraph: {
    title: 'TODO: OG Title',
    description: 'TODO: OG description.',
    images: [{ url: '/images/blog/TODO-hero.jpg', width: 1200, height: 630, alt: 'TODO alt text' }],
    type: 'article',
  },
}

// ─── Page Component ──────────────────────────────────────────────
export default function TODOPage() {
  return (
    <BlogPost
      // ── Required ──────────────────────────────────────────
      title="TODO: H1 Title (can differ slightly from metadata.title)"
      heroImage="/images/blog/TODO-hero.jpg"
      heroAlt="TODO: Hero image alt text — describe what is actually in the photo"
      canonicalUrl="https://www.yogaretreatadvisor.com/blog/TODO-SLUG"

      // ── Optional display ──────────────────────────────────
      category="Destinations"      // or "Retreat Types" | "Planning" | "Guides"
      date="June 2026"
      readTime="7 min read"

      // ── Sidebar table of contents ─────────────────────────
      // One entry per major H2 in the article. href must match the id="…" on that H2.
      tocItems={[
        { href: '#section-one', label: 'Section One Title' },
        { href: '#section-two', label: 'Section Two Title' },
        { href: '#faq',         label: 'FAQ' },
      ]}

      // ── Tags shown below article body ─────────────────────
      tags={['TODO Tag 1', 'TODO Tag 2', 'USA Retreats']}

      // ── Related posts (3 recommended) ────────────────────
      relatedPosts={[
        {
          href: '/blog/yoga-retreats',
          img: '/images/blog/best-retreats-group.jpg',
          imgAlt: 'Yoga retreat group outdoor',
          label: 'Planning',
          title: 'Best Yoga Retreats in the World (2026)',
        },
        {
          href: '/blog/yoga-retreat-california',
          img: '/images/blog/california-yoga.jpg',
          imgAlt: 'California yoga retreat',
          label: 'Destinations',
          title: 'Yoga Retreat California: Top-Rated Centres by Region',
        },
        {
          href: '/blog/luxury-yoga-retreats',
          img: '/images/blog/luxury-yoga.jpg',
          imgAlt: 'Luxury yoga retreat pool',
          label: 'Retreat Types',
          title: 'Luxury Yoga Retreats: What $3,000+ Gets You',
        },
      ]}

      // ── FAQ schema (People Also Ask — strongly recommended) ─
      faqSchema={[
        {
          question: 'TODO: First PAA question?',
          answer: 'TODO: Direct, concise answer in 2–3 sentences.',
        },
        {
          question: 'TODO: Second PAA question?',
          answer: 'TODO: Direct, concise answer.',
        },
        {
          question: 'TODO: Third PAA question?',
          answer: 'TODO: Direct, concise answer.',
        },
      ]}

      // ── Article schema extras ─────────────────────────────
      articleSchema={{
        datePublished: '2026-06-12',  // update to actual publish date
        dateModified:  '2026-06-12',
      }}

      // ── Breadcrumb label (3rd crumb) ──────────────────────
      breadcrumbLabel="TODO: Short page name e.g. Greece Retreats"
    >
      {/* ══════════════════════════════════════════════════════
          ARTICLE BODY — write your content below this line
          ══════════════════════════════════════════════════════

          REQUIRED ELEMENTS (in order):
          1. <p className={s.introBrief}> — highlighted opening summary
          2. Opening paragraphs — scene, fact, or direct answer first
          3. Repeat for each section:
               a. <InlineImg> above the H2
               b. <h2 id="section-one">Section Heading</h2>
               c. Body paragraphs / lists
          4. Retreat listings use <div className={s.retreatListing}>
          5. FAQ questions/answers as <p><strong>Q?</strong><br/>A.</p>
      ══════════════════════════════════════════════════════ */}

      {/* ── Intro brief ───────────────────────────────────── */}
      <p className={s.introBrief}>
        TODO: One-paragraph highlighted summary. Answer the primary keyword
        directly here — this is what Google uses for featured snippets.
        Keep it to 2–3 sentences. Specific and factual.
      </p>

      <p>TODO: Opening paragraph. Start with a scene, fact, or direct answer
        — never a question. Link to the pillar:
        <Link href="/blog/yoga-retreats">yoga retreats</Link>.
      </p>

      <p>TODO: Second paragraph.</p>

      {/* ── Section 1 ─────────────────────────────────────── */}
      {/*
        Place a full-width Pexels image above each H2:
        <div className={s.imgFull}>
          <Image
            src="/images/blog/TODO-section-1.jpg"
            alt="TODO descriptive alt text"
            fill sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      */}
      <h2 id="section-one">TODO: Section One Heading</h2>

      <p>TODO: Section one body copy.</p>

      {/* ── Section 2 ─────────────────────────────────────── */}
      <h2 id="section-two">TODO: Section Two Heading</h2>

      <p>TODO: Section two body copy.</p>

      {/* ── Retreat Listing (copy/repeat for each retreat) ── */}
      <div className={s.retreatListing}>
        <h3>1. TODO: Retreat Name</h3>
        <p><strong>Location:</strong> TODO</p>
        <p><strong>Vibe:</strong> TODO</p>
        <p><strong>Best For:</strong> TODO</p>
        <p>TODO: 3–4 sentences on this retreat. Specific details, honest assessment.</p>
        <div style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
          <a
            href="https://bookretreats.com/s/yoga-retreats/TODO-COUNTRY?a=kgwad"
            target="_blank"
            rel="noopener noreferrer"
            className={s.primaryBtn}
            style={{ display: 'inline-block', width: 'auto' }}
          >
            Check Dates & Prices
          </a>
        </div>
      </div>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <h2 id="faq">FAQ</h2>

      <p><strong>TODO: First PAA question?</strong><br/>
        TODO: Answer.</p>

      <p><strong>TODO: Second PAA question?</strong><br/>
        TODO: Answer.</p>

      <p><strong>TODO: Third PAA question?</strong><br/>
        TODO: Answer.</p>

    </BlogPost>
  )
}
