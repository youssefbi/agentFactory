import { anthropic, DEFAULT_MODEL } from "@/lib/anthropic";

export interface ScreenAIInput {
  jobTitle: string;
  cvText: string;
}

export interface ScreenAIResult {
  score: number;
  strengths: string[];
  weaknesses: string[];
  matchPercentage: number;
  interviewQuestions: string[];
  verdict: string;
  recommendation: "recruter" | "ne_pas_recruter" | "second_entretien";
}

const SYSTEM_PROMPT = `Tu es ScreenAI, un expert en recrutement et en analyse de CV.
Tu analyses des CVs par rapport à un poste donné et produis un rapport structuré en JSON.
Sois objectif, précis et constructif dans ton analyse.
Retourne UNIQUEMENT un objet JSON valide avec cette structure exacte :
{
  "score": <nombre entre 0 et 100>,
  "strengths": [<3 points forts>],
  "weaknesses": [<3 lacunes>],
  "matchPercentage": <nombre entre 0 et 100>,
  "interviewQuestions": [<3 questions d'entretien>],
  "verdict": "<résumé en 2-3 phrases>",
  "recommendation": "<recruter|ne_pas_recruter|second_entretien>"
}`;

export async function analyzeCV(input: ScreenAIInput): Promise<ScreenAIResult> {
  const userPrompt = `Poste recherché : ${input.jobTitle}

CV à analyser :
${input.cvText}`;

  const message = await anthropic.messages.create({
    model: DEFAULT_MODEL,
    max_tokens: 1000,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: userPrompt }],
  });

  const content = message.content[0];
  if (content.type !== "text") throw new Error("Unexpected response type");

  const jsonMatch = content.text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("Invalid JSON response");

  return JSON.parse(jsonMatch[0]) as ScreenAIResult;
}
