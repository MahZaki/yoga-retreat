#!/usr/bin/env node
/**
 * fix-all-blog-bugs.js
 * Fixes all remaining prerender-breaking bugs across every blog post:
 *  1. heroImage={metadata...} -> hardcoded string from actual metadata
 *  2. heroAlt={metadata...}   -> hardcoded string
 *  3. canonicalUrl={metadata...} -> hardcoded string
 *  4. faqSchema={faqSchema|faqLd} where var is undefined -> faqSchema={[]}
 *  5. <div className={s.introBrief}> -> <p className={s.introBrief}>
 *  6. date="January" or date="June" without year -> add year
 */

const fs = require('fs')
const path = require('path')

const blogDir = path.join(__dirname, 'app/blog')
const dirs = fs.readdirSync(blogDir).filter(d =>
  fs.statSync(path.join(blogDir, d)).isDirectory()
)

let totalFixed = 0

for (const dir of dirs) {
  const filePath = path.join(blogDir, dir, 'page.js')
  if (!fs.existsSync(filePath)) continue

  let src = fs.readFileSync(filePath, 'utf8')
  const original = src
  const fixes = []

  // ── 1. Extract actual values from metadata block ──────────────
  const imgMatch = src.match(/images:\s*\[\{\s*url:\s*'([^']+)'/)
  const altMatch = src.match(/alt:\s*'([^']+)'/)
  const canonMatch = src.match(/canonical:\s*'([^']+)'/)

  const imgUrl  = imgMatch?.[1]  || ''
  const imgAlt  = altMatch?.[1]  || ''
  const canon   = canonMatch?.[1] || ''

  // ── 2. Fix heroImage={metadata.openGraph?...} ─────────────────
  if (src.includes("heroImage={metadata.openGraph?.images?.[0]?.url || ''}")) {
    src = src.replace(
      "heroImage={metadata.openGraph?.images?.[0]?.url || ''}",
      `heroImage="${imgUrl}"`
    )
    fixes.push(`heroImage -> "${imgUrl}"`)
  }

  // ── 3. Fix heroAlt={metadata.openGraph?...} ───────────────────
  if (src.includes("heroAlt={metadata.openGraph?.images?.[0]?.alt || ''}")) {
    src = src.replace(
      "heroAlt={metadata.openGraph?.images?.[0]?.alt || ''}",
      `heroAlt="${imgAlt}"`
    )
    fixes.push(`heroAlt -> "${imgAlt}"`)
  }

  // ── 4. Fix canonicalUrl={metadata.alternates?...} ────────────
  if (src.includes("canonicalUrl={metadata.alternates?.canonical || ''}")) {
    src = src.replace(
      "canonicalUrl={metadata.alternates?.canonical || ''}",
      `canonicalUrl="${canon}"`
    )
    fixes.push(`canonicalUrl -> "${canon}"`)
  }

  // ── 5. Fix undefined faqSchema/faqLd variable ─────────────────
  // Only replace if the variable is NOT defined in the file
  const faqVarMatch = src.match(/faqSchema=\{(faqSchema|faqLd)\}/)
  if (faqVarMatch) {
    const varName = faqVarMatch[1]
    const isDefined = new RegExp(`const\\s+${varName}\\s*=`).test(src)
    if (!isDefined) {
      src = src.replace(`faqSchema={${varName}}`, 'faqSchema={[]}')
      fixes.push(`faqSchema={${varName}} -> faqSchema={[]} (undefined var)`)
    }
  }

  // ── 6. Fix <div className={s.introBrief}> -> <p> ─────────────
  if (src.includes('<div className={s.introBrief}>')) {
    src = src.replace(/<div className=\{s\.introBrief\}>/g, '<p className={s.introBrief}>')
    // Find the matching closing </div> after introBrief — replace with </p>
    // Only replace the FIRST </div> that closes the introBrief
    src = src.replace(/(<p className=\{s\.introBrief\}>[\s\S]*?)<\/div>/, '$1</p>')
    fixes.push('<div introBrief> -> <p introBrief>')
  }

  // ── 7. Fix date without year ──────────────────────────────────
  src = src.replace(/date="January"(\s)/, 'date="January 2026"$1')
  src = src.replace(/date="June"(\s)/, 'date="June 2026"$1')
  src = src.replace(/date="February"(\s)/, 'date="February 2026"$1')
  src = src.replace(/date="March"(\s)/, 'date="March 2026"$1')
  src = src.replace(/date="April"(\s)/, 'date="April 2026"$1')

  if (src !== original) {
    fs.writeFileSync(filePath, src, 'utf8')
    console.log(`✅ Fixed [${dir}]: ${fixes.join(' | ')}`)
    totalFixed++
  } else {
    console.log(`— No changes: ${dir}`)
  }
}

console.log(`\nTotal files modified: ${totalFixed}`)
