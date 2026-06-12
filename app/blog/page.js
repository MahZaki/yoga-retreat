'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import s from './page.module.css'

const articles = [
  // Pillar
  { slug: 'yoga-retreats', title: 'Yoga retreats: the complete guide to choosing, booking, and preparing', desc: 'Everything you need to know before you book — what retreats actually cost, what a typical day looks like, how to evaluate a teacher, and which destinations suit which budgets. From someone who\'s attended 14 retreats across 9 countries.', category: 'Guide', img: '/images/blog/pillar-featured.png', date: 'Jan 2025', readTime: '14 min', vol: 8100 },
  { slug: 'wellness-retreats', title: 'The ultimate guide to wellness retreats: transform your mind & body', desc: 'Discover the life-changing benefits of a wellness retreat. Explore top destinations, learn how to choose the perfect escape, and book your transformational journey.', category: 'Guide', img: '/images/blog/meditation-retreat-group-outdoor.jpg', date: 'Jun 2026', readTime: '12 min', vol: 9900 },
  // Planning cluster
  { slug: 'best-yoga-retreats', title: 'Best yoga retreats 2025: how to actually compare and choose', desc: 'A framework for evaluating retreats that booking platforms won\'t give you — teacher credentials, group size, refund policies, and what the price really includes.', category: 'Planning', img: '/images/blog/meditation-retreat-group-outdoor.jpg', date: 'Jun 2025', readTime: '9 min', vol: 480 },
  { slug: 'how-to-book-yoga-retreat', title: 'How to book a yoga retreat: pricing, deposits, and policies', desc: 'The mechanics of actually booking — what deposits are normal, which payment methods protect you, and how to read the fine print before handing over money.', category: 'Planning', img: '/images/blog/yoga-pose-nature-river.jpg', date: 'May 2026', readTime: '7 min', vol: 390 },
  { slug: 'affordable-yoga-retreats', title: 'Affordable yoga retreats under $500 that don\'t cut corners', desc: 'Budget retreats that deliver on teaching quality, not just low price. India, Thailand, and Portugal options with real numbers.', category: 'Planning', img: '/images/blog/tropical-retreat-hut-bali.jpg', date: 'Jan 2026', readTime: '6 min', vol: 170 },
  { slug: 'all-inclusive-yoga-retreat', title: 'All-inclusive yoga retreats: what\'s included and what isn\'t', desc: 'What \'all-inclusive\' actually means in retreat marketing — and which items are almost always excluded from the headline price.', category: 'Planning', img: '/images/blog/pillar-benefits-new.png', date: 'Apr 2026', readTime: '6 min', vol: 170 },
  // Destination cluster
  { slug: 'yoga-retreat-bali', title: 'Best yoga retreats in Bali: Ubud, Canggu, and Uluwatu compared', desc: 'Ubud, Canggu, and Uluwatu serve completely different retreat types. Honest breakdown of which area suits your practice, budget, and expectations.', category: 'Destinations', img: '/images/blog/bali-yoga.jpg', date: 'Feb 2025', readTime: '9 min', vol: 880 },
  { slug: 'yoga-retreat-california', title: 'Yoga retreat California: 10 top-rated centers by region', desc: 'Big Sur, Ojai, Joshua Tree, and Bay Area — what each region delivers and where to look based on your budget and practice level.', category: 'Destinations', img: '/images/blog/california-yoga.jpg', date: 'Jul 2025', readTime: '8 min', vol: 720 },
  { slug: 'yoga-retreats-colorado', title: '7 best yoga retreats in Colorado (2026)', desc: 'Escape to the Rockies. Discover the most peaceful and transformative mountain wellness retreats, complete with a packing guide for the altitude.', category: 'Destinations', img: '/images/blog/california-yoga.jpg', date: 'Jun 2026', readTime: '8 min', vol: 390 },
  { slug: 'yoga-retreats-costa-rica', title: '7 best yoga retreats in Costa Rica', desc: 'Nosara and Santa Teresa are the main draws. Why Costa Rica beats Mexico for US east coasters, and what the road conditions actually look like.', category: 'Destinations', img: '/images/blog/costa-rica-yoga.jpg', date: 'Feb 2026', readTime: '7 min', vol: 260 },
  { slug: 'yoga-retreats-greece', title: '5 best yoga retreats in Greece (2026)', desc: 'Discover the best authentic yoga retreats in Greece. From luxury sanctuaries in Corfu to hidden gems in Amorgos. Read our honest review.', category: 'Destinations', img: '/images/blog/greece-yoga.jpg', date: 'Jun 2026', readTime: '8 min', vol: 260 },
  { slug: 'yoga-retreats-hawaii', title: 'Best Yoga Retreats in Hawaii (Maui, Kauai, Big Island)', desc: 'Don\'t want to fly internationally? Discover the best top-rated yoga and wellness retreats across Hawaii. Compare islands, pricing, and book today.', category: 'Destinations', img: '/images/blog/hawaii-yoga.jpg', date: 'Jun 2026', readTime: '7 min', vol: 390 },
  { slug: 'yoga-retreats-india', title: 'Yoga retreats India: Rishikesh ashrams to Kerala Ayurveda', desc: 'Rishikesh, Kerala, Mysore, and Goa — an honest region-by-region guide with real ashram standards and what the budget breakdown actually looks like.', category: 'Destinations', img: '/images/blog/india-yoga.jpg', date: 'Mar 2025', readTime: '8 min', vol: 170 },
  { slug: 'yoga-retreats-near-me', title: 'Yoga Retreats Near Me: The Best Driveable Escapes', desc: 'Skip the long-haul flight. Discover the best top-rated dedicated yoga and wellness retreats across the US, from the Berkshires to Big Sur.', category: 'Destinations', img: '/images/blog/beginner-yoga-class.jpg', date: 'Jun 2026', readTime: '8 min', vol: 2400 },
  // Types cluster
  { slug: 'best-womens-yoga-retreats', title: '10 best yoga retreats for women in 2026 (empower & reconnect)', desc: 'Find your sisterhood. Discover the 10 best women-only yoga and wellness retreats for empowerment, healing, and deep connection. Compare and book today.', category: 'Retreat Types', img: '/images/blog/womens-yoga-circle.jpg', date: 'Jun 2026', readTime: '10 min', vol: 720 },
  { slug: 'luxury-yoga-retreats', title: 'Luxury yoga retreats: what $3,000+ actually gets you', desc: 'Three distinct tiers of luxury retreat pricing, what each one actually delivers, and when the premium is genuinely worth paying.', category: 'Retreat Types', img: '/images/blog/luxury-yoga.jpg', date: 'Oct 2025', readTime: '7 min', vol: 210 },
  { slug: 'womens-yoga-retreat', title: "Women's yoga retreats: 8 programs for female practitioners", desc: "What actually changes in a women-only format — and eight specific programmes worth considering across India, Morocco, Portugal, and Bali.", category: 'Retreat Types', img: '/images/blog/womens-yoga.jpg', date: 'Aug 2025', readTime: '7 min', vol: 720 },
  { slug: 'silent-yoga-retreat', title: 'Silent yoga retreats: a guide to meditation-focused programs', desc: 'What Vipassana and other silent formats actually involve, who they suit, and the mental health considerations nobody puts in the marketing copy.', category: 'Retreat Types', img: '/images/blog/silent-yoga.jpg', date: 'Nov 2025', readTime: '8 min', vol: 210 },
  { slug: 'yoga-retreat-for-beginners', title: 'Yoga retreat for beginners: what to expect on your first trip', desc: 'First retreats done right: why 4–5 days beats 7, how to choose a level-appropriate programme, and what no one tells you about day one.', category: 'Retreat Types', img: '/images/blog/pillar-typical-day-new.png', date: 'Apr 2025', readTime: '7 min', vol: 260 },
]

