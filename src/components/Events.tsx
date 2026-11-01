import { events } from "../data/events";
import { LinkButton, Reveal, SectionHeading } from "./ui";
import { Coin, Star } from "./Illustrations";

function GlobeArt() {
  return (
    <svg viewBox="0 0 200 140" aria-hidden="true" className="h-36 w-auto">
      <circle cx={100} cy={72} r={52} fill="#70C8F2" />
      <path d="M62,58 C72,40 92,38 98,50 C104,62 88,66 90,80 C92,92 76,98 68,86 C60,76 56,68 62,58Z" fill="#218C5A" />
      <path d="M116,48 C130,44 146,56 142,70 C138,84 124,80 118,90 C112,76 106,56 116,48Z" fill="#218C5A" />
      <ellipse cx={100} cy={72} rx={52} ry={20} fill="none" stroke="#fff" strokeOpacity={0.6} strokeWidth={2} />
      <Coin x={36} y={36} r={14} className="anim-coin" />
      <Coin x={168} y={102} r={12} />
      <Star x={164} y={30} s={0.9} fill="#FF8066" className="anim-twinkle" />
    </svg>
  );
}

function CampArt() {
  return (
    <svg viewBox="0 0 200 140" aria-hidden="true" className="h-36 w-auto">
      <circle cx={158} cy={34} r={20} fill="#FFD45A" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <line key={a} x1={158 + Math.cos((a * Math.PI) / 180) * 26} y1={34 + Math.sin((a * Math.PI) / 180) * 26} x2={158 + Math.cos((a * Math.PI) / 180) * 34} y2={34 + Math.sin((a * Math.PI) / 180) * 34} stroke="#FFD45A" strokeWidth={4} strokeLinecap="round" />
      ))}
      <path d="M30,118 L90,30 L150,118Z" fill="#FF8066" />
      <path d="M90,30 L120,118 L60,118Z" fill="#FFFFFF" fillOpacity={0.25} />
      <path d="M78,118 L90,84 L102,118Z" fill="#24352E" fillOpacity={0.7} />
      <rect x={14} y={116} width={172} height={14} rx={7} fill="#218C5A" />
      <Coin x={42} y={90} r={11} />
    </svg>
  );
}

const art = [GlobeArt, CampArt];
const tone = ["bg-sky-soft", "bg-sun-soft"];

export default function Events() {
  return (
    <section id="events" aria-labelledby="events-title" className="section bg-leaf-soft/70">
      <div className="container-x">
        <SectionHeading id="events-title" eyebrow="What's happening" title="Our Events" />
        <ul className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {events.map((e, i) => {
            const Art = art[i % art.length];
            return (
              <Reveal as="li" key={e.slug} delay={i * 110}>
                <article className="card card-hover flex h-full flex-col overflow-hidden">
                  <div className={`flex h-48 items-center justify-center ${tone[i % tone.length]}`}>
                    <Art />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-2xl font-semibold">{e.title}</h3>
                    {e.details && <p className="mt-2 text-ink-soft">{e.details}</p>}
                    <div className="pt-5">
                      <LinkButton href="#/programmes" variant="outline" className="w-full sm:w-auto">
                        Learn More
                      </LinkButton>
                    </div>
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
