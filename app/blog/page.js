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
  { slug: 'yoga-retreats', title: 'Yoga retreats: the complete guide to choosing, booking, and preparing', category: 'Guide', img: '/images/blog/pillar-what-is.jpg', date: 'Aug 2026', readTime: '14 min', vol: 8100 },
  // Planning cluster
  { slug: 'best-yoga-retreats', title: 'Best yoga retreats 2026: how to actually compare and choose', category: 'Planning', img: '/images/blog/meditation-retreat-group-outdoor.jpg', date: 'Nov 2026', readTime: '9 min', vol: 480 },
  { slug: 'how-to-book-yoga-retreat', title: 'How to book a yoga retreat: pricing, deposits, and policies', category: 'Planning', img: '/images/blog/yoga-pose-nature-river.jpg', date: 'Nov 2026', readTime: '7 min', vol: 390 },
  { slug: 'affordable-yoga-retreats', title: 'Affordable yoga retreats under $500 that don\'t cut corners', category: 'Planning', img: '/images/blog/tropical-retreat-hut-bali.jpg', date: 'Oct 2026', readTime: '6 min', vol: 170 },
  { slug: 'all-inclusive-yoga-retreat', title: 'All-inclusive yoga retreats: what\'s included and what isn\'t', category: 'Planning', img: '/images/blog/pillar-benefits.jpg', date: 'Oct 2026', readTime: '6 min', vol: 170 },
  // Destination cluster
  { slug: 'yoga-retreat-bali', title: 'Best yoga retreats in Bali: Ubud, Canggu, and Uluwatu compared', category: 'Destinations', img: '/images/blog/bali-yoga.jpg', date: 'Sep 2026', readTime: '9 min', vol: 880 },
  { slug: 'yoga-retreat-california', title: 'Yoga retreat California: 10 top-rated centers by region', category: 'Destinations', img: '/images/blog/california-yoga.jpg', date: 'Sep 2026', readTime: '8 min', vol: 720 },
  { slug: 'yoga-retreats-costa-rica', title: '7 best yoga retreats in Costa Rica for 2026', category: 'Destinations', img: '/images/blog/costa-rica-yoga.jpg', date: 'Sep 2026', readTime: '7 min', vol: 260 },
  { slug: 'yoga-retreats-india', title: 'Yoga retreats India: Rishikesh ashrams to Kerala Ayurveda', category: 'Destinations', img: '/images/blog/india-yoga.jpg', date: 'Sep 2026', readTime: '8 min', vol: 170 },
  // Types cluster
  { slug: 'luxury-yoga-retreats', title: 'Luxury yoga retreats: what $3,000+ actually gets you', category: 'Retreat Types', img: '/images/blog/luxury-yoga.jpg', date: 'Oct 2026', readTime: '7 min', vol: 210 },
  { slug: 'womens-yoga-retreat', title: "Women's yoga retreats: 8 programs for female practitioners", category: 'Retreat Types', img: '/images/blog/womens-yoga.jpg', date: 'Oct 2026', readTime: '7 min', vol: 720 },
  { slug: 'silent-yoga-retreat', title: 'Silent yoga retreats: a guide to meditation-focused programs', category: 'Retreat Types', img: '/images/blog/silent-yoga.jpg', date: 'Oct 2026', readTime: '8 min', vol: 210 },
  { slug: 'yoga-retreat-for-beginners', title: 'Yoga retreat for beginners: what to expect on your first trip', category: 'Retreat Types', img: '/images/blog/pillar-typical-day.jpg', date: 'Sep 2026', readTime: '7 min', vol: 260 },
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
              {filtered.map(article => (
                <Link key={article.slug} href={`/blog/${article.slug}`} className={s.cardLink}>
                  <article className={s.card}>
                    <div className={s.cardImg}>
                      <Image src={article.img} alt={article.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={s.cardBody}>
                      <div className={s.cardMeta}>
                        <span className={s.cardTag}>{article.category}</span>
                        <span>{article.date}</span>
                        <span>·</span>
                        <span>{article.readTime} read</span>
                      </div>
                      <h2 className={s.cardTitle}>{article.title}</h2>
                      <div className={s.cardFooter}>
                        <span>By Sarah Mitchell</span>
                        <span className={s.readMore}>Read article →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  )
}
