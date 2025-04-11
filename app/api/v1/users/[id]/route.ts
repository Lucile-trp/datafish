import { NextResponse } from "next/server";
import connectDB from "@/lib/database/useDatabase";
import User from "@/models/User.model";
import type { NextRequest } from "next/server";

/**
 * Routes api dynamiques pour la gestion d'un utilisateur (CRUD)
 * @param _id
 */

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  await connectDB();
  const user = await User.findById(id, "-password");
  if (!user)
    return NextResponse.json(
      { success: false, message: "Utilisateur introuvable." },
      { status: 404 }
    );
  return NextResponse.json({ success: true, user });
}
