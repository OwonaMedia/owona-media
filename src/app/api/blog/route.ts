import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import BlogPost from '@/models/BlogPost'
import { dbConnect } from '@/lib/db'

export async function GET() {
  try {
    await dbConnect()
    const posts = await BlogPost.find().sort({ createdAt: -1 })
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const data = await request.json()
    await dbConnect()
    
    const post = await BlogPost.create({
      ...data,
      author: session.user?.name || 'Anonymous'
    })
    
    return NextResponse.json(post)
  } catch (error) {
    console.error('Error creating blog post:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Nicht autorisiert' }, { status: 401 })
    }

    await dbConnect()
    const data = await request.json()
    const post = await BlogPost.findByIdAndUpdate(data._id, data, { new: true })
    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json({ error: 'Fehler beim Aktualisieren des Blog-Posts' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Nicht autorisiert' }, { status: 401 })
    }

    await dbConnect()
    const { id } = await request.json()
    await BlogPost.findByIdAndDelete(id)
    return NextResponse.json({ message: 'Blog-Post erfolgreich gelöscht' })
  } catch (error) {
    return NextResponse.json({ error: 'Fehler beim Löschen des Blog-Posts' }, { status: 500 })
  }
} 