import { Reveal, SectionHeading } from "./ui";
import { SceneHabits, SceneMoney, SceneSave } from "./Illustrations";

const cards = [
  {
    title: "Learn to Save",
    text: "Help children understand why saving matters and how small amounts can grow toward something they really want.",
    Scene: SceneSave,
    ring: "hover:ring-sky",
  },
  {
    title: "Understand Money",
    text: "Introduce children to the basics of money, spending, needs, wants, and making thoughtful choices.",
    Scene: SceneMoney,
    ring: "hover:ring-coral",
  },
  {
    title: "Build Good Habits",
    text: "Encourage patience, goal-setting, responsibility, and positive financial habits that can grow with children.",
    Scene: SceneHabits,
    ring: "hover:ring-sun",
  },
];

export default function Introduction() {
  return (
    <section id="intro" aria-labelledby="intro-title" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          id="intro-title"
          eyebrow="Our mission"
          title="Big Money Lessons for Little Minds"
          intro="Children can begin learning about money long before they earn their first income. Eadda Kids makes financial education approachable through age-appropriate lessons, engaging stories, and practical activities."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map(({ title, text, Scene, ring }, i) => (
            <Reveal as="li" key={title} delay={i * 110}>
              <article className={`card card-hover h-full bg-cream p-7 text-center ring-4 ring-transparent transition ${ring}`}>
                <Scene className="mx-auto h-28 w-auto" />
                <h3 className="mt-3 text-2xl font-semibold text-leaf-deep">{title}</h3>
                <p className="mt-2 text-ink-soft">{text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
