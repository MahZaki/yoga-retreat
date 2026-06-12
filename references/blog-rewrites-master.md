# Blog Rewrites — Master Brief
# yogaretreatadvisor.com | Updated: June 2026

**Pexels API key:** `bgOwLYzNCcO3RRdVO0Y1UeMJK4XOW4AuHGG3uwhqgiEddcVMf2PL7p16`  
**Image folder:** `/public/images/blog/`  
**Full keyword list:** `references/keyword-master-list.md` ← check this first  

---

## 🏗️ BLOG ARCHITECTURE — How New Posts Work

**Every new blog post MUST use the shared `<BlogPost>` component.**  
Never write raw Navbar/Footer/layout HTML in a page.js again.

### 3-step process for every new post:

1. **Copy the template:**
   ```
   cp references/blog-post-template.js app/blog/YOUR-SLUG/page.js
   ```
2. **Fill in the props** at the top (title, heroImage, tocItems, faqSchema, etc.)
3. **Write your content** as JSX children between the `<BlogPost>` tags

### Component location:
- **Layout component:** `components/BlogPost.js`
- **Template to copy:** `references/blog-post-template.js`
- **Shared CSS:** `app/blog/yoga-retreats/page.module.css`

### What BlogPost handles automatically:
- Full hero image with overlay, title, date, read time
- Two-column layout (body + sidebar TOC)
- Author box (Sarah Mitchell, canonical bio, RYT-50)
- Tags row
- Related posts grid (3 cards)
- Article JSON-LD schema
- BreadcrumbList JSON-LD schema
- FAQPage JSON-LD schema (if faqSchema prop provided)

---

## ⚠️ MANDATORY — Read all references BEFORE writing any post

Before touching any page.js, you MUST read these files and apply them:

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

## ✅ Completion Status (All Published Posts)

| # | Slug | Keyword | Vol | Published |
|---|---|---|---|---|
| 1 | `/blog/yoga-retreats` | yoga retreats (pillar) | 8,100 | ✅ Jan 2025 |
| 2 | `/blog/wellness-retreats` | wellness retreats | 9,900 | ✅ Jun 2026 |
| 3 | `/blog/yoga-retreat-bali` | yoga retreat bali | 880 | ✅ Feb 2025 |
| 4 | `/blog/yoga-retreat-california` | yoga retreat california | 720 | ✅ Jul 2025 |
| 5 | `/blog/womens-yoga-retreat` | womens yoga retreat | 720 | ✅ Jun 2026 |
| 6 | `/blog/best-womens-yoga-retreats` | best womens yoga retreats | 480 | ✅ Jun 2026 |
| 7 | `/blog/best-yoga-retreats` | best yoga retreats | 480 | ✅ Jun 2025 |
| 8 | `/blog/how-to-book-yoga-retreat` | how to book a yoga retreat | 390 | ✅ May 2026 |
| 9 | `/blog/yoga-retreats-colorado` | yoga retreats colorado | 390 | ✅ Jun 2026 |
| 10 | `/blog/yoga-retreats-hawaii` | yoga retreats hawaii | 390 | ✅ Jun 2026 |
| 11 | `/blog/yoga-retreats-near-me` | yoga retreats near me | 2,400 | ✅ Jun 2026 |
| 12 | `/blog/yoga-retreats-costa-rica` | yoga retreats costa rica | 260 | ✅ Feb 2026 |
| 13 | `/blog/yoga-retreats-greece` | yoga retreats greece | 260 | ✅ Jun 2026 |
| 14 | `/blog/yoga-retreat-for-beginners` | yoga retreat for beginners | 260 | ✅ Jun 2026 |
| 15 | `/blog/luxury-yoga-retreats` | luxury yoga retreats | 210 | ✅ Jun 2026 |
| 16 | `/blog/silent-yoga-retreat` | silent yoga retreat | 210 | ✅ Jun 2026 |
| 17 | `/blog/affordable-yoga-retreats` | affordable yoga retreats | 170 | ✅ Jan 2026 |
| 18 | `/blog/all-inclusive-yoga-retreat` | all inclusive yoga retreat | 170 | ✅ Apr 2026 |
| 19 | `/blog/yoga-retreats-india` | yoga retreats india | 170 | ✅ Mar 2025 |

