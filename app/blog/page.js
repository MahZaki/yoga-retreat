'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import s from './page.module.css'

const articles = [
  { 
    cat: 'Retreat Planning', 
    title: 'Yoga Retreats: How to Choose, Book, and Prepare for Your First (or Next) Retreat', 
    excerpt: 'Our ultimate, fully vetted guide to choosing, booking, and preparing for a yoga retreat. Read destination price breakdowns, packing lists, and E-E-A-T reviews.', 
    img: '/images/blog/yoga-retreat-group-bali-beach.jpg', 
    date: 'May 31, 2025', 
    read: '18 min',
    url: '/blog/yoga-retreats'
  },
  { 
    cat: 'Retreat Planning', 
    title: 'All-Inclusive Yoga Retreats: What Is Included and What Is Not', 
    excerpt: 'Learn what "all-inclusive" actually means in the wellness retreat industry. Read about average costs, hidden fees, and drivers of pricing.', 
    img: '/images/blog/luxury-yoga-retreat-pool.jpg', 
    date: 'June 1, 2025', 
    read: '10 min',
    url: '/blog/all-inclusive-yoga-retreat'
  },
  { 
    cat: 'Retreat Planning', 
    title: 'Affordable Yoga Retreats: How to Find Cheap Retreats That Do Not Cut Corners', 
    excerpt: 'A practical guide to finding verified wellness retreats under $500. Vetted destinations, warning red flags, and quality verification.', 
    img: '/images/blog/meditation-retreat-group-outdoor.jpg', 
    date: 'June 2, 2025', 
    read: '11 min',
    url: '/blog/affordable-yoga-retreats'
  },
  { 
    cat: 'Retreat Planning', 
    title: 'Yoga Retreat for Beginners: What to Expect on Your First Trip', 
    excerpt: 'Booking your first wellness retreat? Learn how to choose a beginner-friendly program, what to pack, and how to avoid feeling overwhelmed.', 
    img: '/images/blog/yoga-pose-nature-river.jpg', 
    date: 'June 3, 2025', 
    read: '12 min',
    url: '/blog/yoga-retreat-for-beginners'
  }
]

const categories = ['All', 'Retreat Planning']

export default function BlogPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? articles : articles.filter(a => a.cat === active)

  return (
    <>
      <Navbar />
      <section className={s.hero}>
        <h1>The Journal</h1>
        <p>Expert guides, destination deep-dives, and honest retreat reviews from the YogaRetreatAdvisor team.</p>
      </section>

      <section className={s.content}>
        <div className="container">
          <div className={s.layout}>
            <div>
              <div className={s.cats}>
                {categories.map(c => (
                  <button key={c} className={`tag ${active === c ? 'active' : ''}`} onClick={() => setActive(c)}>{c}</button>
                ))}
              </div>
              <div className={s.grid}>
                {filtered.map(a => (
                  <Link href={a.url} key={a.title} className={s.cardLink}>
                    <article className={s.card}>
                      <div className={s.cardImg}>
                        <Image src={a.img} alt={a.title} fill sizes="380px" style={{ objectFit:'cover' }} />
                      </div>
                      <div className={s.cardBody}>
                        <span className={s.cardCat}>{a.cat}</span>
                        <h3>{a.title}</h3>
                        <p>{a.excerpt}</p>
                        <div className={s.cardMeta}><span>{a.date}</span><span>{a.read} read</span></div>
                        <span className={s.readMore}>Read Article →</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>

            <aside className={s.sidebar}>
              <div className={s.sideWidget}>
                <h4>Search Articles</h4>
                <div className={s.sideSearch}>
                  <input type="text" placeholder="Search..." />
                  <button>Go</button>
                </div>
              </div>
              <div className={s.sideWidget}>
                <h4>Popular Posts</h4>
                <div className={s.sideLinks}>
                  {articles.map(a => (
                    <Link href={a.url} key={a.title} className={s.sideLink}>
                      {a.title.length > 40 ? a.title.slice(0,40)+'...' : a.title}
                      <span>{a.read}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className={s.sideCta}>
                <h4>Free Planning Guide</h4>
                <p>Download our complete yoga retreat planning checklist.</p>
                <Link href="/retreat-matcher" className="btn btn-primary btn-sm">Get the Guide →</Link>
              </div>
              <div className={s.sideWidget}>
                <h4>Categories</h4>
                <div className={s.sideLinks}>
                  {categories.map(c => (
                    <button key={c} className={s.sideLink} onClick={() => setActive(c)}>{c}<span>→</span></button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  )
}
