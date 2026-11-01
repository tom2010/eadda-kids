import { LuGem, LuHourglass, LuScale, LuMessageCircleHeart } from "react-icons/lu";
import { Reveal, SectionHeading } from "./ui";
import { Spot } from "./Illustrations";

const benefits = [
  { n: "01", title: "Understanding Value", text: "Help children understand that money is a resource that can be used thoughtfully.", Icon: LuGem, tone: "sky" as const },
  { n: "02", title: "Learning Patience", text: "Show children how setting a savings goal can encourage patience and planning.", Icon: LuHourglass, tone: "sun" as const },
  { n: "03", title: "Making Choices", text: "Introduce the difference between needs and wants through everyday examples.", Icon: LuScale, tone: "coral" as const },
  { n: "04", title: "Building Confidence", text: "Encourage children to ask questions about money and participate in age-appropriate financial conversations.", Icon: LuMessageCircleHeart, tone: "green" as const },
];

export default function SavingBenefits() {
  return (
    <section id="learn" aria-labelledby="learn-title" className="section bg-cream">
      <div className="container-x">
        <SectionHeading
          id="learn-title"
          eyebrow="Learn about money"
          title="Why Start Learning About Money Early?"
          intro="Early, gentle conversations about money give children a foundation to build on. These ideas are useful for parents and educators too."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2">
          {benefits.map(({ n, title, text, Icon, tone }, i) => (
            <Reveal as="li" key={n} delay={(i % 2) * 100}>
              <article className="card card-hover flex h-full gap-5 p-6 sm:p-7">
                <div className="flex flex-col items-center gap-2">
                  <Spot tone={tone}>
                    <Icon className="size-7" />
                  </Spot>
                  <span className="font-display text-lg font-bold text-leaf-deep">{n}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold uppercase tracking-wide text-ink">{title}</h3>
                  <p className="mt-2 text-ink-soft">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-semibold text-ink-soft">
          Learning about money is one part of growing up. These lessons build understanding and habits; they do not guarantee any particular financial outcome.
        </p>
      </div>
    </section>
  );
}
