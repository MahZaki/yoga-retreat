import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import s from './page.module.css'

export default function Home() {
  const destinations = [
    { name: 'Bali', count: '42 retreats', img: '/images/dest-bali.png' },
    { name: 'Costa Rica', count: '28 retreats', img: '/images/dest-costa-rica.png' },
    { name: 'Thailand', count: '35 retreats', img: '/images/dest-thailand.png' },
    { name: 'India', count: '51 retreats', img: '/images/dest-india.png' },
    { name: 'Mexico', count: '24 retreats', img: '/images/dest-mexico.png' },
  ]

  const categories = [
    { icon: '✦', title: 'Luxury Retreats', desc: 'Five-star wellness resorts with private villas and spa treatments' },
    { icon: '🌱', title: 'Beginner Retreats', desc: 'Gentle introductions to yoga in welcoming, supportive settings' },
    { icon: '🧘', title: 'Wellness Retreats', desc: 'Holistic programs combining yoga, nutrition, and healing therapies' },
    { icon: '🧠', title: 'Meditation Retreats', desc: 'Silent retreats and mindfulness programs for inner exploration' },
    { icon: '📚', title: 'Teacher Training', desc: 'RYT-certified 200h and 500h yoga teacher training programs' },
    { icon: '💰', title: 'Budget Retreats', desc: 'Affordable retreats under $500 that do not compromise on quality' },
  ]

  const articles = [
    { cat: 'Retreat Planning', title: 'How to Choose Your First Yoga Retreat: A Complete Guide', excerpt: 'Everything you need to know before booking your first yoga retreat, from budget to packing lists.', img: '/images/blog-planning.png', date: 'May 28, 2025', read: '8 min read' },
    { cat: 'Destinations', title: 'The 10 Best Yoga Retreats in Bali for 2025', excerpt: 'Our curated selection of the most transformative yoga retreats across Ubud, Canggu, and Uluwatu.', img: '/images/dest-bali.png', date: 'May 22, 2025', read: '12 min read' },
    { cat: 'Wellness', title: 'What to Expect at a Silent Meditation Retreat', excerpt: 'A first-hand account of spending seven days in silence at a Vipassana center in Thailand.', img: '/images/retreat-meditation.png', date: 'May 15, 2025', read: '10 min read' },
  ]

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <Image src="/images/hero-bali.png" alt="Luxury yoga retreat overlooking Bali rice terraces at sunset" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className={s.heroContent}>
          <div className={s.heroInner}>
            <span className={s.heroLabel}>Trusted by 12,000+ Wellness Travelers</span>
            <h1 className={s.heroTitle}>Find Your Perfect Yoga Retreat</h1>
            <p className={s.heroSub}>Discover handpicked yoga retreats, wellness escapes, and transformational journeys around the world.</p>
            <div className={s.heroBtns}>
              <Link href="/retreats" className="btn btn-primary btn-lg">Explore Retreats</Link>
              <Link href="/retreat-matcher" className="btn btn-outline btn-lg">Take the Quiz</Link>
            </div>
            <div className={s.heroStats}>
              <div className={s.stat}><span className={s.statNum}>500+</span><span className={s.statLabel}>Curated Retreats</span></div>
              <div className={s.stat}><span className={s.statNum}>45</span><span className={s.statLabel}>Destinations</span></div>
              <div className={s.stat}><span className={s.statNum}>4.9</span><span className={s.statLabel}>Avg Rating</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quiz Promo ── */}
      <section className={s.quiz}>
        <div className="container">
          <div className={s.quizGrid}>
            <div className={s.quizVisual}>
              <Image src="/images/retreat-meditation.png" alt="Woman meditating at Bali retreat" fill sizes="50vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className={s.quizContent}>
              <span className="section-label">Retreat Matcher</span>
              <h2>Not Sure Which Retreat Is Right For You?</h2>
              <p>Take our 60-second quiz and get personalized retreat recommendations based on your goals, experience level, travel style, and budget.</p>
              <div className={s.quizSteps}>
                <div className={s.quizStep}><span>1</span><span>Tell us your goals and preferences</span></div>
                <div className={s.quizStep}><span>2</span><span>Get matched with curated retreats</span></div>
                <div className={s.quizStep}><span>3</span><span>Book your transformational journey</span></div>
              </div>
              <Link href="/retreat-matcher" className="btn btn-secondary">Start the Retreat Matcher Quiz →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Destinations ── */}
      <section className={s.destinations}>
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Popular Destinations</span>
            <h2>Where Will Your Journey Take You?</h2>
            <p className="section-subtitle">From the rice terraces of Bali to the jungles of Costa Rica — explore the world&apos;s most sought-after yoga retreat destinations.</p>
          </div>
          <div className={s.destGrid}>
            {destinations.map(d => (
              <Link href="/destinations" key={d.name} className={s.destCard}>
                <Image src={d.img} alt={`Yoga retreats in ${d.name}`} fill sizes="20vw" style={{ objectFit: 'cover' }} />
                <div className={s.destOverlay}>
                  <span className={s.destName}>{d.name}</span>
                  <span className={s.destCount}>{d.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className={s.categories}>
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Retreat Categories</span>
            <h2>Find Your Style</h2>
            <p className="section-subtitle">Whether you are a complete beginner or a seasoned practitioner, there is a retreat designed for your journey.</p>
          </div>
          <div className={s.catGrid}>
            {categories.map(c => (
              <div key={c.title} className={s.catCard}>
                <div className={s.catIcon}>{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <section className={s.trust}>
        <div className="container">
          <div className={s.trustGrid}>
            <div className={s.trustItem}><div className={s.trustNum}>500+</div><div className={s.trustLabel}>Curated Retreats</div></div>
            <div className={s.trustItem}><div className={s.trustNum}>45</div><div className={s.trustLabel}>Countries</div></div>
            <div className={s.trustItem}><div className={s.trustNum}>12,000+</div><div className={s.trustLabel}>Happy Travelers</div></div>
            <div className={s.trustItem}><div className={s.trustNum}>4.9/5</div><div className={s.trustLabel}>Average Rating</div></div>
          </div>
        </div>
      </section>

      {/* ── Featured Articles ── */}
      <section className={s.articles}>
        <div className="container">
          <div className="section-header center">
            <span className="section-label">From the Journal</span>
            <h2>Retreat Planning &amp; Wellness Inspiration</h2>
            <p className="section-subtitle">Expert guides, destination deep-dives, and honest reviews to help you plan the retreat of a lifetime.</p>
          </div>
          <div className={s.artGrid}>
            {articles.map(a => (
              <article key={a.title} className={s.artCard}>
                <div className={s.artImg}>
                  <Image src={a.img} alt={a.title} fill sizes="33vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className={s.artBody}>
                  <span className={s.artCat}>{a.cat}</span>
                  <h4>{a.title}</h4>
                  <p>{a.excerpt}</p>
                </div>
                <div className={s.artMeta}>
                  <span>{a.date}</span>
                  <span>{a.read}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  )
}
