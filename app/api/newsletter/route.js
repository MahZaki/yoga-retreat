import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { email } = await request.json()

    const data = await resend.emails.send({
      from: 'Yoga Retreat Advisor <onboarding@resend.dev>',
      to: ['ghostmzabi@gmail.com'], // Update this to your verified Resend email
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <h3>New Newsletter Subscriber!</h3>
        <p>A new user just subscribed to the newsletter.</p>
        <p><strong>Email:</strong> ${email}</p>
      `
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
