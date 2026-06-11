import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import s from '../privacy/legal.module.css'

export const metadata = {
  title: 'Terms of Service | Yoga Retreat Advisor',
  description: 'Terms of service, medical disclaimer, and affiliate disclosures.',
}

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className={s.legalMain}>
        <div className="container">
          <div className={s.legalHeader}>
            <h1>Terms of Service</h1>
            <p>Last updated: June 2026</p>
          </div>
          
          <div className={s.legalContent}>
            <p>By accessing and using Yoga Retreat Advisor (yogaretreatadvisor.com), you accept and agree to be bound by the terms and provisions of this agreement.</p>
            
            <h2>1. Informational Purposes Only (Not Medical Advice)</h2>
            <p>The content provided on Yoga Retreat Advisor is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition before undertaking any physical practice like yoga.</p>

            <h2>2. Reviews and Recommendations</h2>
            <p>Our reviews and recommendations are based on our own personal experiences, rigorous research, and aggregated user feedback. However, yoga retreats are deeply subjective experiences. We cannot guarantee that your experience will match ours, and we are not liable for any dissatisfaction, injury, or loss experienced during a retreat recommended on our site.</p>

            <h2>3. Affiliate Disclosure</h2>
            <p>We believe in absolute transparency. Some of the links on this website are affiliate links. If you click on an affiliate link and make a booking, we may receive a commission at no additional cost to you. This is how we fund the site.</p>
            <p>This financial relationship does not influence our honest opinions. We frequently critique retreats that we also link to if we feel they are overpriced or under-deliver in specific areas.</p>

            <h2>4. Third-Party Booking Platforms</h2>
            <p>Yoga Retreat Advisor is an informational portal. We do not process payments, handle bookings, or organize the retreats ourselves. Any transaction you make is directly with the retreat center or a third-party booking platform. You must adhere to their specific terms of service and cancellation policies.</p>

            <h2>5. Intellectual Property</h2>
            <p>All original content, including text, reviews, and site design, is the property of Yoga Retreat Advisor. You may not reproduce, distribute, or create derivative works from our content without explicit written permission.</p>

            <h2>6. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. We do so by posting and drawing attention to the updated terms on the Site. Your decision to continue to visit and make use of the Site after such changes have been made constitutes your formal acceptance of the new Terms of Service.</p>

            <h2>7. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at: sarah@yogaretreatadvisor.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
