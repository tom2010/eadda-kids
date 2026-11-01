export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  /** Add paragraphs here to publish the full article on this site. While empty, a "full article coming" page is shown. */
  body: string[];
  accent: "green" | "sun" | "sky" | "coral";
}

/**
 * The three articles currently featured on eaddakids.com. Excerpts quote the live site;
 * the full text still needs to be moved across into `body`.
 */
export const articles: Article[] = [
  {
    slug: "history-of-money-in-nigeria",
    title: "History of Money in Nigeria",
    excerpt: "The International Monetary Fund (IMF) has defined money as “a store of value, which…",
    body: [],
    accent: "sun",
  },
  {
    slug: "raising-wealthy-kids",
    title: "Raising Wealthy Kids",
    excerpt: "A World Teacher's Day note about celebrating teachers and being a positive influence on children.",
    body: [],
    accent: "green",
  },
  {
    slug: "should-allowances-be-in-exchange-for-chores",
    title: "Should allowances be in exchange for chores?",
    excerpt: "Allowances are a great tool that can help you teach your kids money management skills.",
    body: [],
    accent: "sky",
  },
];
