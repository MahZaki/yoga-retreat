---
name: antigravity-research
description: >
  Semrush-powered keyword research, competitor gap analysis, semantic clustering, and topical authority mapping
  for an affiliate SEO business in the yoga retreats niche (or any niche). Use this skill whenever the agent
  is asked to do keyword research, find content gaps, build a content plan, analyze competitors, cluster keywords,
  identify pillar topics, map semantic intent, discover PAA questions, or plan a content strategy. Always trigger
  this skill FIRST before any content creation or optimization task — it is the mandatory research phase of the
  Antigravity SEO pipeline. Pairs with antigravity-architecture (Step 2) and antigravity-watchdog (Step 3).
compatibility:
  tools:
    - Semrush:keyword_research
    - Semrush:organic_research
    - Semrush:overview_research
    - Semrush:execute_report
    - Semrush:get_report_schema
    - web_search
---

# Antigravity Research Skill
## Stage 1 of 3 — Discovery, Competitor Gap & Semantic Clustering

This skill drives the full research-to-cluster pipeline. Execute every section in order. Do not skip steps.

---

## STEP 1 — Seed Keyword Discovery

### 1A. Semrush Keyword Research
Use `Semrush:keyword_research` → `get_report_schema` → `execute_report` for each seed keyword.

**For yoga retreats niche, default seeds:**
```
yoga retreats, yoga retreat [location], affordable yoga retreats, yoga retreat for beginners,
luxury yoga retreat, yoga and meditation retreat, silent yoga retreat, yoga retreat packages,
yoga retreat affiliate, best yoga retreats [year]
```

**Capture for each keyword:**
| Field | Target |
|---|---|
| Search Volume | ≥ 100/mo |
| Keyword Difficulty (KD) | < 40 for new sites; < 60 for established |
| CPC | Useful for affiliate monetization priority |
| SERP Features | Snippet, PAA, Image Pack → GEO opportunity flags |
| Trend (12-month) | Rising trend = prioritize |

### 1B. Real-Time Intent Expansion
Run `web_search` for:
- `site:youtube.com yoga retreat [location]` — extract video titles as long-tail intent signals
- Google Autocomplete patterns: `yoga retreat ___` — capture 10+ completions
- "People Also Ask" mining: search each seed, extract all PAA questions as FAQ candidates

> **Output:** A raw keyword list of 80–150 terms with volume, KD, CPC, and intent tag.

---

## STEP 2 — Competitor Gap Analysis

### 2A. Pull Top Competitor Domains
Use `Semrush:organic_research` → pull top organic keywords for 3 competitors in yoga retreat niche.

**Default competitors to analyze:**
- `yogafinder.com`
- `bookretreats.com`
- `retreat.guru`

Or ask the user: *"Which competitors should I analyze? Provide domains."*

**For each competitor, execute:**
- Top 100 organic keywords (sorted by traffic)
- Their top pages by traffic

### 2B. Gap Identification
Compare competitor keyword sets against your brand's current keyword footprint.

**Entity Gap Formula — flag a keyword if:**
- Competitor ranks in top 10
- Your site does NOT rank in top 50
- Volume ≥ 200/mo OR KD ≤ 35

**Output a Gap Table:**
```
| Keyword | Competitor Rank | Your Rank | Volume | KD | Priority |
|---------|----------------|-----------|--------|----|----------|
| ...     | ...            | ...       | ...    | ...| HIGH/MED |
```

---

## STEP 3 — Semantic Clustering

### 3A. SERP-Based Intent Clustering
Group all keywords using the rule:
> **If two keywords share ≥ 4 of the same top-10 ranking URLs → same intent cluster.**

Execute this by running `web_search` for each keyword pair if automated SERP comparison isn't available. For large sets, cluster manually by intent first, then verify with SERP spot-checks.

**Cluster Types:**
- **Pillar** — head term, highest volume, broadest intent (e.g. `yoga retreats`)
- **Satellite** — supporting long-tail terms that orbit the pillar (e.g. `best yoga retreats for beginners in Bali`)
- **Conversion** — high buyer intent, affiliate-priority (e.g. `yoga retreat packages price`, `book yoga retreat online`)

### 3B. Jaccard Semantic Link Coefficient (J)
For each satellite-pillar pair, estimate semantic overlap:

```
J = (shared entities in SERP top 10) / (total unique entities across both SERPs)
```

**Link rules based on J:**
| J Value | Relationship | Internal Link Rule |
|---------|-------------|-------------------|
| J < 0.10 | Strict Silo | Only link satellite → Pillar. No cross-links. |
| 0.10–0.25 | Partial Overlap | Link to Pillar + 1 contextual sibling |
| J > 0.25 | Semantic Mesh | Allow direct horizontal links between satellites |

> Practical shortcut: Use topic overlap judgment + shared H2 themes if SERP data is unavailable.

---

## STEP 4 — Topical Authority Score (TAS) Baseline

Calculate TAS for each cluster:

```
TAS = 0.40(EC) + 0.35(ILC) + 0.25(ES)
```

| Component | Description | How to Score (0–100) |
|-----------|------------|---------------------|
| **EC** — Entity Coverage | % of niche entities/topics your site covers vs. competitor average | (your covered topics / total niche topics) × 100 |
| **ILC** — Internal Link Cohesion | Quality of semantic internal linking structure | Manual audit: 100 if all satellites link to pillar + correct J rules applied |
| **ES** — External Signal | Topical relevance of backlinks (use `Semrush:backlink_research`) | Authority score of referring domains × topical match % |

**Target: TAS > 85 = Category Leadership**
**Current baseline: Run this audit once and record as v0.**

---

## STEP 5 — Deliverable Output

After completing all steps, produce:

1. **Keyword Master List** — all terms, tagged by cluster, intent, KD, volume, CPC
2. **Cluster Map** — Pillars with their satellite orbits and J-scores
3. **Gap Priority List** — top 20 content gaps ranked by (volume × (1/KD) × affiliate value)
4. **TAS Baseline Report** — current EC, ILC, ES scores per cluster
5. **Handoff to Skill 2** — pass the Cluster Map and top 3 priority pillars to `antigravity-architecture`

---

## Reference Files
- `references/yoga-retreats-entity-list.md` — Canonical entity list for the yoga retreats niche (seed this on first run, update after each research cycle)
- `references/competitor-profiles.md` — Competitor domain profiles and their keyword footprints

> **Next step:** Pass cluster output to `antigravity-architecture` (Skill 2) for content blueprint generation.
