import { useState, type ReactNode } from "react";
import { LuCheck, LuRotateCcw, LuX } from "react-icons/lu";
import { author } from "../data/author";
import { articles } from "../data/articles";
import { books } from "../data/books";
import { audienceCards, resources } from "../data/resources";
import { events } from "../data/events";
import { site } from "../data/site";
import type { Route } from "../lib/useHashRoute";
import { BookCover } from "./Illustrations";
import { BackHome, LinkButton, SoonButton } from "./ui";

function PageShell({ title, eyebrow, children }: { title: string; eyebrow?: string; children: ReactNode }) {
  return (
    <section className="section" aria-labelledby="page-title">
      <div className="container-x max-w-3xl">
        <BackHome />
        {eyebrow && <p className="mt-6"><span className="eyebrow">{eyebrow}</span></p>}
        <h1 id="page-title" className="mt-4 text-[clamp(2rem,5.5vw,3.2rem)] font-bold text-balance">
          {title}
        </h1>
        <div className="mt-6 space-y-4 text-lg text-ink-soft">{children}</div>
      </div>
    </section>
  );
}

function ComingSoon({ what }: { what: string }) {
  return (
    <p className="rounded-2xl bg-sun-soft p-4 font-bold text-ink" role="note">
      {what} will be added here soon.
    </p>
  );
}

/* ---------- Needs vs. Wants: a real on-page activity ---------- */
const needsWants = [
  { item: "Clean drinking water", answer: "need", why: "Everybody needs water to stay healthy." },
  { item: "A video game", answer: "want", why: "Games are fun, but we can live well without one." },
  { item: "School books", answer: "need", why: "Books help us learn at school." },
  { item: "Sweets and candy", answer: "want", why: "A treat is nice, but our bodies do not need it." },
  { item: "A warm meal", answer: "need", why: "Food gives us energy to grow." },
  { item: "A new toy car", answer: "want", why: "Toys are fun, but not something we must have." },
  { item: "Shoes that fit", answer: "need", why: "Shoes protect our feet." },
  { item: "Shiny stickers", answer: "want", why: "Stickers are fun to collect, but we do not need them." },
  { item: "A visit to the doctor when sick", answer: "need", why: "Getting well is very important." },
  { item: "A fancy party balloon", answer: "want", why: "Balloons are lovely, but they are not necessary." },
] as const;

