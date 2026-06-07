import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { render } from '@react-email/render'
import { NewsletterEmail } from '../../../emails/NewsletterEmail'

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { email } = await request.json()

    const data = await resend.emails.send({
      from: 'Yoga Retreat Advisor <hello@yogaretreatadvisor.com>',
      to: ['ghostmzabi@gmail.com'], // Update this to your verified Resend email
      subject: `New Newsletter Subscriber: ${email}`,
      html: await render(NewsletterEmail({ email })),
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
