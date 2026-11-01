import { useEffect, useState } from "react";

export type Route =
  | { name: "home" }
  | { name: "book"; slug: string }
  | { name: "article"; slug: string }
  | { name: "resource"; slug: string }
  | { name: "author" }
  | { name: "about" }
  | { name: "programmes" }
  | { name: "privacy" }
  | { name: "terms" }
  | { name: "notfound" };

export function parseHash(hash: string): Route {
  if (!hash.startsWith("#/")) return { name: "home" };
  const [, section, slug] = hash.split("/");
  switch (section) {
    case "books":
      return slug ? { name: "book", slug } : { name: "notfound" };
    case "articles":
      return slug ? { name: "article", slug } : { name: "notfound" };
    case "resources":
      return slug ? { name: "resource", slug } : { name: "notfound" };
    case "author":
      return { name: "author" };
    case "about":
      return { name: "about" };
    case "programmes":
      return { name: "programmes" };
    case "privacy":
      return { name: "privacy" };
    case "terms":
      return { name: "terms" };
    default:
      return { name: "notfound" };
  }
}

/** Tiny hash router: "#/books/slug" opens a page; "#about" scrolls to a section on the home page. */
export function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const route = parseHash(hash);

  // After the route renders, scroll to the section (home) or to the top (pages).
  useEffect(() => {
    const id = window.setTimeout(() => {
      if (route.name === "home") {
        const target = hash.length > 1 ? document.getElementById(hash.slice(1)) : null;
        if (target) {
          target.scrollIntoView();
          target.setAttribute("tabindex", "-1");
        } else if (hash.length <= 1) {
          window.scrollTo({ top: 0 });
        }
      } else {
        window.scrollTo({ top: 0 });
      }
    }, 0);
    return () => window.clearTimeout(id);
  }, [hash, route.name]);

  return route;
}
