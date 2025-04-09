import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

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
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Nicht autorisiert' },
        { status: 401 }
      )
    }

    const productsRef = collection(db, 'products')
    const userProductsQuery = query(productsRef, where('userEmail', '==', session.user.email))
    const snapshot = await getDocs(userProductsQuery)
    
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    return NextResponse.json(products)
  } catch (error) {
    console.error('Fehler beim Abrufen der Produkte:', error)
    return NextResponse.json(
      { error: 'Fehler beim Abrufen der Produkte' },
      { status: 500 }
    )
  }
} 