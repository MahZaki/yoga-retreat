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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </head>
      <body>{children}</body>
    </html>
  )
}
