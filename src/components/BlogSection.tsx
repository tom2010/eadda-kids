import { LuArrowRight } from "react-icons/lu";
import { articles } from "../data/articles";
import { Reveal, SectionHeading } from "./ui";
import { SceneHabits, SceneMoney, SceneSave } from "./Illustrations";

const scenes = [SceneMoney, SceneSave, SceneHabits];
const bg = { green: "bg-leaf-soft", sun: "bg-sun-soft", sky: "bg-sky-soft", coral: "bg-coral-soft" } as const;

export default function BlogSection() {
  return (
    <section id="blog" aria-labelledby="blog-title" className="section bg-cream">
      <div className="container-x">
        <SectionHeading id="blog-title" eyebrow="Blog" title="Articles" intro="Money lessons for parents, teachers and young people from Eadda Kids." />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {articles.map((a, i) => {
            const Scene = scenes[i % scenes.length];
            return (
              <Reveal as="li" key={a.slug} delay={i * 110}>
                <article className="card card-hover flex h-full flex-col overflow-hidden">
                  <div className={`flex h-44 items-center justify-center ${bg[a.accent]}`}>
                    <Scene className="h-36 w-auto" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm font-bold text-leaf-deep">By Eadda Kids</p>
                    <h3 className="mt-1 text-xl font-semibold">{a.title}</h3>
                    <p className="mt-2 flex-1 text-ink-soft">{a.excerpt}</p>
                    <a href={`#/articles/${a.slug}`} className="mt-4 inline-flex min-h-11 items-center gap-2 font-extrabold text-leaf-deep underline-offset-4 hover:underline">
                      Read Article <LuArrowRight className="size-4" aria-hidden="true" />
                      <span className="sr-only">: {a.title}</span>
                    </a>
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
