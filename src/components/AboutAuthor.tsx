import { author } from "../data/author";
import { AuthorPlaceholder } from "./Illustrations";
import { LinkButton, Reveal } from "./ui";

export default function AboutAuthor() {
  return (
    <section id="about" aria-labelledby="about-title" className="section bg-white">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="mx-auto w-full max-w-sm">
          <div className="relative">
            <div className="absolute -left-4 -top-4 size-full rounded-[2rem] bg-sun" aria-hidden="true" />
            {author.photoUrl ? (
              <img src={author.photoUrl} alt={author.photoAlt} loading="lazy" width={400} height={480} className="relative aspect-[5/6] w-full rounded-[2rem] object-cover shadow-lift" />
            ) : (
              <AuthorPlaceholder className="relative aspect-[5/6] w-full rounded-[2rem] shadow-lift" />
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="eyebrow">{author.subheading}</span>
          <h2 id="about-title" className="section-title mt-4 text-balance">
            {author.heading}
          </h2>
          <div className="mt-5 space-y-4 text-lg text-ink-soft">
            {author.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8">
            <LinkButton href="#/author">Learn More About Gbonjubola</LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
