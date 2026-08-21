---
name: antigravity-architecture
description: >
  Content blueprint generation, pillar anatomy, schema markup, GEO/AI optimization, and dual SEO+GEO scoring
  for the Antigravity SEO pipeline. Use this skill whenever the agent needs to create a content brief,
  build a page outline, write or optimize a blog post or affiliate page, apply schema markup, score content
  for AI citation probability, structure a pillar page, or produce any page that must rank in both traditional
  search and AI-generated answers (Google AI Overviews, ChatGPT, Perplexity). Always trigger AFTER
  antigravity-research has produced a Cluster Map. Pairs with antigravity-research (Stage 1) and
  antigravity-watchdog (Stage 3).
compatibility:
  tools:
    - Semrush:keyword_research
    - Semrush:execute_report
    - web_search
---

# Antigravity Architecture Skill
## Stage 2 of 3 — Content Blueprint, GEO Optimization & Publishing Readiness

Receives: Cluster Map + Priority Pillar list from `antigravity-research`.
Produces: Full content briefs, page blueprints, schema templates, and dual SEO/GEO scores.

---

## STEP 1 — Pillar Blueprint (Canonical Structure)

Every pillar page **must** follow this anatomy. No exceptions.

### 1A. Required Sections (in order)

```
1. [H1] Primary Keyword — Exact or close variant
2. [Canonical Definition Block] ← MANDATORY
3. [H2] What is [Topic]? (+ DefinedTerm schema)
4. [H2] Best [Topic] — Comparison / List section
5. [H2] How to Choose / What to Look For
6. [H2] [Top Location / Type Cluster] — dedicated subsections
7. [H2] Cost & Pricing
8. [H2] Frequently Asked Questions (FAQPage schema)
9. [H2] Final Verdict / Our Recommendation (affiliate CTA)
10. [Author Block + Last Updated date]
```

### 1B. Canonical Definition Block (CDB)
Place immediately after the H1, before any other content.

**Requirements:**
- Exactly 40–60 words
- Answer-first format: defines the entity directly
- Marked with `DefinedTerm` schema (see Step 4)
- Contains primary keyword + 1 semantic variant
- Written in neutral, encyclopedic voice (maximizes AI citation probability)

**Template:**
```
A [ENTITY] is [definition in 1 sentence]. [Expand with key attribute in 1–2 sentences].
[Close with one factual differentiator or context sentence]. 
```

**Example (yoga retreat niche):**
```
A yoga retreat is a dedicated multi-day program combining structured yoga practice, meditation,
and immersive wellness experiences at a residential venue. Retreats range from weekend getaways
to month-long intensives, offered globally from Bali to Costa Rica. They serve practitioners
from beginner to advanced, with formats tailored to specific goals such as stress relief,
teacher training, or detox.
```

---

## STEP 2 — Semantic Saturation Rules

Content must satisfy these thresholds to pass GEO scoring:

| Signal | Requirement |
|--------|------------|
| Primary keyword | In H1, first 100 words, ≥ 1 H2, meta title |
| Semantic variants | ≥ 5 LSI/related terms per 1000 words |
| Named entities | ≥ 3 real-world entities cited per section (locations, brands, people) |
| Factual density | Every major claim has an inline source citation |
| Unique data point | ≥ 1 original stat, table, or comparison per pillar |
| Reading level | 8th–10th grade (Flesch-Kincaid) |
| Paragraph length | ≤ 4 sentences |

### Factual Density Protocol
- Every claim about pricing, statistics, rankings, or health benefits → cite a real source inline
- Format: `According to [Source], [claim] ([year]).`
- Use `.edu`, `.gov`, peer-reviewed journals, or established industry publications
- Minimum 3 citations per 1000 words

---

## STEP 3 — Interactive Elements (AI Citation Maximizers)

Include all of the following in every pillar:

### 3A. Comparison Table
Required on all "best of" and affiliate pages.

```markdown
| Retreat | Location | Price/Night | Style | Best For | Booking |
|---------|---------|-------------|-------|----------|---------|
| [Name] | [City]  | $XX–$XX     | Hatha | Beginners | [Link] |
```

- Minimum 5 rows
- All data sourced and accurate
- Include `Table` schema where supported

### 3B. FAQ Section
- 5–8 questions sourced from PAA mining (from `antigravity-research` output)
- Answers: 2–4 sentences, direct, factual
- Must apply `FAQPage` JSON-LD schema (see Step 4)
- Questions should use natural language (not keyword-stuffed)

