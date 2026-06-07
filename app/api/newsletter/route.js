import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { NewsletterEmail } from '../../../emails/NewsletterEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { email } = await request.json()

    const data = await resend.emails.send({
      from: 'Yoga Retreat Advisor <hello@yogaretreatadvisor.com>',
      to: ['ghostmzabi@gmail.com'], // Update this to your verified Resend email
      subject: `New Newsletter Subscriber: ${email}`,
      react: NewsletterEmail({ email }),
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
