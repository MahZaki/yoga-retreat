import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import s from './page.module.css'

export const metadata = {
  title: 'About Sarah Mitchell | Yoga Retreat Advisor',
  description: 'The story behind Yoga Retreat Advisor and why I review yoga retreats.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className={s.hero}>
        <div className="container">
          <div className={s.heroGrid}>
            <div className={s.heroContent}>
              <h1>Hi, I'm Sarah Mitchell.</h1>
              <p>And I never intended to become the person who reviews yoga retreats for a living.</p>
              <p>For eleven years, I worked in financial services in London. I managed projects, sat through endless meetings, lived on coffee, and convinced myself that being permanently exhausted was just what adulthood felt like.</p>
              <div className={s.highlight}>
                <p>Then, in 2018, I had a panic attack during a meeting.</p>
                <p>Not the glamorous movie version. The real version. The kind where someone asks if you're okay and you genuinely can't answer.</p>
              </div>
            </div>
            <div className={s.heroImg}>
              <Image src="/images/hero-portrait.jpg" alt="Sarah Mitchell" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* Story Blocks */}
      <section className={s.sectionAlt}>
        <div className="container">
          
          <div className={s.storyGrid}>
            <div className={s.storyImg}>
              <Image src="/images/corporate.jpg" alt="Life Before Retreats" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className={s.storyContent}>
              <h2>Life Before Retreats</h2>
              <p>From the outside, everything looked fine.</p>
              <p>I had a stable career, a respectable job title, and the sort of LinkedIn profile that suggests everything is going according to plan.</p>
              <p>The reality was different.</p>
              <p>I was exhausted, constantly stressed, and increasingly disconnected from myself. I kept telling myself things would improve after the next project, the next promotion, or the next holiday.</p>
              <p>They didn't.</p>
            </div>
          </div>

          <div className={`${s.storyGrid} ${s.reverse}`}>
            <div className={s.storyImg}>
              <Image src="/images/rishikesh.jpg" alt="First Retreat in Rishikesh" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className={s.storyContent}>
              <h2>The Retreat That Changed Everything</h2>
              <p>A friend convinced me to book a seven-day yoga retreat in Rishikesh, India.</p>
              <p>I rolled my eyes all the way to the airport. I told myself it was just a holiday.</p>
              <p>Seven days later, I returned home sleeping better, thinking more clearly, and feeling something I hadn't felt in years:</p>
              <p><strong>Space.</strong></p>
              <p>Not enlightenment. Not perfection. Just enough space to hear myself think again.</p>
              <p>That retreat cost $380. It remains one of the best investments I've ever made.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Mission */}
      <section className={s.section}>
        <div className={s.mission}>
          <h2>Why I Started Yoga Retreat Advisor</h2>
          <p>After that first retreat, I became obsessed with a simple question:</p>
          <p><em>Why do some retreats feel life-changing while others feel like expensive holidays with yoga mats?</em></p>
          <p>The more retreats I attended, the more I noticed how difficult it was to find honest information. Many review platforms prioritize commissions. Many rankings are influenced by advertising. Many reviews are written by people who have attended exactly one retreat.</p>
          <p>I wanted something different. A place built around real experience, real comparisons, and honest recommendations.</p>
          <p><strong>That's why Yoga Retreat Advisor exists.</strong></p>
        </div>
      </section>

      {/* Lessons Grid */}
      <section className={s.lessons}>
        <div className="container">
          <div className={s.lessonsHeader}>
            <h2>The Retreats That Taught Me Everything</h2>
            <p style={{color: 'var(--charcoal-light)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto'}}>Over the past several years, I've attended 14 retreats across 9 countries. From luxury retreats in Tuscany to budget retreats in India. Each one taught me something different.</p>
          </div>
          <div className={s.lessonsGrid}>
            <div className={s.lessonCard}>
              <div className={s.lessonImg}>
                <Image src="/images/morocco.jpg" alt="Morocco Retreat" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className={s.lessonBody}>
                <h3>Morocco</h3>
                <p>The most emotionally intense retreat I've attended. A reminder that growth is often uncomfortable before it becomes meaningful.</p>
              </div>
            </div>
            <div className={s.lessonCard}>
              <div className={s.lessonImg}>
                <Image src="/images/bali.jpg" alt="Bali Retreat" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className={s.lessonBody}>
                <h3>Bali</h3>
                <p>Beautiful. Inspiring. And proof that the most Instagrammable retreat isn't always the best retreat. I learned to separate aesthetics from actual teaching quality.</p>
              </div>
            </div>
            <div className={s.lessonCard}>
              <div className={s.lessonImg}>
                <Image src="/images/silent.jpg" alt="Silent Retreat" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className={s.lessonBody}>
                <h3>Silent Retreats</h3>
                <p>The format I underestimated most. Removing the pressure to socialize turned out to be one of the most restorative experiences of my adult life. Not easy. But surprisingly valuable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className={s.beliefs}>
        <div className="container">
          <div className="section-header center">
            <h2>A Few Things I Believe</h2>
          </div>
          <div className={s.beliefsGrid}>
            <div className={s.beliefCard}>
              <h3>Teachers Matter More Than Accommodation</h3>
              <p>A brilliant teacher in simple accommodation beats a mediocre teacher in a luxury villa. Every time.</p>
            </div>
            <div className={s.beliefCard}>
              <h3>Most First Retreats Are Too Long</h3>
              <p>For beginners, four to five days is usually better than seven to ten.</p>
            </div>
            <div className={s.beliefCard}>
              <h3>Bali Is Often Overpriced</h3>
              <p>Wonderful destination. Not automatically superior yoga.</p>
            </div>
            <div className={s.beliefCard}>
              <h3>Silent Retreats Are Underrated</h3>
              <p>Especially for people who spend their lives managing constant noise and demands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className={s.conclusion}>
        <div className="container">
          <div className={s.conclusionGrid}>
            <div className={s.conclusionContent}>
              <h2>Still Exploring</h2>
              <p>Today, I continue traveling, reviewing retreats, comparing experiences, and helping readers avoid expensive mistakes.</p>
              <p>Some trips are extraordinary. Some are disappointing. Both are worth sharing. Because finding the right retreat shouldn't depend on luck. It should depend on good information.</p>
              
              <h3 style={{marginTop: '3rem', marginBottom: '1rem', color: 'var(--sand-light)'}}>Thanks for Being Here</h3>
              <p>Whether you're planning your first retreat or your fifteenth, I hope this site helps you find something genuinely worthwhile. I've already made plenty of mistakes so you don't have to.</p>
              <p>And if I can save you from spending thousands of dollars on a retreat that looks incredible online but leaves you underwhelmed in person, then this website is doing exactly what it was built to do.</p>
              
              <div className={s.signature}>
                — Sarah Mitchell<br/>
                <span style={{fontSize: '0.9rem', opacity: 0.8, fontStyle: 'normal', fontFamily: 'var(--font-body)'}}>Founder, Yoga Retreat Advisor</span>
              </div>
            </div>
            <div className={s.conclusionImg}>
              <Image src="/images/airport.jpg" alt="Sarah traveling" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  )
}
