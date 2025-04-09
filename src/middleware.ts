import { NextResponse } from 'next/server'
import { verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Rate Limiting Konfiguration
const RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 Minuten
  max: 100, // Maximal 100 Anfragen pro IP
  message: 'Zu viele Anfragen von dieser IP. Bitte versuchen Sie es später erneut.'
}

// IP-basierte Rate Limiting Map
const ipRequests = new Map<string, { count: number; resetTime: number }>()

const LANGUAGE_COOKIE = 'NEXT_LOCALE'
const DEFAULT_LANGUAGE = 'de'
const SUPPORTED_LANGUAGES = ['de', 'en', 'fr']

// Länder-Codes für die unterstützten Sprachen
const GERMAN_COUNTRIES = ['DE', 'AT', 'CH']
const ENGLISH_COUNTRIES = ['US', 'GB', 'AU', 'CA', 'NZ']
const FRENCH_COUNTRIES = ['FR', 'BE', 'LU', 'MC']

export async function middleware(request: NextRequest) {
  // Überprüfe, ob die Route geschützt ist
  if (request.url.includes('/api/customer') || request.url.includes('/kundenbereich')) {
    const token = cookies().get('auth_token')?.value

    if (!token) {
      return NextResponse.json(
        { error: 'Nicht autorisiert' },
        { status: 401 }
      )
    }

    try {
      verify(token, JWT_SECRET)
    } catch (error) {
      return NextResponse.json(
        { error: 'Ungültiger Token' },
        { status: 401 }
      )
    }
  }

  // Nur API-Routen überprüfen
  if (!request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
  const now = Date.now()

  // Rate Limiting Logik
  if (ipRequests.has(ip)) {
    const { count, resetTime } = ipRequests.get(ip)!

    if (now > resetTime) {
      // Zeitfenster abgelaufen, zurücksetzen
      ipRequests.set(ip, { count: 1, resetTime: now + RATE_LIMIT.windowMs })
    } else if (count >= RATE_LIMIT.max) {
      // Rate Limit überschritten
      return new NextResponse(
        JSON.stringify({ message: RATE_LIMIT.message }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': Math.ceil((resetTime - now) / 1000).toString()
          }
        }
      )
    } else {
      // Anfrage zählen
      ipRequests.set(ip, { count: count + 1, resetTime })
    }
  } else {
    // Neue IP
    ipRequests.set(ip, { count: 1, resetTime: now + RATE_LIMIT.windowMs })
  }

  // Cleanup alte Einträge
  for (const [key, value] of ipRequests.entries()) {
    if (now > value.resetTime) {
      ipRequests.delete(key)
    }
  }

  // Wenn bereits eine Spracheinstellung existiert, diese verwenden
  const existingLocale = request.cookies.get(LANGUAGE_COOKIE)
  if (existingLocale) {
    return NextResponse.next()
  }

  // IP-basierte Spracherkennung
  const country = request.geo?.country || ''
  let detectedLanguage = DEFAULT_LANGUAGE

  if (ENGLISH_COUNTRIES.includes(country)) {
    detectedLanguage = 'en'
  } else if (FRENCH_COUNTRIES.includes(country)) {
    detectedLanguage = 'fr'
  } else if (GERMAN_COUNTRIES.includes(country)) {
    detectedLanguage = 'de'
  }

  // Browser-Spracheinstellung als Fallback
  const acceptLanguage = request.headers.get('accept-language')
  if (!existingLocale && acceptLanguage) {
    const browserLang = acceptLanguage.split(',')[0].split('-')[0].toLowerCase()
    if (SUPPORTED_LANGUAGES.includes(browserLang)) {
      detectedLanguage = browserLang
    }
  }

  // Cookie setzen
  const response = NextResponse.next()
  response.cookies.set(LANGUAGE_COOKIE, detectedLanguage, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 Jahr
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production'
  })

  return response
}

export const config = {
  matcher: ['/api/customer/:path*', '/kundenbereich/:path*', '/api/:path*']
} 