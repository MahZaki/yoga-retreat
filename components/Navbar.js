'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/destinations', label: 'Destinations' },
    { href: '/retreats', label: 'Retreats' },
    { href: '/retreat-matcher', label: 'Retreat Matcher' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4C14 8 8 14 6 22C4 30 10 36 18 34C12 30 10 24 14 18C18 12 24 10 30 12C28 8 24 4 20 4Z" fill={scrolled ? '#2E5A47' : '#A7BCA1'} />
              <path d="M22 8C18 12 14 18 14 26C14 32 18 36 24 34C20 32 18 28 20 22C22 16 26 14 32 14C30 10 26 6 22 8Z" fill={scrolled ? '#2E5A47' : '#fff'} opacity="0.7"/>
            </svg>
            <span className={`${styles.logoText} ${scrolled ? styles.dark : ''}`}>
              YogaRetreat<span className={styles.logoAccent}>Advisor</span>
            </span>
          </Link>
          <div className={styles.links}>
            {links.map(l => (
              <Link key={l.href} href={l.href} className={`${styles.link} ${scrolled ? styles.linkDark : ''}`}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className={styles.cta}>
            <Link href="/retreat-matcher" className={`btn btn-primary btn-sm ${styles.ctaBtn}`}>
              Find My Retreat
            </Link>
          </div>
          <button className={styles.hamburger} onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <span className={scrolled ? styles.barDark : ''} />
            <span className={scrolled ? styles.barDark : ''} />
            <span className={scrolled ? styles.barDark : ''} />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className={styles.mobile}>
          <button className={styles.mobileClose} onClick={() => setMobileOpen(false)}>✕</button>
          {links.map(l => (
            <Link key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/retreat-matcher" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
            Find My Retreat
          </Link>
        </div>
      )}
    </>
  )
}
