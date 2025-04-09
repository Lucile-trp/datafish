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
  { params }: { params: { id: string } }
) {
  await connectDB();
  const user = await User.findById(params.id, "-password");
  if (!user)
    return NextResponse.json(
      { success: false, message: "Utilisateur introuvable." },
      { status: 404 }
    );
  return NextResponse.json({ success: true, user });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const body = await req.json();
  const updated = await User.findByIdAndUpdate(params.id, body, {
    new: true,
  }).select("-password");

  if (!updated)
    return NextResponse.json(
      { success: false, message: "Échec de la mise à jour." },
      { status: 400 }
    );
  return NextResponse.json({ success: true, user: updated });
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const deleted = await User.findByIdAndDelete(params.id);
  if (!deleted)
    return NextResponse.json(
      { success: false, message: "Échec de la suppression." },
      { status: 400 }
    );
  return NextResponse.json({ success: true, message: "Utilisateur supprimé." });
}
