import { useEffect, useId, useState } from "react";
import { LuPartyPopper, LuRotateCcw, LuTarget } from "react-icons/lu";
import { calculateProgress, formatNaira, parseAmount } from "../lib/savings";
import { Reveal, SectionHeading } from "./ui";
import { Coin } from "./Illustrations";

const STORAGE_KEY = "eadda-savings-goal";
const DEFAULTS = { name: "Save for a storybook", target: "5000", saved: "2000" };

type Values = typeof DEFAULTS;

function loadValues(): Values {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    const parsed = JSON.parse(raw) as Partial<Values>;
    return {
      name: typeof parsed.name === "string" ? parsed.name.slice(0, 40) : DEFAULTS.name,
      target: typeof parsed.target === "string" ? parsed.target.slice(0, 14) : DEFAULTS.target,
      saved: typeof parsed.saved === "string" ? parsed.saved.slice(0, 14) : DEFAULTS.saved,
    };
  } catch {
    return DEFAULTS;
  }
}

export default function SavingsGoal() {
  const [values, setValues] = useState<Values>(loadValues);
  const uid = useId();

  // Only the goal name and two amounts are stored, only in this browser, and only to restore them next visit.
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    } catch {
      /* storage unavailable: the activity still works */
    }
  }, [values]);

  const target = parseAmount(values.target);
  const saved = parseAmount(values.saved);
  const targetError = target.valid && target.value <= 0 ? "Your goal must be more than ₦0." : target.error;
  const canCalculate = target.valid && target.value > 0 && saved.valid;
  const result = canCalculate ? calculateProgress(target.value, saved.value) : null;
  const goalName = values.name.trim() || "my goal";

  const set = (key: keyof Values) => (e: React.ChangeEvent<HTMLInputElement>) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const reset = () => {
    setValues(DEFAULTS);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="savings-goal" aria-labelledby="goal-title" className="section bg-sun-soft/60">
      <div className="container-x">
        <SectionHeading
          id="goal-title"
          eyebrow="Try it out"
          title="My Savings Goal"
          intro="Every little bit you save brings you closer to your goal!"
        />

        <Reveal className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2">
          {/* inputs */}
          <form className="card space-y-5 p-6 sm:p-8" onSubmit={(e) => e.preventDefault()} noValidate aria-label="Savings goal calculator">
            <div>
              <label htmlFor={`${uid}-name`} className="mb-1.5 block font-bold">
                What are you saving for?
              </label>
              <input id={`${uid}-name`} className="field" type="text" maxLength={40} value={values.name} onChange={set("name")} placeholder="Save for a storybook" autoComplete="off" />
            </div>

            <div>
              <label htmlFor={`${uid}-target`} className="mb-1.5 block font-bold">
                Target amount (₦)
              </label>
              <input
                id={`${uid}-target`}
                className="field"
                type="text"
                inputMode="decimal"
                value={values.target}
                onChange={set("target")}
                aria-invalid={Boolean(targetError)}
                aria-describedby={targetError ? `${uid}-target-err` : undefined}
                autoComplete="off"
              />
              {targetError && (
                <p id={`${uid}-target-err`} className="mt-1.5 text-sm font-bold text-[#B3261E]" role="alert">
                  {targetError}
                </p>
              )}
            </div>

            <div>
              <label htmlFor={`${uid}-saved`} className="mb-1.5 block font-bold">
                Amount saved so far (₦)
              </label>
              <input
                id={`${uid}-saved`}
                className="field"
                type="text"
                inputMode="decimal"
                value={values.saved}
                onChange={set("saved")}
                aria-invalid={Boolean(saved.error)}
                aria-describedby={saved.error ? `${uid}-saved-err` : undefined}
                autoComplete="off"
              />
              {saved.error && (
                <p id={`${uid}-saved-err`} className="mt-1.5 text-sm font-bold text-[#B3261E]" role="alert">
                  {saved.error}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button type="button" onClick={reset} className="btn btn-outline !min-h-11">
                <LuRotateCcw className="size-4" aria-hidden="true" /> Reset
              </button>
              <p className="text-xs font-semibold text-ink-soft">The numbers above are examples. Change them to anything you like. They are saved only on this device; press Reset to clear them.</p>
            </div>
          </form>

          {/* results */}
          <div className="card relative overflow-hidden bg-leaf-deep p-6 text-white sm:p-8" aria-live="polite">
            <div className="absolute -right-6 -top-6 opacity-20" aria-hidden="true">
              <svg width="140" height="140" viewBox="0 0 140 140">
                <Coin x={70} y={70} r={60} />
              </svg>
            </div>
            <div className="relative">
              <p className="flex items-center gap-2 font-display text-lg font-semibold text-sun">
                <LuTarget className="size-5" aria-hidden="true" /> Goal
              </p>
              <h3 className="mt-1 break-words text-2xl font-semibold sm:text-3xl">{goalName}</h3>

              {result ? (
                <>
                  <div className="mt-6 flex items-end justify-between gap-3">
                    <span className="font-display text-5xl font-bold text-sun" data-testid="percent">
                      {result.percent}%
                    </span>
                    <span className="pb-1 text-sm font-bold text-white/90">
                      {formatNaira(saved.value)} of {formatNaira(target.value)}
                    </span>
                  </div>

                  <div
                    className="mt-3 h-6 w-full overflow-hidden rounded-full bg-white/25"
                    role="progressbar"
                    aria-label={`Progress toward ${goalName}`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={result.percent}
                  >
                    <div className="h-full rounded-full bg-sun transition-[width] duration-700 ease-out" style={{ width: `${result.percent}%` }} />
                  </div>

                  <dl className="mt-6 grid grid-cols-2 gap-3 text-center">
                    <div className="rounded-2xl bg-white/15 p-3">
                      <dt className="text-xs font-bold uppercase tracking-wide text-white/85">Saved</dt>
                      <dd className="mt-1 text-xl font-bold">{formatNaira(saved.value)}</dd>
                    </div>
                    <div className="rounded-2xl bg-white/15 p-3">
                      <dt className="text-xs font-bold uppercase tracking-wide text-white/85">Still to go</dt>
                      <dd className="mt-1 text-xl font-bold" data-testid="remaining">
                        {formatNaira(result.remaining)}
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-6 flex items-start gap-3 rounded-2xl bg-white p-4 font-bold text-ink" data-testid="message">
                    {result.reached ? (
                      <>
                        <LuPartyPopper className="mt-0.5 size-6 shrink-0 text-coral" aria-hidden="true" />
                        <span>Hooray! You reached your goal. Great job saving!</span>
                      </>
                    ) : (
                      <span>Keep going! Every little bit you save brings you closer to your goal!</span>
                    )}
                  </p>
                </>
              ) : (
                <p className="mt-6 rounded-2xl bg-white/15 p-4 font-semibold">Fill in a target amount and the amount you have saved to see your progress.</p>
              )}
            </div>
          </div>
        </Reveal>

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm font-semibold text-ink-soft">
          This is a practice activity only. It does not take payments, ask for personal details, or earn interest. Children should do it together with a parent or guardian.
        </p>
      </div>
    </section>
  );
}
