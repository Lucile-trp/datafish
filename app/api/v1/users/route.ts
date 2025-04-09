import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/database/useDatabase";
import User from "@/models/User.model";
import bcrypt from "bcrypt";

// GET ALL
export async function GET() {
  try {
    await connectDB();
    const users = await User.find({}, "-password");

    return NextResponse.json({ success: true, users }, { status: 200 });
  } catch (error) {
    console.error("Erreur récupération des utilisateurs :", error);
    return NextResponse.json(
      { success: false, message: "Erreur serveur." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { email, password, name, roles } = await req.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { success: false, message: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json(
        {
          success: false,
          message: "Un utilisateur avec cet email existe déjà.",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      id: crypto.randomUUID(),
      name,
      email,
      password: hashedPassword,
      roles: roles || ["USER"],
    });

    return NextResponse.json(
      {
        success: true,
        message: "Utilisateur créé avec succès.",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          roles: newUser.roles,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur création utilisateur :", error);
    return NextResponse.json(
      {
        success: false,
        message: "Erreur lors de la création de l'utilisateur.",
      },
      { status: 500 }
    );
  }
}
