import connectDB from '@/lib/database/useDatabase';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json(
      {
        success: true,
        message: '✅ Connexion à la BDD réussie.',
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Erreur MongoDB:', error.message);
      return NextResponse.json(
        {
          success: false,
          message: '❌ Connexion échouée',
          error: error.message,
        },
        { status: 500 }
      );
    }

    // fallback pour erreurs inconnues
    console.error('Erreur inconnue :', error);
    return NextResponse.json(
      {
        success: false,
        message: '❌ Une erreur inconnue est survenue.',
      },
      { status: 500 }
    );
  }
}
