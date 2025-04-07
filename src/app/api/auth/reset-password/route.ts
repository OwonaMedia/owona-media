import { NextResponse } from 'next/server'
import { sign } from 'jsonwebtoken'
import dbConnect from '@/lib/db'
import User from '@/models/User'
import { sendPasswordResetLink } from '@/lib/email'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: Request) {
  try {
    await dbConnect()
    const { email } = await request.json()

    // Finde den Benutzer
    const user = await User.findOne({ email })

    if (!user) {
      return NextResponse.json(
        { error: 'Benutzer nicht gefunden' },
        { status: 404 }
      )
    }

    // Generiere Reset-Token
    const resetToken = sign({ email, userId: user._id }, JWT_SECRET, { expiresIn: '1h' })
    const resetLink = `${process.env.NEXT_PUBLIC_API_URL}/reset-password?token=${resetToken}`

    // Speichere den Reset-Token
    user.resetPasswordToken = {
      token: resetToken,
      expiresAt: new Date(Date.now() + 60 * 60 * 1000) // 1 Stunde
    }
    await user.save()

    // Sende den Reset-Link per E-Mail
    await sendPasswordResetLink(email, resetLink)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Reset password error:', error)
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
} 