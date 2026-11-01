import { LuSparkles } from "react-icons/lu";
import { site } from "../data/site";
import { HeroIllustration } from "./Illustrations";
import { LinkButton } from "./ui";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container-x grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-20">
        <div className="text-center lg:text-left">
          <span className="eyebrow">{site.siteTitle}</span>
          <h1 id="hero-title" className="mt-5 text-[clamp(2.3rem,6.2vw,3.7rem)] font-bold text-balance text-ink">
            Raising <span className="relative inline-block text-leaf-deep">money-smart<span className="absolute inset-x-0 -bottom-1 -z-10 h-3 rounded-full bg-sun" aria-hidden="true" /></span> children.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft text-pretty lg:mx-0 lg:text-xl">{site.mission}</p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <LinkButton href="#contact">Let's talk</LinkButton>
            <LinkButton href="#three-s" variant="outline">
              Meet the 3S of Money
            </LinkButton>
          </div>
          <p className="mx-auto mt-6 flex max-w-md items-start justify-center gap-2 text-sm font-semibold text-ink-soft lg:mx-0 lg:justify-start">
            <LuSparkles className="mt-0.5 size-4 shrink-0 text-leaf" aria-hidden="true" />
            Resources and events on financial intelligence for kids and teens.
          </p>
        </div>

        <div className="mx-auto w-full max-w-xl lg:max-w-none">
          <HeroIllustration className="h-auto w-full drop-shadow-sm" />
        </div>
      </div>
    </section>
  );
}
