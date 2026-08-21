---
name: antigravity-watchdog
description: >
  Ongoing SEO and GEO monitoring, citation decay detection, TAS tracking, and automated content refresh
  for the Antigravity SEO pipeline. Use this skill whenever the agent needs to audit existing rankings,
  check for AI Share of Voice drops, detect citation decay, run competitor refresh analysis, update
  stale content, re-optimize underperforming pages, or generate a TAS progress report. Trigger this
  skill on a scheduled basis (every 13 weeks / ~90 days) or immediately when Semrush tracking shows
  a ranking drop, traffic decline, or AI visibility loss. Always trigger AFTER antigravity-architecture
  has published content. Pairs with antigravity-research (Stage 1) and antigravity-architecture (Stage 2).
compatibility:
  tools:
    - Semrush:tracking_research
    - Semrush:overview_research
    - Semrush:organic_research
    - Semrush:backlink_research
    - Semrush:execute_report
    - web_search
---

# Antigravity Watchdog Skill
## Stage 3 of 3 — Monitoring, Citation Decay & Content Recovery

This skill runs on a recurring 13-week cycle OR on-demand when a trigger condition fires.
It closes the loop between publishing and continuous authority compounding.

---

## MONITORING SCHEDULE

| Cycle | Action |
|-------|--------|
| **Weekly** | Semrush position tracking check (top pages only) |
| **Monthly** | TAS recalculation + competitor keyword movement |
| **Quarterly (13-week)** | Full entity audit + content refresh sweep |
| **On-demand trigger** | Any drop > 20% in traffic, rank, or AI visibility |

---

## STEP 1 — Position & Traffic Monitoring

### 1A. Semrush Rank Tracking
Use `Semrush:tracking_research` → `execute_report` to pull:
- Weekly ranking changes for all tracked pillar + satellite keywords
- Visibility score trend (should be rising or stable)
- Estimated traffic change vs. prior period

**Alert thresholds (trigger immediate recovery):**
| Metric | Warning | Critical |
|--------|---------|---------|
| Keyword rank drop | > 5 positions | > 15 positions |
| Organic traffic drop | > 15% WoW | > 30% MoM |
| Visibility score drop | > 10 pts | > 25 pts |
| TAS | < 75 | < 60 |

### 1B. Domain Overview Snapshot
Use `Semrush:overview_research` monthly to capture:
- Authority Score trend
- Total organic keyword count
- Estimated monthly traffic
- New / lost keyword counts

Record in the **Performance Log** (see reference file).

---

## STEP 2 — AI Share of Voice (GEO Monitoring)

### 2A. AI Visibility Signals
Monitor AI citation presence using these methods:

1. **Manual AI Audit (monthly):** Query ChatGPT, Perplexity, and Google AI Overviews with pillar keywords. Check if your domain/brand is cited. Record:
   - Is the brand cited? (Y/N)
   - Sentiment: Positive / Neutral / Negative
   - Competitor cited instead? (Y/N + which domain)

2. **Semrush AI Visibility (if available in your plan):** Use `Semrush:tracking_research` to pull AI Overview appearance data for tracked keywords.

3. **Citation Decay Signal:** If a page was cited in AI results previously but is no longer appearing, that is citation decay. Typical onset: **13 weeks without content updates**.

### 2B. Citation Decay Recovery Trigger
**Fire recovery protocol when ANY of these are true:**
- Page not updated in > 90 days AND ranks dropped
- AI citation lost for a previously-cited page
- Competitor domain now appearing in AI result where you previously ranked
- Factual claims on page are now outdated (pricing, dates, statistics)

---

## STEP 3 — Competitor Entity Refresh

When recovery is triggered, run a fresh competitor sweep.

### 3A. Competitor Keyword Movement
Use `Semrush:organic_research` → pull new top keywords for competitor domains since last audit.

**Questions to answer:**
- What new topics/entities have competitors published since last cycle?
- Have competitors gained AI citations for keywords we target?
- Are there new competitor pages outranking our satellites?

### 3B. New Entity Discovery
Compare competitor new keywords against your entity list (`yoga-retreats-entity-list.md`).

