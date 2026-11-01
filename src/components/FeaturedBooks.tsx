import { LuBookOpen, LuGraduationCap } from "react-icons/lu";
import { books } from "../data/books";
import { BookCover } from "./Illustrations";
import { LinkButton, Reveal, SectionHeading, SoonButton } from "./ui";

export default function FeaturedBooks() {
  const hasRealBooks = books.some((b) => !b.isSample);
  const featuredBooks = books.filter((book) => book.featured);
  return (
    <section id="books" aria-labelledby="books-title" className="section bg-sky-soft/60">
      <div className="container-x">
        <SectionHeading
          id="books-title"
          eyebrow="Books"
          title="Our Bookstore"
          intro="Books that introduce money lessons through engaging, age-appropriate storytelling."
        />

  

        <ul className="mt-12 flex flex-wrap justify-center gap-8">
          {featuredBooks.map((book, i) => (
            <Reveal as="li" key={book.slug} delay={i * 100} className="w-full max-w-[22rem]">
              <article className="card card-hover flex h-full flex-col overflow-hidden">
                <div className="bg-cream px-8 pb-2 pt-8">
                  <BookCover title={book.title} author={book.author} tone={book.accent} sample={book.isSample} coverUrl={book.coverUrl} className="mx-auto aspect-[3/4] w-full max-w-[15rem] rounded-2xl shadow-lift" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  {book.isSample && <span className="mb-2 w-fit rounded-full bg-sun-soft px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-ink">Volume 1</span>}
                  <h3 className="text-2xl font-semibold text-ink">{book.title}</h3>
                  <p className="text-sm font-bold text-leaf-deep">by {book.author}</p>
                  <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-ink-soft">
                    <LuGraduationCap className="size-4 text-leaf" aria-hidden="true" /> {book.ageRange}
                  </p>
                  <p className="mt-3 text-ink-soft">{book.description}</p>
                  <p className="mt-4 flex gap-2 rounded-2xl bg-leaf-soft p-3 text-sm text-ink">
                    <LuBookOpen className="mt-0.5 size-4 shrink-0 text-leaf-deep" aria-hidden="true" />
                    <span>
                      <strong>What children learn:</strong> {book.lesson}
                    </span>
                  </p>
                  <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                    <LinkButton href={`#/books/${book.slug}`} variant="outline" className="flex-1">
                      Learn More
                    </LinkButton>
                    {book.purchaseUrl ? (
                      <LinkButton href={book.purchaseUrl} external className="flex-1">
                        Get the Book
                      </LinkButton>
                    ) : (
                      <SoonButton className="flex-1">Get the Book (soon)</SoonButton>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

    
      </div>
    </section>
  );
}
