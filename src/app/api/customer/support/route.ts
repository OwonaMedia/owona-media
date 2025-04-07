import { NextResponse } from 'next/server'
import { verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import dbConnect from '@/lib/db'
import User from '@/models/User'
import SupportTicket from '@/models/SupportTicket'

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

    // Finde alle Tickets des Benutzers
    const tickets = await SupportTicket.find({ userId: decoded.userId })
      .sort({ createdAt: -1 })

    // Formatiere die Tickets für die Antwort
    const formattedTickets = tickets.map(ticket => ({
      id: ticket._id,
      subject: ticket.subject,
      status: ticket.status,
      createdAt: ticket.createdAt,
      lastUpdated: ticket.updatedAt
    }))

    return NextResponse.json(formattedTickets)
  } catch (error) {
    console.error('Get tickets error:', error)
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
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

    const { subject, message } = await request.json()

    // Erstelle ein neues Ticket
    const newTicket = await SupportTicket.create({
      userId: decoded.userId,
      subject,
      message,
      status: 'open'
    })

    // Formatiere das Ticket für die Antwort
    const formattedTicket = {
      id: newTicket._id,
      subject: newTicket.subject,
      status: newTicket.status,
      createdAt: newTicket.createdAt,
      lastUpdated: newTicket.updatedAt
    }

    return NextResponse.json(formattedTicket)
  } catch (error) {
    console.error('Create ticket error:', error)
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
} 