function NeedsVsWants() {
  const [choices, setChoices] = useState<Record<number, "need" | "want">>({});
  const answered = Object.keys(choices).length;
  const score = needsWants.filter((q, i) => choices[i] === q.answer).length;
  const done = answered === needsWants.length;

  return (
    <PageShell title="Needs vs. Wants Activity" eyebrow="Try it now · Ages 5+">
      <p>Is it something we need, or something we want? Tap an answer for each item. A grown-up can talk about each one with you.</p>
      <ul className="space-y-3">
        {needsWants.map((q, i) => {
          const choice = choices[i];
          const correct = choice === q.answer;
          return (
            <li key={q.item} className="card p-4">
              <p className="font-display text-xl font-semibold text-ink">{q.item}</p>
              <div className="mt-3 flex gap-3" role="group" aria-label={`Is "${q.item}" a need or a want?`}>
                {(["need", "want"] as const).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    disabled={Boolean(choice)}
                    aria-pressed={choice === opt}
                    onClick={() => setChoices((c) => ({ ...c, [i]: opt }))}
                    className={`btn !min-h-11 flex-1 capitalize ${choice === opt ? (correct ? "btn-primary" : "btn-sun") : "btn-outline"}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {choice && (
                <p className="mt-3 flex items-start gap-2 text-base font-semibold text-ink" role="status">
                  {correct ? <LuCheck className="mt-1 size-5 shrink-0 text-leaf-deep" aria-hidden="true" /> : <LuX className="mt-1 size-5 shrink-0 text-coral" aria-hidden="true" />}
                  <span>
                    {correct ? "Well done! " : `Good try! It is a ${q.answer}. `}
                    {q.why}
                  </span>
                </p>
              )}
            </li>
          );
        })}
      </ul>
      <div aria-live="polite" className="card bg-leaf-soft p-5 text-center">
        <p className="font-display text-2xl font-semibold text-leaf-deep">
          {done ? `You got ${score} out of ${needsWants.length}!` : `${answered} of ${needsWants.length} answered`}
        </p>
        {done && <p className="mt-1 text-ink">Talking about needs and wants helps us make thoughtful choices.</p>}
        <button type="button" className="btn btn-outline mt-4" onClick={() => setChoices({})}>
          <LuRotateCcw className="size-4" aria-hidden="true" /> Play again
        </button>
      </div>
    </PageShell>
  );
}

/* ---------- Route renderer ---------- */
export default function Pages({ route }: { route: Route }) {
  switch (route.name) {
    case "book": {
      const book = books.find((b) => b.slug === route.slug);
      if (!book) return <NotFound />;
      const otherBooks = books.filter((candidate) => candidate.slug !== book.slug);
      return (
        <PageShell title={book.title} eyebrow={book.isSample ? "Sample concept" : "Book"}>
          <div className="mx-auto max-w-xs">
            <BookCover title={book.title} author={book.author} tone={book.accent} sample={book.isSample} coverUrl={book.coverUrl} className="w-full rounded-2xl shadow-lift" />
          </div>
          <p>
            By <strong className="text-ink">{book.author}</strong> · {book.ageRange}
          </p>
          <p>{book.description}</p>
          <p>
            <strong className="text-ink">What children learn:</strong> {book.lesson}
          </p>
          {book.isSample && <p className="rounded-2xl bg-sun-soft p-4 font-bold text-ink" role="note">This is a demonstration entry, not a confirmed published title. Replace it in <code>src/data/books.ts</code> with the real book details.</p>}
          {book.purchaseUrl ? <LinkButton href={book.purchaseUrl} external>Get the Book</LinkButton> : <SoonButton>Purchase link coming soon</SoonButton>}
          {otherBooks.length > 0 && (
            <section aria-labelledby="other-books-title" className="space-y-4">
              <h2 id="other-books-title" className="text-2xl font-bold text-ink">
                Explore other sample concepts
              </h2>
              <ul className="grid gap-4 sm:grid-cols-3">
                {otherBooks.map((otherBook) => (
                  <li key={otherBook.slug} className="rounded-2xl bg-white p-4 shadow-sm">
                    <BookCover
                      title={otherBook.title}
                      author={otherBook.author}
                      tone={otherBook.accent}
                      sample={otherBook.isSample}
                      coverUrl={otherBook.coverUrl}
                      className="mx-auto mb-4 aspect-[3/4] w-full max-w-36 rounded-xl"
                    />
                    <h3 className="text-lg font-bold text-ink">{otherBook.title}</h3>
                    <p className="mt-2 text-base">{otherBook.description}</p>
                    <LinkButton href={`#/books/${otherBook.slug}`} variant="outline" className="mt-4">
                      Learn More
                    </LinkButton>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </PageShell>
      );
    }

    case "article": {
      const article = articles.find((a) => a.slug === route.slug);
      if (!article) return <NotFound />;
      return (
        <PageShell title={article.title} eyebrow="Little Lessons, Big Discoveries">
          <p>{article.excerpt}</p>
          {article.body.length > 0 ? article.body.map((p, i) => <p key={i}>{p}</p>) : <ComingSoon what="The full text of this article" />}
        </PageShell>
      );
    }

    case "resource": {
      if (route.slug === "needs-vs-wants") return <NeedsVsWants />;
      const audience = audienceCards.find((a) => a.slug === route.slug);
      if (audience) {
        return (
          <PageShell title={audience.title === "For Parents" ? "Parent Resources" : audience.title === "For Teachers" ? "Teaching Ideas" : "Family Activities"} eyebrow={audience.title}>
            <p>{audience.description}</p>
            <ComingSoon what="This resource collection" />
            <p>In the meantime, you can try the <a className="font-extrabold text-leaf-deep underline" href="#savings-goal">My Savings Goal</a> activity or the <a className="font-extrabold text-leaf-deep underline" href="#/resources/needs-vs-wants">Needs vs. Wants</a> game together.</p>
          </PageShell>
        );
      }
      const resource = resources.find((r) => r.slug === route.slug);
      if (!resource) return <NotFound />;
      return (
        <PageShell title={resource.title} eyebrow={resource.age}>
          <p>{resource.description}</p>
          {resource.downloadUrl ? <LinkButton href={resource.downloadUrl}>Download</LinkButton> : <ComingSoon what="This resource" />}
        </PageShell>
      );
    }

    case "about":
      return (
        <PageShell title="About us" eyebrow="EaddaKids">
          <p>{site.about}</p>
          <p>{site.mission}</p>
          <p className="rounded-2xl bg-sun-soft p-4 font-bold text-ink" role="note">
            A fuller story of Eadda Kids will be added here.
          </p>
          <p>
            Questions? <a className="font-extrabold text-leaf-deep underline" href="#contact">Contact us</a>.
          </p>
        </PageShell>
      );

    case "programmes":
      return (
        <PageShell title="Our Programmes" eyebrow="EaddaKids">
          <p>Eadda Kids runs events on financial intelligence for kids and teens:</p>
          <ul className="list-disc space-y-1 pl-6 font-bold text-ink">
            {events.map((e) => (
              <li key={e.slug}>{e.title}</li>
            ))}
          </ul>
          <p className="rounded-2xl bg-sun-soft p-4 font-bold text-ink" role="note">
            Dates, venues, ages and booking details will be added here. For now, please <a className="underline" href="#contact">contact us</a> to ask about upcoming programmes.
          </p>
        </PageShell>
      );

    case "author":
      return (
        <PageShell title={author.heading} eyebrow={author.subheading}>
          {author.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {author.story.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {author.story.length === 0 && author.qualifications.length === 0 && author.achievements.length === 0 && (
            <p className="rounded-2xl bg-sun-soft p-4 font-bold text-ink" role="note">
              More about Gbonjubola's story, qualifications and publications will be added here.
            </p>
          )}
        </PageShell>
      );

    case "privacy":
      return (
        <PageShell title="Privacy Policy" eyebrow="Draft">
          <p className="rounded-2xl bg-sun-soft p-4 text-base font-bold text-ink" role="note">
            This is a plain-language draft describing how this website currently works. It should be reviewed and completed by the site owner before launch.
          </p>
          <h2 className="font-display text-2xl font-semibold text-ink">Children</h2>
          <p>{site.brandName} is made for children to enjoy with a parent, guardian or teacher. We do not ask children for names, email addresses or any other personal information.</p>
          <h2 className="font-display text-2xl font-semibold text-ink">My Savings Goal activity</h2>
          <p>The goal name and amounts you type stay in your own browser (local storage) so they can be restored on your next visit. They are not sent to us. The Reset button clears them.</p>
          <h2 className="font-display text-2xl font-semibold text-ink">Newsletter</h2>
          <p>The newsletter is for parents and guardians. When sign-up is connected, the email address you enter will be sent to the newsletter provider to deliver updates. You can unsubscribe at any time.</p>
          <h2 className="font-display text-2xl font-semibold text-ink">Fonts</h2>
          <p>This site loads its fonts from Google Fonts, which may receive your IP address when the page loads.</p>
          <h2 className="font-display text-2xl font-semibold text-ink">Contact</h2>
          <p>Contact details will be added here.</p>
        </PageShell>
      );

    case "terms":
      return (
        <PageShell title="Terms of Use" eyebrow="Draft">
          <p className="rounded-2xl bg-sun-soft p-4 text-base font-bold text-ink" role="note">
            This is a plain-language draft that should be reviewed by the site owner before launch.
          </p>
          <p>The content on this site is for general educational purposes. It is not financial, legal or tax advice, and it does not promise any particular financial result.</p>
          <p>The savings activity is a practice tool. It does not hold money, take payments or earn interest.</p>
          <p>Books, resources and articles marked as samples or coming soon are placeholders and are not confirmed published products.</p>
          <p>All content, illustrations and the Eadda Kids name belong to their owners and may not be copied or reused without permission.</p>
        </PageShell>
      );

    default:
      return <NotFound />;
  }
}

function NotFound() {
  return (
    <PageShell title="Page not found">
      <p>We could not find that page. Let's get you back on track.</p>
      <LinkButton href="#home">Go to the home page</LinkButton>
    </PageShell>
  );
}
