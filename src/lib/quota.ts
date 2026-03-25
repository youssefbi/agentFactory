// Gestion du quota en localStorage (draft — sera remplacé par Supabase)

const FREE_QUOTA = 5;

export type Tool = "lexai" | "screenai" | "replyai";

function getKey(tool: Tool): string {
  return `quota_${tool}`;
}

export function getRemaining(tool: Tool): number {
  if (typeof window === "undefined") return FREE_QUOTA;
  const used = parseInt(localStorage.getItem(getKey(tool)) ?? "0", 10);
  return Math.max(0, FREE_QUOTA - used);
}

export function consume(tool: Tool): boolean {
  if (typeof window === "undefined") return false;
  const used = parseInt(localStorage.getItem(getKey(tool)) ?? "0", 10);
  if (used >= FREE_QUOTA) return false;
  localStorage.setItem(getKey(tool), String(used + 1));
  return true;
}

export function hasQuota(tool: Tool): boolean {
  return getRemaining(tool) > 0;
}

export function getAllQuotas(): Record<Tool, number> {
  return {
    lexai: getRemaining("lexai"),
    screenai: getRemaining("screenai"),
    replyai: getRemaining("replyai"),
  };
}
