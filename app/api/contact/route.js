import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { render } from '@react-email/render'
import { ContactEmail } from '../../../emails/ContactEmail'

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { firstName, lastName, email, subject, message } = await request.json()

    // Note: Resend requires a verified domain to send FROM a custom email. 
    // Out of the box, you must use 'onboarding@resend.dev' as the FROM email,
    // and you can only send TO the email you used to register for Resend.
    const data = await resend.emails.send({
      from: 'Yoga Retreat Advisor <hello@yogaretreatadvisor.com>',
      to: ['ghostmzabi@gmail.com'], // Update this to your verified Resend email
      subject: `New Contact Form Submission: ${subject}`,
      replyTo: email,
      html: await render(ContactEmail({ firstName, lastName, email, subject, message })),
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
