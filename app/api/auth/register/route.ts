import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { pseudo, email, password } = await req.json();

  if (!email || !password || !pseudo) {
    return NextResponse.json(
      { success: false, message: "Champs manquants." },
      { status: 400 }
    );
  }

  try {
    const userPayload = {
      id: crypto.randomUUID(),
      name: pseudo,
      email,
      password: password,
      roles: ["USER"],
    };

    const response = await fetch(`${process.env.URL_LOCAL}/api/v1/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json({ success: true, user: data.user });
  } catch (err) {
    console.error("Erreur d'inscription :", err);
    return NextResponse.json(
      { success: false, message: "Erreur serveur pendant l'inscription." },
      { status: 500 }
    );
  }
}