const categories = ['All', 'Guide', 'Planning', 'Destinations', 'Retreat Types']

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter(a => a.category === activeCategory)

  return (
    <>
      <Navbar />
      <main>
        <section className={s.hero}>
          <div className="container">
            <h1>Yoga retreat guides &amp; resources</h1>
            <p>Honest, research-backed guides from someone who has actually been there — 22 retreats, 14 countries, no sponsored opinions.</p>
          </div>
        </section>

        <section className={s.content}>
          <div className="container">
            <div className={s.filters}>
              {categories.map(c => (
                <button key={c} className={`${s.filterBtn} ${activeCategory === c ? s.active : ''}`} onClick={() => setActiveCategory(c)}>{c}</button>
              ))}
            </div>

            <div className={s.articleList}>
              {filtered.map((article, i) => {
                const isFeatured = i === 0 && activeCategory === 'All'
                return (
                  <Link key={article.slug} href={`/blog/${article.slug}`} className={`${s.cardLink} ${isFeatured ? s.featured : ''}`}>
                    <article className={s.card}>
                      <div className={s.cardImg}>
                        <Image src={article.img} alt={article.title} fill style={{ objectFit: 'cover' }} sizes={isFeatured ? '55vw' : '(max-width:900px) 50vw, 33vw'} />
                      </div>
                      <div className={s.cardBody}>
                        {isFeatured && <div className={s.featuredBadge}>★ Editor&apos;s Guide</div>}
                        <div className={s.cardMeta}>
                          <span className={s.cardTag}>{article.category}</span>
                          <span>{article.date}</span>
                          <span>·</span>
                          <span>{article.readTime} read</span>
                        </div>
                        <h2 className={s.cardTitle}>{article.title}</h2>
                        {isFeatured && article.desc && <p className={s.cardDesc}>{article.desc}</p>}
                        <div className={s.cardFooter}>
                          <span>By Sarah Mitchell</span>
                          <span className={s.readMore}>Read article →</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  )
}
