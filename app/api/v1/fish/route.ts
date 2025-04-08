import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Fish, { IFish } from "@/model/Fish";
import connectDB from "@/lib/database/useDatabase";

// CREATE
export async function POST(request: Request) {
  try {
    const data: Omit<IFish, "metadata"> = await request.json();

    await connectDB();

    const newFish = new Fish({
      ...data,
      metadata: {
        id: new mongoose.Types.ObjectId().toString(),
        created_at: new Date(),
        updated_at: new Date(),
        version: 1,
      },
    });

    await newFish.save();

    return NextResponse.json(
      {
        success: true,
        message: "Poisson ajouté avec succès.",
        data: newFish,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      return NextResponse.json(
        {
          success: false,
          message: "Erreur lors de l'ajout du poisson.",
          error: error.message,
        },
        { status: 500 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "Erreur inconnue.",
      },
      { status: 500 }
    );
  }
}

// READ
export async function GET() {
  try {
    await connectDB();

    const fish: IFish[] = await Fish.find();

    return NextResponse.json({
      success: true,
      data: fish,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      return NextResponse.json(
        {
          success: false,
          message: "Erreur lors de la récupération des poissons.",
          error: error.message,
        },
        { status: 500 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "Erreur inconnue.",
      },
      { status: 500 }
    );
  }
}

// UPDATE
export async function PUT(request: Request) {
  try {
    const { id, ...updateData }: { id: string } & Partial<IFish> =
      await request.json();

    await connectDB();

    const updatedFish: IFish | null = await Fish.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedFish) {
      return NextResponse.json(
        {
          success: false,
          message: "Poisson non trouvé.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Poisson mis à jour avec succès.",
      data: updatedFish,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      return NextResponse.json(
        {
          success: false,
          message: "Erreur lors de la mise à jour du poisson.",
          error: error.message,
        },
        { status: 500 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "Erreur inconnue.",
      },
      { status: 500 }
    );
  }
}

// DELETE
export async function DELETE(request: Request) {
  try {
    const { id }: { id: string } = await request.json();

    await connectDB();

    const deletedFish: IFish | null = await Fish.findByIdAndDelete(id);

    if (!deletedFish) {
      return NextResponse.json(
        {
          success: false,
          message: "Poisson non trouvé.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Poisson supprimé avec succès.",
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      return NextResponse.json(
        {
          success: false,
          message: "Erreur lors de la suppression du poisson.",
          error: error.message,
        },
        { status: 500 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "Erreur inconnue.",
      },
      { status: 500 }
    );
  }
}
