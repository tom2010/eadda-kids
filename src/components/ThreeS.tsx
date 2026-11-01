import { LuHeart, LuPiggyBank, LuShoppingBag } from "react-icons/lu";
import { Reveal, SectionHeading } from "./ui";
import { Coin } from "./Illustrations";

/** The "3S of Money", in the order the live site gives them: save first, then share, then spend. */
const steps = [
  {
    n: 1,
    label: "Save",
    Icon: LuPiggyBank,
    fill: "#218C5A",
    text: "This should be your first priority. Put part of your income, allowance and other regular money into a SAVE box.",
  },
  {
    n: 2,
    label: "Share",
    Icon: LuHeart,
    fill: "#FF8066",
    text: "After saving, give to others. Start with an amount you are comfortable with and increase it over time.",
  },
  {
    n: 3,
    label: "Spend",
    Icon: LuShoppingBag,
    fill: "#70C8F2",
    text: "The rest of what you earn goes into your SPEND box, after you have saved and shared.",
  },
];

function MoneyBox({ label, fill }: { label: string; fill: string }) {
  const dark = fill === "#70C8F2";
  return (
    <svg viewBox="0 0 160 130" aria-hidden="true" className="mx-auto h-32 w-auto">
      <ellipse cx={80} cy={118} rx={58} ry={8} fill="#24352E" fillOpacity={0.12} />
      <rect x={22} y={34} width={116} height={78} rx={16} fill={fill} />
      <rect x={14} y={24} width={132} height={22} rx={11} fill={fill} />
      <rect x={14} y={24} width={132} height={22} rx={11} fill="#000" fillOpacity={0.12} />
      <rect x={52} y={31} width={56} height={7} rx={3.5} fill="#24352E" fillOpacity={0.55} />
      <text x={80} y={88} textAnchor="middle" fontFamily="Fredoka, Arial, sans-serif" fontWeight={700} fontSize={24} letterSpacing={2} fill={dark ? "#24352E" : "#FFFFFF"}>
        {label.toUpperCase()}
      </text>
      <Coin x={80} y={8} r={11} className="anim-coin" />
    </svg>
  );
}

export default function ThreeS() {
  return (
    <section id="three-s" aria-labelledby="three-s-title" className="section bg-white">
      <div className="container-x">
        <SectionHeading id="three-s-title" eyebrow="A simple money habit" title="The 3S of Money" intro="Every coin has a job. Give each one a box, and do it in this order." />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ n, label, Icon, fill, text }, i) => (
            <Reveal as="li" key={label} delay={i * 110}>
              <article className="card card-hover h-full bg-cream p-7 text-center">
                <MoneyBox label={label} fill={fill} />
                <h3 className="mt-4 flex items-center justify-center gap-2 text-2xl font-semibold text-leaf-deep">
                  <span className="flex size-8 items-center justify-center rounded-full bg-sun font-display text-base text-ink" aria-hidden="true">
                    {n}
                  </span>
                  <Icon className="size-6" aria-hidden="true" />
                  {label}
                </h3>
                <p className="mt-2 text-ink-soft">{text}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
