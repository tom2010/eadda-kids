import { LuBookHeart, LuClipboardList, LuScale, LuPiggyBank } from "react-icons/lu";
import { resources, type ResourceIcon } from "../data/resources";
import { LinkButton, Reveal, SectionHeading } from "./ui";
import { Spot } from "./Illustrations";

const icons: Record<ResourceIcon, { Icon: typeof LuPiggyBank; tone: "green" | "sun" | "sky" | "coral" }> = {
  tracker: { Icon: LuPiggyBank, tone: "green" },
  needs: { Icon: LuScale, tone: "sun" },
  worksheet: { Icon: LuClipboardList, tone: "sky" },
  lessons: { Icon: LuBookHeart, tone: "coral" },
};

export default function EducationalResources() {
  return (
    <section id="resources" aria-labelledby="resources-title" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          id="resources-title"
          eyebrow="Resources"
          title="Free Resources for Little Savers"
          intro="Explore simple activities that help children practise what they learn about money."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((r, i) => {
            const { Icon, tone } = icons[r.icon];
            return (
              <Reveal as="li" key={r.slug} delay={i * 90}>
                <article className="card card-hover flex h-full flex-col bg-cream p-6">
                  <div className="flex items-start justify-between gap-2">
                    <Spot tone={tone}>
                      <Icon className="size-7" />
                    </Spot>
                    <span className={`rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wide ${r.status === "live" ? "bg-leaf-soft text-leaf-deep" : "bg-sun-soft text-ink"}`}>
                      {r.status === "live" ? "Try it now" : "Coming soon"}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{r.title}</h3>
                  <p className="mt-1 text-sm font-bold text-leaf-deep">{r.age}</p>
                  <p className="mt-2 flex-1 text-ink-soft">{r.description}</p>
                  <div className="pt-5">
                    <LinkButton href={r.href} variant={r.status === "live" ? "primary" : "outline"} className="w-full">
                      Explore Resource
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
