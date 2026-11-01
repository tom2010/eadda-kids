import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { site } from "../data/site";
import { Reveal } from "./ui";
import { Coin, Star } from "./Illustrations";

/** "Let's talk" is the live site's main call to action; it points here and to the footer contact details. */
export default function CallToAction() {
  const { email, phone, location } = site.contact;
  return (
    <section id="lets-talk" aria-labelledby="cta-title" className="section relative overflow-hidden bg-cream">
      <svg className="absolute -left-6 top-6 w-40 opacity-90 anim-float" viewBox="0 0 120 120" aria-hidden="true">
        <Coin x={60} y={60} r={44} />
      </svg>
      <svg className="absolute -right-4 bottom-4 w-32 anim-float-slow" viewBox="0 0 100 100" aria-hidden="true">
        <Star x={50} y={50} s={4} fill="#70C8F2" />
      </svg>
      <Reveal className="container-x relative">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] border-4 border-leaf bg-white px-6 py-12 text-center shadow-lift sm:px-12">
          <h2 id="cta-title" className="section-title text-balance">
            Let's talk.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-soft text-pretty">Questions about our resources, events or books? Get in touch and help the young people in your life grow money smart.</p>
          <ul className="mt-8 flex flex-col items-center justify-center gap-3 text-lg font-bold sm:flex-row sm:flex-wrap sm:gap-x-8">
            <li className="flex items-center gap-2">
              <LuMail className="size-5 text-leaf-deep" aria-hidden="true" />
              <a className="underline underline-offset-4 hover:text-leaf-deep" href={`mailto:${email}`}>
                {email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <LuPhone className="size-5 text-leaf-deep" aria-hidden="true" />
              <a className="underline underline-offset-4 hover:text-leaf-deep" href={`tel:${phone}`}>
                {phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <LuMapPin className="size-5 text-leaf-deep" aria-hidden="true" /> {location}
            </li>
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
