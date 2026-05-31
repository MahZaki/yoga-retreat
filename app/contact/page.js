'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import s from './page.module.css'

const faqs = [
  { q:'How do you select the retreats you feature?', a:'Every retreat is personally vetted by our team. We evaluate accommodation quality, teacher credentials, guest reviews, and value for money before listing any retreat on our platform.' },
  { q:'Do you charge a fee for booking through your site?', a:'No. YogaRetreatAdvisor is free for travelers. We earn a small referral commission from retreat partners, which does not affect the price you pay.' },
  { q:'Can I list my retreat on YogaRetreatAdvisor?', a:'Yes. If you operate a yoga retreat center, contact us at partners@yogaretreatadvisor.com. We review every submission and only list retreats that meet our quality standards.' },
  { q:'How does the Retreat Matcher Quiz work?', a:'The quiz asks five questions about your goals, budget, destination preferences, experience level, and style. Our algorithm then matches you with retreats from our database that fit your profile.' },
  { q:'What is your cancellation policy?', a:'Cancellation policies vary by retreat. We always display the cancellation terms on each retreat listing before you book. Most retreats offer free cancellation 30 days before arrival.' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <section className={s.hero}>
        <h1>Get in Touch</h1>
        <p>Have a question about retreats, partnerships, or anything else? We are here to help.</p>
      </section>

      <section className={s.content}>
        <div className="container">
          <div className={s.grid}>
            <div className={s.info}>
              <div className={s.infoCard}>
                <div className={s.infoIcon}>✉️</div>
                <div>
                  <h4>Email Us</h4>
                  <p>General inquiries and support</p>
                  <a href="mailto:hello@yogaretreatadvisor.com">hello@yogaretreatadvisor.com</a>
                </div>
              </div>
              <div className={s.infoCard}>
                <div className={s.infoIcon}>🤝</div>
                <div>
                  <h4>Partnerships</h4>
                  <p>List your retreat or collaborate with us</p>
                  <a href="mailto:partners@yogaretreatadvisor.com">partners@yogaretreatadvisor.com</a>
                </div>
              </div>
              <div className={s.infoCard}>
                <div className={s.infoIcon}>📰</div>
                <div>
                  <h4>Press &amp; Media</h4>
                  <p>Interview requests and media inquiries</p>
                  <a href="mailto:press@yogaretreatadvisor.com">press@yogaretreatadvisor.com</a>
                </div>
              </div>
              <div className={s.infoCard}>
                <div className={s.infoIcon}>💬</div>
                <div>
                  <h4>Response Time</h4>
                  <p>We typically respond within 24 hours during business days. For urgent booking questions, email us directly.</p>
                </div>
              </div>
            </div>

            <div className={s.formCard}>
              {submitted ? (
                <div className={s.success}>
                  <p style={{ fontSize:'2rem', marginBottom:'.5rem' }}>✓</p>
                  <h3>Message Sent</h3>
                  <p style={{ fontWeight:400, color:'var(--slate)', marginTop:'.5rem' }}>Thank you for reaching out. We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3>Send Us a Message</h3>
                  <p>Fill out the form and we will get back to you as soon as possible.</p>
                  <form className={s.form} onSubmit={handleSubmit}>
                    <div className={s.formRow}>
                      <div className={s.formGroup}>
                        <label className={s.formLabel}>First Name</label>
                        <input className={s.formInput} type="text" required />
                      </div>
                      <div className={s.formGroup}>
                        <label className={s.formLabel}>Last Name</label>
                        <input className={s.formInput} type="text" required />
                      </div>
                    </div>
                    <div className={s.formGroup}>
                      <label className={s.formLabel}>Email</label>
                      <input className={s.formInput} type="email" required />
                    </div>
                    <div className={s.formGroup}>
                      <label className={s.formLabel}>Subject</label>
                      <select className={s.formInput}>
                        <option>General Inquiry</option>
                        <option>Retreat Booking Help</option>
                        <option>Partnership</option>
                        <option>Press / Media</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className={s.formGroup}>
                      <label className={s.formLabel}>Message</label>
                      <textarea className={s.formTextarea} rows={5} required />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width:'100%', justifyContent:'center' }}>Send Message →</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={s.faq}>
        <div className="container">
          <div className="section-header center">
            <span className="section-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className={s.faqGrid}>
            {faqs.map((f, i) => (
              <div key={i} className={s.faqItem}>
                <div className={s.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <span className={`${s.faqToggle} ${openFaq === i ? s.faqToggleOpen : ''}`}>+</span>
                </div>
                {openFaq === i && <div className={s.faqA}>{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
