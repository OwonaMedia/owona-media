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
    const user = await User.findById(decoded.userId)
    
    if (!user) {
      return NextResponse.json(
        { error: 'Benutzer nicht gefunden' },
        { status: 404 }
      )
    }

    // Hole alle Produkte, die der Benutzer noch nicht gekauft hat
    const purchasedProductIds = user.purchasedProducts.map(p => p.productId.toString())
    const recommendations = await Product.find({
      _id: { $nin: purchasedProductIds }
    }).limit(3)

    // Formatiere die Empfehlungen für die Antwort
    const formattedRecommendations = recommendations.map(product => ({
      id: product._id,
      title: product.title,
      image: product.image,
      price: `€${product.price.toFixed(2)}`,
      description: product.description
    }))

    return NextResponse.json(formattedRecommendations)
  } catch (error) {
    console.error('Get recommendations error:', error)
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
} 