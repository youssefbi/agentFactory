"use client";

import { useState, useEffect } from "react";
import { hasQuota, consume, getRemaining } from "@/lib/quota";
import QuotaBadge from "@/components/QuotaBadge";
import PaywallModal from "@/components/PaywallModal";
import type { Tone } from "@/agents/replyai";

const TONES: { value: Tone; label: string }[] = [
  { value: "professionnel_chaleureux", label: "Professionnel et chaleureux" },
  { value: "empathique_sincere", label: "Empathique et sincère" },
  { value: "formel_courtois", label: "Formel et courtois" },
  { value: "detendu_humain", label: "Détendu et humain" },
  { value: "ferme_poli", label: "Ferme mais poli" },
];

const STARS = [1, 2, 3, 4, 5] as const;

export default function ReplyAITool() {
  const [form, setForm] = useState({
    establishmentName: "",
    rating: 3 as 1 | 2 | 3 | 4 | 5,
    tone: "professionnel_chaleureux" as Tone,
    reviewText: "",
  });
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPaywall, setShowPaywall] = useState(false);
  const [remaining, setRemaining] = useState(5);

  useEffect(() => {
    setRemaining(getRemaining("replyai"));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!hasQuota("replyai")) {
      setShowPaywall(true);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/replyai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      consume("replyai");
      setRemaining(getRemaining("replyai"));
      setResult(data.reply);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      {showPaywall && <PaywallModal tool="ReplyAI" onClose={() => setShowPaywall(false)} />}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">ReplyAI</h2>
          <p className="text-sm text-gray-500">Répondez aux avis Google de façon professionnelle en 1 clic</p>
        </div>
        <QuotaBadge remaining={remaining} />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nom de l&apos;établissement</label>
            <input
              type="text"
              required
              placeholder="Restaurant Le Médina"
              value={form.establishmentName}
              onChange={(e) => setForm({ ...form, establishmentName: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ton souhaité</label>
            <select
              value={form.tone}
              onChange={(e) => setForm({ ...form, tone: e.target.value as Tone })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {TONES.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Note de l&apos;avis</label>
          <div className="flex gap-2">
            {STARS.map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setForm({ ...form, rating: star })}
                className={`text-2xl transition-transform hover:scale-110 ${
                  star <= form.rating ? "opacity-100" : "opacity-30"
                }`}
              >
                ⭐
              </button>
            ))}
            <span className="ml-2 text-sm text-gray-500 self-center">{form.rating}/5</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Texte de l&apos;avis reçu</label>
          <textarea
            required
            rows={4}
            placeholder="Collez ici le texte de l'avis Google..."
            value={form.reviewText}
            onChange={(e) => setForm({ ...form, reviewText: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading || remaining === 0}
          className="w-full bg-emerald-600 text-white py-2.5 rounded-lg font-semibold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {loading ? "Génération en cours..." : "💬 Générer la réponse"}
        </button>
      </form>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
      )}

      {result && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-emerald-800">Réponse générée</h3>
            <button
              onClick={() => navigator.clipboard.writeText(result)}
              className="text-xs text-emerald-700 hover:text-emerald-900 font-medium"
            >
              📋 Copier
            </button>
          </div>
          <p className="text-sm text-emerald-900 leading-relaxed">{result}</p>
        </div>
      )}
    </div>
  );
}
