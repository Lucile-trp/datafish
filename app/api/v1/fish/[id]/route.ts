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
  { params }: { params: { id: string }}
) {
  const {id} = await params;

  await connectDB();

  const fish = await Fish.findOne({ "metadata.id": id });
  if (!fish)
    return NextResponse.json(
      { success: false, message: "poisson introuvable." },
      { status: 404 }
    );
  return NextResponse.json({ success: true, fish });
}
