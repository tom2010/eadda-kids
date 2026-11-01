import { LuMessageSquareHeart, LuQuote } from "react-icons/lu";
import { testimonials } from "../data/testimonials";
import { site } from "../data/site";
import { Reveal, SectionHeading } from "./ui";

export default function Testimonials() {
  return (
    <section id="feedback" aria-labelledby="feedback-title" className="section bg-cream">
      <div className="container-x">
        <SectionHeading id="feedback-title" eyebrow="Community" title="Growing Together, One Saving Habit at a Time" />

        {testimonials.length > 0 ? (
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal as="li" key={i} delay={i * 100}>
                <figure className="card h-full p-6">
                  <LuQuote className="size-8 text-sun" aria-hidden="true" />
                  <blockquote className="mt-3 text-ink-soft">“{t.quote}”</blockquote>
                  <figcaption className="mt-4 text-sm font-bold">
                    {t.name ? `${t.name}, ` : ""}
                    {t.role}
                    {t.about ? ` · ${t.about}` : ""}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal className="mx-auto mt-10 max-w-3xl">
            <div className="card flex flex-col items-center gap-4 bg-white p-8 text-center sm:p-10">
              <span className="flex size-16 items-center justify-center rounded-full bg-sun-soft text-leaf-deep" aria-hidden="true">
                <LuMessageSquareHeart className="size-8" />
              </span>
              <p className="text-xl font-semibold text-ink text-balance">Our mission is to help every child approach money with curiosity, responsibility, and confidence.</p>
              <p className="text-ink-soft text-pretty">
                Are you a parent, teacher, or reader? We would love to hear how {site.brandName} is helping the children in your life. Reviews from real families and educators will be shared here, with their permission.
              </p>
              <a href="#contact" className="btn btn-outline">
                Share your feedback
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
