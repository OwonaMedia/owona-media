import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json()

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `Neue Kontaktanfrage: ${service}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
      `
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'E-Mail erfolgreich gesendet' })
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error)
    return NextResponse.json(
      { error: 'Fehler beim Senden der E-Mail' },
      { status: 500 }
    )
  }
} 