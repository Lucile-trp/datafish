import { NextResponse } from "next/server";
import Fish from "@/models/Fish.model";
import connectDB from "@/lib/database/useDatabase";

export async function GET() {
  try {
    await connectDB();
    const total = await Fish.countDocuments({});

    return NextResponse.json({
      success: true,
      total,
    });
  } catch (error) {
    console.error("Erreur de comptage :", error);
    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue lors du comptage.",
      },
      { status: 500 }
    );
  }
}
