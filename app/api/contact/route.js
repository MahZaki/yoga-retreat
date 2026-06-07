import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { firstName, lastName, email, subject, message } = await request.json()

    // Note: Resend requires a verified domain to send FROM a custom email. 
    // Out of the box, you must use 'onboarding@resend.dev' as the FROM email,
    // and you can only send TO the email you used to register for Resend.
    const data = await resend.emails.send({
      from: 'Yoga Retreat Advisor <onboarding@resend.dev>',
      to: ['ghostmzabi@gmail.com'], // Update this to your verified Resend email
      subject: `New Contact Form Submission: ${subject}`,
      replyTo: email,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