For each new competitor entity NOT in your footprint:
- Add to entity list
- Flag for content creation or expansion
- Re-calculate EC component of TAS

---

## STEP 4 — Content Refresh Protocol

For each page flagged for refresh, execute in order:

### 4A. Data & Factual Update
- Replace outdated statistics with current ones (re-run `web_search` for source)
- Update comparison tables with current prices, availability, ratings
- Add new FAQ questions from latest PAA results
- Update "Last Updated" date + `dateModified` in Article schema

### 4B. Semantic Expansion
- Re-run `Semrush:keyword_research` for the page's primary keyword
- Add any new related terms not currently in the page
- Expand or add H2 sections for newly discovered intent clusters
- Add any new named entities (retreat brands, locations, instructors) that have emerged

### 4C. GEO Re-optimization
- Verify Canonical Definition Block is still accurate and up-to-date
- Confirm all schema markup is valid (no deprecated properties)
- Check FAQPage schema: add new questions, remove outdated ones
- Ensure factual density still meets ≥ 3 citations per 1000 words

### 4D. Internal Link Audit
- Check all internal links are alive (no 404s)
- Add links to any new satellite pages published since last audit
- Verify J-score rules still apply (new pages may change semantic mesh)

---

## STEP 5 — TAS Recalculation

Recalculate TAS after each quarterly cycle and after every significant refresh.

```
TAS = 0.40(EC) + 0.35(ILC) + 0.25(ES)
```

### EC — Entity Coverage Audit
1. Pull full entity list from `yoga-retreats-entity-list.md`
2. Count total entities: `T`
3. Count entities your site has published content about: `C`
4. `EC = (C / T) × 100`

### ILC — Internal Link Cohesion Audit
Check every pillar + satellite for:
- [ ] All satellites link to their Pillar ✓/✗
- [ ] J < 0.10 satellites have NO cross-links ✓/✗
- [ ] J > 0.25 satellites have mesh links ✓/✗
- [ ] No orphan pages (pages with zero internal links) ✓/✗

Score: `(passing checks / total checks) × 100`

### ES — External Signal Audit
Use `Semrush:backlink_research` → check:
- Number of referring domains (topically relevant only)
- Authority Score of top 10 referring domains
- Anchor text distribution (branded vs. keyword)

Score: Weighted average of domain authority × topical match (estimate 0–100)

### TAS Targets
| TAS | Status | Action |
|-----|--------|--------|
| 85–100 | Category Leadership | Maintain; expand to new clusters |
| 70–84 | Authority Building | Prioritize ILC improvements + new satellites |
| 55–69 | Developing | Run full entity gap analysis; publish 3+ new pillars |
| < 55 | Early Stage | Return to Stage 1 (antigravity-research) for full reset |

---

## STEP 6 — Quarterly Report Output

Produce the following at end of each 13-week cycle:

```markdown
## Antigravity SEO — Quarterly Report [Q#, YEAR]

### 1. TAS Scorecard
- EC (Entity Coverage): XX / 100
- ILC (Internal Link Cohesion): XX / 100
- ES (External Signal): XX / 100
- **TAS: XX / 100** [▲/▼ vs last quarter]

### 2. Ranking Summary
- Total tracked keywords: XX
- Keywords in Top 3: XX
- Keywords in Top 10: XX
- Keywords lost (dropped out of Top 50): XX

### 3. AI Citation Status
- Pillars cited in AI Overviews / ChatGPT: X / [total pillars]
- New citations gained: X
- Citations lost (decay): X

### 4. Content Actions Taken
- Pages refreshed: X
- New satellites published: X
- New entities added to footprint: X

### 5. Priorities for Next Quarter
1. [Top priority cluster or action]
2. [Second priority]
3. [Third priority]
```

---

## Reference Files
- `references/performance-log.md` — Historical TAS, traffic, rank, and AI citation records per quarter
- `references/refresh-queue.md` — Pages queued for refresh, sorted by priority score

> **Loop:** After each watchdog cycle, feed new entity gaps and competitor findings back into `antigravity-research` (Skill 1) to begin the next research sprint.
