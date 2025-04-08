import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { connectDB } from '@/lib/db'
import User from '@/models/User'
import Product from '@/models/Product'

interface Purchase {
  productId: {
    toString: () => string
  }
}

export async function GET() {
  try {
    await connectDB()

    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Sie müssen eingeloggt sein' },
        { status: 401 }
      )
    }

    // Finde den Benutzer
    const user = await User.findOne({ email: session.user.email })
      .populate('purchasedProducts.productId')
      .exec()

    if (!user) {
      return NextResponse.json(
        { error: 'Benutzer nicht gefunden' },
        { status: 404 }
      )
    }

    // Hole alle Produkte, die der Benutzer noch nicht gekauft hat
    const purchasedProductIds = user.purchasedProducts.map((p: Purchase) => p.productId.toString())
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
    console.error('Fehler beim Abrufen der Empfehlungen:', error)
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
} 