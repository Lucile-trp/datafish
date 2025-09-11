import { NextResponse } from "next/server";
import connectDB from "@/lib/database/useDatabase";
import Fish from "@/models/Fish.model";
import type { NextRequest } from "next/server";

/**
 * Routes api dynamiques pour la recupération d'un poisson.
 * @param _id
 */

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await connectDB();

    const fish = await Fish.findOne({ "metadata.id": id });
    // If no result return 404
    if (!fish)
      return NextResponse.json(
        { success: false, message: "Poisson introuvable." },
        { status: 404 }
      );

    // If result return fish
    return NextResponse.json({ success: true, fish });
    
  } catch (error) {
    // If server error return 500
    return NextResponse.json(
      { success: false, message: "Erreur serveur." },
      { status: 500 }
    );
  }
}
