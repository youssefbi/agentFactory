"use client";

import { useState } from "react";
import LexAITool from "@/components/tools/LexAITool";
import ScreenAITool from "@/components/tools/ScreenAITool";
import ReplyAITool from "@/components/tools/ReplyAITool";

const TOOLS = [
  {
    id: "lexai",
    name: "LexAI",
    emoji: "📄",
    tagline: "Contrats juridiques",
    description: "Génère des contrats professionnels en 30 secondes",
    color: "indigo",
    component: LexAITool,
  },
  {
    id: "screenai",
    name: "ScreenAI",
    emoji: "🔍",
    tagline: "Analyse de CV",
    description: "Rapport d'adéquation CV/poste instantané",
    color: "purple",
    component: ScreenAITool,
  },
  {
    id: "replyai",
    name: "ReplyAI",
    emoji: "💬",
    tagline: "Avis Google",
    description: "Réponses professionnelles aux avis clients",
    color: "emerald",
    component: ReplyAITool,
  },
];

const COLOR_CLASSES: Record<string, string> = {
  indigo: "border-indigo-500 bg-indigo-50 text-indigo-700",
  purple: "border-purple-500 bg-purple-50 text-purple-700",
  emerald: "border-emerald-500 bg-emerald-50 text-emerald-700",
};

const ACTIVE_TAB: Record<string, string> = {
  indigo: "bg-indigo-600 text-white shadow-sm",
  purple: "bg-purple-600 text-white shadow-sm",
  emerald: "bg-emerald-600 text-white shadow-sm",
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("lexai");
  const ActiveComponent = TOOLS.find((t) => t.id === activeTab)!.component;
  const activeTool = TOOLS.find((t) => t.id === activeTab)!;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-black text-gray-900">Agent</span>
            <span className="text-xl font-black text-indigo-600">FACTORY</span>
            <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-semibold">AI</span>
          </a>
          <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">Version Draft — MVP</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Tool Tabs */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-1">
          {TOOLS.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTab(tool.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
                activeTab === tool.id
                  ? ACTIVE_TAB[tool.color]
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <span>{tool.emoji}</span>
              <span>{tool.name}</span>
            </button>
          ))}
        </div>

        {/* Active Tool Card */}
        <div className={`bg-white rounded-2xl border-2 p-8 shadow-sm ${COLOR_CLASSES[activeTool.color]}`}>
          <ActiveComponent />
        </div>

        {/* Other tools preview */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {TOOLS.filter((t) => t.id !== activeTab).map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTab(tool.id)}
              className="bg-white rounded-xl border border-gray-200 p-4 text-left hover:border-gray-300 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{tool.emoji}</span>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {tool.name}
                  </div>
                  <div className="text-xs text-gray-500">{tool.description}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
