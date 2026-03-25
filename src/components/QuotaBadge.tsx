"use client";

interface QuotaBadgeProps {
  remaining: number;
  total?: number;
}

export default function QuotaBadge({ remaining, total = 5 }: QuotaBadgeProps) {
  const isLow = remaining <= 1;
  const isEmpty = remaining === 0;

  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${
        isEmpty
          ? "bg-red-100 text-red-700"
          : isLow
          ? "bg-orange-100 text-orange-700"
          : "bg-green-100 text-green-700"
      }`}
    >
      <span>{isEmpty ? "⛔" : isLow ? "⚠️" : "✨"}</span>
      {isEmpty ? "Quota épuisé" : `${remaining}/${total} générations gratuites`}
    </span>
  );
}
