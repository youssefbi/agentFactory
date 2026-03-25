# 📋 CAHIER DES CHARGES — AgentFACTORY.AI
## Plateforme Micro-SaaS d'Outils IA à Monétisation Automatisée

---

> **Version :** 1.0  
> **Date :** Mars 2026  
> **Statut :** MVP en cours  
> **Paiements :** Lemon Squeezy (compatible Maroc)

---

## TABLE DES MATIÈRES

1. [Présentation du projet](#1-présentation-du-projet)
2. [Concept expliqué simplement](#2-concept-expliqué-simplement)
3. [Pourquoi ça marche](#3-pourquoi-ça-marche)
4. [Architecture technique](#4-architecture-technique)
5. [Fonctionnalités détaillées](#5-fonctionnalités-détaillées)
6. [Modèle de monétisation](#6-modèle-de-monétisation)
7. [Intégration Lemon Squeezy](#7-intégration-lemon-squeezy)
8. [Roadmap de développement](#8-roadmap-de-développement)
9. [Projections financières](#9-projections-financières)
10. [Risques et mitigations](#10-risques-et-mitigations)

---

## 1. PRÉSENTATION DU PROJET

### 1.1 Nom et vision

**AgentFACTORY.AI** est une plateforme SaaS (Software as a Service) regroupant plusieurs micro-outils basés sur l'intelligence artificielle, vendus sous forme d'abonnements mensuels automatiques. Le tout est géré par une seule personne, depuis chez soi, sans interactions humaines directes.

### 1.2 Proposition de valeur

> *"Des outils IA ultra-spécialisés qui résolvent un problème précis, facturés automatiquement, 24h/24, sans que vous leviez le petit doigt."*

### 1.3 Les 3 outils du MVP

| Outil | Fonction | Prix/mois | Cible |
|-------|----------|-----------|-------|
| **LexAI** | Génération de contrats juridiques | 19 € | Freelances, PME |
| **ScreenAI** | Analyse de CV par IA | 29 € | Recruteurs, RH |
| **ReplyAI** | Réponses aux avis Google | 39 € | Restaurateurs, commerçants |

---

## 2. CONCEPT EXPLIQUÉ SIMPLEMENT

### 2.1 C'est quoi un Micro-SaaS ?

Imaginons une machine distributrice automatique. Vous la remplissez une fois avec des produits (ici, des outils IA). Ensuite, les clients s'approchent, glissent leur argent, et repartent avec leur produit — sans que vous soyez là.

Un **Micro-SaaS** c'est exactement ça, mais pour un logiciel sur internet :

1. **Vous créez l'outil une seule fois** (le code, les fonctionnalités)
2. **Les clients paient automatiquement** chaque mois par carte bancaire
3. **L'outil tourne seul** sur un serveur, sans votre intervention
4. **L'argent arrive sur votre compte** via Lemon Squeezy puis Payoneer

### 2.2 Pourquoi "micro" ?

La différence avec une grande entreprise SaaS comme Salesforce ou HubSpot, c'est la taille volontairement réduite et ciblée :

- **Salesforce** → des milliers de fonctionnalités, des centaines d'employés, des millions d'investissement
- **Votre Micro-SaaS** → UNE seule fonctionnalité précise, zéro employé, quelques milliers d'euros d'investissement

C'est la différence entre construire un hôtel 5 étoiles et louer un appartement Airbnb bien décoré. L'appartement Airbnb est beaucoup plus simple à gérer et peut quand même générer un excellent revenu.

### 2.3 Le parcours d'un client type (exemple ReplyAI)

Voici concrètement ce qui se passe, étape par étape, **sans que vous interveniez** :

```
1. Mohamed, propriétaire d'un restaurant à Casablanca, reçoit un avis 1 étoile
   ↓
2. Il cherche sur Google "répondre avis négatif Google automatique"
   ↓
3. Il tombe sur votre site replyai.com (grâce au SEO ou à la publicité)
   ↓
4. Il essaie gratuitement → la réponse générée est parfaite → il est impressionné
   ↓
5. Il clique sur "S'abonner" → redirigé vers Lemon Squeezy → entre sa carte Visa Maroc
   ↓
6. Lemon Squeezy débite 39€/mois automatiquement → vous reverse l'argent
   ↓
7. Mohamed utilise l'outil chaque semaine → il renouvelle automatiquement chaque mois
   ↓
8. Vous recevez 39€/mois sans rien faire
```

### 2.4 La magie de la récurrence

C'est le point le plus important à comprendre. Il existe deux façons de gagner de l'argent :

**Mode traditionnel (épuisant) :**
```
Janvier  → Vous travaillez → Vous gagnez 3 000 €
Février  → Vous retravaillez → Vous gagnez 3 000 €  ← vous recommencez à zéro
Mars     → Vous retravaillez → Vous gagnez 3 000 €
```

**Mode SaaS (cumulatif) :**
```
Janvier  → 10 clients → 390 €/mois
Février  → +15 clients → 975 €/mois  ← les anciens clients restent !
Mars     → +20 clients → 1 950 €/mois
Juin     → +50 clients → 4 875 €/mois (sans avoir "retravaillé" pour les anciens)
```

Chaque nouveau client s'**ajoute** aux précédents. Votre revenu grossit comme une boule de neige.

---

## 3. POURQUOI ÇA MARCHE

### 3.1 Le timing est parfait

L'IA (ChatGPT, Claude...) est connue du grand public depuis 2023. Mais la majorité des gens ne savent pas comment l'utiliser pour des tâches professionnelles précises. Il y a un **gouffre** entre "l'IA existe" et "l'IA résout mon problème quotidien". Votre rôle est de **combler ce gouffre** avec des outils simples et accessibles.

### 3.2 La valeur perçue est énorme

Prenons LexAI (générateur de contrats) :

- Un avocat facturerait **500 à 2 000 €** pour rédiger un contrat
- Votre outil le fait en **30 secondes** pour **19 €/mois**
- Le freelance économise en **1 seule utilisation** l'équivalent de plusieurs années d'abonnement

L'utilisateur compare votre prix non pas à ce qu'il vous coûte, mais à l'alternative (l'avocat). C'est ce qu'on appelle la **value-based pricing** — fixer le prix selon la valeur créée, pas selon le coût de production.

### 3.3 Aucune interaction humaine requise

Le flux complet est automatisé :

```
Visiteur → Page de présentation (automatique)
         → Essai gratuit (automatique)
         → Page de paiement Lemon Squeezy (automatique)
         → Accès à l'outil (automatique)
         → Facturation mensuelle (automatique)
         → Email de bienvenue (automatique via Lemon Squeezy)
         → Email de relance si carte échouée (automatique)
```

Vous n'avez besoin de parler à personne.

### 3.4 Coût marginal quasi nul

Chaque nouvel utilisateur ne vous coûte presque rien à servir. L'appel API Claude coûte environ **0,01 à 0,05 € par génération**. Si un utilisateur fait 20 générations/mois, ça vous coûte **1 €** en frais d'API et vous rapporte **19 à 39 €** d'abonnement. La marge est de **95%+**.

---

## 4. ARCHITECTURE TECHNIQUE

### 4.1 Stack technologique recommandée

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND (Interface)                  │
│           Next.js 14 + React + Tailwind CSS              │
│                  Hébergé sur Vercel                      │
└────────────────────────┬────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│                   BACKEND (Logique)                      │
│         API Routes Next.js (serverless functions)        │
│              Gestion des sessions utilisateurs           │
└──────┬─────────────────┬──────────────────┬─────────────┘
       │                 │                  │
┌──────▼──────┐  ┌───────▼──────┐  ┌───────▼──────────┐
│  Claude API  │  │   Lemon      │  │    Base de        │
│  (Anthropic) │  │   Squeezy   │  │    données        │
│  Génération  │  │  Paiements  │  │  (Supabase /      │
│  de contenu  │  │  Abonnements│  │   PostgreSQL)     │
└─────────────┘  └─────────────┘  └──────────────────┘
```

### 4.2 Flux de données détaillé

**Génération de contenu :**
```
Utilisateur saisit les paramètres
    → Frontend envoie une requête à l'API Route Next.js
    → API Route vérifie les droits utilisateur (quota, plan)
    → Si autorisé → appelle l'API Claude avec le prompt système
    → Claude génère le contenu (contrat, analyse, réponse)
    → Résultat renvoyé à l'utilisateur
    → Compteur de générations incrémenté en base de données
```

**Flux de paiement :**
```
Utilisateur clique "S'abonner"
    → Redirigé vers Lemon Squeezy Checkout (page externe sécurisée)
    → Lemon Squeezy traite le paiement (carte, PayPal...)
    → Lemon Squeezy envoie un webhook à votre serveur
    → Votre serveur active le plan de l'utilisateur en base de données
    → Email de confirmation envoyé automatiquement
```

### 4.3 Technologies et coûts mensuels

| Service | Rôle | Coût mensuel |
|---------|------|-------------|
| **Vercel** | Hébergement frontend + API | 0 € (tier gratuit) |
| **Supabase** | Base de données PostgreSQL | 0 € (tier gratuit jusqu'à 500MB) |
| **Claude API** | Génération IA | ~50 € pour 1 000 utilisateurs actifs |
| **Lemon Squeezy** | Paiements | 5% + 0,50 $ par transaction |
| **Domaine .com** | Nom de domaine | ~10 €/an |
| **TOTAL** | | **~60 €/mois pour 100 utilisateurs** |

---

## 5. FONCTIONNALITÉS DÉTAILLÉES

### 5.1 LexAI — Générateur de Contrats Juridiques

**Problème résolu :** Un freelance ou une PME a besoin d'un contrat professionnel pour chaque mission. Faire appel à un avocat coûte cher. Utiliser un modèle générique sur internet est risqué juridiquement.

**Solution :** L'utilisateur renseigne 4 champs simples → LexAI génère un contrat professionnel complet avec toutes les clauses nécessaires.

**Paramètres d'entrée :**
- Nom du client
- Nom du prestataire
- Montant de la mission (HT)
- Durée de la mission
- Type de contrat (6 options prédéfinies)

**Contenu généré :**
- Article 1 : Objet et description de la mission
- Article 2 : Durée et calendrier
- Article 3 : Rémunération et modalités de paiement
- Article 4 : Propriété intellectuelle
- Article 5 : Confidentialité
- Article 6 : Clause de non-concurrence
- Article 7 : Conditions de résiliation
- Article 8 : Droit applicable et juridiction compétente

**Types de contrats supportés :**
1. Prestation de services (généraliste)
2. Développement logiciel freelance
3. Contrat de conseil / consulting
4. Accord de confidentialité (NDA)
5. Partenariat commercial
6. Contrat de maintenance

**Cible client :** Freelances (développeurs, designers, consultants), auto-entrepreneurs, petites PME.

---

### 5.2 ScreenAI — Analyseur de CV

**Problème résolu :** Les recruteurs et DRH reçoivent des dizaines, voire des centaines de CVs par offre d'emploi. Analyser chacun prend du temps et manque d'objectivité.

**Solution :** L'utilisateur colle le texte d'un CV + l'intitulé du poste → ScreenAI produit une analyse structurée en quelques secondes.

**Paramètres d'entrée :**
- Intitulé du poste recherché
- Texte brut du CV (copier-coller)

**Rapport généré :**
- Score global sur 100
- Top 3 points forts identifiés
- Top 3 lacunes ou points d'amélioration
- Pourcentage d'adéquation au poste spécifié
- 3 questions d'entretien recommandées
- Verdict et recommandation finale (recruter / ne pas recruter / inviter à un second entretien)

**Cible client :** Recruteurs indépendants, cabinets RH, responsables recrutement en entreprise, fondateurs de startups qui recrutent leurs premières recrues.

---

### 5.3 ReplyAI — Répondeur aux Avis Google

**Problème résolu :** Les restaurateurs, hôteliers, commerçants et prestataires de services reçoivent des avis Google. Répondre à chacun (surtout aux négatifs) de manière professionnelle, personnalisée et rapide est chronophage. Une mauvaise réponse peut aggraver la situation.

**Solution :** L'utilisateur colle le texte de l'avis + choisit quelques paramètres → ReplyAI génère une réponse professionnelle prête à publier.

**Paramètres d'entrée :**
- Nom de l'établissement
- Note de l'avis (1 à 5 étoiles)
- Ton souhaité (5 options)
- Texte de l'avis reçu

**Tons disponibles :**
1. Professionnel et chaleureux
2. Empathique et sincère
3. Formel et courtois
4. Détendu et humain
5. Ferme mais poli

**Qualité de la réponse générée :**
- Personnalisée (mentionne des détails de l'avis)
- Taille appropriée (80 à 130 mots)
- Structure : accueil → reconnaissance → empathie → explication → invitation à revenir
- Jamais agressive ni défensive (même face à un avis injuste)

**Cible client :** Restaurants, hôtels, cliniques, salons de coiffure, garages, commerces de proximité — tout établissement ayant une fiche Google My Business.

---

## 6. MODÈLE DE MONÉTISATION

### 6.1 Structure des plans

#### Plan Gratuit (Free)
- **Prix :** 0 €
- **Quota :** 5 générations gratuites par outil (non renouvelables)
- **Objectif :** Permettre au prospect de tester et constater la valeur avant d'acheter
- **Limitation :** Aucune sauvegarde, pas d'historique, pas d'export avancé

#### Plan Starter — 19 €/mois
- 30 générations par mois (tous outils confondus)
- Accès à tous les outils
- Historique des 30 derniers jours
- Export en copie-coller
- Support par email (réponse sous 72h)

#### Plan Pro — 39 €/mois
- 200 générations par mois
- Accès à tous les outils
- Historique des 90 derniers jours
- Export PDF et Word
- Accès API (pour intégrations)
- Support prioritaire (réponse sous 24h)

#### Plan Unlimited — 79 €/mois
- Générations illimitées
- Accès à tous les outils + nouveaux outils en avant-première
- Historique illimité
- Export dans tous les formats
- Accès API complet
- White-label (votre logo sur les exports)
- Rapports d'utilisation avancés
- Support dédié (réponse sous 4h)

### 6.2 Calcul des marges

Pour 100 abonnés répartis :
- 50 × Starter (19 €) = 950 €
- 35 × Pro (39 €) = 1 365 €
- 15 × Unlimited (79 €) = 1 185 €
- **MRR total = 3 500 €**

Charges variables (100 utilisateurs actifs) :
- Claude API : ~50 €
- Lemon Squeezy (5%) : ~175 €
- Hosting (Vercel + Supabase) : 0 € (tiers gratuits)
- **Total charges = ~225 €**

**Marge nette = 3 275 € (93%)**

---

## 7. INTÉGRATION LEMON SQUEEZY

### 7.1 Pourquoi Lemon Squeezy et pas Stripe ?

Stripe n'est pas disponible directement au Maroc pour encaisser des paiements (vous ne pouvez pas créer un compte Stripe marocain). Lemon Squeezy résout ce problème en agissant comme **Merchant of Record**.

**Qu'est-ce qu'un Merchant of Record ?**

Lemon Squeezy vend vos produits **en votre nom** légalement. Concrètement :
- C'est Lemon Squeezy qui apparaît sur le relevé bancaire du client
- C'est Lemon Squeezy qui gère la TVA (automatiquement, dans 150+ pays)
- C'est Lemon Squeezy qui est responsable légalement des remboursements
- Vous recevez l'argent net (après leur commission) sur votre compte Payoneer

```
Client paie 39 €
    → Lemon Squeezy prend 5% + 0,50 € = 2,45 €
    → Vous recevez 36,55 € sur Payoneer
    → Payoneer transfère vers votre compte bancaire marocain
```

### 7.2 Configuration étape par étape

#### Étape 1 : Créer un compte Lemon Squeezy
- Aller sur app.lemonsqueezy.com
- Créer un compte avec votre email
- Renseigner votre profil (pas besoin de numéro d'entreprise pour commencer)

#### Étape 2 : Créer votre boutique
- Menu → Settings → General
- Choisir le nom de votre boutique (ex: "factory-ai")
- Votre URL de boutique sera : factory-ai.lemonsqueezy.com

#### Étape 3 : Connecter Payoneer pour recevoir vos paiements
- Menu → Settings → Payouts
- Lier votre compte Payoneer (gratuit à créer sur payoneer.com)
- Payoneer vous donne un compte bancaire virtuel (numéro US ou EU)
- Vous retirez de Payoneer vers votre compte CIH/Attijariwafa en dirhams

#### Étape 4 : Créer vos produits
Pour chaque outil, créer un produit dans Lemon Squeezy :

```
Produit 1 : "LexAI Starter"
- Type : Abonnement mensuel récurrent
- Prix : 19,00 € (EUR)
- Période de facturation : Mensuelle

Produit 2 : "LexAI Pro"
- Type : Abonnement mensuel récurrent
- Prix : 39,00 €

Produit 3 : "LexAI Unlimited"
- Type : Abonnement mensuel récurrent
- Prix : 79,00 €
```

#### Étape 5 : Récupérer vos URLs de checkout
Chaque variant (plan) possède une URL de type :
```
https://factory-ai.lemonsqueezy.com/checkout/buy/XXXXXXXXXX
```

Remplacez les URLs placeholder dans le code par ces vraies URLs.

#### Étape 6 : Configurer les webhooks
Pour que votre app soit notifiée quand quelqu'un paie :
- Menu Lemon Squeezy → Settings → Webhooks
- Ajouter l'URL : https://votre-app.vercel.app/api/webhooks/lemonsqueezy
- Événements à écouter : `subscription_created`, `subscription_updated`, `subscription_cancelled`

### 7.3 Traitement du webhook (code Next.js)

```javascript
// pages/api/webhooks/lemonsqueezy.js

import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  // Vérifier la signature Lemon Squeezy (sécurité)
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  const signature = req.headers['x-signature'];
  const body = JSON.stringify(req.body);
  const hmac = crypto.createHmac('sha256', secret).update(body).digest('hex');
  
  if (hmac !== signature) return res.status(401).json({ error: 'Signature invalide' });

  const event = req.body;
  const eventName = event.meta.event_name;
  const userEmail = event.data.attributes.user_email;
  const planName = event.data.attributes.variant_name; // "Starter", "Pro", "Unlimited"

  if (eventName === 'subscription_created' || eventName === 'subscription_updated') {
    // Activer le plan de l'utilisateur en base de données
    await supabase
      .from('users')
      .update({ 
        plan: planName.toLowerCase(),
        subscription_id: event.data.id,
        subscription_active: true
      })
      .eq('email', userEmail);
  }

  if (eventName === 'subscription_cancelled') {
    // Rétrograder vers le plan gratuit
    await supabase
      .from('users')
      .update({ plan: 'free', subscription_active: false })
      .eq('email', userEmail);
  }

  return res.status(200).json({ received: true });
}
```

---

## 8. ROADMAP DE DÉVELOPPEMENT

### Phase 1 — MVP (Semaines 1 à 3)

**Semaine 1 :**
- [x] Créer l'interface React (dashboard + 3 outils)
- [x] Intégrer l'API Claude pour chaque outil
- [x] Système de quota gratuit (5 générations)
- [x] Modal de paywall avec plans Lemon Squeezy

**Semaine 2 :**
- [ ] Créer le compte Lemon Squeezy et les produits
- [ ] Créer le compte Payoneer et lier à Lemon Squeezy
- [ ] Configurer Supabase (base de données)
- [ ] Système d'authentification (email/mot de passe)
- [ ] Webhooks Lemon Squeezy → activation des plans

**Semaine 3 :**
- [ ] Déployer sur Vercel (domaine factory-ai.com)
- [ ] Tester le flux complet (inscription → paiement → utilisation)
- [ ] Page de landing (présentation commerciale)
- [ ] Politique de confidentialité + CGU

---

### Phase 2 — Croissance (Mois 2 et 3)

- [ ] Tableau de bord utilisateur (historique des générations)
- [ ] Export PDF des contrats générés
- [ ] Ajout d'un 4ème outil (ex: générateur de devis)
- [ ] Blog SEO (articles ciblant les mots-clés des clients)
- [ ] Intégration Google Analytics pour suivre les conversions
- [ ] Programme de parrainage (1 mois offert par filleul)

---

### Phase 3 — Scalabilité (Mois 4 à 6)

- [ ] API publique (pour les utilisateurs Unlimited)
- [ ] Intégrations Zapier / Make (automatisation)
- [ ] Application mobile (React Native)
- [ ] 5ème et 6ème outil IA (à définir selon la demande)
- [ ] Programme d'affiliation (30% de commission aux partenaires)
- [ ] Version white-label pour revendeurs

---

## 9. PROJECTIONS FINANCIÈRES

### Scénario conservateur

| Mois | Nouveaux abonnés | Total abonnés | MRR |
|------|-----------------|---------------|-----|
| 1 | 5 | 5 | 140 € |
| 2 | 10 | 14 | 392 € |
| 3 | 15 | 27 | 756 € |
| 4 | 20 | 44 | 1 232 € |
| 5 | 25 | 65 | 1 820 € |
| 6 | 30 | 90 | 2 520 € |
| 12 | 40 | 290 | 8 120 € |

*Hypothèses : prix moyen 28 €/abonné, churn mensuel de 3%*

### Scénario optimiste (avec publicité Google Ads)

| Mois | MRR | Budget Ads | Bénéfice net |
|------|-----|-----------|--------------|
| 3 | 1 500 € | 300 € | 1 200 € |
| 6 | 5 000 € | 500 € | 4 500 € |
| 12 | 18 000 € | 1 000 € | 17 000 € |

### Point de rentabilité

Le seuil de rentabilité est atteint dès le **premier abonné payant**. Les seuls coûts fixes sont :
- Domaine : ~1 €/mois
- API Claude : ~0,02 €/génération

Il n'y a pas de coût d'employé, pas de bureau, pas d'investissement matériel.

---

## 10. RISQUES ET MITIGATIONS

### Risque 1 : Changement des tarifs de l'API Claude

**Probabilité :** Faible  
**Impact :** Moyen  
**Mitigation :** Intégrer plusieurs fournisseurs d'IA (OpenAI en backup), répercuter les hausses sur les prix des plans avec 60 jours de préavis.

### Risque 2 : Arrivée d'un concurrent direct

**Probabilité :** Moyenne  
**Impact :** Moyen  
**Mitigation :** Se différencier par la spécialisation (ex: LexAI uniquement droit marocain/français), construire une communauté d'utilisateurs fidèles, bouger vite sur les nouvelles fonctionnalités.

### Risque 3 : Taux de churn élevé (beaucoup d'annulations)

**Probabilité :** Moyenne si l'outil ne crée pas assez de valeur  
**Impact :** Élevé  
**Mitigation :** Suivre le taux d'utilisation (si un abonné n'utilise pas l'outil, il va annuler). Envoyer des emails de rappel automatiques. Améliorer l'onboarding (tutoriel de bienvenue).

### Risque 4 : Problèmes de paiement au Maroc

**Probabilité :** Faible (Lemon Squeezy est bien établi)  
**Impact :** Élevé  
**Mitigation :** Avoir Payoneer en backup (compte US virtuel), garder une alternative comme Paddle ou Gumroad si Lemon Squeezy présente des problèmes.

### Risque 5 : Qualité insuffisante des générations IA

**Probabilité :** Faible avec Claude  
**Impact :** Élevé (un mauvais contrat juridique peut causer des problèmes)  
**Mitigation :** Ajouter un disclaimer "à vérifier avec un professionnel", faire des tests réguliers de qualité, permettre aux utilisateurs de signaler une mauvaise génération.

---

## RÉSUMÉ EXÉCUTIF

| Dimension | Détail |
|-----------|--------|
| **Type de projet** | Micro-SaaS multi-outils IA |
| **Investissement initial** | ~200 € (domaine + premières publicités) |
| **Temps de développement MVP** | 3 semaines |
| **Premier revenu possible** | Semaine 3 |
| **Revenu cible à 6 mois** | 2 500 à 5 000 €/mois |
| **Revenu cible à 12 mois** | 8 000 à 18 000 €/mois |
| **Interactions humaines requises** | Zéro |
| **Localisation** | 100% remote, depuis Casablanca |
| **Paiements** | Lemon Squeezy → Payoneer → Banque marocaine |
| **Stack** | Next.js, Claude API, Supabase, Vercel |

---

*Document préparé avec AgentFACTORY.AI — Tous droits réservés 2026*
