import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://www.yogaretreatadvisor.com'),
  title: {
    default: 'YogaRetreatAdvisor — Discover, Compare & Book the Best Yoga Retreats',
    template: '%s | YogaRetreatAdvisor',
  },
  description: 'Discover handpicked yoga retreats, wellness escapes, and transformational journeys around the world. Compare prices, read reviews, and book your perfect retreat.',
  keywords: ['yoga retreats', 'wellness travel', 'yoga holidays', 'meditation retreats', 'Bali yoga retreat', 'yoga teacher training'],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    siteName: 'YogaRetreatAdvisor',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YogaRetreatAdvisor',
    description: 'Discover handpicked yoga retreats, wellness escapes, and transformational journeys around the world.',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'YogaRetreatAdvisor',
  url: 'https://www.yogaretreatadvisor.com',
  logo: 'https://www.yogaretreatadvisor.com/images/logo.png',
  sameAs: [
    'https://twitter.com/yogaretreatadvisor',
    'https://facebook.com/yogaretreatadvisor'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body>
        {children}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  )
}
