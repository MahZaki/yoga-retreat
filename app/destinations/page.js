import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import s from './page.module.css'

const destinations = [
  { name:'Bali, Indonesia', count:'42 retreats', desc:'Rice terraces, sacred temples, and world-class yoga shalas in the spiritual heart of Southeast Asia.', img:'/images/dest-bali.png' },
  { name:'Costa Rica', count:'28 retreats', desc:'Jungle canopy retreats, Pacific coast sunsets, and eco-conscious wellness in Central America.', img:'/images/dest-costa-rica.png' },
  { name:'Thailand', count:'35 retreats', desc:'Island beaches, ancient Buddhist temples, and affordable meditation programs throughout the kingdom.', img:'/images/dest-thailand.png' },
  { name:'India', count:'51 retreats', desc:'The birthplace of yoga — from Rishikesh ashrams to Kerala Ayurvedic centers.', img:'/images/dest-india.png' },
  { name:'Mexico', count:'24 retreats', desc:'Tulum beach clubs, cenote ceremonies, and bohemian wellness along the Riviera Maya.', img:'/images/dest-mexico.png' },
  { name:'Sri Lanka', count:'18 retreats', desc:'Tropical coastlines, Ayurvedic healing traditions, and tea plantation serenity.', img:'/images/retreat-meditation.png' },
]

export default function DestinationsPage() {
  return (
    <>
      <Navbar />
      <section className={s.hero}>
        <h1>Yoga Retreat Destinations</h1>
        <p>Explore the world&apos;s most transformative yoga retreat destinations, from tropical islands to mountain ashrams.</p>
      </section>

      <div className="container">
        <div className={s.grid}>
          {destinations.map(d => (
            <Link href="/retreats" key={d.name} className={s.card}>
              <div className={s.cardImg}>
                <Image src={d.img} alt={`Yoga retreats in ${d.name}`} fill sizes="33vw" style={{ objectFit:'cover' }} />
              </div>
              <div className={s.overlay}>
                <span className={s.destName}>{d.name}</span>
                <span className={s.destCount}>{d.count}</span>
                <span className={s.destDesc}>{d.desc}</span>
                <span className={s.destBtn}>Explore Retreats →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Destination */}
      <section className={s.featured}>
        <div className="container">
          <div className={s.featGrid}>
            <div className={s.featImg}>
              <Image src="/images/dest-bali.png" alt="Bali rice terraces" fill sizes="50vw" style={{ objectFit:'cover' }} />
            </div>
            <div className={s.featContent}>
              <span className="section-label">Featured Destination</span>
              <h2>Bali: The Island of the Gods</h2>
              <p>Bali remains the top destination for yoga retreats worldwide. From the artistic hub of Ubud to the surf-town energy of Canggu, the island offers something for every practitioner — whether you seek silent meditation, luxury wellness, or a 200-hour teacher training certification.</p>
              <div className={s.featStats}>
                <div className={s.featStat}><div className={s.featStatNum}>42</div><div className={s.featStatLabel}>Retreats</div></div>
                <div className={s.featStat}><div className={s.featStatNum}>4.9</div><div className={s.featStatLabel}>Avg Rating</div></div>
                <div className={s.featStat}><div className={s.featStatNum}>$89</div><div className={s.featStatLabel}>From/Night</div></div>
              </div>
              <Link href="/retreats" className="btn btn-secondary">Browse Bali Retreats →</Link>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  )
}
