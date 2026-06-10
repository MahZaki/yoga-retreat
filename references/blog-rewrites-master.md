# Blog Rewrites — Master Brief
# yogaretreatadvisor.com | Updated: June 2026

**Pexels API key:** `bgOwLYzNCcO3RRdVO0Y1UeMJK4XOW4AuHGG3uwhqgiEddcVMf2PL7p16`  
**Image folder:** `/public/images/blog/`  
**CSS module to use:** `../yoga-retreats/page.module.css` (shared across all posts)

---

## ⚠️ MANDATORY — Read all references BEFORE writing any post

Before touching any page.js, you MUST read these five files and apply them:

| File | What it controls |
|---|---|
| `references/voice.md` | Sentence rhythm, vocabulary, anti-patterns, formatting rules |
| `references/humour.md` | How/where/how often humour appears — one dry observation per 800 words |
| `references/opinions.md` | Sarah's standing positions (Op 1–6) — attach the correct one to each post |
| `references/stats.md` | Canonical numbers — **14 retreats, 9 countries, $380–$4,200**. Use these exactly. Never invent stats. |
| `references/stories.md` | Canonical anecdotes — use verbatim core facts, vary framing only |
| `references/sarah-author-bio.md` | Author box copy — use short bio, RYT-50 (not RYT-200), based London/Lisbon |

**Do not write the post until you have read all six files in this session.**

---

## Rules for every rewrite (apply without exception)
- Open with a scene, fact, or direct answer — never a question
- Answer the primary keyword directly in the first paragraph (featured snippet)
- Match top 3 SERP competitors in format + length (within 20%)
- Cover every topic competitors cover + add 1–2 gaps they missed
- Include FAQ section (People Also Ask) with `FAQPage` JSON-LD schema
- Add `Article` JSON-LD schema with `datePublished: 2026`
- Fetch 3–5 Pexels images per post, place above H2s
- Use `s.introBrief` for opening highlighted summary
- Internal links: always link to pillar `/blog/yoga-retreats` + 2–3 sibling posts
- End with author box — **14 retreats, 9 countries, $380–$4,200, RYT-50** (from `sarah-author-bio.md`)
- Voice: honest, warm, specific. No jargon. Contractions always.
- One dry observation per ~800 words. Humour must feel accidental (see `humour.md`).

---

## Status

| # | Slug | Keyword | Vol | Status |
|---|---|---|---|---|
| 1 | `/blog/yoga-retreats` | yoga retreats | 8,100 | ✅ DONE |
| 2 | `/blog/yoga-retreats-india` | yoga retreats india | 170 | ✅ DONE |
| 3 | `/blog/yoga-retreat-bali` | yoga retreat bali | 880 | ✅ DONE |
| 4 | `/blog/yoga-retreat-california` | yoga retreat california | 720 | ✅ DONE |
| 5 | `/blog/womens-yoga-retreat` | womens yoga retreat | 720 | ✅ DONE |
| 6 | `/blog/best-yoga-retreats` | best yoga retreats | 480 | ✅ DONE |
| 7 | `/blog/how-to-book-yoga-retreat` | how to book a yoga retreat | 390 | ✅ DONE |
| 8 | `/blog/yoga-retreats-costa-rica` | yoga retreats costa rica | 260 | ✅ DONE |
| 9 | `/blog/yoga-retreat-for-beginners` | yoga retreat for beginners | 260 | ✅ DONE |
| 10 | `/blog/luxury-yoga-retreats` | luxury yoga retreats | 210 | ✅ DONE |
| 11 | `/blog/silent-yoga-retreat` | silent yoga retreat | 210 | 🔜 NEXT |
| 12 | `/blog/affordable-yoga-retreats` | affordable yoga retreats | 170 | ⬜ TODO |
| 13 | `/blog/all-inclusive-yoga-retreat` | all inclusive yoga retreat | 170 | ⬜ TODO |

---

## Per-Post Briefs

### 3. `/blog/yoga-retreat-bali` — 880/mo
**Primary keyword:** yoga retreat bali  
**Target length:** ~2,000 words  
**Format:** destination guide + comparison table  
**Featured snippet answer:** "Ubud is the spiritual centre for yoga in Bali — traditional ashrams, jungle settings, established teacher community. Canggu is surf-and-yoga. Uluwatu is clifftop luxury. Budget: $600–$900/week. Mid-range: $1,000–$1,800."  
**Sections competitors all cover:** Ubud vs Canggu vs Uluwatu, best time to visit, what's included, budget tiers  
**Gaps to add:** honest opinion on Bali price premium vs teaching quality (Opinion 4), visa/e-VOA, Bali vs India comparison  
**Story to anchor:** The Bali Lesson (Instagram vs reality, Ubud retreat, feeling like a prop)  
**Opinion to include:** Opinion 4 — Bali overpriced relative to teaching quality  
**Pexels queries:** `yoga ubud bali`, `canggu surf yoga`, `uluwatu bali cliff`, `bali rice terrace meditation`  
**Image filenames to save:** `bali-ubud-yoga.jpg`, `bali-canggu-surf.jpg`, `bali-uluwatu.jpg`

