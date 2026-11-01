export interface Book {
  slug: string;
  title: string;
  author: string;
  ageRange: string;
  description: string;
  lesson: string;
  /** Path or URL of the real cover image. Leave empty to show a generated placeholder cover. */
  coverUrl: string;
  /** Purchase link. Leave empty until a real destination exists. */
  purchaseUrl: string;
  /** Show this book in the homepage bookstore listing. */
  featured: boolean;
  /** True for demonstration content that is NOT a published title. */
  isSample: boolean;
  accent: "green" | "sun" | "sky" | "coral";
}

/**
 * Replace the sample concepts with published books once titles, covers and
 * purchase links are supplied. Non-featured concepts appear on book detail pages.
 */
export const books: Book[] = [
  {
    slug: "Financial-Intelligence-for-Kids",
    title: "ABC Of Financial Intelligeence",
    author: "Gbonjubola Sanni",
    ageRange: "Ages 4–8 (suggested)",
    description:
      "A child-friendly story concept about discovering the joy of saving, setting goals, and making thoughtful choices with money.",
    lesson: "Understanding the importance of saving toward a goal.",
    coverUrl: "/WhatsApp Image 2026-10-29 at 07.14.08.jpeg",
    purchaseUrl: "",
    featured: true,
    isSample: true,
    accent: "green",
  },
  {
    slug: "the-little-budget-plan",
    title: "The Little Budget Plan",
    author: "Gbonjubola Sanni",
    ageRange: "Ages 6–10 (suggested)",
    description:
      "A sample story concept about planning how to use pocket money for spending, saving, and sharing.",
    lesson: "Making simple choices with a limited amount of money.",
    coverUrl: "",
    purchaseUrl: "",
    featured: false,
    isSample: true,
    accent: "sun",
  },
  {
    slug: "needs-wants-and-wise-choices",
    title: "Needs, Wants & Wise Choices",
    author: "Gbonjubola Sanni",
    ageRange: "Ages 4–8 (suggested)",
    description:
      "A sample story concept that helps children tell the difference between things they need and things they want.",
    lesson: "Thinking carefully before making a purchase.",
    coverUrl: "",
    purchaseUrl: "",
    featured: false,
    isSample: true,
    accent: "sky",
  },
  {
    slug: "a-bright-idea-to-share",
    title: "A Bright Idea to Share",
    author: "Gbonjubola Sanni",
    ageRange: "Ages 7–11 (suggested)",
    description:
      "A sample story concept about turning a creative idea into a small business that serves others.",
    lesson: "Connecting creativity, value, and earning.",
    coverUrl: "",
    purchaseUrl: "",
    featured: false,
    isSample: true,
    accent: "coral",
  },
];
