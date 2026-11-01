# Eadda Kids — children's financial education website

Redesign of **eaddakids.com** (Eadda Kids, Lagos, Nigeria), with author details for **Gbonjubola Sanni**.
Content comes from the live site: nav, mission, 3S of Money (Save, Share, Spend), events, three articles, newsletter and contact details.
React 19 + Vite + TypeScript + Tailwind CSS v4. Icons are the Lucide set via `react-icons/lu`.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

`npm run build:preview` builds a single self-contained `dist-preview/index.html` (no Vite needed).

## Where to put real content (nothing is invented)

| What | File |
| --- | --- |
| Mission text, contact details, Facebook / Twitter / Instagram URLs | `src/data/site.ts` |
| Events (dates, venues, booking) | `src/data/events.ts` |
| Author photo, personal story, qualifications | `src/data/author.ts` (put the photo in `public/`) |
| Real books, covers, purchase links | `src/data/books.ts` |
| Articles (add `body` paragraphs to publish) | `src/data/articles.ts` |
| Resources and downloadable files | `src/data/resources.ts` |
| Genuine testimonials (only with permission) | `src/data/testimonials.ts` |
| Newsletter provider | set `VITE_NEWSLETTER_ENDPOINT` (see `.env.example`, `src/lib/newsletter.ts`) |

Anything left empty shows an honest "coming soon" state instead of a fake link, download or review.
The book "My First Savings Adventure" is a clearly labelled **sample concept**, not a published title.
The logo is a temporary text mark, not an official logo. Privacy Policy and Terms are drafts to be reviewed before launch.

## Structure

```
src/
  components/   Navbar (with EaddaKids dropdown), Hero, ThreeS, Events, SavingsGoal, FeaturedBooks (Our Bookstore),
                BlogSection, AboutAuthor, Newsletter, CallToAction (Let's talk), Footer,
                Pages (about / programmes / article / book / legal pages), Illustrations, ui
                Unused from the first version, kept for reuse: Introduction, SavingBenefits,
                ParentTeacherResources, EducationalResources, InstagramSection, Testimonials
  data/         site, author, books, resources, articles, testimonials, navigation
  lib/          savings (calculator maths), newsletter, useHashRoute, useReveal
  App.tsx  main.tsx  index.css
```

Pages use hash links (`#/books/...`), so the site works on any static host without server rewrites.
