import { anthropic, DEFAULT_MODEL } from "@/lib/anthropic";

export type Tone =
  | "professionnel_chaleureux"
  | "empathique_sincere"
  | "formel_courtois"
  | "detendu_humain"
  | "ferme_poli";

export interface ReplyAIInput {
  establishmentName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  tone: Tone;
  reviewText: string;
}

const TONE_LABELS: Record<Tone, string> = {
  professionnel_chaleureux: "professionnel et chaleureux",
  empathique_sincere: "empathique et sincère",
  formel_courtois: "formel et courtois",
  detendu_humain: "détendu et humain",
  ferme_poli: "ferme mais poli",
};

const SYSTEM_PROMPT = `Tu es ReplyAI, un expert en relation client et en gestion de réputation en ligne.
Tu rédiges des réponses professionnelles aux avis Google, adaptées au ton et à la note.
Tes réponses respectent cette structure : accueil → reconnaissance → empathie → explication/solution → invitation à revenir.
Longueur : 80 à 130 mots. Jamais agressive ni défensive, même face à un avis injuste.
Réponds uniquement avec le texte de la réponse, sans guillemets ni commentaires.`;

export async function generateReply(input: ReplyAIInput): Promise<string> {
  const toneLabel = TONE_LABELS[input.tone];
  const sentiment = input.rating <= 2 ? "négatif" : input.rating === 3 ? "mitigé" : "positif";

  const userPrompt = `Établissement : ${input.establishmentName}
Note : ${input.rating}/5 (avis ${sentiment})
Ton souhaité : ${toneLabel}

Avis reçu :
"${input.reviewText}"

Rédige une réponse professionnelle prête à publier.`;

  const message = await anthropic.messages.create({
    model: DEFAULT_MODEL,
    max_tokens: 300,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: userPrompt }],
  });

  const content = message.content[0];
  if (content.type !== "text") throw new Error("Unexpected response type");
  return content.text;
}
