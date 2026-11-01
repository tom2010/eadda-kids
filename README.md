# Eadda Kids — Children's Financial Education Website

A modern redesign of **[eaddakids.com](https://eaddakids.com)**, a children's financial education platform based in Lagos, Nigeria, featuring author **Gbonjubola Sanni**.

Eadda Kids is designed to help children develop healthy financial habits through engaging educational content covering saving, sharing, spending, and money management.

## ✨ Features

* Responsive and modern user interface.
* Educational content focused on children's financial literacy.
* The 3S of Money: Save, Share, and Spend.
* Events and educational programmes.
* Featured articles and blog section.
* Author profile and biography.
* Bookstore and educational resources.
* Savings goal calculator.
* Newsletter subscription integration.
* Contact and social media links.
* Hash-based navigation for static hosting.

## 🛠️ Tech Stack

* **React 19** – UI development.
* **Vite** – Development environment and build tool.
* **TypeScript** – Type safety.
* **Tailwind CSS v4** – Styling.
* **React Icons (Lucide)** – Icon library.

## 🚀 Getting Started

### Prerequisites

* Node.js
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/tom2010/eadda-kids.git
```

Navigate into the project directory:

```bash
cd eadda-kids
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application at:

```text
http://localhost:5173
```

### Available Scripts

| Command                 | Description                                                     |
| ----------------------- | --------------------------------------------------------------- |
| `npm run dev`           | Starts the development server                                   |
| `npm run build`         | Type-checks and builds the production application               |
| `npm run preview`       | Previews the production build                                   |
| `npm run build:preview` | Generates a self-contained preview in `dist-preview/index.html` |

## 📁 Project Structure

```text
src/
├── components/
│   ├── Navbar
│   ├── Hero
│   ├── ThreeS
│   ├── Events
│   ├── SavingsGoal
│   ├── FeaturedBooks
│   ├── BlogSection
│   ├── AboutAuthor
│   ├── Newsletter
│   ├── CallToAction
│   ├── Footer
│   ├── Pages
│   ├── Illustrations
│   └── ui
│
├── data/
│   ├── site.ts
│   ├── author.ts
│   ├── books.ts
│   ├── resources.ts
│   ├── articles.ts
│   ├── testimonials.ts
│   └── navigation.ts
│
├── lib/
│   ├── savings.ts
│   ├── newsletter.ts
│   ├── useHashRoute.ts
│   └── useReveal.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

## 📝 Content Management

Project content is organised into dedicated data files:

| File              | Purpose                                         |
| ----------------- | ----------------------------------------------- |
| `site.ts`         | Mission, contact details and social media links |
| `events.ts`       | Events, dates, venues and booking information   |
| `author.ts`       | Author biography, photograph and qualifications |
| `books.ts`        | Books, covers and purchase links                |
| `articles.ts`     | Blog articles and content                       |
| `resources.ts`    | Educational resources and downloads             |
| `testimonials.ts` | Genuine testimonials                            |

### Important Notes

* Empty content fields display a coming-soon state rather than fabricated information.
* "My First Savings Adventure" is a sample book concept, not a published title.
* The current logo is a temporary text-based mark.
* Privacy Policy and Terms pages are drafts requiring review before launch.
* Newsletter integration requires configuring `VITE_NEWSLETTER_ENDPOINT`.

## 🎯 Project Goal

To make financial literacy accessible and enjoyable for children by teaching them essential money management skills early in life.

## 👨‍💻 Developer

**John Tom**

Frontend Developer | React | TypeScript | JavaScript

---

**Eadda Kids — Building Smart Financial Habits for a Brighter Future.**
