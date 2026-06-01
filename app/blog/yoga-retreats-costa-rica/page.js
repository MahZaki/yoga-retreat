import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import s from '../yoga-retreats/page.module.css'

export const metadata = {
  title: '7 Best Yoga Retreats in Costa Rica for 2025 (Nosara, Tulum, Santa Teresa)',
  description: 'Nosara, Santa Teresa, or the rainforest interior? Honest guide to Costa Rica\'s best yoga retreat areas with real prices and who each suits.',
  openGraph: {
    title: '7 Best Yoga Retreats in Costa Rica for 2025',
    description: 'Honest guide to Costa Rica\'s best yoga retreat areas with real prices.',
    images: [{ url: '/images/blog/costa-rica-yoga.jpg', width: 940, height: 650 }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '7 Best Yoga Retreats in Costa Rica for 2025',
  author: { '@type': 'Person', name: 'Sarah Mitchell' },
  datePublished: '2025-09-15',
  dateModified: '2025-09-15',
  publisher: { '@type': 'Organization', name: 'YogaRetreatAdvisor', url: 'https://yogaretreatadvisor.com' },
}

export default function CostaRicaYogaRetreatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <article className={s.article}>

        <div className={s.heroWrap}>
          <Image src="/images/blog/costa-rica-yoga.jpg" alt="Outdoor yoga platform in Costa Rica rainforest with tropical canopy" fill style={{ objectFit: 'cover' }} priority />
          <div className={s.heroOverlay}>
            <div className="container">
              <span className={s.tag}>Destinations</span>
              <h1>7 best yoga retreats in Costa Rica for 2025</h1>
              <div className={s.meta}>
                <span>By Sarah Mitchell</span>
                <span>·</span>
                <span>September 2025</span>
                <span>·</span>
                <span>7 min read</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={s.layout}>
            <div className={s.content}>

              <p>Costa Rica punches well above its size as a yoga destination. A country the size of West Virginia manages to pack in jungle, beach, wildlife, and some genuinely strong retreat programmes. The challenge: the marketing is often indistinguishable from the reality. Let me separate them.</p>

              <h2>Why Costa Rica works for yoga retreats</h2>
              <p>Three things: the natural setting is extraordinary (howler monkeys at 5:30am do more for your nervous system than any breathing exercise), the surf-and-yoga combination is legitimately good (you can do both well here without compromising either), and the dry season (December–April) means reliable sunny mornings for outdoor practice.</p>
              <p>It's also more affordable than Bali for comparable quality. A mid-range retreat in Nosara runs $900–$1,400/week. The equivalent in Ubud is $1,100–$1,800. That gap matters if you're going for two weeks.</p>

              <h2>Nosara: the most established yoga hub</h2>
              <p>Nosara, specifically Playa Guiones, is the Costa Rica yoga scene. The Nosara Yoga Institute has been operating since 1994. The town has more yoga studios per capita than most major cities. The beach is clean, the surf is consistent, the vibe is low-key.</p>
              <p><strong>Typical prices:</strong> $800–$1,800/week all-inclusive. Budget options exist ($500–$650) but involve shared rooms and less polished teaching. Mid-range ($900–$1,400) is the sweet spot — private room, 2 daily classes, organic meals.</p>
              <p>One caveat: Nosara has become noticeably more expensive over the last three years. The $2,500/week luxury option now exists here; it didn't five years ago. This is a sign of gentrification, not quality improvement.</p>

              <div className={s.imageBlock}>
                <Image src="/images/blog/costa-rica-yoga.jpg" alt="Morning yoga class at a Costa Rica jungle retreat" width={860} height={500} />
                <p className={s.caption}>Photo by Mariam · Pexels</p>
              </div>

              <h2>Santa Teresa: surf-first, yoga-second</h2>
              <p>Santa Teresa on the Nicoya Peninsula attracts a younger, more surf-oriented crowd. The yoga here is solid — Horizon, Anamaya, and several others run well-reviewed programs — but if you're not interested in surfing you'll feel slightly out of place. It's a beach town that does yoga, not a yoga town that has a beach.</p>
              <p><strong>Typical prices:</strong> $700–$1,500/week. Slightly cheaper than Nosara on average, partly because there are more budget options.</p>

              <h2>The rainforest interior (less known, worth considering)</h2>
              <p>Retreat centres in the Monteverde cloud forest and around Arenal volcano are less talked about but genuinely interesting. The rainforest setting creates a different quality of quiet. No surf, no beach crowd — just jungle sound, cool air, and sometimes a volcano on the horizon.</p>
              <p><strong>Typical prices:</strong> $600–$1,200/week. Often lower than the coastal options for equivalent quality.</p>

              <h2>Price comparison</h2>
              <div className={s.tableWrap}>
                <table className={s.table}>
                  <thead><tr><th>Area</th><th>Budget / week</th><th>Mid-range / week</th><th>Best for</th></tr></thead>
                  <tbody>
                    <tr><td>Nosara</td><td>$650</td><td>$1,100</td><td>Established yoga scene, consistent quality</td></tr>
                    <tr><td>Santa Teresa</td><td>$550</td><td>$950</td><td>Surf + yoga combo</td></tr>
                    <tr><td>Rainforest interior</td><td>$500</td><td>$850</td><td>Nature immersion, lower prices</td></tr>
                  </tbody>
                </table>
              </div>

              <h2>What to watch out for</h2>
              <p>Costa Rica has a high number of "retreat centres" that are guesthouses with a yoga platform attached. That's not necessarily bad — but check the teaching credentials before you book. A Nosara Yoga Institute-certified teacher is not the same as someone who completed a 200-hour course online in 2020. Both exist on the same booking platforms at similar price points.</p>
              <p>Also: the wet season (May–November) is not unworkable, but you should know that afternoon rain is near-certain and some dirt roads become difficult. The upside: prices drop 25–35% and the jungle is at its most vivid green.</p>

              <h2>The verdict</h2>
              <p>Nosara for your first Costa Rica retreat. The infrastructure is there, the teaching standard is reliably high, and the Playa Guiones beach is worth the trip regardless. Santa Teresa if you surf. The interior if you want maximum quiet at minimum cost.</p>
              <p>Read our <Link href="/blog/yoga-retreats">complete yoga retreats guide</Link> before you book — it covers what questions to ask any retreat centre, anywhere.</p>

            </div>

            <aside className={s.sidebar}>
              <div className={s.toc}>
                <h3>In this guide</h3>
                <ul>
                  <li><a href="#why">Why Costa Rica works</a></li>
                  <li><a href="#nosara">Nosara</a></li>
                  <li><a href="#santa-teresa">Santa Teresa</a></li>
                  <li><a href="#rainforest">Rainforest interior</a></li>
                  <li><a href="#prices">Price comparison</a></li>
                  <li><a href="#verdict">Verdict</a></li>
                </ul>
              </div>
              <div className={s.relatedBox}>
                <h3>Related reads</h3>
                <ul>
                  <li><Link href="/blog/yoga-retreats">The complete yoga retreats guide</Link></li>
                  <li><Link href="/blog/yoga-retreat-bali">Best retreats in Bali</Link></li>
                  <li><Link href="/blog/affordable-yoga-retreats">Affordable retreats under $500</Link></li>
                  <li><Link href="/blog/yoga-retreat-for-beginners">First retreat: what to expect</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>

        <div className={s.authorBox}>
          <div className="container">
            <div className={s.authorInner}>
              <div className={s.authorInfo}>
                <strong>Sarah Mitchell</strong>
                <p>Former London project manager turned yoga travel writer. Has attended 22 retreats across 14 countries since 2018. RYT-200 certified, perpetually over-packed.</p>
              </div>
            </div>
          </div>
        </div>

        <Newsletter />
      </article>
      <Footer />
    </>
  )
}
