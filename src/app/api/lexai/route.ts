import { NextRequest, NextResponse } from "next/server";
import { generateContract, LexAIInput } from "@/agents/lexai";

export async function POST(req: NextRequest) {
  try {
    const body: LexAIInput = await req.json();

    if (!body.clientName || !body.providerName || !body.amount || !body.duration || !body.contractType) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    const contract = await generateContract(body);
    return NextResponse.json({ contract });
  } catch (error) {
    console.error("[LexAI]", error);
    return NextResponse.json({ error: "Erreur lors de la génération" }, { status: 500 });
  }
}
