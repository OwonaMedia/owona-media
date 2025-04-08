import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { connectDB } from '@/lib/db'
import User from '@/models/User'
import Product from '@/models/Product'

interface ProductId {
  _id: string
  title: string
  image: string
  description: string
  price: number
}

interface Purchase {
  productId: ProductId
  purchaseDate: Date
}

export async function GET() {
  try {
    // Verbinde mit der Datenbank
    await connectDB()

    // Hole die Session
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Nicht autorisiert' },
        { status: 401 }
      )
    }

    // Finde den Benutzer und seine gekauften Produkte
    const user = await User.findOne({ email: session.user.email })
      .populate('purchasedProducts.productId')
      .exec()

    if (!user) {
      return NextResponse.json(
        { error: 'Benutzer nicht gefunden' },
        { status: 404 }
      )
    }

    const products = await Product.find({ userId: user._id })
    return NextResponse.json(products)
  } catch (error) {
    console.error('Fehler beim Abrufen der Produkte:', error)
    return NextResponse.json(
      { error: 'Interner Serverfehler beim Abrufen der Produkte' },
      { status: 500 }
    )
  }
} 