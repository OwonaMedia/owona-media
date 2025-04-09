import { NextResponse } from 'next/server';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    return NextResponse.json({
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName
      }
    });
  } catch (error: any) {
    console.error('Fehler beim Login:', error);
    return NextResponse.json(
      { 
        error: 'Ungültige Anmeldedaten',
        details: error.message 
      },
      { status: 401 }
    );
  }
} 