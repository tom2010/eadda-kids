/**
 * Newsletter integration point.
 *
 * Connect a provider (Mailchimp, ConvertKit, Brevo, a serverless function, etc.) by setting
 * VITE_NEWSLETTER_ENDPOINT in a .env file. The endpoint must accept a JSON POST of { "email": "..." }
 * and answer with a 2xx status only when the subscription was really accepted.
 *
 * Until an endpoint is configured, this function returns "not_configured" and the UI
 * says so honestly. It never pretends a subscription succeeded.
 */
export type SubscribeResult =
  | { status: "success" }
  | { status: "not_configured" }
  | { status: "error"; message: string };

export const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());

export async function subscribeToNewsletter(email: string): Promise<SubscribeResult> {
  const endpoint = (import.meta.env.VITE_NEWSLETTER_ENDPOINT ?? "").trim();
  if (!endpoint) return { status: "not_configured" };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim() }),
    });
    if (response.ok) return { status: "success" };
    return { status: "error", message: "We could not complete your sign-up. Please try again later." };
  } catch {
    return { status: "error", message: "We could not reach the sign-up service. Please check your connection and try again." };
  }
}
