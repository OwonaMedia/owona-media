import { NextResponse } from 'next/server';
import { auth } from '@/lib/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    await sendPasswordResetEmail(auth, email);

    return NextResponse.json({
      success: true,
      message: 'E-Mail zum Zurücksetzen des Passworts wurde gesendet'
    });
  } catch (error: any) {
    console.error('Fehler beim Zurücksetzen des Passworts:', error);
    return NextResponse.json(
      { 
        error: 'Fehler beim Zurücksetzen des Passworts',
        details: error.message 
      },
      { status: 500 }
    );
  }
} 