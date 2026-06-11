import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import s from './page.module.css'

const categories = {
  'wellness-retreats-bali': {
    title: 'THE 10 BEST Wellness Retreats in Bali for 2026',
    description: 'Explore the top-rated wellness and healing retreats across Bali. From deep jungle ashrams in Ubud to luxurious oceanfront sanctuaries in Uluwatu, discover the perfect place to reset your nervous system.',
    image: '/images/dest-bali.png',
    link: 'https://bookretreats.com/s/wellness-retreats/bali?a=kgwad',
    location: 'Bali, Indonesia',
    features: ['Holistic Healing', 'Organic Meals', 'Spa Treatments', 'Expert Instructors']
  },
  'yoga-retreats-tulum': {
    title: 'THE 10 BEST Yoga Retreats in Tulum Beach for 2026',
    description: 'Experience barefoot luxury on the pristine white sands of the Riviera Maya. These top-rated Tulum retreats combine daily beachfront yoga with eco-friendly boutique accommodation and vibrant community.',
    image: '/images/dest-mexico.png',
    link: 'https://bookretreats.com/s/yoga-retreats/tulum-beach?a=kgwad',
    location: 'Tulum, Mexico',
    features: ['Beachfront Shalas', 'Eco-Luxury', 'Vinyasa & Flow', 'Cenote Excursions']
  },
  'ashram-retreats-rishikesh': {
    title: 'THE 10 BEST Ashram Retreats in Rishikesh for 2026',
    description: 'Return to the birthplace of yoga. These authentic ashram experiences on the banks of the Holy Ganges offer traditional Hatha instruction, strict schedules, and deep spiritual immersion.',
    image: '/images/dest-india.png',
    link: 'https://bookretreats.com/s/yoga-retreats/ashram-retreats/rishikesh?a=kgwad',
    location: 'Rishikesh, India',
    features: ['Traditional Hatha', 'Authentic Lineage', 'Budget Friendly', 'Deep Meditation']
  },
  'silent-retreats-ubud': {
    title: 'THE 10 BEST Silent Retreats in Ubud for 2026',
    description: 'Disconnect completely in the spiritual heart of Bali. These highly-rated silent and Vipassana retreats provide the perfect jungle environment for profound introspection and mental reset.',
    image: '/images/blog/vipassana-meditation.jpg',
    link: 'https://bookretreats.com/s/yoga-retreats/silent-retreats/ubud?a=kgwad',
    location: 'Ubud, Bali',
    features: ['Noble Silence', 'Jungle Setting', 'Digital Detox', 'Mental Reset']
  },
  'silent-retreats-thailand': {
    title: 'THE 10 BEST Silent Retreats in Thailand for 2026',
    description: 'Find ultimate peace in the Land of Smiles. Whether in the northern mountains of Chiang Mai or the quiet islands of the Gulf, these silent retreats offer structured meditation in stunning natural surroundings.',
    image: '/images/blog/affordable-yoga-thailand.jpg',
    link: 'https://bookretreats.com/s/yoga-retreats/silent-retreats/thailand?a=kgwad',
    location: 'Thailand',
    features: ['Vipassana Meditation', 'Buddhist Traditions', 'Nature Immersion', 'Mindfulness']
  },
  'jungle-retreats-costa-rica': {
    title: 'THE 10 BEST Jungle Retreats in Costa Rica for 2026',
    description: 'Immerse yourself in the world\'s most biodiverse environment. These incredible eco-resorts blend daily yoga practice with wildlife, surfing, and the pure "Pura Vida" lifestyle.',
    image: '/images/dest-costa-rica.png',
    link: 'https://bookretreats.com/s/other-retreats/jungle-retreats/costa-rica?a=kgwad',
    location: 'Costa Rica',
    features: ['Rainforest Immersion', 'Eco-Lodges', 'Surf & Yoga', 'Wildlife Connection']
  }
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const data = categories[resolvedParams.slug]
  if (!data) return { title: 'Retreats Not Found' }
  return {
    title: data.title,
    description: data.description,
    alternates: { canonical: `https://www.yogaretreatadvisor.com/retreats/${resolvedParams.slug}` },
    openGraph: {
      title: data.title,
      description: data.description,
      images: [{ url: data.image, width: 1200, height: 630 }],
    },
  }
}

export default async function RetreatServicePage({ params }) {
  const resolvedParams = await params;
  const data = categories[resolvedParams.slug]
  
  if (!data) {
    notFound()
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.yogaretreatadvisor.com' },
      { '@type': 'ListItem', position: 2, name: 'Retreats', item: 'https://www.yogaretreatadvisor.com/retreats' },
      { '@type': 'ListItem', position: 3, name: data.title, item: `https://www.yogaretreatadvisor.com/retreats/${resolvedParams.slug}` }
    ]
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: data.title,
    description: data.description,
    url: `https://www.yogaretreatadvisor.com/retreats/${resolvedParams.slug}`,
    image: `https://www.yogaretreatadvisor.com${data.image}`
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <Navbar />
      <main className={s.pageWrapper}>
        <div className={s.hero}>
          <Image 
            src={data.image}
            alt={data.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={s.heroOverlay}>
            <div className="container">
              <div style={{ fontSize: '0.85rem', marginBottom: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                <Link href="/" style={{textDecoration:'underline'}}>Home</Link> &gt; <Link href="/retreats" style={{textDecoration:'underline'}}>Retreats</Link> &gt; <span>Collection</span>
              </div>
              <div className={s.locationTag}>📍 {data.location}</div>
              <h1>{data.title}</h1>
              <div style={{ marginTop: '2rem' }}>
                <a href={data.link} target="_blank" rel="noopener noreferrer" className={s.primaryBtn} style={{ display: 'inline-block', width: 'auto' }}>
                  View Availability &amp; Prices
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className={s.contentSection}>
          <div className="container">
            <div className={s.layout}>
              <div className={s.mainContent}>
                <p className={s.description}>{data.description}</p>
                
                <div className={s.featuresGrid}>
                  {data.features.map((feature, i) => (
                    <div key={i} className={s.featureBox}>
                      <span className={s.check}>✓</span> {feature}
                    </div>
                  ))}
                </div>

                <div className={s.ctaBox}>
                  <h2>Ready to compare the top 10 options?</h2>
                  <p>We partner with BookRetreats.com to bring you verified reviews, best price guarantees, and secure bookings. Click below to view availability, prices, and detailed itineraries for the top 10 retreats in this category.</p>
                  
                  <a href={data.link} target="_blank" rel="noopener noreferrer" className={s.primaryBtn}>
                    View Top 10 Retreats &amp; Availability
                  </a>
                  <p className={s.affiliateDisclaimer}>
                    *You will be redirected to our trusted partner booking platform.
                  </p>
                </div>
              </div>
              
              <div className={s.sidebar}>
                <div className={s.trustBox}>
                  <h3>Why book through our partner?</h3>
                  <ul className={s.trustList}>
                    <li><strong>Best Price Guarantee:</strong> Find it cheaper elsewhere, and they match it.</li>
                    <li><strong>Verified Reviews:</strong> Real reviews from people who actually attended.</li>
                    <li><strong>Free Cancellation:</strong> Flexible booking policies on many listings.</li>
                    <li><strong>Secure Payment:</strong> Bank-level encryption protects your transaction.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