---

### 4. `/blog/yoga-retreat-california` — 720/mo ✅
**Completed:** June 2026  
**What was done:** ~1,800-word regional breakdown across Big Sur, Ojai, Joshua Tree, and Bay Area. Included Esalen booking-reality warning, best-season-by-region table, California vs Colorado comparison, and the "Colorado Convert" story for sceptical first-timers. 3 Pexels images (Big Sur, Ojai, Joshua Tree). FAQ schema (4 Qs). Full sidebar ToC + related links. Author box with RYT-200 detail.

---

### 5. `/blog/womens-yoga-retreat` — 720/mo ✅
**Completed:** June 2026  
**What was done:** ~2,100-word guide. Opened with Morocco Surprise story (highest-rated retreat Sarah almost skipped). Covered what the format genuinely changes (practice openness, community speed, solo logic), what to look for (teacher credentials, women-only vs women-focused distinction, mental health caveat, refund policy warning). Destination comparison table (India, Morocco, Portugal, Costa Rica, Bali, USA). 8 named programmes with honest price ranges. First-timer vs experienced section. 5-Q FAQ schema. 3 Pexels images (retreat group, meditation circle, outdoor sunrise). Sidebar ToC + related links.

---

### 6. `/blog/best-yoga-retreats` — 480/mo ✅
**Completed:** June 2026  
**SERP analysis:** 3 competitors analysed (retreator.com, bodyflows.com, bookyogaretreats.com). All were listing-format or operator-owned pages ~1,000–1,500 words. None included a structured evaluation framework, platform conflict of interest disclosure, or teacher credential checklist.  
**What was done:** ~2,100-word evaluation guide (not a listicle — the gap competitors miss). 4-pillar framework (teacher, schedule, group size, refund policy). Teacher credential checklist (5 points). Best-picks-by-category table with canonical prices from stats.md. Platform conflict-of-interest section deploying Opinion 1 fully (10–25% commission, paid featured placements). Price reality check using Tuscany Moment story from stories.md. 5-Q FAQ schema. 3 Pexels images. Author box with canonical stats (14 retreats/9 countries/$380–$4,200/RYT-50).

---

### 7. `/blog/how-to-book-yoga-retreat` — 390/mo
**Primary keyword:** how to book a yoga retreat  
**Target length:** ~1,800 words  
**Format:** step-by-step guide  
**Featured snippet answer:** "To book a yoga retreat: (1) set your budget including flights and transfers, (2) choose destination based on teaching style not aesthetics, (3) verify teacher credentials independently, (4) read reviews off-platform, (5) check the cancellation policy before paying any deposit."  
**Sections:** setting budget (real totals), choosing destination, evaluating teachers, reading reviews properly, deposits & cancellation, what to do if plans change  
**Gaps to add:** deposit red flags (>50% upfront), travel insurance non-negotiable, teacher-to-student ratio  
**Pexels queries:** `booking travel laptop coffee`, `yoga retreat planning`, `passport travel yoga`  
**Image filenames:** `booking-laptop-plan.jpg`, `booking-passport-travel.jpg`

---

### 8. `/blog/yoga-retreats-costa-rica` — 260/mo
**Primary keyword:** yoga retreats costa rica  
**Target length:** ~1,800 words  
**Format:** destination guide + comparison table  
**Featured snippet answer:** "Costa Rica yoga retreats centre around Nosara and Santa Teresa — eco-lodges, jungle settings, surf add-ons. Budget: $700–$1,100/week. Mid-range: $1,200–$1,800. Best option for US travellers avoiding long-haul flights."  
**Sections:** Nosara vs Santa Teresa vs Uvita, surf + yoga format, best time, practical travel notes, Costa Rica vs Bali comparison  
**Gaps to add:** road conditions/transport reality, why it beats Mexico for US east coasters on price/time  
**Pexels queries:** `costa rica yoga jungle`, `nosara beach yoga`, `surf yoga costa rica`  
**Image filenames:** `costa-rica-jungle-yoga.jpg`, `costa-rica-beach.jpg`

---

