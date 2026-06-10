'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import s from './page.module.css'

const retreats = [
  { id:1, name:'10 Best Wellness Retreats in Bali', location:'Bali, Indonesia', duration:'Varies', price:900, rating:4.9, reviews:342, type:'Wellness', level:'All Levels', img:'/images/dest-bali.png', badge:'Top Rated', slug:'wellness-retreats-bali' },
  { id:2, name:'10 Best Yoga Retreats in Tulum Beach', location:'Tulum, Mexico', duration:'Varies', price:1500, rating:4.8, reviews:215, type:'Yoga', level:'All Levels', img:'/images/dest-mexico.png', badge:'Popular', slug:'yoga-retreats-tulum' },
  { id:3, name:'10 Best Ashram Retreats in Rishikesh', location:'Rishikesh, India', duration:'Varies', price:400, rating:4.7, reviews:512, type:'Ashram', level:'All Levels', img:'/images/dest-india.png', badge:'Authentic', slug:'ashram-retreats-rishikesh' },
  { id:4, name:'10 Best Silent Retreats in Ubud', location:'Ubud, Bali', duration:'Varies', price:700, rating:4.9, reviews:189, type:'Silent', level:'All Levels', img:'/images/blog/vipassana-meditation.jpg', badge:'Deep Healing', slug:'silent-retreats-ubud' },
  { id:5, name:'10 Best Silent Retreats in Thailand', location:'Thailand', duration:'Varies', price:600, rating:4.8, reviews:276, type:'Silent', level:'All Levels', img:'/images/blog/affordable-yoga-thailand.jpg', badge:'Best Value', slug:'silent-retreats-thailand' },
  { id:6, name:'10 Best Jungle Retreats in Costa Rica', location:'Costa Rica', duration:'Varies', price:1800, rating:4.9, reviews:310, type:'Jungle', level:'All Levels', img:'/images/dest-costa-rica.png', badge:'Eco Luxury', slug:'jungle-retreats-costa-rica' },
]

export default function RetreatsPage() {
  const [country, setCountry] = useState('all')
  const [budget, setBudget] = useState('all')
  const [type, setType] = useState('all')

  const filtered = retreats.filter(r => {
    if (country !== 'all' && !r.location.toLowerCase().includes(country)) return false
    if (type !== 'all' && r.type !== type) return false
    if (budget === 'under500' && r.price >= 500) return false
    if (budget === '500-1500' && (r.price < 500 || r.price > 1500)) return false
    if (budget === '1500-3000' && (r.price < 1500 || r.price > 3000)) return false
    if (budget === '3000+' && r.price < 3000) return false
    return true
  })

  return (
    <>
      <Navbar />
      <section className={s.hero}>
        <h1>Explore Yoga Retreats</h1>
        <p>Compare handpicked retreats by price, duration, and style. Find the one that fits your journey.</p>
      </section>

      <div className={s.filters}>
        <div className="container">
          <div className={s.filterRow}>
            <select className={s.filterSelect} value={country} onChange={e => setCountry(e.target.value)}>
              <option value="all">All Countries</option>
              <option value="bali">Bali</option>
              <option value="thailand">Thailand</option>
              <option value="costa rica">Costa Rica</option>
              <option value="india">India</option>
              <option value="mexico">Mexico</option>
            </select>
            <select className={s.filterSelect} value={budget} onChange={e => setBudget(e.target.value)}>
              <option value="all">Any Budget</option>
              <option value="under500">Under $500</option>
              <option value="500-1500">$500 – $1,500</option>
              <option value="1500-3000">$1,500 – $3,000</option>
              <option value="3000+">$3,000+</option>
            </select>
            <select className={s.filterSelect} value={type} onChange={e => setType(e.target.value)}>
              <option value="all">All Types</option>
              <option value="Luxury">Luxury</option>
              <option value="Wellness">Wellness</option>
              <option value="Meditation">Meditation</option>
              <option value="Teacher Training">Teacher Training</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={s.grid}>
          {filtered.map(r => (
            <article key={r.id} className={s.card}>
              <div className={s.cardImg}>
                {r.badge && <span className={s.cardBadge}>{r.badge}</span>}
                <Image src={r.img} alt={r.name} fill sizes="33vw" style={{ objectFit:'cover' }} />
              </div>
              <div className={s.cardBody}>
                <span className={s.cardLocation}>📍 {r.location}</span>
                <h4>{r.name}</h4>
                <div className={s.cardMeta}>
                  <span>⏱ {r.duration}</span>
                  <span>🧘 {r.type}</span>
                  <span>📊 {r.level}</span>
                </div>
                <div className={s.rating}>
                  <span className={s.stars}>★★★★★</span>
                  <span className={s.ratingNum}>{r.rating}</span>
                  <span style={{ fontSize:'.75rem', color:'var(--slate)' }}>({r.reviews})</span>
                </div>
              </div>
              <div className={s.cardFooter}>
                <span className={s.cardPrice}>${r.price.toLocaleString()} <span>/ person</span></span>
                <Link href={`/retreats/${r.slug}`}><button className={s.cardBtn}>View Details</button></Link>
              </div>
            </article>
          ))}
        </div>

        {/* Comparison Table */}
        <section className={s.comparison}>
          <div className="section-header center">
            <span className="section-label">Compare Retreats</span>
            <h2>Side-by-Side Comparison</h2>
          </div>
          <div style={{ overflowX:'auto' }}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th>Retreat</th><th>Location</th><th>Duration</th><th>Price</th><th>Meals</th><th>Accommodation</th><th>Rating</th><th></th>
                </tr>
              </thead>
              <tbody>
                {retreats.slice(0,6).map(r => (
                  <tr key={r.id}>
                    <td style={{ fontWeight:600 }}>{r.name}</td>
                    <td>{r.location}</td>
                    <td>{r.duration}</td>
                    <td style={{ fontWeight:600, color:'var(--jungle)' }}>from ${r.price.toLocaleString()}</td>
                    <td>Varies</td>
                    <td>Varies</td>
                    <td>★ {r.rating}</td>
                    <td><Link href={`/retreats/${r.slug}`}><button className={s.tableBtn}>View Collection</button></Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <Newsletter />
      <Footer />
    </>
  )
}
