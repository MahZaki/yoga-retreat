import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.logoText}>YogaRetreat<span className={styles.accent}>Advisor</span></span>
            <p>Handpicked yoga retreats in Bali and beyond. Trusted, curated, transformative.</p>
            <p className={styles.tagline}>Discover. Retreat. Transform.</p>
          </div>
          <div className={styles.col}>
            <h5>Explore</h5>
            <div className={styles.linkList}>
              <Link href="/destinations">Destinations</Link>
              <Link href="/retreats">Retreats</Link>
              <Link href="/retreat-matcher">Retreat Matcher</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>
          <div className={styles.col}>
            <h5>Categories</h5>
            <div className={styles.linkList}>
              <Link href="/retreats">Luxury Retreats</Link>
              <Link href="/retreats">Beginner Retreats</Link>
              <Link href="/retreats">Meditation Retreats</Link>
              <Link href="/retreats">Teacher Training</Link>
            </div>
          </div>
          <div className={styles.col}>
            <h5>Company</h5>
            <div className={styles.linkList}>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© 2025 YogaRetreatAdvisor.com — All rights reserved.</span>
          <div className={styles.social}>
            <a href="#" className={styles.socialLink} aria-label="Instagram">IG</a>
            <a href="#" className={styles.socialLink} aria-label="Pinterest">PI</a>
            <a href="#" className={styles.socialLink} aria-label="YouTube">YT</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
