import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "../lib/useReveal";

export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: { children: ReactNode; delay?: number; className?: string; as?: "div" | "li" | "article" }) {
  const ref = useReveal<HTMLElement>();
  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;
  return (
    <Tag ref={ref as never} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}

export function SectionHeading({ eyebrow, title, intro, align = "center", id }: { eyebrow?: string; title: string; intro?: string; align?: "center" | "left"; id?: string }) {
  return (
    <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2 id={id} className="section-title text-balance">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg text-ink-soft text-pretty">{intro}</p>}
    </div>
  );
}

/** Link that looks like a button. Use only when a real destination exists. */
export function LinkButton({ href, children, variant = "primary", external = false, className = "" }: { href: string; children: ReactNode; variant?: "primary" | "sun" | "outline"; external?: boolean; className?: string }) {
  return (
    <a href={href} className={`btn btn-${variant} ${className}`} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}

/** Honest placeholder for a destination that has not been supplied yet. Not clickable. */
export function SoonButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <button type="button" disabled aria-disabled="true" className={`btn btn-disabled ${className}`}>
      {children}
    </button>
  );
}

export function BackHome({ label = "Back to home" }: { label?: string }) {
  return (
    <a href="#home" className="inline-flex min-h-11 items-center gap-2 rounded-full font-bold text-leaf-deep underline-offset-4 hover:underline">
      <span aria-hidden="true">←</span> {label}
    </a>
  );
}
