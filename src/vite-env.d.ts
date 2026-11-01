/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Optional: URL of a newsletter provider / serverless endpoint that accepts POST { email }. */
  readonly VITE_NEWSLETTER_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
