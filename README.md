# AgentFACTORY.AI

> Plateforme Micro-SaaS d'outils IA ultra-spécialisés, à abonnement mensuel automatique.

## Les 3 outils

| Outil | Description | Plan d'entrée |
|-------|-------------|---------------|
| **LexAI** | Génère des contrats juridiques professionnels en 30 secondes | Starter 19 €/mois |
| **ScreenAI** | Analyse un CV et produit un rapport d'adéquation au poste | Starter 19 €/mois |
| **ReplyAI** | Rédige des réponses professionnelles aux avis Google | Starter 19 €/mois |

## Stack technique

```
Frontend  → Next.js 14 (App Router) + React + Tailwind CSS
Backend   → API Routes Next.js (serverless)
IA        → Claude API (claude-sonnet-4-6)
Base de données → Supabase (PostgreSQL)
Paiements → Lemon Squeezy (Merchant of Record, compatible Maroc)
Hébergement → Vercel
```

## Plans tarifaires

| Plan | Prix | Générations/mois |
|------|------|-----------------|
| Free | 0 € | 5 (non renouvelables) |
| Starter | 19 €/mois | 30 |
| Pro | 39 €/mois | 200 + export PDF |
| Unlimited | 79 €/mois | Illimité + API + white-label |

## Installation locale

### Prérequis

- Node.js 18+
- Une clé API Anthropic → [console.anthropic.com](https://console.anthropic.com)

### Démarrage

```bash
git clone https://github.com/youssefbi/agentFactory.git
cd agentFactory
npm install
```

Crée un fichier `.env.local` :

```env
ANTHROPIC_API_KEY=sk-ant-...
NEXT_PUBLIC_SUPABASE_URL=           # optionnel en draft
NEXT_PUBLIC_SUPABASE_ANON_KEY=      # optionnel en draft
SUPABASE_SERVICE_KEY=               # optionnel en draft
LEMONSQUEEZY_WEBHOOK_SECRET=        # optionnel en draft
```

```bash
npm run dev
# → http://localhost:3000
```

## Structure du projet

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── dashboard/page.tsx    # Dashboard (3 outils)
│   └── api/
│       ├── lexai/route.ts    # Endpoint génération contrat
│       ├── screenai/route.ts # Endpoint analyse CV
│       ├── replyai/route.ts  # Endpoint réponse avis
│       └── webhooks/
│           └── lemonsqueezy/route.ts
├── agents/
│   ├── lexai.ts              # Prompt système LexAI
│   ├── screenai.ts           # Prompt système ScreenAI
│   └── replyai.ts            # Prompt système ReplyAI
├── components/
│   ├── tools/                # Formulaires des 3 outils
│   ├── PaywallModal.tsx      # Modal d'upgrade
│   └── QuotaBadge.tsx        # Compteur de générations
└── lib/
    ├── anthropic.ts          # Client Anthropic
    ├── quota.ts              # Gestion du quota (localStorage)
    └── supabase.ts           # Client Supabase
```

## Roadmap

### MVP — Semaines 1-3

- [x] Spécifications et architecture
- [x] Interface des 3 outils (LexAI, ScreenAI, ReplyAI)
- [x] Intégration Claude API
- [x] Système de quota gratuit (5 générations)
- [x] Modal paywall
- [ ] Authentification Supabase
- [ ] Webhooks Lemon Squeezy
- [ ] Déploiement Vercel

### Phase 2 — Mois 2-3

- [ ] Export PDF des contrats
- [ ] Historique des générations
- [ ] Blog SEO
- [ ] 4ème outil IA

## Modèle économique

- **Coût marginal par utilisateur** : ~1 €/mois (API Claude)
- **Revenu par utilisateur** : 19 à 79 €/mois
- **Marge nette cible** : 93%+
- **Paiements** : Lemon Squeezy → Payoneer → Banque marocaine

---

*AgentFACTORY.AI — Tous droits réservés 2026*
