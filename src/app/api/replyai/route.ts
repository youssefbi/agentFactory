import { NextRequest, NextResponse } from "next/server";
import { generateReply, ReplyAIInput } from "@/agents/replyai";

export async function POST(req: NextRequest) {
  try {
    const body: ReplyAIInput = await req.json();

    if (!body.establishmentName || !body.rating || !body.tone || !body.reviewText) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    const reply = await generateReply(body);
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("[ReplyAI]", error);
    return NextResponse.json({ error: "Erreur lors de la génération" }, { status: 500 });
  }
}
