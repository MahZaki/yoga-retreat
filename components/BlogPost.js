/**
 * BlogPost — Shared layout component for all blog posts on YogaRetreatAdvisor.
 *
 * Usage in any page.js:
 *
 *   import BlogPost from '@/components/BlogPost'
 *
 *   export default function MyPage() {
 *     return (
 *       <BlogPost
 *         title="My Article Title"
 *         category="Destinations"
 *         date="June 2026"
 *         readTime="7 min read"
 *         heroImage="/images/blog/my-hero.jpg"
 *         heroAlt="Description of hero image"
 *         canonicalUrl="https://www.yogaretreatadvisor.com/blog/my-slug"
 *         tocItems={[
 *           { href: '#section-1', label: 'Section One' },
 *           { href: '#section-2', label: 'Section Two' },
 *         ]}
 *         tags={['Destinations', 'Beginners', 'USA']}
 *         relatedPosts={[
 *           { href: '/blog/another-post', img: '/images/blog/img.jpg', imgAlt: 'Alt', label: 'Category', title: 'Post title' },
 *         ]}
 *         faqSchema={[
 *           { question: 'Q?', answer: 'A.' },
 *         ]}
 *         articleSchema={{ datePublished: '2026-06-12', image: '/images/blog/my-hero.jpg' }}
 *       >
 *         <p className={s.introBrief}>Your intro brief here.</p>
 *         <h2 id="section-1">Section One</h2>
 *         <p>Body content…</p>
 *       </BlogPost>
 *     )
 *   }
 */

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import s from '@/app/blog/yoga-retreats/page.module.css'

const SITE_URL = 'https://www.yogaretreatadvisor.com'
const AUTHOR = {
  name: 'Sarah Mitchell',
  url: `${SITE_URL}/about`,
  image: '/images/hero-portrait.jpg',
  role: 'Founder & Lead Reviewer, YogaRetreatAdvisor',
  bio: "Former London project manager turned yoga travel writer. She's attended 14 retreats across 9 countries since 2018, spending between $380 and $4,200 per retreat week. RYT-50 certified. Based between London and Lisbon.",
}

export default function BlogPost({
  /** Required */
  title,
  heroImage,
  heroAlt,
  canonicalUrl,
  children,

  /** Optional display */
  category = 'Destinations',
  date = 'June 2026',
  readTime = '7 min read',

  /** Sidebar table of contents — array of { href, label } */
  tocItems = [],

  /** Tags shown below article body — array of strings */
  tags = [],

  /** Related posts footer — array of { href, img, imgAlt, label, title } */
  relatedPosts = [],

  /** JSON-LD: Article extra fields — { datePublished, dateModified, image } */
  articleSchema = {},

  /** JSON-LD: FAQ items — array of { question, answer } */
  faqSchema = [],

  /** JSON-LD: BreadcrumbList extra crumb label (3rd item) */
  breadcrumbLabel = '',
}) {
  const pageUrl = canonicalUrl || SITE_URL

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url },
    publisher: {
      '@type': 'Organization',
      name: 'YogaRetreatAdvisor',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    datePublished: articleSchema.datePublished || new Date().toISOString().split('T')[0],
    dateModified: articleSchema.dateModified || articleSchema.datePublished || new Date().toISOString().split('T')[0],
    image: articleSchema.image ? `${SITE_URL}${articleSchema.image}` : `${SITE_URL}${heroImage}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      ...(breadcrumbLabel
        ? [{ '@type': 'ListItem', position: 3, name: breadcrumbLabel, item: pageUrl }]
        : []),
    ],
  }

  const faqLd = faqSchema.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqSchema.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  } : null

  return (
    <>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}

      <Navbar />

      <main>
        <article id="top" className={s.article}>

          {/* ── Hero ─────────────────────────────────────── */}
          <div className={s.heroWrap}>
            <Image
              src={heroImage}
              alt={heroAlt}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
            <div className={s.heroOverlay}>
              <span className={s.heroCat}>{category}</span>
              <h1>{title}</h1>
              <div className={s.heroMeta}>
                <span>By {AUTHOR.name}</span>
                <span>{date}</span>
                <span>{readTime}</span>
              </div>
            </div>
          </div>

          {/* ── Body + Sidebar ────────────────────────────── */}
          <div className="container">
            <div className={s.layout}>

              {/* Main content — children go here */}
              <div className={s.body}>

                {children}

                {/* Tags */}
                {tags.length > 0 && (
                  <div className={s.tags}>
                    {tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}

                {/* Author box */}
                <div className={s.authorBox}>
                  <div className={s.authorAvatar}>
                    <Image src={AUTHOR.image} alt={AUTHOR.name} fill sizes="80px" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className={s.authorMeta}>
                    <h3>{AUTHOR.name}</h3>
                    <div className={s.authorRole}>{AUTHOR.role}</div>
                    <p>{AUTHOR.bio}</p>
                  </div>
                </div>
              </div>

              {/* Sidebar TOC */}
              {tocItems.length > 0 && (
                <aside>
                  <div className={s.toc}>
                    <h3>In This Guide</h3>
                    <nav className={s.tocLinks}>
                      {tocItems.map(({ href, label }) => (
                        <a key={href} href={href} className={s.tocLink}>{label}</a>
                      ))}
                    </nav>
                  </div>
                </aside>
              )}
            </div>
          </div>

          {/* ── Related Posts ─────────────────────────────── */}
          {relatedPosts.length > 0 && (
            <section className={s.relatedPosts}>
              <div className="container">
                <div className="section-header center">
                  <span className="section-label">Related Articles</span>
                  <h2>Continue Reading</h2>
                </div>
                <div className={s.relatedGrid}>
                  {relatedPosts.map(({ href, img, imgAlt, label, title: postTitle }) => (
                    <Link key={href} href={href} className={s.relatedCard}>
                      <div className={s.relatedImg}>
                        <Image src={img} alt={imgAlt || postTitle} fill sizes="33vw" style={{ objectFit: 'cover' }} />
                      </div>
                      <div className={s.relatedBody}>
                        <span>{label}</span>
                        <h3>{postTitle}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

        </article>
      </main>

      <Newsletter />
      <Footer />
    </>
  )
}
