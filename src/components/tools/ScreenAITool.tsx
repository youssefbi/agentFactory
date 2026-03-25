"use client";

import { useState, useEffect } from "react";
import { hasQuota, consume, getRemaining } from "@/lib/quota";
import QuotaBadge from "@/components/QuotaBadge";
import PaywallModal from "@/components/PaywallModal";
import type { ScreenAIResult } from "@/agents/screenai";

const RECOMMENDATION_CONFIG = {
  recruter: { label: "✅ Recruter", color: "bg-green-100 text-green-800" },
  ne_pas_recruter: { label: "❌ Ne pas recruter", color: "bg-red-100 text-red-800" },
  second_entretien: { label: "🔄 Second entretien", color: "bg-orange-100 text-orange-800" },
};

export default function ScreenAITool() {
  const [form, setForm] = useState({ jobTitle: "", cvText: "" });
  const [result, setResult] = useState<ScreenAIResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPaywall, setShowPaywall] = useState(false);
  const [remaining, setRemaining] = useState(5);

  useEffect(() => {
    setRemaining(getRemaining("screenai"));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!hasQuota("screenai")) {
      setShowPaywall(true);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/screenai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      consume("screenai");
      setRemaining(getRemaining("screenai"));
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      {showPaywall && <PaywallModal tool="ScreenAI" onClose={() => setShowPaywall(false)} />}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">ScreenAI</h2>
          <p className="text-sm text-gray-500">Analyse un CV et génère un rapport d&apos;adéquation au poste</p>
        </div>
        <QuotaBadge remaining={remaining} />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Poste recherché</label>
          <input
            type="text"
            required
            placeholder="Développeur Full Stack React/Node.js"
            value={form.jobTitle}
            onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Texte du CV</label>
          <textarea
            required
            rows={10}
            placeholder="Collez ici le texte complet du CV..."
            value={form.cvText}
            onChange={(e) => setForm({ ...form, cvText: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={loading || remaining === 0}
          className="w-full bg-purple-600 text-white py-2.5 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {loading ? "Analyse en cours..." : "🔍 Analyser le CV"}
        </button>
      </form>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
      )}

      {result && (
        <div className="space-y-4">
          {/* Score + Recommendation */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <div className="text-3xl font-extrabold text-purple-700">{result.score}</div>
              <div className="text-xs text-purple-500 mt-1">Score global /100</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="text-3xl font-extrabold text-blue-700">{result.matchPercentage}%</div>
              <div className="text-xs text-blue-500 mt-1">Adéquation au poste</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center flex flex-col items-center justify-center">
              <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${RECOMMENDATION_CONFIG[result.recommendation].color}`}>
                {RECOMMENDATION_CONFIG[result.recommendation].label}
              </span>
            </div>
          </div>

          {/* Strengths / Weaknesses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4">
              <h4 className="font-semibold text-green-800 mb-2">✅ Points forts</h4>
              <ul className="space-y-1">
                {result.strengths.map((s, i) => (
                  <li key={i} className="text-sm text-green-700">• {s}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4">
              <h4 className="font-semibold text-red-800 mb-2">⚠️ Lacunes</h4>
              <ul className="space-y-1">
                {result.weaknesses.map((w, i) => (
                  <li key={i} className="text-sm text-red-700">• {w}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interview Questions */}
          <div className="bg-yellow-50 rounded-xl p-4">
            <h4 className="font-semibold text-yellow-800 mb-2">💬 Questions d&apos;entretien recommandées</h4>
            <ol className="space-y-1">
              {result.interviewQuestions.map((q, i) => (
                <li key={i} className="text-sm text-yellow-700">{i + 1}. {q}</li>
              ))}
            </ol>
          </div>

          {/* Verdict */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <h4 className="font-semibold text-gray-800 mb-1">📋 Verdict</h4>
            <p className="text-sm text-gray-700">{result.verdict}</p>
          </div>
        </div>
      )}
    </div>
  );
}
