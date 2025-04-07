import { NextResponse } from 'next/server'
import { verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import dbConnect from '@/lib/db'
import User from '@/models/User'
import Product from '@/models/Product'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function GET() {
  try {
    await dbConnect()
    const token = cookies().get('auth_token')?.value

    if (!token) {
      return NextResponse.json(
        { error: 'Nicht autorisiert' },
        { status: 401 }
      )
    }

    let decoded
    try {
      decoded = verify(token, JWT_SECRET) as { email: string; userId: string }
    } catch (error) {
      return NextResponse.json(
        { error: 'Ungültiger Token' },
        { status: 401 }
      )
    }

    // Finde den Benutzer und seine gekauften Produkte
    const user = await User.findById(decoded.userId).populate('purchasedProducts.productId')
    
    if (!user) {
      return NextResponse.json(
        { error: 'Benutzer nicht gefunden' },
        { status: 404 }
      )
    }

    // Formatiere die Produkte für die Antwort
    const products = user.purchasedProducts.map(purchase => ({
      id: purchase.productId._id,
      title: purchase.productId.title,
      image: purchase.productId.image,
      downloadUrl: purchase.productId.downloadUrl,
      purchasedAt: purchase.purchaseDate,
      downloadCount: purchase.downloadCount,
      maxDownloads: purchase.productId.maxDownloads
    }))

    return NextResponse.json(products)
  } catch (error) {
    console.error('Get products error:', error)
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
} 