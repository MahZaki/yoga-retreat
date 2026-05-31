import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import s from './page.module.css'

export default function AboutPage() {
  const values = [
    { icon:'🛡️', title:'Trust', desc:'Every retreat is personally vetted. We only recommend places we would send our own friends and family.' },
    { icon:'🧭', title:'Discovery', desc:'We help you find retreats that match your goals, not just what pays the highest commission.' },
    { icon:'🌿', title:'Wellness', desc:'Your well-being is the priority. We partner with retreats that put practitioner health first.' },
    { icon:'🧘', title:'Mindfulness', desc:'We practice what we recommend. Our team includes certified yoga teachers and meditation practitioners.' },
    { icon:'✈️', title:'Travel', desc:'Travel should transform you. We curate experiences, not just vacations.' },
    { icon:'🤝', title:'Community', desc:'Over 12,000 mindful travelers trust our recommendations. Join a community that values depth over hype.' },
  ]

  const team = [
    { initials:'SK', name:'Sarah Kim', role:'Founder & Editor', desc:'200-hour RYT certified. Has visited 40+ retreats across 15 countries.' },
    { initials:'MR', name:'Marco Rivera', role:'Head of Retreats', desc:'Former retreat center manager in Bali. Evaluates every retreat we feature.' },
    { initials:'LP', name:'Lena Park', role:'Content Director', desc:'Travel journalist with bylines in Condé Nast Traveler and Wanderlust.' },
  ]

  return (
    <>
      <Navbar />
      <section className={s.hero}>
        <h1>About YogaRetreatAdvisor</h1>
        <p>The trusted resource for discovering, comparing, and booking the world&apos;s best yoga retreats.</p>
      </section>

      <section className={s.story}>
        <div className="container">
          <div className={s.storyGrid}>
            <div className={s.storyImg}>
              <Image src="/images/hero-bali.png" alt="Yoga retreat in Bali" fill sizes="50vw" style={{ objectFit:'cover' }} />
            </div>
            <div className={s.storyContent}>
              <span className="section-label">Our Story</span>
              <h2>Born From a Search That Took Too Long</h2>
              <p>YogaRetreatAdvisor started with a simple frustration: finding a good yoga retreat should not require hours of research across dozens of websites, forums, and social media groups.</p>
              <p>In 2023, after spending three weeks trying to find the right retreat in Bali — comparing prices on one site, reading reviews on another, and emailing retreat centers directly — our founder decided there had to be a better way.</p>
              <p>Today, YogaRetreatAdvisor is the trusted resource for over 12,000 wellness travelers. We personally vet every retreat we feature, provide transparent pricing, and match you with retreats that fit your goals, not just your budget.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={s.values}>
        <div className="container">
          <div className="section-header center">
            <span className="section-label">What Guides Us</span>
            <h2>Our Core Values</h2>
          </div>
          <div className={s.valuesGrid}>
            {values.map(v => (
              <div key={v.title} className={s.valueCard}>
                <div className={s.valueIcon}>{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.stats}>
        <div className="container">
          <div className={s.statsGrid}>
            <div className={s.statItem}><div className={s.statNum}>500+</div><div className={s.statLabel}>Curated Retreats</div></div>
            <div className={s.statItem}><div className={s.statNum}>45</div><div className={s.statLabel}>Countries</div></div>
            <div className={s.statItem}><div className={s.statNum}>12,000+</div><div className={s.statLabel}>Happy Travelers</div></div>
            <div className={s.statItem}><div className={s.statNum}>4.9/5</div><div className={s.statLabel}>Average Rating</div></div>
          </div>
        </div>
      </section>

      <section className={s.team}>
        <div className="container">
          <div className="section-header center">
            <span className="section-label">The Team</span>
            <h2>Meet the People Behind the Picks</h2>
          </div>
          <div className={s.teamGrid}>
            {team.map(t => (
              <div key={t.name} className={s.teamCard}>
                <div className={s.teamAvatar}>{t.initials}</div>
                <h4>{t.name}</h4>
                <div className={s.teamRole}>{t.role}</div>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  )
}
