import { NextRequest, NextResponse } from "next/server";
import { analyzeCV, ScreenAIInput } from "@/agents/screenai";

export async function POST(req: NextRequest) {
  try {
    const body: ScreenAIInput = await req.json();

    if (!body.jobTitle || !body.cvText) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    const result = await analyzeCV(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error("[ScreenAI]", error);
    return NextResponse.json({ error: "Erreur lors de l'analyse" }, { status: 500 });
  }
}