**Total: 19 posts live.**

---

## 🔴 NEXT 10 — Priority Queue (Write in This Order)

| Order | Keyword | Vol | Target Slug | Why |
|-------|---------|-----|-------------|-----|
| **1** | how much does a yoga retreat cost | 590 | `/blog/yoga-retreat-cost` | Highest unmet planning intent. FAQ magnet. Competitors dodge real numbers — we don't. |
| **2** | what to pack for a yoga retreat | 480 | `/blog/what-to-pack-yoga-retreat` | Low KD, evergreen, strong internal link target from all geo pages. |
| **3** | yoga and meditation retreat | 590 | `/blog/yoga-and-meditation-retreat` | Broad format — captures non-yoga wellness searches. Major traffic opportunity. |
| **4** | weekend yoga retreat | 480 | `/blog/weekend-yoga-retreat` | High volume, near-me intent. Huge UK + US traffic. Short-trip audience. |
| **5** | yoga teacher training retreat | 1,200 | `/blog/yoga-teacher-training` | Highest-volume uncovered keyword. High CPC ($3.20) = affiliate gold. Own the "Is YTT right for me?" advisory angle. |
| **6** | couples yoga retreat | 390 | `/blog/couples-yoga-retreat` | Distinct audience, Valentine's/anniversary seasonal traffic. |
| **7** | yoga retreat tulum | 590 | `/blog/yoga-retreat-tulum` | Biggest uncovered international destination. Luxury/aesthetic intent. |
| **8** | yoga retreat thailand | 480 | `/blog/yoga-retreat-thailand` | Major destination gap. Less competitive than Bali. Strong volume. |
| **9** | yoga retreat portugal | 390 | `/blog/yoga-retreat-portugal` | Low KD. Sarah's base (London/Lisbon) = high E-E-A-T signal. |
| **10** | yoga retreat new york | 320 | `/blog/yoga-retreat-new-york` | Highest-traffic US domestic gap after the ones we've covered. |

---

## Per-Post Briefs — Next 10

---

### POST 1 · `/blog/yoga-retreat-cost` — 590/mo

**Primary keyword:** how much does a yoga retreat cost  
**Secondary:** yoga retreat price, yoga retreat cost per week  
**Target length:** ~1,800 words  
**Format:** practical breakdown guide  
**Featured snippet answer:** "A yoga retreat costs $300–$600/week in India, $700–$1,100 in Costa Rica or Thailand, $900–$1,800 in Bali or Europe, and $1,500–$3,500 in Hawaii or the US. Flights and travel insurance are almost always excluded."  
**Sections:**
- Full cost-per-destination table with realistic ranges
- What is and isn't included in headline prices
- Hidden costs (airport transfers, single supplement, excursions)
- Budget vs mid-range vs luxury breakdowns
- How to calculate your true all-in cost
- Best value destinations by quality-per-dollar

**Opinion to anchor:** Opinion 1 (booking platform commission inflates apparent prices)  
**Stats to use:** $380–$4,200 range from stats.md  
**Story:** Tuscany Moment — she almost cancelled because the price felt absurd; why it wasn't, and the rule for knowing when premium is worth it  
**Gaps competitors miss:** Real all-in cost calculator; single supplement reality; what "deposit" actually means  
**Pexels queries:** `travel budget planning laptop`, `yoga retreat tropical pool`, `booking travel journal`  
**Image filenames:** `retreat-cost-planning.jpg`, `retreat-budget-tropical.jpg`, `retreat-booking-journal.jpg`

---

### POST 2 · `/blog/what-to-pack-yoga-retreat` — 480/mo

