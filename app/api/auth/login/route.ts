import { NextResponse } from "next/server";
import connectDB from "@/lib/database/useDatabase";
import User from "@/models/User.model";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken"

export async function POST(req: Request) {
  await connectDB();

  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { success: false, message: "Champs manquants" },
      { status: 400 }
    );
  }

  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.json(
      { success: false, message: "Utilisateur non trouvé" },
      { status: 404 }
    );
  }
  const valid = await compare(password, user.password);

  if (!valid) {
    return NextResponse.json(
      { success: false, message: "Mot de passe invalide" },
      { status: 401 }
    );
  }

  const jwtPayload = {
    userId: user.id,
    roles: user.roles
  }

  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET as string)

  return NextResponse.json({
    success: true,
    user: {
      id: user._id,
      email: user.email,
      name: user.name,
      roles: user.roles,
    },
    token
  });
}
