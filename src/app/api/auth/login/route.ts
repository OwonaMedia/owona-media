import { NextResponse } from 'next/server'
import { sign } from 'jsonwebtoken'
import dbConnect from '@/lib/db'
import User from '@/models/User'
import { sendVerificationCode } from '@/lib/email'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: Request) {
  try {
    await dbConnect()
    const { email, code } = await request.json()

    // Finde den Benutzer in der Datenbank
    const user = await User.findOne({ email })

    if (!user) {
      return NextResponse.json(
        { error: 'Benutzer nicht gefunden' },
        { status: 404 }
      )
    }

    // Überprüfe den Verifizierungscode
    if (user.verificationCode?.code !== code) {
      return NextResponse.json(
        { error: 'Ungültiger Code' },
        { status: 401 }
      )
    }

    // Überprüfe, ob der Code abgelaufen ist
    if (user.verificationCode.expiresAt < new Date()) {
      return NextResponse.json(
        { error: 'Code abgelaufen' },
        { status: 401 }
      )
    }

    // Generiere JWT Token
    const token = sign({ email, userId: user._id }, JWT_SECRET, { expiresIn: '24h' })
    
    const response = NextResponse.json({ success: true })
    
    // Setze den Token als HTTP-Only Cookie
    response.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 // 24 Stunden
    })

    // Lösche den Verifizierungscode nach erfolgreicher Anmeldung
    user.verificationCode = undefined
    await user.save()

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
} 