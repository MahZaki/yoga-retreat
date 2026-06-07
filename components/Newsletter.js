'use client'
import { useState } from 'react'
import styles from './Newsletter.module.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      if (res.ok) {
        setSubmitted(true)
        setEmail('')
        setTimeout(() => setSubmitted(false), 4000)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.glow} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.inner}>
          <span className={styles.lead}>🎁 Free Yoga Retreat Planning Guide</span>
          <h2>Get Retreat Deals &amp; Wellness Inspiration</h2>
          <p>Join 12,000+ mindful travelers. Get weekly retreat deals, destination guides, and wellness tips delivered to your inbox.</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Subscribing...' : submitted ? '✓ Subscribed' : 'Get Free Guide'}
            </button>
          </form>
          <span className={styles.note}>No spam. Unsubscribe anytime.</span>
        </div>
      </div>
    </section>
  )
}