### 3C. Table of Contents (for 1500+ word pages)
- Anchor links for every H2
- Placed after the Canonical Definition Block
- Back-to-top button at end of each H2 section

---

## STEP 4 — Schema Markup Templates

Apply all applicable schema types. Output as JSON-LD in `<head>`.

### 4A. DefinedTerm (Canonical Definition Block)
```json
{
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "@id": "https://[yourdomain].com/[slug]#defined-term",
  "name": "[Primary Entity Name]",
  "description": "[The exact 40-60 word CDB text]",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "name": "[Niche Topic Set, e.g. Yoga Retreat Guide]"
  }
}
```

### 4B. FAQPage
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer text — 2–4 sentences]"
      }
    }
  ]
}
```

### 4C. Article (Blog Posts)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Title tag text]",
  "author": { "@type": "Person", "name": "[Author Name]" },
  "datePublished": "[ISO 8601 date]",
  "dateModified": "[ISO 8601 date]",
  "publisher": {
    "@type": "Organization",
    "name": "[Site Name]",
    "logo": { "@type": "ImageObject", "url": "[logo URL]" }
  }
}
```

### 4D. BreadcrumbList (every page)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://[domain]/" },
    { "@type": "ListItem", "position": 2, "name": "[Category]", "item": "https://[domain]/[category]/" },
    { "@type": "ListItem", "position": 3, "name": "[Page Title]", "item": "https://[domain]/[slug]/" }
  ]
}
```

### 4E. @id Graph (Entity Resolution for AI Crawlers)
Add to every page's JSON-LD:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": "https://[domain]/[slug]/#webpage" },
    { "@type": "BreadcrumbList", "@id": "https://[domain]/[slug]/#breadcrumb" },
    { "@type": "Article", "@id": "https://[domain]/[slug]/#article" }
  ]
}
```

---

## STEP 5 — Internal Linking Blueprint

Apply J-score rules from `antigravity-research`:

| Page Type | Links Out To | Anchor Text Rule |
|-----------|-------------|-----------------|
| Pillar | 3–5 high-authority satellites | Exact or close variant of target keyword |
| Satellite | Always → Pillar (1 link) | Pillar's primary keyword |
| Satellite (J > 0.25) | Up to 2 sibling satellites | Descriptive anchor, NOT generic |
| All pages | Breadcrumbs | Site hierarchy |

**Never use:** "click here", "read more", "this post", generic anchors.

---

## STEP 6 — Dual SEO / GEO Scoring

Score every piece of content before publishing. Target: **SEO ≥ 80, GEO ≥ 75**.

### SEO Score (0–100)
| Check | Points |
|-------|--------|
| Keyword in title, H1, first 100 words | 20 |
| Heading hierarchy correct (H1→H2→H3) | 10 |
| Meta description 150–160 chars | 10 |
| Internal links (3–5, correct J rules) | 15 |
| External citations (2–3, authoritative) | 10 |
| Images: alt text, WebP, compressed | 10 |
| Schema markup applied (all applicable) | 15 |
| Mobile-friendly, no CLS issues | 10 |

### GEO Score (0–100) — AI Search Optimization
| Check | Points |
|-------|--------|
| Canonical Definition Block present | 20 |
| DefinedTerm schema applied | 15 |
| FAQPage schema applied | 15 |
| Factual density ≥ 3 citations/1000 words | 20 |
| Neutral / encyclopedic voice (no hype) | 15 |
| Named real-world entities cited | 15 |

---

## STEP 7 — Publishing Checklist

Before handoff to CMS:
- [ ] CDB written and schema applied
- [ ] All schema JSON-LD validated (use schema.org validator)
- [ ] Dual score: SEO ≥ 80, GEO ≥ 75
- [ ] Comparison table included (affiliate pages)
- [ ] FAQ section (5–8 Q&As) with schema
- [ ] Internal links follow J-score rules
- [ ] Author block with bio, date published, date modified
- [ ] OG image 1200×630, Twitter Card 1200×600
- [ ] `lang` attribute on `<html>`, viewport meta, charset

---

## Reference Files
- `references/schema-templates.md` — Full schema library with copy-paste templates
- `references/geo-voice-guide.md` — Voice and tone rules for AI citation optimization

> **Next step:** After publishing, register the page in `antigravity-watchdog` (Skill 3) for ongoing monitoring.
