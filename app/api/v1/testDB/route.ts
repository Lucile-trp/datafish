import connectDB from "@/lib/database/useDatabase";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json(
      {
        success: true,
        message: "✅ Connexion à la BDD réussie.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "❌ Echec de la connexion à la Base de données",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
