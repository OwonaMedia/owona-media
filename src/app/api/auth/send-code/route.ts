import { NextResponse } from 'next/server';
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await sendEmailVerification(user);

    return NextResponse.json({
      success: true,
      message: 'Bestätigungs-E-Mail wurde gesendet'
    });
  } catch (error: any) {
    console.error('Fehler beim Senden der Bestätigungs-E-Mail:', error);
    return NextResponse.json(
      { 
        error: 'Fehler beim Senden der Bestätigungs-E-Mail',
        details: error.message 
      },
      { status: 500 }
    );
  }
} 