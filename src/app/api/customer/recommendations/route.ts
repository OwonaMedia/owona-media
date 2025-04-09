import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/firebase'
import { collection, getDocs, query, where, limit } from 'firebase/firestore'

interface Purchase {
  productId: {
    toString: () => string
  }
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
    const userProductsQuery = query(
      productsRef,
      where('userEmail', '!=', session.user.email),
      limit(3)
    )
    
    const snapshot = await getDocs(userProductsQuery)
    const recommendations = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    return NextResponse.json(recommendations)
  } catch (error) {
    console.error('Fehler beim Abrufen der Empfehlungen:', error)
    return NextResponse.json(
      { error: 'Fehler beim Abrufen der Empfehlungen' },
      { status: 500 }
    )
  }
} 