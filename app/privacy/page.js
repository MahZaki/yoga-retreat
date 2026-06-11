import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import s from './legal.module.css'

export const metadata = {
  title: 'Privacy Policy | Yoga Retreat Advisor',
  description: 'How we collect, use, and protect your data.',
}

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className={s.legalMain}>
        <div className="container">
          <div className={s.legalHeader}>
            <h1>Privacy Policy</h1>
            <p>Last updated: June 2026</p>
          </div>
          
          <div className={s.legalContent}>
            <p>At Yoga Retreat Advisor ("we", "our", or "us"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (yogaretreatadvisor.com).</p>
            
            <h2>1. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways:</p>
            <ul>
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name and email address, that you voluntarily give to us when you subscribe to our newsletter or contact us.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the site.</li>
            </ul>

            <h2>2. Use of Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Send you our newsletter (if you opted in).</li>
              <li>Analyze website traffic and optimize user experience.</li>
              <li>Respond to your comments or questions.</li>
            </ul>

            <h2>3. Affiliate Disclosure & Third-Party Links</h2>
            <p>Yoga Retreat Advisor is a review and recommendation site. We participate in various affiliate marketing programs. This means we may earn a commission if you click on or make purchases via affiliate links found on this website, at no additional cost to you.</p>
            <p>We only recommend retreats and platforms we genuinely believe offer value. However, once you click a link and leave our site, any information you provide to third-party booking platforms (such as BookYogaRetreats) is governed by their respective privacy policies.</p>

            <h2>4. Tracking Technologies</h2>
            <p><strong>Cookies:</strong> We use cookies to help customize the Site and improve your experience. You can choose to disable cookies through your individual browser options.</p>
            <p><strong>Analytics:</strong> We use third-party analytics tools (such as Google Analytics) to track website performance and user behavior.</p>

            <h2>5. Data Security</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>

            <h2>6. Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p>sarah@yogaretreatadvisor.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
