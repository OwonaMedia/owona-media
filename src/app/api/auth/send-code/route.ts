import { NextResponse } from 'next/server'
import dbConnect from '@/lib/db'
import User from '@/models/User'
import { sendVerificationCode } from '@/lib/email'

export async function POST(request: Request) {
  try {
    await dbConnect()
    const { email } = await request.json()

    // Generiere einen 6-stelligen Code
    const code = Math.random().toString().slice(2, 8)
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000) // 10 Minuten

    // Finde oder erstelle den Benutzer
    let user = await User.findOne({ email })
    
    if (!user) {
      user = await User.create({
        email,
        verificationCode: {
          code,
          expiresAt
        }
      })
    } else {
      user.verificationCode = {
        code,
        expiresAt
      }
      await user.save()
    }

    // Sende den Verifizierungscode per E-Mail
    await sendVerificationCode(email, code)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Send code error:', error)
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
} 