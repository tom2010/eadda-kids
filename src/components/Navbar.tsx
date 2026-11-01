import { useEffect, useRef, useState } from "react";
import { LuChevronDown, LuMenu, LuX } from "react-icons/lu";
import { navLinks } from "../data/navigation";
import { site } from "../data/site";

function Logo() {
  return (
    <a href="#home" className="flex min-h-14 items-center rounded-full pr-2" aria-label={`${site.brandName} home`}>
      <img src="/eaddakids-logo.png" alt="" className="h-14 w-14 object-contain" />
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (dropdown) setDropdown(false);
      if (open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setDropdown(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open, dropdown]);

  const linkClass = "inline-flex min-h-11 items-center rounded-full px-4 text-[0.97rem] font-bold text-ink transition-colors hover:bg-leaf-soft hover:text-leaf-deep";

  return (
    <header className={`sticky top-0 z-50 transition-shadow ${scrolled ? "bg-cream/95 shadow-soft backdrop-blur" : "bg-cream"}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-leaf-deep focus:px-4 focus:py-2 focus:text-white">
        Skip to main content
      </a>
      <nav aria-label="Main" className="container-x flex items-center justify-between gap-3 py-2.5">
        <Logo />

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((l) =>
            l.children ? (
              <li key={l.label} ref={dropdownRef} className="relative">
                <button type="button" className={`${linkClass} gap-1.5`} aria-expanded={dropdown} aria-haspopup="true" onClick={() => setDropdown((d) => !d)}>
                  {l.label}
                  <LuChevronDown className={`size-4 transition-transform ${dropdown ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                {dropdown && (
                  <ul className="absolute left-0 top-full mt-2 w-56 rounded-2xl bg-white p-2 shadow-lift">
                    {l.children.map((c) => (
                      <li key={c.href}>
                        <a href={c.href} className="flex min-h-11 items-center rounded-xl px-4 font-bold hover:bg-leaf-soft hover:text-leaf-deep" onClick={() => setDropdown(false)}>
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={l.href}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-primary hidden !min-h-11 !px-5 sm:inline-flex">
            Let's talk
          </a>
          <button
            ref={menuButton}
            type="button"
            className="inline-flex size-12 items-center justify-center rounded-full bg-white text-leaf-deep shadow-sm hover:bg-leaf-soft lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <LuX className="size-6" /> : <LuMenu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-leaf/15 bg-cream lg:hidden">
          <ul className="container-x flex flex-col gap-1 py-3">
            {navLinks.map((l) => (
              <li key={l.label}>
                {l.children ? (
                  <>
                    <p className="px-4 pt-2 text-sm font-extrabold uppercase tracking-wide text-ink-soft">{l.label}</p>
                    <ul>
                      {l.children.map((c) => (
                        <li key={c.href}>
                          <a href={c.href} className="flex min-h-12 items-center rounded-2xl px-4 text-lg font-bold hover:bg-leaf-soft" onClick={() => setOpen(false)}>
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a href={l.href} className="flex min-h-12 items-center rounded-2xl px-4 text-lg font-bold hover:bg-leaf-soft" onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                )}
              </li>
            ))}
            <li className="pt-2">
              <a href="#contact" className="btn btn-primary w-full" onClick={() => setOpen(false)}>
                Let's talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
