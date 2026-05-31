import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import s from '../yoga-retreats/page.module.css'

export const metadata = {
  title: 'All-Inclusive Yoga Retreats: What Is Included and What Is Not (2025)',
  description: 'Learn what "all-inclusive" actually means in the retreat industry. Read about average costs, common hidden fees, and how to avoid overpaying.',
  openGraph: {
    title: 'All-Inclusive Yoga Retreats: The Truth About Pricing',
    description: 'Vetted pricing guides, hidden cost breakdowns, and comparisons from 14 retreats attended at my own expense.',
    images: [{ url: '/images/blog/luxury-yoga-retreat-pool.jpg', width: 1200, height: 630, alt: 'Luxury all-inclusive resort pool in Bali' }],
    type: 'article',
  },
}

export default function AllInclusiveYogaRetreats() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'All-Inclusive Yoga Retreats: What Is Included and What Is Not (2025)',
    description: 'Learn what "all-inclusive" actually means in the retreat industry. Read about average costs, common hidden fees, and how to avoid overpaying.',
    author: { '@type': 'Person', name: 'Sarah Mitchell', url: 'https://yogaretreatadvisor.com/about' },
    publisher: { '@type': 'Organization', name: 'YogaRetreatAdvisor', logo: { '@type': 'ImageObject', url: 'https://yogaretreatadvisor.com/logo.png' } },
    datePublished: '2025-06-01',
    dateModified: '2025-06-01',
    image: 'https://yogaretreatadvisor.com/images/blog/luxury-yoga-retreat-pool.jpg',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://yogaretreatadvisor.com/blog/all-inclusive-yoga-retreat' },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yogaretreatadvisor.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://yogaretreatadvisor.com/blog' },
      { '@type': 'ListItem', position: 3, name: 'All-Inclusive Yoga Retreats Guide', item: 'https://yogaretreatadvisor.com/blog/all-inclusive-yoga-retreat' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Navbar />

      <article className={s.article}>
        {/* Hero */}
        <div className={s.heroWrap}>
          <Image src="/images/blog/luxury-yoga-retreat-pool.jpg" alt="Luxury tropical pool at an all-inclusive yoga retreat resort" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
          <div className={s.heroOverlay}>
            <span className={s.heroCat}>Retreat Planning</span>
            <h1>All-Inclusive Yoga Retreats: What Is Included and What Is Not</h1>
            <div className={s.heroMeta}>
              <span>By Sarah Mitchell</span>
              <span>June 1, 2025</span>
              <span>10 min read</span>
              <span>Updated June 2025</span>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={s.layout}>
            {/* Main Content */}
            <div className={s.body}>

              <p>The term “all-inclusive” is the biggest source of confusion in the yoga retreat industry. In traditional travel, it means unlimited buffet meals and cocktails. In the wellness industry, it means something entirely different.</p>

              <p>If you book an all-inclusive wellness retreat expecting a beach resort swim-up bar, you will be disappointed. I have attended 14 retreats across 9 countries at my own expense. I have seen everything from basic ashrams to a $4,200 luxury week in Tuscany. Here is the direct truth about what all-inclusive actually buys you, what it excludes, and how to avoid booking a program that leaves you with a massive bill at check-out.</p>

              <h2 id="what-all-inclusive-means">What all-inclusive actually means in wellness</h2>

              <p>In a standard yoga retreat, “all-inclusive” means the price covers your room, scheduled yoga classes, and your daily meals. That is it. It does not cover your travel, airport pickups, spa treatments, or tips.</p>

              <p>Meals are almost always healthy, plant-based, and served at set times. Alcohol is rarely included, and at many locations, it is banned entirely. If you want a vacation where you can drink by the pool and skip morning classes without feeling guilty, book a regular hotel instead. It will be cheaper, and you won’t have a 5:30am bell ringing outside your window.</p>

              <h2 id="typical-pricing-benchmarks">Typical pricing benchmarks by region</h2>

              <p>Here are the real costs you should expect for a 7-day all-inclusive retreat in 2025. These numbers cover accommodation, three meals a day, and all scheduled sessions.</p>

              <table className={s.table}>
                <thead>
                  <tr><th>Destination</th><th>Budget (Shared Room)</th><th>Mid-range</th><th>Premium / Luxury</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Bali</strong></td><td>$600–$900</td><td>$1,000–$1,800</td><td>$3,000+</td></tr>
                  <tr><td><strong>India (Rishikesh)</strong></td><td>$300–$600</td><td>$650–$1,100</td><td>$2,500+</td></tr>
                  <tr><td><strong>Costa Rica</strong></td><td>$700–$1,100</td><td>$1,200–$1,800</td><td>$3,200+</td></tr>
                  <tr><td><strong>Europe (Portugal/Spain)</strong></td><td>$800–$1,200</td><td>$1,300–$2,100</td><td>$4,000+</td></tr>
                </tbody>
              </table>

              <p>For a detailed overview of destination pricing differences, read our primary <Link href="/blog/yoga-retreats">yoga retreats guide</Link>.</p>

              <h2 id="what-drives-the-cost">What drives the cost up?</h2>

              <p>Understanding what you are paying for helps you evaluate value. When looking at retreat options, keep these three key drivers in mind:</p>

              <ul>
                <li><strong>Private Room Premium:</strong> Choosing a private room instead of a shared dorm or twin room typically adds $150 to $400 per week to the base rate. Solo travelers make up 60% to 65% of retreat bookings, and many choose shared rooms to keep costs down and meet people.</li>
                <li><strong>Group Size Capping:</strong> Small group retreats (under 12 participants) carry a 20% to 35% premium over larger programs. You pay for the individual attention from the teacher.</li>
                <li><strong>Teacher Reputation:</strong> Internationally recognized teachers add $200 to $600 per week to the retreat price. Make sure their credentials are listed. If a retreat doesn't disclose who is teaching on their website, that is a major red flag.</li>
              </ul>

              <h2 id="what-is-almost-never-included">What is almost never included</h2>

              <p>These are the common expenses that will not be in the initial price. Always calculate these before making a deposit:</p>

              <h3>1. Flights and visas</h3>
              <p>You must book your own flights. If you are traveling internationally, visas can add another $50 to $100. Always purchase travel insurance immediately after booking your flights.</p>

              <h3>2. Airport transfers</h3>
              <p>Unless you are booking a high-end luxury retreat, airport pickups are an extra cost. A taxi from Denpasar airport to Ubud costs about $30 to $45. A transfer in Costa Rica from Liberia to Nosara can easily run $150 each way. Ask the coordinator to bundle this or connect you with other guests to share the cost.</p>

              <h3>3. Spa treatments and excursions</h3>
              <p>Massage sessions, surfing lessons, and day trips to local waterfalls are typically scheduled during free afternoons. Expect to pay local rates for these, which range from $15/hour in Southeast Asia to $100+/hour in Europe or the US.</p>

              <h2 id="avoiding-booking-mistakes">How to avoid common booking mistakes</h2>

              <p>Don't book based on photos alone. I learned this the hard way at an Ubud retreat in Bali. The website was stunning. The food was beautiful. But the scheduling was designed entirely for Instagram. The sunrise practice was moved to accommodate a photographer, and the cacao ceremony was staged. I came back feeling like a prop in someone else’s social media strategy.</p>

              <p>Always check the cancellation policy before booking. A typical cancellation window for a full refund is 30 to 60 days before the start date. Some retreats require a non-refundable deposit of up to 50% — anything higher than this before a 30-day window is atypical and a red flag.</p>

              <h2 id="next-steps">How to start planning</h2>

              <p>If you're ready to find a vetted, truly all-inclusive program, here is how to start:</p>

              <ol>
                <li><strong>Try our <Link href="/retreat-matcher">Retreat Matcher Quiz</Link></strong> to get matched with programs that fit your budget and goals.</li>
                <li><strong>Browse <Link href="/retreats">our verified retreats catalog</Link></strong> to compare prices and check teacher credentials.</li>
                <li><strong>Read about budgeting</strong> in our guide to <Link href="/blog/affordable-yoga-retreats">affordable yoga retreats</Link>.</li>
              </ol>

              {/* Tags */}
              <div className={s.tags}>
                <span className="tag">All-Inclusive</span>
                <span className="tag">Retreat Planning</span>
                <span className="tag">Wellness Travel</span>
                <span className="tag">Budgeting</span>
              </div>

              {/* Author Box */}
              <div className={s.authorBox}>
                <div className={s.authorAvatar}>SM</div>
                <div className={s.authorMeta}>
                  <h4>Sarah Mitchell</h4>
                  <div className={s.authorRole}>Founder &amp; Lead Reviewer, YogaRetreatAdvisor</div>
                  <p>Sarah Mitchell spent 11 years in financial services before a panic attack at her desk in London in 2018 changed everything. Since then she has attended 14 yoga retreats across 9 countries, from a $380 budget week in Rishikesh to a $4,200 luxury immersion in Tuscany.</p>
                </div>
              </div>
            </div>

            {/* Sidebar TOC */}
            <aside>
              <div className={s.toc}>
                <h4>In This Guide</h4>
                <nav className={s.tocLinks}>
                  <a href="#what-all-inclusive-means" className={s.tocLink}>What all-inclusive means</a>
                  <a href="#typical-pricing-benchmarks" className={s.tocLink}>Pricing benchmarks</a>
                  <a href="#what-drives-the-cost" className={s.tocLink}>What drives the cost</a>
                  <a href="#what-is-almost-never-included" className={s.tocLink}>What is not included</a>
                  <a href="#avoiding-booking-mistakes" className={s.tocLink}>Booking mistakes to avoid</a>
                  <a href="#next-steps" className={s.tocLink}>How to start planning</a>
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <Newsletter />
      <Footer />
    </>
  )
}