**Primary keyword:** what to pack for a yoga retreat  
**Secondary:** yoga retreat packing list, what to bring to a yoga retreat  
**Target length:** ~1,600 words  
**Format:** practical checklist guide  
**Featured snippet answer:** "For a yoga retreat, pack: 2–3 sets of yoga clothes, a high-quality mat (unless provided), a journal, layers for cool evenings, electrolytes, and any personal supplements. Leave behind: excessive tech, perfume/strong scent, and alarm clocks."  
**Sections:**
- The essential yoga kit (mat, clothes, props)
- Destination-specific add-ons (altitude, tropical heat, mountain cold)
- What NOT to bring (Sarah's honest list)
- Tech: how much is too much
- Digital detox considerations
- The 1-bag vs 2-bag decision

**Opinion:** Opinion 6 (tech brings the office with you — leave it behind)  
**Pexels queries:** `yoga mat packing bag travel`, `yoga clothes suitcase`, `travel journal morning`  
**Image filenames:** `packing-yoga-mat.jpg`, `packing-yoga-clothes.jpg`

---

### POST 3 · `/blog/yoga-and-meditation-retreat` — 590/mo

**Primary keyword:** yoga and meditation retreat  
**Secondary:** yoga meditation retreat, meditation yoga retreat  
**Target length:** ~2,000 words  
**Format:** explainer guide + destination picks  
**Featured snippet answer:** "A yoga and meditation retreat combines daily asana practice (1–2 sessions) with formal meditation instruction (seated, walking, or Yoga Nidra). The combination accelerates both practices — most participants report deeper stillness in week one than months of home practice."  
**Sections:**
- How yoga and meditation work together (why the combo is more than the sum)
- What a typical day actually looks like
- Different formats: Hatha+Vipassana, Yin+Nidra, Vinyasa+Mindfulness
- How to choose based on your existing practice level
- Top destinations for this format (India, Bali, Thailand, Portugal)
- Who this is best for — and who should choose pure yoga or pure meditation instead

**Opinion:** Opinion 5 (silent retreats are underrated for non-spiritual people)  
**Story:** Origin Story (the Meeting Room) — the power of enforced silence  
**Pexels queries:** `meditation yoga outdoor sunrise`, `yoga nidra nature`, `silent meditation group`  
**Image filenames:** `meditation-yoga-sunrise.jpg`, `yoga-nidra-nature.jpg`

---

### POST 4 · `/blog/weekend-yoga-retreat` — 480/mo

**Primary keyword:** weekend yoga retreat  
**Secondary:** weekend yoga retreat near me, yoga weekend retreat, yoga retreat 2 days  
**Target length:** ~1,800 words  
**Format:** guide + destination recommendations  
**Featured snippet answer:** "A weekend yoga retreat (2–3 nights) costs $250–$800 depending on location and accommodation. They're best for beginners testing the format, burned-out professionals needing a reset, and anyone who can't take a full week. Look for a minimum of 4 scheduled yoga sessions."  
**Sections:**
- Is 2 days enough? (direct answer — yes, with caveats)
- What to look for in a weekend retreat (session count, teacher quality, location)
- Best domestic options USA (Berkshires, Catskills, Ojai, Colorado)
- Best UK weekend retreat areas (Cotswolds, Lake District, Yorkshire Dales)
- What to do after — how to maintain the shift
- The false economy of booking the cheapest one

**Opinion:** Opinion 2 (4–5 days is better than 7 for first-timers; same applies to 2-day formats — better than nothing)  
**Internal links:** `/blog/yoga-retreats-near-me`, `/blog/yoga-retreat-for-beginners`  
**Pexels queries:** `yoga weekend nature retreat`, `uk countryside yoga`, `yoga cottage retreat morning`  
**Image filenames:** `weekend-yoga-nature.jpg`, `yoga-countryside-uk.jpg`

---

### POST 5 · `/blog/yoga-teacher-training` — 1,200/mo

**Primary keyword:** yoga teacher training retreat  
**Secondary:** 200 hour yoga teacher training, YTT retreat, yoga teacher training abroad  
**Target length:** ~2,200 words  
**Format:** advisory guide (NOT a listicle of programmes)  
**Featured snippet answer:** "A yoga teacher training (YTT) retreat is an immersive 200-hour or 300-hour programme combining daily yoga, anatomy, philosophy, and teaching methodology. A 200-hour YTT abroad costs $1,500–$4,000 all-in. You don't need to want to teach — many people attend to deepen their personal practice."  
**Sections:**
- YTT vs retreat — what's actually different
- Who YTT is (and isn't) for — the honest version
- 200 hour vs 300 hour: which to start with
- What a YTT month actually looks like day-to-day
- How to evaluate a school (Yoga Alliance accreditation reality check)
- Best destinations for YTT: India, Bali, Thailand, Portugal, Costa Rica
- Cost breakdown: what's included vs. what's not
- What certification actually gives you — and what it doesn't

**Opinion:** The Yoga Alliance certification reality (it's a minimum floor, not a quality guarantee — Sarah's Opinion 3 on teacher quality)  
**Affiliate angle:** Link to BookRetreats YTT filter  
**Pexels queries:** `yoga teacher training group outdoor`, `yoga teacher demonstration class`, `yoga training india ashram`  
**Image filenames:** `ytt-group-outdoor.jpg`, `yoga-teacher-class.jpg`, `ytt-india-ashram.jpg`

---

### POST 6 · `/blog/couples-yoga-retreat` — 390/mo

**Primary keyword:** couples yoga retreat  
**Secondary:** romantic yoga retreat, yoga retreat for two, yoga holiday for couples  
**Target length:** ~1,800 words  
**Format:** guide + destination picks  
**Featured snippet answer:** "A couples yoga retreat is a shared retreat where two people attend together, practising side-by-side (not partner yoga). The real benefit isn't the partner yoga classes — it's the enforced shared slowness, the removed distractions, and the fact that you're both in the same state of openness."  
**Sections:**
- What a couples retreat actually looks like (vs. the fantasy)
- Why shared stillness is the real benefit
- What to look for — and what "couples retreat" is actually just a marketing label on
- Best destinations: Bali, Portugal, Greece, Tuscany, Costa Rica
- When NOT to go (if your relationship needs a therapist, not a retreat)
- Budget reality for couples

**Opinion:** Sarah's honest take: "The best thing about doing a retreat with a partner isn't the yoga — it's the 48 hours where neither of you is looking at a phone."  
**Pexels queries:** `couple yoga retreat tropical`, `romantic wellness resort pool`, `yoga couple outdoor morning`  
**Image filenames:** `couples-yoga-retreat.jpg`, `romantic-wellness-pool.jpg`

---

### POST 7 · `/blog/yoga-retreat-tulum` — 590/mo

**Primary keyword:** yoga retreat tulum  
**Secondary:** tulum yoga retreat, best yoga retreats tulum, tulum wellness retreat  
**Target length:** ~2,000 words  
**Format:** destination guide  
**Featured snippet answer:** "Yoga retreats in Tulum cost $1,400–$3,500/week. Tulum is best for aesthetic, eco-luxury retreats set among cenotes and jungle. The teaching quality is inconsistent — choose a retreat with a named lead teacher and a fixed schedule, not a 'pop-up' programme at a boutique hotel."  
**Sections:**
- Tulum vs Bali — how to choose
- Where to stay: Tulum town vs Tulum beach road vs Aldea Zamá
- The aesthetic trap — beautiful cenote settings vs actual teaching quality
- Top 4–5 genuine retreat centres
- Practical: safety, transport, rainy season realities
- Best times to go

**Opinion:** Opinion 4 (aesthetics ≠ quality; the platforms push the visually striking over the actually good)  
**Pexels queries:** `tulum mexico cenote yoga`, `tulum jungle retreat`, `mexico beach yoga morning`  
**Image filenames:** `tulum-yoga-cenote.jpg`, `tulum-jungle-retreat.jpg`, `tulum-beach-yoga.jpg`

---

### POST 8 · `/blog/yoga-retreat-thailand` — 480/mo

**Primary keyword:** yoga retreat thailand  
**Secondary:** thailand yoga retreat, yoga retreat koh samui, yoga retreat chiang mai  
**Target length:** ~2,000 words  
**Format:** destination guide + island comparison  
**Featured snippet answer:** "Yoga retreats in Thailand cost $600–$1,400/week — the best value in Asia outside of India. Koh Phangan is the spiritual centre. Chiang Mai offers jungle immersion. Koh Samui is best for combining luxury with practice. Avoid the 'party island yoga' trap on Koh Phangan Full Moon week."  
**Sections:**
- Thailand vs Bali: who should go where
- Island-by-island comparison: Koh Phangan, Koh Samui, Koh Tao, Chiang Mai, Pai
- The Koh Phangan trap (Full Moon party culture vs. genuine retreat centres)
- Top retreat picks (4–5 specific centres)
- Visa, practical travel, timing (avoid monsoon months)
- Budget breakdown

**Opinion:** Opinion 4 (Bali overpriced vs teaching quality; Thailand often delivers same quality at 30% less cost)  
**Pexels queries:** `thailand yoga jungle tropical`, `koh samui beach yoga`, `chiang mai yoga retreat`  
**Image filenames:** `thailand-yoga-jungle.jpg`, `koh-samui-beach-yoga.jpg`, `chiang-mai-yoga.jpg`

---

### POST 9 · `/blog/yoga-retreat-portugal` — 390/mo

**Primary keyword:** yoga retreat portugal  
**Secondary:** yoga retreat algarve, yoga retreat lisbon, portugal yoga holiday  
**Target length:** ~2,000 words  
**Format:** destination guide  
**Featured snippet answer:** "Yoga retreats in Portugal cost $900–$1,800/week — the best value in Western Europe. The Algarve has the longest season (May–October). The Silver Coast and Comporta offer quieter, more immersive alternatives. Portugal works for both solo travellers and couples, and is easy to reach from the UK without long-haul flights."  
**Sections:**
- Why Portugal is Europe's best-value retreat destination
- Regional breakdown: Algarve, Silver Coast / Peniche, Comporta, Lisbon area, Alentejo, Douro Valley
- Surf + yoga retreats: what they're actually like
- Top 4–5 specific retreat centres
- When to go (shoulder season advantage)
- Sarah's personal connection (based London/Lisbon)

**Sarah's angle:** This is where she's based half the year — high first-person E-E-A-T. Use it.  
**Opinion:** Opinion 2 (4–5 days over 7 for European retreats — jet lag isn't a factor, so a long weekend is genuinely viable)  
**Pexels queries:** `algarve portugal coast yoga`, `portugal surf yoga atlantic`, `lisbon portugal yoga terrace`  
**Image filenames:** `portugal-algarve-yoga.jpg`, `portugal-surf-yoga.jpg`, `portugal-yoga-terrace.jpg`

---

### POST 10 · `/blog/yoga-retreat-new-york` — 320/mo

**Primary keyword:** yoga retreat new york  
**Secondary:** yoga retreat upstate new york, yoga retreat catskills, yoga retreat hudson valley  
**Target length:** ~1,800 words  
**Format:** regional destination guide  
**Featured snippet answer:** "The best yoga retreats near New York City are in the Catskills, Hudson Valley, and the Berkshires — all within 2–3 hours of Manhattan. Expect to pay $400–$1,200 for a weekend, or $800–$2,000 for a week. None of these require a flight."  
**Sections:**
- Best areas within driving distance: Catskills, Hudson Valley, Berkshires, Woodstock area
- Why upstate NY works as a retreat destination (4 seasons, proximity to the city)
- Top 4–5 retreat centres
- Weekend vs mid-week pricing reality
- What makes NY different from other US domestic options
- Internal links to `/blog/yoga-retreats-near-me`

**Pexels queries:** `catskills nature yoga forest`, `upstate new york retreat woodland`, `yoga retreat autumn leaves`  
**Image filenames:** `catskills-yoga-forest.jpg`, `hudson-valley-retreat.jpg`, `yoga-autumn-retreat.jpg`

---

## Per-Post Briefs — Original 13 (Archive Reference)

---

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

### 7. `/blog/how-to-book-yoga-retreat` — 390/mo
**Primary keyword:** how to book a yoga retreat  
**Target length:** ~1,800 words  
**Format:** step-by-step guide  
**Featured snippet answer:** "To book a yoga retreat: (1) set your budget including flights and transfers, (2) choose destination based on teaching style not aesthetics, (3) verify teacher credentials independently, (4) read reviews off-platform, (5) check the cancellation policy before paying any deposit."  
**Sections:** setting budget (real totals), choosing destination, evaluating teachers, reading reviews properly, deposits & cancellation, what to do if plans change  
**Gaps to add:** deposit red flags (>50% upfront), travel insurance non-negotiable, teacher-to-student ratio  
**Pexels queries:** `booking travel laptop coffee`, `yoga retreat planning`, `passport travel yoga`  
**Image filenames:** `booking-laptop-plan.jpg`, `booking-passport-travel.jpg`
