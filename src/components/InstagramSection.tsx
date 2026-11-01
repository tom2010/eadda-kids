import { LuInstagram } from "react-icons/lu";
import { hasInstagram, site } from "../data/site";
import { LinkButton, Reveal, SectionHeading, SoonButton } from "./ui";
import { Coin, PiggyBank, SceneHabits, Star } from "./Illustrations";

/** Designed preview cards. These are NOT live Instagram posts and use no real post content. */
const previews = [
  { label: "Saving tip idea", tone: "bg-leaf-soft", art: <svg viewBox="0 0 200 140" className="h-auto max-h-28 w-4/5" aria-hidden="true"><PiggyBank x={100} y={78} scale={0.5} /></svg> },
  { label: "Coin counting fun", tone: "bg-sun-soft", art: <svg viewBox="0 0 200 140" className="h-auto max-h-28 w-4/5" aria-hidden="true"><Coin x={70} y={80} r={26} /><Coin x={120} y={60} r={26} /><Star x={160} y={30} fill="#FF8066" className="anim-twinkle" /></svg> },
  { label: "Goal-setting ideas", tone: "bg-sky-soft", art: <SceneHabits className="h-auto max-h-28 w-4/5" /> },
];

export default function InstagramSection() {
  return (
    <section id="instagram" aria-labelledby="instagram-title" className="section bg-white">
      <div className="container-x">
        <SectionHeading id="instagram-title" eyebrow={site.brandName} title="Follow the Eadda Kids Journey" intro="Discover more ways to make saving fun and introduce children to positive money habits." />

        <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-3 sm:gap-5">
          {previews.map((p, i) => (
            <Reveal as="li" key={p.label} delay={i * 90}>
              <div className={`flex aspect-square flex-col items-center justify-center rounded-3xl ${p.tone} p-2 text-center shadow-soft`}>
                {p.art}
                <span className="mt-1 text-xs font-extrabold leading-tight sm:text-sm">{p.label}</span>
              </div>
            </Reveal>
          ))}
        </ul>
        <p className="mt-3 text-center text-xs font-semibold text-ink-soft">Preview designs only. They are not live Instagram posts.</p>

        <div className="mt-8 flex flex-col items-center gap-3">
          {hasInstagram ? (
            <LinkButton href={site.instagramUrl} external variant="primary">
              <LuInstagram className="size-5" aria-hidden="true" /> Follow Us on Instagram
            </LinkButton>
          ) : (
            <>
              <SoonButton>
                <LuInstagram className="size-5" aria-hidden="true" /> Follow Us on Instagram
              </SoonButton>
              <p className="text-sm font-semibold text-ink-soft">Our official Instagram link will be added here soon.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
