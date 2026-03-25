"use client";

interface PaywallModalProps {
  tool: string;
  onClose: () => void;
}

const PLANS = [
  {
    name: "Starter",
    price: "19 €",
    period: "/mois",
    features: ["30 générations/mois", "Tous les outils", "Historique 30 jours", "Support email"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "39 €",
    period: "/mois",
    features: ["200 générations/mois", "Tous les outils", "Export PDF & Word", "Support prioritaire"],
    highlight: true,
  },
  {
    name: "Unlimited",
    price: "79 €",
    period: "/mois",
    features: ["Générations illimitées", "Accès API", "White-label", "Support dédié 4h"],
    highlight: false,
  },
];

export default function PaywallModal({ tool, onClose }: PaywallModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">🔒</div>
          <h2 className="text-2xl font-bold text-gray-900">Quota gratuit atteint</h2>
          <p className="text-gray-500 mt-2">
            Vous avez utilisé vos 5 générations gratuites sur <strong>{tool}</strong>.<br />
            Passez à un plan payant pour continuer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border-2 p-5 flex flex-col ${
                plan.highlight
                  ? "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-500 ring-offset-1"
                  : "border-gray-200"
              }`}
            >
              {plan.highlight && (
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full self-start mb-3">
                  Populaire
                </span>
              )}
              <div className="mb-4">
                <div className="font-bold text-lg text-gray-900">{plan.name}</div>
                <div className="text-3xl font-extrabold text-gray-900 mt-1">
                  {plan.price}
                  <span className="text-sm font-normal text-gray-500">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-2 flex-1 mb-5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-lg font-semibold text-sm transition ${
                  plan.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                Choisir {plan.name}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={onClose} className="text-sm text-gray-400 hover:text-gray-600 underline">
            Continuer sans abonnement
          </button>
        </div>
      </div>
    </div>
  );
}
