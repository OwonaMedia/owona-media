import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    const supportRef = collection(db, 'support');
    const docRef = await addDoc(supportRef, {
      name,
      email,
      message,
      createdAt: new Date().toISOString()
    });

    return NextResponse.json({ 
      success: true, 
      id: docRef.id,
      message: 'Support-Anfrage erfolgreich gesendet' 
    });
  } catch (error) {
    console.error('Fehler beim Senden der Support-Anfrage:', error);
    return NextResponse.json(
      { error: 'Fehler beim Senden der Support-Anfrage' },
      { status: 500 }
    );
  }
} 