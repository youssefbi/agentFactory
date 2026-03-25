import Link from "next/link";

const TOOLS = [
  {
    emoji: "📄",
    name: "LexAI",
    tagline: "Contrats juridiques",
    description: "Génère un contrat professionnel complet en 30 secondes. Prestation, NDA, consulting, maintenance...",
    price: "19 €",
    color: "indigo",
  },
  {
    emoji: "🔍",
    name: "ScreenAI",
    tagline: "Analyse de CV",
    description: "Score, points forts, lacunes, adéquation au poste et questions d'entretien en un clic.",
    price: "19 €",
    color: "purple",
  },
  {
    emoji: "💬",
    name: "ReplyAI",
    tagline: "Avis Google",
    description: "Réponses professionnelles, personnalisées et prêtes à publier pour chaque avis client.",
    price: "19 €",
    color: "emerald",
  },
];

const PLANS = [
  { name: "Free", price: "0 €", period: "", quota: "5 générations gratuites", features: ["Accès à tous les outils", "Sans carte bancaire"] },
  { name: "Starter", price: "19 €", period: "/mois", quota: "30 générations/mois", features: ["Tous les outils", "Historique 30 jours", "Support email"], highlight: true },
  { name: "Pro", price: "39 €", period: "/mois", quota: "200 générations/mois", features: ["Export PDF & Word", "Support prioritaire", "Historique 90 jours"] },
  { name: "Unlimited", price: "79 €", period: "/mois", quota: "Illimité", features: ["Accès API", "White-label", "Support dédié 4h"] },
];

const COLORS: Record<string, { bg: string; text: string; border: string }> = {
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-sm z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black">Agent</span>
            <span className="text-xl font-black text-indigo-600">FACTORY</span>
            <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-semibold">.AI</span>
          </div>
          <Link
            href="/dashboard"
            className="bg-indigo-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition"
          >
            Essayer gratuitement →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          ✨ 5 générations gratuites — sans carte bancaire
        </div>
        <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
          Des outils IA qui font le travail
          <span className="text-indigo-600"> à votre place</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          Contrats juridiques, analyse de CV, réponses aux avis Google — générés en quelques secondes par l&apos;IA. Abonnement mensuel. Zéro interaction humaine.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="bg-indigo-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
          >
            Commencer gratuitement
          </Link>
          <a
            href="#outils"
            className="bg-gray-100 text-gray-800 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-200 transition"
          >
            Voir les outils
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-4">Propulsé par Claude (Anthropic) · Paiements via Lemon Squeezy</p>
      </section>

      {/* Tools */}
      <section id="outils" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-black text-center mb-3">3 outils, 3 problèmes résolus</h2>
        <p className="text-center text-gray-500 mb-12">Chaque outil résout un problème précis, avec une précision professionnelle.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOOLS.map((tool) => {
            const c = COLORS[tool.color];
            return (
              <div key={tool.name} className={`rounded-2xl border ${c.border} ${c.bg} p-7 flex flex-col`}>
                <div className="text-4xl mb-4">{tool.emoji}</div>
                <div className={`text-xs font-semibold ${c.text} mb-1`}>{tool.tagline}</div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{tool.name}</h3>
                <p className="text-sm text-gray-600 flex-1 mb-5">{tool.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">À partir de <strong>{tool.price}/mois</strong></span>
                  <Link href="/dashboard" className={`text-sm font-semibold ${c.text} hover:underline`}>
                    Essayer →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-3">Tarifs simples, sans surprise</h2>
          <p className="text-center text-gray-500 mb-12">Commencez gratuitement. Passez à un plan payant quand vous êtes convaincu.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl border-2 p-6 flex flex-col ${
                  plan.highlight ? "border-indigo-500 ring-2 ring-indigo-500 ring-offset-2" : "border-gray-200"
                }`}
              >
                {plan.highlight && (
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full self-start mb-3">
                    Populaire
                  </span>
                )}
                <div className="font-bold text-gray-900 mb-1">{plan.name}</div>
                <div className="text-2xl font-extrabold mb-1">
                  {plan.price}<span className="text-sm font-normal text-gray-500">{plan.period}</span>
                </div>
                <div className="text-xs text-indigo-600 font-medium mb-4">{plan.quota}</div>
                <ul className="space-y-1 flex-1 mb-5">
                  {plan.features.map((f) => (
                    <li key={f} className="text-xs text-gray-600 flex gap-1.5"><span className="text-green-500">✓</span>{f}</li>
                  ))}
                </ul>
                <Link
                  href="/dashboard"
                  className={`text-center py-2 rounded-xl text-sm font-semibold transition ${
                    plan.highlight
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {plan.name === "Free" ? "Essayer" : "Choisir"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-black mb-4">Prêt à gagner du temps ?</h2>
        <p className="text-gray-500 mb-8">5 générations gratuites. Pas de carte bancaire requise.</p>
        <Link
          href="/dashboard"
          className="bg-indigo-600 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
        >
          Commencer maintenant →
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2 font-bold text-gray-700">
            AgentFACTORY<span className="text-indigo-600">.AI</span>
          </div>
          <div>© 2026 AgentFACTORY.AI — Tous droits réservés</div>
        </div>
      </footer>
    </div>
  );
}
