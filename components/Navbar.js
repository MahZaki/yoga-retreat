'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  // On non-home pages the hero doesn't extend under the nav,
  // so we always use the solid/dark style unless we're at the homepage root
  const isHome = pathname === '/'
  const solid = !isHome || scrolled

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
      <nav className={`${styles.navbar} ${solid ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            {/* Light logo for hero overlay (homepage only, not scrolled) */}
            {!solid ? (
              <Image
                src="/images/logo-white.svg"
                alt="YogaRetreatAdvisor"
                width={180}
                height={40}
                priority
                className={styles.logoImg}
              />
            ) : (
              <Image
                src="/images/logo.svg"
                alt="YogaRetreatAdvisor"
                width={180}
                height={40}
                priority
                className={styles.logoImg}
              />
            )}
          </Link>
          <div className={styles.links}>
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`${styles.link} ${solid ? styles.linkDark : ''}`}
              >
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
            <span className={solid ? styles.barDark : ''} />
            <span className={solid ? styles.barDark : ''} />
            <span className={solid ? styles.barDark : ''} />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className={styles.mobile}>
          <button className={styles.mobileClose} onClick={() => setMobileOpen(false)}>✕</button>
          <Image src="/images/logo.svg" alt="YogaRetreatAdvisor" width={160} height={36} style={{ marginBottom: '1rem' }} />
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