### 9. `/blog/yoga-retreat-for-beginners` — 260/mo
**Primary keyword:** yoga retreat for beginners  
**Target length:** ~2,000 words  
**Format:** practical guide  
**Featured snippet answer:** "For a first yoga retreat, choose 4–5 days rather than 7. Look for mixed-level classes, a named lead teacher, and a group under 15. Budget $300–$1,400 depending on destination. You don't need to be flexible, experienced, or spiritual to attend."  
**Sections:** what to expect on day 1, how to choose your first retreat (length, level, group size), what to pack, common mistakes, when to upgrade to longer retreats  
**Story:** Origin Story (the Meeting Room) — why she booked with zero preparation  
**Opinion:** Opinion 2 (7-day is too long for first-timers), Opinion 3 (teacher matters more than room)  
**Pexels queries:** `beginner yoga class outdoor`, `first yoga retreat`, `yoga mat nature morning`  
**Image filenames:** `beginner-yoga-class.jpg`, `beginner-yoga-mat.jpg`

---

### 10. `/blog/luxury-yoga-retreats` — 210/mo
**Primary keyword:** luxury yoga retreats  
**Target length:** ~1,800 words  
**Format:** guide + comparison table  
**Featured snippet answer:** "Luxury yoga retreats ($2,500–$4,000+/week) differ from mid-range in four ways: group capped at 8–12, teacher with 20+ years experience, private accommodation, and zero logistical friction. The price is only worth it when it's emotionally neutral."  
**Sections:** what the premium actually buys, top luxury destinations (Tuscany, Tulum, Ubud), what to look for, when luxury is and isn't worth it  
**Story:** Tuscany Moment ($4,200, almost cancelled 3x, why it was worth it — and the emotional neutrality rule)  
**Pexels queries:** `luxury yoga resort pool`, `tuscany wellness retreat`, `luxury spa yoga`  
**Image filenames:** `luxury-resort-yoga.jpg`, `luxury-tuscany-wellness.jpg`

---

### 11. `/blog/silent-yoga-retreat` — 210/mo
**Primary keyword:** silent yoga retreat  
**Target length:** ~1,800 words  
**Format:** explainer guide  
**Featured snippet answer:** "A silent yoga retreat (Vipassana and similar) requires no speaking for 7–10 days. They're donation-based or low-cost. The discomfort is front-loaded — the first 12–18 hours are strange. After that, most participants find the silence a relief. Not appropriate for untreated depression or anxiety without professional guidance."  
**Sections:** what silent retreats actually involve, Vipassana vs other formats, who they suit (and don't), what to expect day by day, cost, how to apply  
**Gaps to add:** mental health contraindications (must include), what happens if you break silence  
**Opinion:** Opinion 5 (underrated for non-spiritual people, especially former corporate)  
**Pexels queries:** `silent meditation retreat`, `vipassana meditation`, `meditation silence nature`  
**Image filenames:** `silent-retreat-meditation.jpg`, `silent-nature-meditation.jpg`

---

### 12. `/blog/affordable-yoga-retreats` — 170/mo
**Primary keyword:** affordable yoga retreats  
**Target length:** ~1,800 words  
**Format:** guide + destination comparison table  
**Featured snippet answer:** "The most affordable yoga retreats are in India ($300–$600/week full board in Rishikesh) and Thailand ($600–$900/week). In Europe, Portugal offers the best value at $800–$1,200/week. Budget retreats can be excellent — the key is verifying teacher credentials, not chasing the lowest price."  
**Sections:** what budget actually means (never use "affordable" without a number), best cheap destinations ranked, what to sacrifice vs what you don't have to, red flags in budget retreats  
**Pexels queries:** `budget yoga retreat nature`, `rishikesh yoga affordable`, `thailand yoga budget`  
**Image filenames:** `affordable-yoga-india.jpg`, `affordable-yoga-thailand.jpg`

---

### 13. `/blog/all-inclusive-yoga-retreat` — 170/mo
**Primary keyword:** all inclusive yoga retreat  
**Target length:** ~1,600 words  
**Format:** explainer guide  
**Featured snippet answer:** "All-inclusive yoga retreats bundle accommodation, meals, yoga sessions, and sometimes excursions into one upfront price. Expect $900–$2,500/week depending on destination. Always check what 'all-inclusive' actually means — most exclude airport transfers, spa treatments, and alcohol."  
**Sections:** what's actually included vs what usually isn't, best destinations for all-inclusive, how to compare prices honestly, is it better value than booking separately?  
**Pexels queries:** `all inclusive resort yoga`, `yoga retreat meal included`, `wellness resort pool yoga`  
**Image filenames:** `all-inclusive-resort.jpg`, `all-inclusive-meal.jpg`
