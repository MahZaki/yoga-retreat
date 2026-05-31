import './globals.css'

export const metadata = {
  metadataBase: new URL('https://yogaretreatadvisor.com'),
  title: {
    default: 'YogaRetreatAdvisor — Discover, Compare & Book the Best Yoga Retreats',
    template: '%s | YogaRetreatAdvisor',
  },
  description: 'Discover handpicked yoga retreats, wellness escapes, and transformational journeys around the world. Compare prices, read reviews, and book your perfect retreat.',
  keywords: ['yoga retreats', 'wellness travel', 'yoga holidays', 'meditation retreats', 'Bali yoga retreat', 'yoga teacher training'],
  openGraph: {
    siteName: 'YogaRetreatAdvisor',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
