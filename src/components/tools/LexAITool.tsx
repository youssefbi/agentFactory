"use client";

import { useState, useEffect } from "react";
import { hasQuota, consume, getRemaining } from "@/lib/quota";
import QuotaBadge from "@/components/QuotaBadge";
import PaywallModal from "@/components/PaywallModal";
import type { ContractType } from "@/agents/lexai";

const CONTRACT_TYPES: { value: ContractType; label: string }[] = [
  { value: "prestation_services", label: "Prestation de services" },
  { value: "developpement_logiciel", label: "Développement logiciel" },
  { value: "consulting", label: "Consulting / Conseil" },
  { value: "nda", label: "Accord de confidentialité (NDA)" },
  { value: "partenariat", label: "Partenariat commercial" },
  { value: "maintenance", label: "Contrat de maintenance" },
];

export default function LexAITool() {
  const [form, setForm] = useState({
    clientName: "",
    providerName: "",
    amount: "",
    duration: "",
    contractType: "prestation_services" as ContractType,
  });
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPaywall, setShowPaywall] = useState(false);
  const [remaining, setRemaining] = useState(5);

  useEffect(() => {
    setRemaining(getRemaining("lexai"));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!hasQuota("lexai")) {
      setShowPaywall(true);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/lexai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      consume("lexai");
      setRemaining(getRemaining("lexai"));
      setResult(data.contract);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      {showPaywall && <PaywallModal tool="LexAI" onClose={() => setShowPaywall(false)} />}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">LexAI</h2>
          <p className="text-sm text-gray-500">Génère un contrat juridique professionnel en 30 secondes</p>
        </div>
        <QuotaBadge remaining={remaining} />
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom du client</label>
          <input
            type="text"
            required
            placeholder="Acme SARL"
            value={form.clientName}
            onChange={(e) => setForm({ ...form, clientName: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom du prestataire</label>
          <input
            type="text"
            required
            placeholder="Jean Martin"
            value={form.providerName}
            onChange={(e) => setForm({ ...form, providerName: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Montant HT</label>
          <input
            type="text"
            required
            placeholder="5 000 €"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Durée</label>
          <input
            type="text"
            required
            placeholder="3 mois"
            value={form.duration}
            onChange={(e) => setForm({ ...form, duration: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Type de contrat</label>
          <select
            value={form.contractType}
            onChange={(e) => setForm({ ...form, contractType: e.target.value as ContractType })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {CONTRACT_TYPES.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading || remaining === 0}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? "Génération en cours..." : "⚡ Générer le contrat"}
          </button>
        </div>
      </form>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
      )}

      {result && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">Contrat généré</h3>
            <button
              onClick={() => navigator.clipboard.writeText(result)}
              className="text-xs text-indigo-600 hover:text-indigo-800 font-medium"
            >
              📋 Copier
            </button>
          </div>
          <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono leading-relaxed">{result}</pre>
        </div>
      )}
    </div>
  );
}
