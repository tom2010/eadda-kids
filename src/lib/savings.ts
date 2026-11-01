export const MAX_AMOUNT = 1_000_000_000;

export interface ParsedAmount {
  value: number;
  valid: boolean;
  error?: string;
}

/** Parses a user-entered money amount. Accepts digits with optional commas and one decimal point. */
export function parseAmount(raw: string): ParsedAmount {
  const cleaned = raw.replace(/[,\s₦]/g, "");
  if (cleaned === "") return { value: 0, valid: false, error: "Please enter an amount." };
  if (cleaned.startsWith("-")) return { value: 0, valid: false, error: "Amounts cannot be negative." };
  if (!/^\d*\.?\d{0,2}$/.test(cleaned) || cleaned === ".") {
    return { value: 0, valid: false, error: "Use numbers only (for example 2000)." };
  }
  const value = Number(cleaned);
  if (!Number.isFinite(value)) return { value: 0, valid: false, error: "Use numbers only." };
  if (value > MAX_AMOUNT) return { value: 0, valid: false, error: "That number is too big." };
  return { value, valid: true };
}

export interface SavingsResult {
  percent: number; // 0..100, rounded to a whole number, never rounds up to 100 unless goal is reached
  remaining: number;
  reached: boolean;
}

export function calculateProgress(target: number, saved: number): SavingsResult {
  if (target <= 0) return { percent: 0, remaining: 0, reached: false };
  const reached = saved >= target;
  const raw = (saved / target) * 100;
  const percent = reached ? 100 : Math.min(99, Math.floor(raw));
  return { percent, remaining: Math.max(0, +(target - saved).toFixed(2)), reached };
}

export const formatNaira = (n: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }).format(n);
