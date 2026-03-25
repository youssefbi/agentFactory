import { anthropic, DEFAULT_MODEL } from "@/lib/anthropic";

export type ContractType =
  | "prestation_services"
  | "developpement_logiciel"
  | "consulting"
  | "nda"
  | "partenariat"
  | "maintenance";

export interface LexAIInput {
  clientName: string;
  providerName: string;
  amount: string;
  duration: string;
  contractType: ContractType;
}

const CONTRACT_LABELS: Record<ContractType, string> = {
  prestation_services: "Prestation de services",
  developpement_logiciel: "Développement logiciel freelance",
  consulting: "Contrat de conseil / consulting",
  nda: "Accord de confidentialité (NDA)",
  partenariat: "Partenariat commercial",
  maintenance: "Contrat de maintenance",
};

const SYSTEM_PROMPT = `Tu es LexAI, un expert juridique spécialisé dans la rédaction de contrats professionnels en droit français et marocain.
Tu génères des contrats juridiques complets, clairs et professionnels.
Tes contrats sont structurés avec des articles numérotés, un langage juridique précis mais accessible.
Tu inclus toujours : objet, durée, rémunération, propriété intellectuelle, confidentialité, résiliation, droit applicable.
Réponds uniquement avec le texte du contrat, sans introduction ni commentaire.`;

export async function generateContract(input: LexAIInput): Promise<string> {
  const contractLabel = CONTRACT_LABELS[input.contractType];

  const userPrompt = `Génère un contrat de type "${contractLabel}" avec les informations suivantes :
- Client : ${input.clientName}
- Prestataire : ${input.providerName}
- Montant HT : ${input.amount}
- Durée : ${input.duration}

Le contrat doit être complet, professionnel, et inclure tous les articles standards.`;

  const message = await anthropic.messages.create({
    model: DEFAULT_MODEL,
    max_tokens: 2000,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: userPrompt }],
  });

  const content = message.content[0];
  if (content.type !== "text") throw new Error("Unexpected response type");
  return content.text;
}
