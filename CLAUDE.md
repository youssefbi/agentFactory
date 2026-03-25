# AgentFACTORY.AI

## Vision

Plateforme Micro-SaaS regroupant des outils IA ultra-spécialisés, vendus par abonnement mensuel automatique. Zéro interaction humaine, 100% automatisé.

## Les 3 outils MVP

| Outil | Fonction | Stack |
|-------|----------|-------|
| **LexAI** | Génération de contrats juridiques | Claude API + prompt système |
| **ScreenAI** | Analyse de CV par IA | Claude API + structured output |
| **ReplyAI** | Réponses aux avis Google | Claude API + tone control |

## Plans tarifaires

| Plan | Prix | Quota |
|------|------|-------|
| Free | 0 € | 5 générations/outil (non renouvelables) |
| Starter | 19 €/mois | 30 générations/mois |
| Pro | 39 €/mois | 200 générations/mois + export PDF |
| Unlimited | 79 €/mois | Illimité + API + white-label |

## Stack technique

```
Frontend  : Next.js 14 + React + Tailwind CSS → Vercel
Backend   : API Routes Next.js (serverless)
Base de données : Supabase (PostgreSQL)
IA        : Claude API (claude-sonnet-4-6 par défaut)
Paiements : Lemon Squeezy (compatible Maroc) → Payoneer
```

## Structure du projet

```
AgentFactory/
├── CLAUDE.md
├── README.md
├── docs/
│   └── Specifications_AgentFactoryAI.md
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── page.tsx          # Landing page
│   │   ├── dashboard/        # Dashboard utilisateur
│   │   └── api/              # API Routes (serverless)
│   │       ├── lexai/
│   │       ├── screenai/
│   │       ├── replyai/
│   │       └── webhooks/lemonsqueezy/
│   ├── agents/               # Prompts et logique des agents Claude
│   │   ├── lexai.ts
│   │   ├── screenai.ts
│   │   └── replyai.ts
│   ├── components/           # Composants React
│   │   ├── tools/
│   │   ├── PaywallModal.tsx
│   │   └── QuotaBadge.tsx
│   └── lib/
│       ├── anthropic.ts
│       ├── quota.ts
│       └── supabase.ts
└── tests/
```

## Variables d'environnement requises

```env
ANTHROPIC_API_KEY=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_KEY=
LEMONSQUEEZY_WEBHOOK_SECRET=
```

## Conventions de développement

- Modèle Claude par défaut : `claude-sonnet-4-6`
- Chaque outil IA = un fichier agent dans `src/agents/`
- Vérifier le quota utilisateur AVANT d'appeler l'API Claude
- Toujours valider la signature webhook Lemon Squeezy

## Commandes

- `npm run dev` — serveur de développement (localhost:3000)
- `npm run build` — build production
- `npm test` — tests
