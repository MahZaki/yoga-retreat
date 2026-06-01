import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import s from '../yoga-retreats/page.module.css'

export const metadata = {
  title: 'How to Book a Yoga Retreat: Pricing, Deposits, and Policies (2025)',
  description: 'The mechanics of actually booking a retreat — what deposits are normal, which payment methods protect you, what the contract should say, and how to read the fine print.',
  openGraph: {
    title: 'How to Book a Yoga Retreat: Pricing, Deposits, and Policies',
    description: 'What deposits are normal, which payment methods protect you, and how to read the fine print.',
    images: [{ url: '/images/blog/blog-planning-guide.png', width: 940, height: 650 }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Book a Yoga Retreat: Pricing, Deposits, and Policies',
  author: { '@type': 'Person', name: 'Sarah Mitchell' },
  datePublished: '2025-11-10',
  dateModified: '2025-11-10',
  publisher: { '@type': 'Organization', name: 'YogaRetreatAdvisor', url: 'https://yogaretreatadvisor.com' },
}

export default function BookYogaRetreatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <article className={s.article}>

        <div className={s.heroWrap}>
          <Image src="/images/blog/blog-planning-guide.png" alt="Yoga retreat travel planning flat lay with journal, passport, yoga mat, and tropical flowers" fill style={{ objectFit: 'cover' }} priority />
          <div className={s.heroOverlay}>
            <div className="container">
              <span className={s.tag}>Planning</span>
              <h1>How to book a yoga retreat: pricing, deposits, and policies</h1>
              <div className={s.meta}>
                <span>By Sarah Mitchell</span><span>·</span>
                <span>November 2025</span><span>·</span>
                <span>7 min read</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={s.layout}>
            <div className={s.content}>

              <p>Booking a yoga retreat involves a few mechanics that most first-timers get wrong — not catastrophically, but expensively. This guide covers the transactional side: deposits, payment methods, cancellation policies, and what to ask before you hand over money.</p>

              <h2>When to book</h2>
              <p>The best retreats fill 3–6 months in advance. Popular programs at well-known centres (Esalen, Kripalu, Spirit Rock, established Bali centres) often sell out 6–9 months ahead for peak season dates. If you have a specific retreat in mind: book early and cancel if necessary. Most centres&apos; cancellation policies are better 90+ days out than the reverse.</p>
              <p>The best deals — discounts of 15–25% — appear either very early (early-bird pricing, usually 5–6 months out) or very late (last-minute unsold spots, usually within 3–4 weeks). Mid-range booking windows rarely offer discounts.</p>

              <h2>What a normal deposit looks like</h2>
              <p>A standard non-refundable deposit is 20–30% of the total retreat price. This is reasonable — the centre is holding a spot, and that spot has real opportunity cost for them.</p>
              <p>Warning signs: a deposit over 50% up front, or a &quot;deposit&quot; that is actually the full amount. Some retreat centres — particularly newer ones or those with aggressive marketing — take full payment at booking. This maximises their risk protection and minimises yours. It&apos;s not inherently a scam, but it requires more confidence in the operator before you proceed.</p>

              <h2>Refund policies: what&apos;s fair</h2>
              <p>A fair refund ladder looks like this:</p>
              <div className={s.tableWrap}>
                <table className={s.table}>
                  <thead><tr><th>Cancellation timing</th><th>Fair refund</th><th>Watch out for</th></tr></thead>
                  <tbody>
                    <tr><td>90+ days before</td><td>Full refund minus admin fee ($50–$100)</td><td>No refund at all</td></tr>
                    <tr><td>60–89 days before</td><td>50–75% refund</td><td>Deposit-only refund</td></tr>
                    <tr><td>30–59 days before</td><td>25–50% refund or credit</td><td>Zero refund</td></tr>
                    <tr><td>Under 30 days</td><td>Credit or transfer only</td><td>No credit, no transfer</td></tr>
                    <tr><td>No-show</td><td>No refund (standard)</td><td>–</td></tr>
                  </tbody>
                </table>
              </div>
              <p>If a centre offers no refund at any point but allows transfers to a future retreat — that&apos;s workable, provided the transfers are genuinely flexible. Get the policy in writing, in the booking confirmation email. Not just on a web page that can change.</p>

              <h2>Which payment method to use</h2>
              <p><strong>Credit card:</strong> the safest option. Credit card chargeback rights are your backstop if a retreat is cancelled and the centre doesn&apos;t refund. Use a card with travel protection if possible.</p>
              <p><strong>PayPal (Goods and Services):</strong> reasonable protection. Do not use PayPal Friends and Family — it has no buyer protection and some retreat operators will ask for it to avoid fees. Decline.</p>
              <p><strong>Bank transfer:</strong> no protection once sent. Use only for operators you have verified carefully, or where the platform (Retreat Guru, BookYogaRetreats) is the intermediary holding the payment.</p>
              <p><strong>Crypto:</strong> no protection. Increasing number of smaller retreat centres accept crypto. Not recommended for significant amounts unless you know the operator personally.</p>

              <div className={s.imageBlock}>
                <Image src="/images/blog/blog-planning-guide.png" alt="Yoga retreat booking essentials flat lay — journal, map, passport, and herbal tea" width={860} height={500} />
                <p className={s.caption}>Photo by YogaRetreatAdvisor</p>
              </div>

              <h2>Booking directly vs. through a platform</h2>
              <p>Booking directly with the retreat centre is usually 5–15% cheaper — they&apos;re not paying commission to a booking platform. The trade-off: no intermediary dispute resolution if something goes wrong.</p>
              <p>Booking through Retreat Guru, BookYogaRetreats, or similar platforms costs more but gives you a platform review system, standardised cancellation terms, and someone to contact if the retreat centre goes dark. For an unknown centre in an unfamiliar country, the platform fee is cheap insurance.</p>

              <h2>Questions to send before paying</h2>
              <p>Email the centre and ask: Is [named teacher] confirmed as the lead for this retreat? What is the cancellation policy and where can I find it in writing? What is the group size maximum? Is travel insurance required? Are there any additional costs not included in the price listed?</p>
              <p>How they respond — speed, specificity, willingness to answer — tells you nearly as much as the answers themselves. A centre that takes two weeks to reply to a pre-booking enquiry will take longer when something goes wrong mid-retreat.</p>

              <h2>Travel insurance</h2>
              <p>Buy it. A decent travel insurance policy that covers &quot;cancel for any reason&quot; costs 5–8% of the total trip cost. On a $2,000 retreat, that&apos;s $100–$160. The first time you need it — and eventually you will — you&apos;ll be relieved it&apos;s there. World Nomads and Battleface both cover yoga and adventure activities explicitly; check the fine print on any policy that mentions &quot;extreme sports&quot; — some exclude yoga classes that involve inversions.</p>

              <h2>The checklist</h2>
              <ul>
                <li>Teacher confirmed by name ✓</li>
                <li>Refund policy in writing ✓</li>
                <li>Group size maximum confirmed ✓</li>
                <li>Payment via credit card or protected platform ✓</li>
                <li>Travel insurance purchased ✓</li>
                <li>Pre-departure health requirements checked (visa, vaccinations) ✓</li>
              </ul>

              <h2>The verdict</h2>
              <p>Most bad retreat experiences I&apos;ve heard about involve one of three things: a teacher who wasn&apos;t as described, a refund policy that wasn&apos;t understood until it was too late, or a payment method that offered no protection. All three are preventable. The pre-booking work is less exciting than choosing a destination — it&apos;s also the part that actually protects the investment.</p>
              <p>Once you&apos;ve covered the mechanics, read our <Link href="/blog/best-yoga-retreats">guide to comparing retreats</Link> and our <Link href="/blog/yoga-retreats">complete yoga retreats guide</Link>.</p>

            </div>

            <aside className={s.sidebar}>
              <div className={s.toc}>
                <h3>In this guide</h3>
                <ul>
                  <li><a href="#when-to-book">When to book</a></li>
                  <li><a href="#deposits">Deposits</a></li>
                  <li><a href="#refunds">Refund policies</a></li>
                  <li><a href="#payment">Payment methods</a></li>
                  <li><a href="#direct-vs-platform">Direct vs platform</a></li>
                  <li><a href="#insurance">Travel insurance</a></li>
                  <li><a href="#checklist">Checklist</a></li>
                </ul>
              </div>
              <div className={s.relatedBox}>
                <h3>Related reads</h3>
                <ul>
                  <li><Link href="/blog/yoga-retreats">The complete yoga retreats guide</Link></li>
                  <li><Link href="/blog/best-yoga-retreats">How to compare retreats</Link></li>
                  <li><Link href="/blog/affordable-yoga-retreats">Affordable retreats under $500</Link></li>
                  <li><Link href="/blog/all-inclusive-yoga-retreat">All-inclusive retreats explained</Link></li>
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
