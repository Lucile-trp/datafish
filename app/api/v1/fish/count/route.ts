// app/api/v1/fish/count/route.ts

import { NextResponse } from "next/server";
import FishModel from "@/model/Fish";
import connectDB from "@/lib/database/useDatabase";

export async function GET() {
  try {
    await connectDB();
    const total = await FishModel.countDocuments({});

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
