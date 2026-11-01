import { useId, useState } from "react";
import { LuCheck, LuCircleAlert, LuLoaderCircle, LuMail, LuShieldCheck } from "react-icons/lu";
import { isValidEmail, subscribeToNewsletter } from "../lib/newsletter";
import { Reveal } from "./ui";

type State = { kind: "idle" } | { kind: "loading" } | { kind: "success" } | { kind: "error"; message: string } | { kind: "invalid"; message: string };

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>({ kind: "idle" });
  const uid = useId();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setState({ kind: "invalid", message: "Please enter a valid email address, like name@example.com." });
      return;
    }
    setState({ kind: "loading" });
    const result = await subscribeToNewsletter(email);
    if (result.status === "success") {
      setState({ kind: "success" });
      setEmail("");
    } else if (result.status === "not_configured") {
      setState({ kind: "error", message: "Sign-up is not switched on yet, so your email was not saved. Please check back soon." });
    } else {
      setState({ kind: "error", message: result.message });
    }
  };

  const loading = state.kind === "loading";
  const hasError = state.kind === "invalid" || state.kind === "error";

  return (
    <section id="newsletter" aria-labelledby="newsletter-title" className="section bg-leaf-deep text-white">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow !bg-white/15 !text-sun">For parents and guardians</span>
          <h2 id="newsletter-title" className="section-title mt-4 text-balance">
            Don’t miss a post
          </h2>
          <p className="mt-4 text-lg text-white/90 text-pretty">Take deliberate actions on your child’s journey to wealth. Get notified on our latest articles.</p>

          <form onSubmit={onSubmit} noValidate className="mx-auto mt-8 max-w-xl text-left">
            <label htmlFor={`${uid}-email`} className="mb-1.5 block font-bold">
              Parent or guardian email
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <LuMail className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink-soft" aria-hidden="true" />
                <input
                  id={`${uid}-email`}
                  type="email"
                  autoComplete="email"
                  className="field !pl-12"
                  placeholder="parent@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (state.kind !== "loading") setState({ kind: "idle" });
                  }}
                  aria-invalid={hasError}
                  aria-describedby={`${uid}-privacy ${uid}-status`}
                  disabled={loading}
                />
              </div>
              <button type="submit" className="btn btn-sun" disabled={loading} aria-busy={loading}>
                {loading ? (
                  <>
                    <LuLoaderCircle className="size-5 animate-spin" aria-hidden="true" /> Subscribing…
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>

            <div id={`${uid}-status`} role="status" aria-live="polite" className="mt-3 min-h-6 text-sm font-bold">
              {state.kind === "success" && (
                <p className="flex items-center gap-2 rounded-xl bg-white p-3 text-leaf-deep">
                  <LuCheck className="size-5 shrink-0" aria-hidden="true" /> Thank you! You are subscribed.
                </p>
              )}
              {(state.kind === "error" || state.kind === "invalid") && (
                <p className="flex items-start gap-2 rounded-xl bg-white p-3 text-[#B3261E]">
                  <LuCircleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" /> {state.message}
                </p>
              )}
            </div>

            <p id={`${uid}-privacy`} className="mt-3 flex items-start gap-2 text-sm text-white/85">
              <LuShieldCheck className="mt-0.5 size-4 shrink-0 text-sun" aria-hidden="true" />
              <span>
                This sign-up is for adults only. Children should not enter their details. We use your email only to send Eadda Kids updates and never share it for advertising. You can unsubscribe at any time. See our <a className="font-extrabold underline underline-offset-2" href="#/privacy">Privacy Policy</a>.
              </span>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
