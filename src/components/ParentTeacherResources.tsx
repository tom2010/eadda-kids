import { LuHeartHandshake, LuSchool, LuUsers } from "react-icons/lu";
import { audienceCards } from "../data/resources";
import { LinkButton, Reveal, SectionHeading } from "./ui";
import { Spot } from "./Illustrations";

const icons = { parents: LuHeartHandshake, teachers: LuSchool, families: LuUsers };

export default function ParentTeacherResources() {
  return (
    <section id="grown-ups" aria-labelledby="grownups-title" className="section bg-leaf-soft/70">
      <div className="container-x">
        <SectionHeading
          id="grownups-title"
          eyebrow="Parents, teachers & families"
          title="Let's Make Money Conversations Easier"
          intro="Parents, guardians, and teachers play an important role in helping children develop healthy financial habits."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {audienceCards.map((c, i) => {
            const Icon = icons[c.slug];
            return (
              <Reveal as="li" key={c.slug} delay={i * 110}>
                <article className="card card-hover flex h-full flex-col p-7">
                  <Spot tone={c.accent === "green" ? "green" : c.accent}>
                    <Icon className="size-7" />
                  </Spot>
                  <h3 className="mt-5 text-2xl font-semibold uppercase tracking-wide">{c.title}</h3>
                  <p className="mt-2 flex-1 text-ink-soft">{c.description}</p>
                  <div className="pt-6">
                    <LinkButton href={`#/resources/${c.slug}`} variant="outline" className="w-full">
                      {c.cta}
                    </LinkButton>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
