import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import s from '../yoga-retreats/page.module.css'

export const metadata = {
  title: 'How to Book a Yoga Retreat: The Complete Step-by-Step Guide (2026)',
  description: 'Everything you need to know before you pay a deposit — budget, teacher verification, deposits, refund policies, and the questions to ask before handing over money.',
  openGraph: {
    title: 'How to Book a Yoga Retreat: The Complete Step-by-Step Guide',
    description: 'Budget, deposits, refund policies, and teacher verification — the mechanics of booking a retreat without expensive regrets.',
    images: [{ url: '/images/blog/booking-laptop-plan.jpg', width: 940, height: 650 }],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Book a Yoga Retreat: The Complete Step-by-Step Guide',
  author: { '@type': 'Person', name: 'Sarah Mitchell' },
  datePublished: '2026-05-20',
  dateModified: '2026-05-20',
  publisher: { '@type': 'Organization', name: 'YogaRetreatAdvisor', url: 'https://yogaretreatadvisor.com' },
  image: 'https://yogaretreatadvisor.com/images/blog/booking-laptop-plan.jpg',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How far in advance should I book a yoga retreat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Book 3–6 months in advance for most retreats. Popular centres (Esalen, Kripalu, established Ubud retreats) fill 6–9 months out for peak-season dates. Early-bird pricing (5–6 months out) typically saves 15–25%. Last-minute spots within 3–4 weeks occasionally offer similar discounts on unsold places.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a normal deposit for a yoga retreat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A normal, non-refundable deposit is 20–30% of the total price. A deposit above 50% is atypical and worth questioning. Some retreat centres take the full amount at booking — this maximises their protection and minimises yours. Always confirm what happens to your deposit if you need to cancel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I book a yoga retreat directly or through a platform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Booking directly is usually 5–15% cheaper as the centre pays no commission. The trade-off is no intermediary dispute resolution. For an established centre you\'ve researched, direct is fine. For an unknown operator in an unfamiliar country, booking through Retreat Guru or BookYogaRetreats offers useful protection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is travel insurance necessary for a yoga retreat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A "cancel for any reason" policy costs approximately 5–8% of the total trip cost — around $100–$160 on a $2,000 retreat. World Nomads and Battleface both cover yoga activities explicitly. Check policies carefully if they mention "extreme sports," as some exclude inversions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What questions should I ask a retreat centre before booking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ask: Is the named teacher confirmed as the lead for this retreat? What is the cancellation policy and can you send it in writing? What is the maximum group size? Are there any costs not included in the listed price? How they respond — speed, specificity, and willingness to answer — tells you as much as the answers.',
      },
    },
  ],
}

