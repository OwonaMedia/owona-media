import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/firebase'
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'

export async function GET() {
  try {
    const blogRef = collection(db, 'blog')
    const snapshot = await getDocs(blogRef)
    const posts = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Fehler beim Abrufen der Blog-Posts:', error)
    return NextResponse.json(
      { error: 'Fehler beim Abrufen der Blog-Posts' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json(
        { error: 'Nicht autorisiert' },
        { status: 401 }
      )
    }

    const data = await request.json()
    const blogRef = collection(db, 'blog')
    
    const docRef = await addDoc(blogRef, {
      ...data,
      author: session.user?.name || 'Anonym',
      createdAt: new Date().toISOString()
    })
    
    return NextResponse.json({
      id: docRef.id,
      ...data,
      author: session.user?.name || 'Anonym'
    })
  } catch (error) {
    console.error('Fehler beim Erstellen des Blog-Posts:', error)
    return NextResponse.json(
      { error: 'Fehler beim Erstellen des Blog-Posts' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json(
        { error: 'Nicht autorisiert' },
        { status: 401 }
      )
    }

    const data = await request.json()
    const { id, ...updateData } = data
    
    const postRef = doc(db, 'blog', id)
    await updateDoc(postRef, {
      ...updateData,
      updatedAt: new Date().toISOString()
    })

    return NextResponse.json({
      id,
      ...updateData,
      updatedAt: new Date().toISOString()
    })
  } catch (error) {
    console.error('Fehler beim Aktualisieren des Blog-Posts:', error)
    return NextResponse.json(
      { error: 'Fehler beim Aktualisieren des Blog-Posts' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json(
        { error: 'Nicht autorisiert' },
        { status: 401 }
      )
    }

    const { id } = await request.json()
    const postRef = doc(db, 'blog', id)
    await deleteDoc(postRef)

    return NextResponse.json({ 
      success: true,
      message: 'Blog-Post erfolgreich gelöscht' 
    })
  } catch (error) {
    console.error('Fehler beim Löschen des Blog-Posts:', error)
    return NextResponse.json(
      { error: 'Fehler beim Löschen des Blog-Posts' },
      { status: 500 }
    )
  }
} 