export default function BookYogaRetreatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
      <article className={s.article}>

        <div className={s.heroWrap}>
          <Image
            src="/images/blog/booking-laptop-plan.jpg"
            alt="Person planning a yoga retreat on a laptop with coffee, journal, and travel documents on a desk"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={s.heroOverlay}>
            <div className="container">
              <span className={s.tag}>Planning</span>
              <h1>How to book a yoga retreat: the complete step-by-step guide</h1>
              <div className={s.meta}>
                <span>By Sarah Mitchell</span><span>·</span>
                <span>May 20, 2026</span><span>·</span>
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={s.layout}>
            <div className={s.body}>

              <div className={s.introBrief}>
                <strong>To book a yoga retreat:</strong> (1) set your real budget including flights and transfers, (2) choose destination based on teaching style not aesthetics, (3) verify teacher credentials independently, (4) read the refund policy before paying any deposit, (5) pay by credit card and buy travel insurance. The whole process takes an hour if you know what you&apos;re looking for.
              </div>

              <p>Most retreat mistakes aren&apos;t about choosing the wrong destination. They&apos;re about skipping the 45 minutes of admin that happens between &quot;I want to book this&quot; and &quot;I&apos;ve paid the deposit.&quot; Across 14 retreats in 9 countries, I&apos;ve watched myself — and heard from hundreds of readers — make every version of this mistake at least once. This guide is the checklist I wish I&apos;d had in 2018.</p>

              <h2 id="budget">Step 1: Set your actual budget — including everything</h2>
              <p>The retreat price is not the trip cost. First-timers consistently underestimate total spend by 30–50% because they price only the accommodation and yoga fee, then discover the rest later.</p>
              <p>The real number includes:</p>
              <ul>
                <li><strong>Flights:</strong> often 30–60% of the total trip cost, especially for long-haul destinations</li>
                <li><strong>Airport transfers:</strong> $20–$120 each way depending on destination; Ubud, Nosara, and Rishikesh are all notable for expensive or difficult transfers</li>
                <li><strong>Travel insurance:</strong> 5–8% of total trip cost — non-negotiable</li>
                <li><strong>Visa:</strong> $0–$80 depending on destination and passport</li>
                <li><strong>Spending money:</strong> excursions, extra food, local transport, airport costs</li>
              </ul>
              <p>Once you&apos;ve done the real maths, you&apos;ll know which destinations are actually in range. A $600/week retreat in Rishikesh with $400 in flights is $1,000 all-in. A $900/week retreat in Ubud with $900 in flights and $150 in transfers is $1,950. Same nominal retreat price, very different trip.</p>

              <h2 id="destination">Step 2: Choose your destination based on teaching, not aesthetics</h2>
              <p>The most common and most expensive mistake I see: choosing a retreat because the photography is beautiful. Bali in particular captures readers&apos; attention at a rate that isn&apos;t matched by its teaching quality at the mid-range price point.</p>
              <p>My second retreat was in Ubud — $1,200, ten days, beautiful photography on the website. What I found was a schedule structured around photogenic moments rather than genuine practice time. The sunrise session was moved when the light wasn&apos;t good. The cacao ceremony was reshuffled around a photographer. The food was elaborate and beautiful and photographed constantly. I came back feeling like I&apos;d been a prop in someone else&apos;s content strategy.</p>
              <p>The question to ask before choosing any destination: &quot;What evidence is there that the teaching at this price point is good?&quot; Not &quot;does it look good in photos.&quot;</p>
              <p>For a first retreat, <strong>India (Rishikesh) and Portugal (Algarve)</strong> consistently over-deliver on teaching quality relative to price. Bali can be excellent at the premium tier ($2,000+/week). At mid-range, the price premium is driven by aesthetics, not instruction.</p>

              <h2 id="style">Step 3: Match the yoga style to what you actually need</h2>
              <p>This is the step most first-timers skip — then arrive at a retreat that&apos;s wrong for their body. Before you book, confirm the yoga style matches what you&apos;re looking for.</p>
              <ul>
                <li><strong>Vinyasa / Flow:</strong> Dynamic, movement-linked-to-breath. Good if you want a physical challenge and have some existing practice. Most common in Bali and Tulum retreats.</li>
                <li><strong>Hatha:</strong> Slower, posture-based, excellent for all levels. More common in India and traditional retreat centres. Better for first-timers who want to learn properly.</li>
                <li><strong>Yin:</strong> Long-held passive poses, focused on connective tissue and release. Deeply restorative. Often offered as an evening complement to active morning sessions.</li>
                <li><strong>Restorative:</strong> The most gentle format, using props to fully support the body. Ideal if you&apos;re recovering from burnout, injury, or stress. Not a workout — and that&apos;s the point.</li>
              </ul>
              <p>The best retreats mix morning Vinyasa or Hatha with evening Yin or Restorative — active and recovery in balance. If a retreat lists only one style all day every day, that&apos;s worth querying before you commit.</p>
              <p>If you&apos;re a complete beginner: look for &quot;all levels welcome&quot; in the listing, and then <em>confirm</em> by emailing that the teacher actively provides modifications. &quot;All levels&quot; in marketing copy sometimes means &quot;experienced people who don&apos;t mind beginners.&quot; Very different things.</p>

              <div className={s.imageBlock}>
                <Image
                  src="/images/blog/booking-retreat-journal.jpg"
                  alt="Open travel journal with handwritten retreat planning notes, pen, and a cup of herbal tea on a wooden table"
                  width={860}
                  height={500}
                />
                <p className={s.caption}>Good retreat planning starts on paper: write down what you actually need from a week away before opening a booking tab. Photo: Pexels</p>
              </div>

              <h2 id="whats-included">Step 4: Understand exactly what&apos;s included in the price</h2>
              <p>Retreat pricing is not standardised. Two retreats listed at $1,200 can represent very different actual costs once you know what each includes. Always ask for a written itinerary before paying.</p>
              <div className={s.tableWrap}>
                <table className={s.table}>
                  <thead><tr><th>Typically included</th><th>Typically extra</th></tr></thead>
                  <tbody>
                    <tr><td>Accommodation (confirm single vs shared)</td><td>Flights and travel to the destination</td></tr>
                    <tr><td>Daily yoga and meditation sessions</td><td>Airport transfers (unless specified)</td></tr>
                    <tr><td>Meals (usually all three, sometimes lunch excluded)</td><td>Spa treatments and massage</td></tr>
                    <tr><td>Guided excursions (where listed)</td><td>Alcoholic beverages</td></tr>
                    <tr><td>Use of retreat facilities (pool, mat, props)</td><td>Optional activities outside the schedule</td></tr>
                    <tr><td>—</td><td>Travel insurance</td></tr>
                    <tr><td>—</td><td>Gratuities for local staff and guides</td></tr>
                  </tbody>
                </table>
              </div>
              <p>A useful calculation: divide the total by the number of days to get a per-day cost, then compare what&apos;s included. A $3,000 retreat with all meals, transfers, and excursions included is often better value than a $1,500 retreat where everything is additional. Run the numbers before drawing conclusions from the headline price.</p>
              <p>If you&apos;re going solo: always ask whether a single supplement applies. Most retreat centres charge an additional $100–$300/week for private room use when you&apos;re not sharing. Approximately 60–65% of retreat bookings are solo travellers — it&apos;s standard, not unusual, to ask.</p>

              <h2 id="group-size">Step 5: Choose the right group size for the experience you want</h2>
              <p>Group size changes the feel of a retreat more than almost any other variable. There&apos;s no universally right answer — it depends on what you&apos;re going for.</p>
              <ul>
                <li><strong>Small groups (8–14):</strong> Quieter, more introspective. The teacher knows your name. Better if you&apos;re going through something significant or prefer silence and space. More likely to bond deeply with a small number of people.</li>
                <li><strong>Medium groups (15–25):</strong> The sweet spot for most retreat-goers. Enough social energy to feel connected without being overwhelming. Easier to find your own pace.</li>
                <li><strong>Large groups (25+):</strong> More vibrant, more social. Solo travellers often prefer larger groups for the range of people to meet. Quality depends heavily on an experienced lead — a weak facilitator loses the room fast at this size.</li>
              </ul>
              <p>The red flag to watch: a teacher-to-participant ratio above 1:20. At that point, individual attention in yoga sessions is essentially gone. Ask the centre directly: &quot;What is the maximum group size, and how many teachers or assistants will be present?&quot;</p>

              <h2 id="teacher">Step 6: Verify the teacher independently</h2>
              <p>This is the step most people skip. It&apos;s also the one that matters most.</p>
              <p>The teacher&apos;s credentials should be verifiable before you pay. Specifically:</p>
              <ul>
                <li>What is their training (RYT-200 minimum, RYT-500 for more experienced)? Was it from a Yoga Alliance-registered school?</li>
                <li>How many years have they been teaching retreats — not just classes? Leading a group for 7 days is a different skill from teaching a weekly studio class.</li>
                <li>Is their name on the booking page as the confirmed lead, or is it listed as &quot;our qualified teachers&quot;?</li>
                <li>Can you find them independently — a website, YouTube classes, Instagram, reviews from past retreat guests?</li>
                <li>Watch a video of them teaching before you pay. Most credible retreat teachers have free content online.</li>
              </ul>
              <p>Before paying, email the centre and ask directly: &quot;Is [named teacher] confirmed as the lead teacher for this specific retreat date?&quot; A centre that can&apos;t confirm their teacher three months before a retreat either doesn&apos;t know yet, or the teacher is a placeholder. Either is useful information.</p>
              <p>My highest-rated retreat — $380 for seven days in Rishikesh — had basic shared accommodation and extraordinary teachers. My most expensive retreat (Tuscany, $4,200) was exceptional in part because the teacher had 25 years of experience. The accommodation amplified an already good experience. It didn&apos;t create it. <Link href="/blog/best-yoga-retreats">How you evaluate a retreat matters more than where it is.</Link></p>

              <h2 id="deposits">Step 7: Understand the deposit before you pay it</h2>
              <p>A standard non-refundable deposit is <strong>20–30% of the total price</strong>. This is reasonable — the centre is holding a spot with real opportunity cost.</p>
              <p>A deposit above 50% is atypical and worth questioning. Some retreat centres, particularly newer ones or those with aggressive marketing, take the full amount at booking. This isn&apos;t inherently a scam, but it means you&apos;re carrying all the risk from day one. Before agreeing: ask what happens to your money if the retreat is cancelled by the centre, if the named teacher drops out, or if you need to cancel due to a medical emergency.</p>
              <p>Get the answers in writing. Not from a web page that can change — from a booking confirmation email.</p>

              <h2 id="refunds">Step 8: Read the refund policy like it matters — because it does</h2>
              <p>A fair refund policy looks like this:</p>
              <div className={s.tableWrap}>
                <table className={s.table}>
                  <thead><tr><th>Cancellation timing</th><th>Fair outcome</th><th>Treat as a warning sign</th></tr></thead>
                  <tbody>
                    <tr><td>90+ days before</td><td>Full refund minus admin fee ($50–$100)</td><td>No refund at all</td></tr>
                    <tr><td>60–89 days before</td><td>50–75% refund</td><td>Deposit-only refund (less than 50%)</td></tr>
                    <tr><td>30–59 days before</td><td>25–50% refund or credit</td><td>Zero refund, no credit</td></tr>
                    <tr><td>Under 30 days</td><td>Credit or transfer to a future retreat</td><td>No credit, no transfer</td></tr>
                    <tr><td>No-show</td><td>No refund (standard)</td><td>–</td></tr>
                  </tbody>
                </table>
              </div>
              <p>If a centre offers no refund at any point but allows transfers to a future date — that&apos;s workable, as long as the transfer terms are genuinely flexible (not &quot;subject to availability&quot; at peak season). Get this in writing before you pay.</p>

              <h2 id="payment">Step 9: Use the right payment method</h2>
              <p><strong>Credit card</strong> is the safest option. Chargeback rights are your backstop if a retreat is cancelled and the centre doesn&apos;t refund. Use a card with travel protection if you have one.</p>
              <p><strong>PayPal (Goods and Services):</strong> reasonable protection. Do not use PayPal Friends and Family — it has zero buyer protection. Some operators will ask for this to avoid fees. Decline.</p>
              <p><strong>Bank transfer:</strong> no protection once sent. Use only for operators you&apos;ve thoroughly vetted, or where a reputable platform (Retreat Guru, BookYogaRetreats) is holding the payment as an intermediary.</p>
              <p><strong>Crypto:</strong> no protection. An increasing number of smaller centres accept it. I&apos;d only use this for operators I know personally.</p>

              <div className={s.imageBlock}>
                <Image
                  src="/images/blog/booking-passport-travel.jpg"
                  alt="Open passport, boarding pass, and travel documents on a wooden surface — yoga retreat travel documents"
                  width={860}
                  height={500}
                />
                <p className={s.caption}>Practical details matter as much as the retreat itself: visa, transfers, and insurance all need confirming before you book. Photo: Pexels</p>
              </div>

              <h2 id="direct-vs-platform">Booking directly vs. through a platform</h2>
              <p>Booking directly with the retreat centre is usually 5–15% cheaper — they&apos;re not paying a platform commission. The trade-off: no intermediary if something goes wrong.</p>
              <p>Booking through Retreat Guru, BookYogaRetreats, or similar platforms adds cost but gives you a standardised cancellation framework, a review system, and someone to contact if the centre goes dark. For an established centre you&apos;ve researched thoroughly, direct is fine. For an unknown operator in an unfamiliar country, the platform fee is cheap insurance.</p>
              <p>One caveat on platforms: <Link href="/blog/best-yoga-retreats">most booking platforms rank retreats based partly on commission rates, not quality</Link>. &quot;Top-rated&quot; and &quot;featured&quot; labels on platform pages reflect who&apos;s paying the platform, not who&apos;s teaching the best yoga. Use them for logistics, not for curation.</p>

              <h2 id="insurance">Travel insurance: buy it before you need it</h2>
              <p>A &quot;cancel for any reason&quot; policy costs approximately 5–8% of total trip cost. On a $2,000 retreat, that&apos;s $100–$160. On a $4,000 retreat, $200–$320. The first time you need it — a family emergency, a sudden illness, a travel disruption — you&apos;ll wonder how you ever considered skipping it.</p>
              <p>World Nomads and Battleface both cover yoga activities explicitly. Check carefully any policy that mentions &quot;extreme sports&quot; in the exclusions — some exclude yoga classes that involve inversions or advanced balances.</p>
              <p>Buy the insurance on the same day you pay the retreat deposit. Waiting a week makes the cover less comprehensive.</p>

              <h2 id="questions">10 questions to send before paying</h2>
              <p>Send these by email — not WhatsApp, not Instagram DM — and save the replies. How fast and specifically they respond tells you as much as the content itself:</p>
              <ol>
                <li>Is [named teacher] confirmed as the lead for this specific retreat date?</li>
                <li>What is the maximum group size, and how many teachers or assistants will be present?</li>
                <li>What is your cancellation policy, and can you confirm it in this email?</li>
                <li>What is included in the price — meals, transfers, excursions?</li>
                <li>Are there any additional costs not listed on the booking page?</li>
                <li>Is the retreat suitable for my experience level — specifically, will modifications be offered?</li>
                <li>Can you accommodate my dietary requirements?</li>
                <li>Will our group have exclusive use of the venue, or will other guests be present?</li>
                <li>Is travel insurance required, and do you have recommended providers?</li>
                <li>What happens if the named teacher cannot attend?</li>
              </ol>
              <p>A centre that takes two weeks to respond to a pre-booking enquiry will take longer when something goes wrong mid-retreat. This is predictive information. Use it.</p>

              <h2 id="packing">What to pack for a yoga retreat</h2>
              <p>Once you&apos;ve booked, the packing question comes up. Keep it simple:</p>
              <ul>
                <li>Comfortable yoga clothes — layers for early morning sessions, which are almost always cold regardless of climate</li>
                <li>Walking shoes for excursions — most retreats include at least one</li>
                <li>A reusable water bottle (most retreat centres discourage single-use plastic)</li>
                <li>A journal — you&apos;ll have more time and mental space than usual, and it&apos;s worth using</li>
                <li>Any personal medications, plus copies of prescriptions</li>
                <li>Travel documents (passport, visa, insurance policy number)</li>
                <li>Earplugs — shared accommodation or thin walls are more common than retreat marketing suggests</li>
              </ul>
              <p>Most retreat centres provide yoga mats and props. Confirm this before packing yours. Carrying a mat through three airports is optional suffering.</p>

              <h2 id="checklist">The pre-booking checklist</h2>
              <ul>
                <li>Real budget calculated (retreat price + flights + transfers + insurance + spending money) ✓</li>
                <li>Yoga style confirmed as right for your level and goals ✓</li>
                <li>What&apos;s included vs extra confirmed in writing ✓</li>
                <li>Group size maximum and teacher ratio confirmed ✓</li>
                <li>Teacher verified by name, credentials, and years of experience ✓</li>
                <li>Deposit percentage checked — ideally 30% or less ✓</li>
                <li>Refund policy read and saved in writing ✓</li>
                <li>Payment made by credit card ✓</li>
                <li>Travel insurance purchased ✓</li>
                <li>Visa and vaccination requirements checked ✓</li>
                <li>10 pre-booking questions sent and answered in writing ✓</li>
              </ul>

              <h2 id="verdict">The honest verdict</h2>
              <p>Most bad retreat experiences come down to three things: a teacher who wasn&apos;t as described, a refund policy that wasn&apos;t read until it was too late, or a payment method with no protection. All three are preventable in under an hour of preparation.</p>
              <p>The boring admin before booking isn&apos;t the opposite of the retreat experience — it&apos;s the part that makes the retreat experience possible. Do it once, do it properly, and then stop thinking about it and just go.</p>
              <p>Once you&apos;ve covered the mechanics, read our <Link href="/blog/yoga-retreats">complete yoga retreats guide</Link> and <Link href="/blog/best-yoga-retreats">how to compare and choose retreats</Link> before you finalise your decision.</p>

              <h2 id="faq">Frequently asked questions</h2>

              <h3>How far in advance should I book a yoga retreat?</h3>
              <p>3–6 months in advance for most retreats. Popular centres fill 6–9 months out for peak season. Early-bird pricing (5–6 months out) typically saves 15–25%. Last-minute spots occasionally appear 3–4 weeks out at similar discounts — but specific dates and retreats can&apos;t be guaranteed.</p>

              <h3>What is a normal deposit for a yoga retreat?</h3>
              <p>20–30% non-refundable is standard. A deposit above 50% is atypical and worth questioning. Always confirm in writing what happens to your deposit if you cancel or if the retreat is cancelled by the centre.</p>

              <h3>Should I book directly or through a platform?</h3>
              <p>Directly is usually 5–15% cheaper. For established centres you&apos;ve researched, direct is fine. For unknown operators in unfamiliar countries, a reputable booking platform adds useful protection worth the premium.</p>

              <h3>Is travel insurance necessary for a yoga retreat?</h3>
              <p>Yes. A &quot;cancel for any reason&quot; policy costs 5–8% of the total trip cost — around $100–$160 on a $2,000 retreat. Buy it the same day you pay the deposit. World Nomads and Battleface both cover yoga explicitly.</p>

              <h3>What questions should I ask before booking?</h3>
              <p>Ask: is the named teacher confirmed for this specific date? What is the maximum group size? What is the cancellation policy in writing? Are there any additional costs? What happens if the lead teacher can&apos;t attend? Send these by email and save the replies.</p>

            </div>

            <aside className={s.sidebar}>
              <div className={s.toc}>
                <h3>In this guide</h3>
                <ul>
                  <li><a href="#budget">Step 1: Set your real budget</a></li>
                  <li><a href="#destination">Step 2: Choose the destination</a></li>
                  <li><a href="#style">Step 3: Match the yoga style</a></li>
                  <li><a href="#whats-included">Step 4: What&apos;s included vs extra</a></li>
                  <li><a href="#group-size">Step 5: Group size</a></li>
                  <li><a href="#teacher">Step 6: Verify the teacher</a></li>
                  <li><a href="#deposits">Step 7: Deposits</a></li>
                  <li><a href="#refunds">Step 8: Refund policy</a></li>
                  <li><a href="#payment">Step 9: Payment methods</a></li>
                  <li><a href="#direct-vs-platform">Direct vs. platform</a></li>
                  <li><a href="#insurance">Travel insurance</a></li>
                  <li><a href="#questions">10 questions to ask</a></li>
                  <li><a href="#packing">What to pack</a></li>
                  <li><a href="#checklist">Checklist</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ul>
              </div>
              <div className={s.relatedBox}>
                <h3>Related reads</h3>
                <ul>
                  <li><Link href="/blog/yoga-retreats">The complete yoga retreats guide</Link></li>
                  <li><Link href="/blog/best-yoga-retreats">How to compare and choose retreats</Link></li>
                  <li><Link href="/blog/affordable-yoga-retreats">Affordable retreats under $500</Link></li>
                  <li><Link href="/blog/yoga-retreat-bali">Bali yoga retreats: Ubud vs Canggu vs Uluwatu</Link></li>
                  <li><Link href="/blog/all-inclusive-yoga-retreat">All-inclusive retreats explained</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>

        <div className={s.authorBox}>
          <div className={s.authorAvatar}>
            <Image src="/images/hero-portrait.jpg" alt="Sarah Mitchell" fill sizes="80px" style={{ objectFit: 'cover' }} />
          </div>
          <div className={s.authorMeta}>
            <h3>Sarah Mitchell</h3>
            <div className={s.authorRole}>Founder &amp; Lead Reviewer, YogaRetreatAdvisor</div>
            <p>Former London project manager turned yoga travel writer. 14 retreats across 9 countries since 2018, from a $380 week in Rishikesh to a $4,200 luxury immersion in Tuscany. RYT-50. She has a 47-point retreat evaluation spreadsheet. She shares this not as a flex but as a warning.</p>
          </div>
        </div>

        <Newsletter />
      </article>
      </main>
      <Footer />
    </>
  )
}
