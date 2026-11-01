import type { ReactNode } from "react";

/** All illustrations are original inline SVG so they stay crisp, light and easy to recolor. */

const SKIN = "#8D5B3E";
const HAIR = "#2B1D17";
const PIG = "#FF9C8A";
const PIG_DARK = "#EA6F5B";
const LEAF = "#218C5A";
const SUN = "#FFD45A";
const SKY = "#70C8F2";
const INK = "#24352E";

export function Coin({ x, y, r = 14, className = "" }: { x: number; y: number; r?: number; className?: string }) {
  return (
    <g className={className}>
      <circle cx={x} cy={y} r={r} fill={SUN} stroke="#E0A800" strokeWidth={2.5} />
      <circle cx={x} cy={y} r={r * 0.62} fill="none" stroke="#E0A800" strokeWidth={1.8} />
      <text x={x} y={y + r * 0.34} textAnchor="middle" fontFamily="Fredoka, Arial, sans-serif" fontWeight={700} fontSize={r * 0.95} fill="#B98400">
        ₦
      </text>
    </g>
  );
}

export function Star({ x, y, s = 1, fill = SUN, className = "" }: { x: number; y: number; s?: number; fill?: string; className?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path className={className} d="M0,-12 L3.5,-3.8 L12.4,-3.8 L5.2,1.8 L7.8,10.5 L0,5.4 L-7.8,10.5 L-5.2,1.8 L-12.4,-3.8 L-3.5,-3.8 Z" fill={fill} />
    </g>
  );
}

function Jar({ x, y, w, h, tone, coins }: { x: number; y: number; w: number; h: number; tone: string; coins: number }) {
  const rows = [];
  for (let i = 0; i < coins; i++) {
    rows.push(<ellipse key={i} cx={x + w / 2 + ((i % 3) - 1) * (w / 4)} cy={y + h - 9 - Math.floor(i / 3) * 9} rx={w * 0.17} ry={4.5} fill={SUN} stroke="#E0A800" strokeWidth={1.5} />);
  }
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={14} fill={tone} fillOpacity={0.35} stroke={INK} strokeOpacity={0.55} strokeWidth={2.5} />
      <rect x={x - 3} y={y - 9} width={w + 6} height={12} rx={6} fill={LEAF} />
      {rows}
      <rect x={x + 6} y={y + 12} width={5} height={h * 0.35} rx={2.5} fill="#fff" fillOpacity={0.7} />
    </g>
  );
}

export function PiggyBank({ x = 0, y = 0, scale = 1, drop = true }: { x?: number; y?: number; scale?: number; drop?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {/* tail */}
      <path d="M-86,-6 C-108,-14 -110,-40 -92,-38 C-104,-30 -98,-22 -84,-18" fill="none" stroke={PIG_DARK} strokeWidth={6} strokeLinecap="round" />
      {/* legs */}
      <rect x={-60} y={44} width={24} height={26} rx={9} fill={PIG_DARK} />
      <rect x={34} y={44} width={24} height={26} rx={9} fill={PIG_DARK} />
      {/* body */}
      <ellipse cx={0} cy={0} rx={92} ry={66} fill={PIG} />
      {/* ear */}
      <path d="M26,-54 L52,-84 L68,-48 Z" fill={PIG_DARK} stroke={PIG_DARK} strokeWidth={6} strokeLinejoin="round" />
      {/* snout */}
      <ellipse cx={92} cy={6} rx={22} ry={19} fill={PIG_DARK} />
      <circle cx={86} cy={5} r={3.4} fill="#7A2E20" />
      <circle cx={100} cy={5} r={3.4} fill="#7A2E20" />
      {/* eye + cheek */}
      <circle cx={58} cy={-14} r={6.5} fill={INK} />
      <circle cx={60} cy={-16.5} r={2} fill="#fff" />
      <ellipse cx={56} cy={14} rx={11} ry={7} fill="#FF6F5C" fillOpacity={0.45} />
      {/* shine */}
      <path d="M-58,-34 C-46,-50 -26,-56 -8,-56" fill="none" stroke="#fff" strokeOpacity={0.55} strokeWidth={6} strokeLinecap="round" />
      {/* coin slot */}
      <rect x={-22} y={-62} width={46} height={8} rx={4} fill="#7A2E20" />
      {drop && <Coin x={1} y={-88} r={13} className="anim-coin" />}
    </g>
  );
}

export function BookStack({ x = 0, y = 0, scale = 1 }: { x?: number; y?: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x={0} y={0} width={96} height={20} rx={5} fill="#FF8066" />
      <rect x={8} y={5} width={80} height={4} rx={2} fill="#fff" fillOpacity={0.6} />
      <rect x={-6} y={-22} width={92} height={20} rx={5} fill="#70C8F2" />
      <rect x={2} y={-17} width={76} height={4} rx={2} fill="#fff" fillOpacity={0.6} />
      <rect x={6} y={-44} width={84} height={20} rx={5} fill="#218C5A" />
      <rect x={14} y={-39} width={68} height={4} rx={2} fill="#fff" fillOpacity={0.55} />
    </g>
  );
}

/** The main hero scene: a child putting a coin into a piggy bank, with savings jars and books. */
export function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 460" role="img" className={className} aria-labelledby="hero-art-title hero-art-desc">
      <title id="hero-art-title">A child saving coins</title>
      <desc id="hero-art-desc">
        A smiling child holds a coin above a pink piggy bank. Beside it are two savings jars filled with coins and a small stack of books.
      </desc>
      {/* soft background shapes */}
      <circle cx={268} cy={228} r={206} fill="#FFF1BF" />
      <circle cx={430} cy={92} r={52} fill="#E0F3FC" />
      <circle cx={78} cy={104} r={34} fill="#FFE3DC" />
      <circle cx={452} cy={380} r={26} fill="#E3F3EA" />

      <Star x={60} y={210} s={1.1} fill="#70C8F2" className="anim-twinkle" />
      <Star x={462} y={198} s={0.9} className="anim-twinkle" />
      <Star x={214} y={64} s={0.8} fill="#FF8066" className="anim-twinkle" />
      <Star x={372} y={58} s={1.2} className="anim-twinkle" />

      <g className="anim-float-slow">
        {/* child (upper body, seated behind the table) */}
        <g>
          <rect x={92} y={262} width={86} height={110} rx={34} fill={SUN} />
          <path d="M118,266 Q135,290 152,266" fill="none" stroke="#E0A800" strokeWidth={4} strokeLinecap="round" />
          {/* raised arm holding a coin */}
          <path d="M162,288 C190,276 214,250 238,232" fill="none" stroke={SKIN} strokeWidth={18} strokeLinecap="round" />
          <circle cx={244} cy={226} r={11} fill={SKIN} />
          <Coin x={256} y={210} r={13} />
          {/* other arm */}
          <path d="M104,292 C90,310 92,330 104,346" fill="none" stroke={SKIN} strokeWidth={16} strokeLinecap="round" />
          {/* neck + head */}
          <rect x={126} y={236} width={20} height={30} rx={8} fill={SKIN} />
          <circle cx={135} cy={206} r={40} fill={SKIN} />
          {/* curly hair */}
          <g fill={HAIR}>
            <circle cx={104} cy={186} r={16} />
            <circle cx={120} cy={170} r={17} />
            <circle cx={140} cy={166} r={18} />
            <circle cx={160} cy={174} r={16} />
            <circle cx={170} cy={192} r={13} />
          </g>
          {/* face */}
          <circle cx={121} cy={208} r={4.6} fill={INK} />
          <circle cx={150} cy={208} r={4.6} fill={INK} />
          <circle cx={122.5} cy={206.5} r={1.5} fill="#fff" />
          <circle cx={151.5} cy={206.5} r={1.5} fill="#fff" />
          <path d="M120,222 Q135,238 151,222" fill="none" stroke={INK} strokeWidth={3.6} strokeLinecap="round" />
          <ellipse cx={111} cy={220} rx={6} ry={4} fill="#FF8066" fillOpacity={0.5} />
          <ellipse cx={160} cy={220} rx={6} ry={4} fill="#FF8066" fillOpacity={0.5} />
        </g>
      </g>

      {/* piggy bank */}
      <PiggyBank x={304} y={288} scale={0.96} />

      {/* books */}
      <BookStack x={36} y={338} scale={0.78} />

      {/* jars */}
      <Jar x={412} y={286} w={54} h={74} tone={SKY} coins={6} />
      <Jar x={470} y={308} w={42} h={52} tone="#FF8066" coins={4} />

      {/* table */}
      <rect x={14} y={358} width={494} height={26} rx={13} fill={LEAF} />
      <rect x={40} y={384} width={14} height={42} rx={6} fill="#176B43" />
      <rect x={470} y={384} width={14} height={42} rx={6} fill="#176B43" />
    </svg>
  );
}

export function BookCover({ title, author, tone, sample, coverUrl, className = "" }: { title: string; author: string; tone: "green" | "sun" | "sky" | "coral"; sample?: boolean; coverUrl?: string; className?: string }) {
  if (coverUrl) {
    return <img src={coverUrl} alt={`${title} book cover`} className={`${className} object-cover`} />;
  }

  const palette = {
    green: { bg: "#218C5A", soft: "#2FA56E", text: "#FFFFFF" },
    sun: { bg: "#FFD45A", soft: "#FFE287", text: "#24352E" },
    sky: { bg: "#70C8F2", soft: "#96D8F7", text: "#24352E" },
    coral: { bg: "#FF8066", soft: "#FF9F8A", text: "#24352E" },
  }[tone];

  // naive word wrap for the title
  const words = title.split(" ");
  const lines: string[] = [];
  let current = "";
  words.forEach((w) => {
    if ((current + " " + w).trim().length > 14) {
      lines.push(current.trim());
      current = w;
    } else {
      current = (current + " " + w).trim();
    }
  });
  if (current) lines.push(current);

  return (
    <svg viewBox="0 0 300 400" role="img" aria-label={`Placeholder cover for ${title}`} className={className}>
      <rect width={300} height={400} rx={18} fill={palette.bg} />
      <rect x={0} y={0} width={16} height={400} rx={8} fill="#000" fillOpacity={0.14} />
      <circle cx={250} cy={60} r={70} fill={palette.soft} />
      <circle cx={40} cy={360} r={64} fill={palette.soft} />
      <Star x={52} y={70} s={1.1} fill="#FFFFFF" />
      <Star x={262} y={190} s={0.8} fill="#FFFFFF" />
      {lines.map((line, i) => (
        <text key={i} x={150} y={78 + i * 36} textAnchor="middle" fontFamily="Fredoka, Arial, sans-serif" fontWeight={700} fontSize={32} fill={palette.text}>
          {line}
        </text>
      ))}
      <PiggyBank x={150} y={258 + Math.max(0, lines.length - 2) * 10} scale={0.78} drop={false} />
      <Coin x={228} y={200} r={13} />
      <Coin x={68} y={214} r={10} />
      <text x={150} y={372} textAnchor="middle" fontFamily="Nunito, Arial, sans-serif" fontWeight={800} fontSize={17} fill={palette.text}>
        {author}
      </text>
      {sample && (
        <g>
          <rect x={168} y={10} width={124} height={28} rx={14} fill="#24352E" />
          <text x={230} y={29} textAnchor="middle" fontFamily="Nunito, Arial, sans-serif" fontWeight={800} fontSize={12.5} fill="#FFFFFF">
            SAMPLE CONCEPT
          </text>
        </g>
      )}
    </svg>
  );
}

/** Replaceable placeholder shown until a real author photograph is supplied. */
export function AuthorPlaceholder({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 480" role="img" aria-label="Placeholder where Gbonjubola Sanni's photograph will appear" className={className}>
      <rect width={400} height={480} rx={32} fill="#E3F3EA" />
      <circle cx={330} cy={80} r={70} fill="#FFF1BF" />
      <circle cx={60} cy={410} r={80} fill="#E0F3FC" />
      <circle cx={200} cy={190} r={70} fill="#fff" stroke="#218C5A" strokeWidth={5} strokeDasharray="10 10" />
      <path d="M70,420 C70,336 132,290 200,290 C268,290 330,336 330,420" fill="#fff" stroke="#218C5A" strokeWidth={5} strokeDasharray="10 10" />
      <rect x={78} y={428} width={244} height={36} rx={18} fill="#fff" />
      <text x={200} y={462} textAnchor="middle" fontFamily="Nunito, Arial, sans-serif" fontWeight={800} fontSize={17} fill="#176B43">
        Author photo coming soon
      </text>
    </svg>
  );
}

/** Small scene illustrations for the three introduction cards. */
export function SceneSave({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 110" aria-hidden="true" className={className}>
      <circle cx={70} cy={56} r={46} fill="#E3F3EA" />
      <Jar x={42} y={32} w={56} h={64} tone={SKY} coins={7} />
      <Coin x={70} y={14} r={11} className="anim-coin" />
    </svg>
  );
}

export function SceneMoney({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 110" aria-hidden="true" className={className}>
      <circle cx={70} cy={56} r={46} fill="#E0F3FC" />
      <Coin x={48} y={70} r={22} />
      <Coin x={86} y={52} r={22} />
      <Coin x={72} y={30} r={14} />
      <Star x={116} y={22} s={0.8} fill="#FF8066" className="anim-twinkle" />
    </svg>
  );
}

export function SceneHabits({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 110" aria-hidden="true" className={className}>
      <circle cx={70} cy={56} r={46} fill="#FFF1BF" />
      <ellipse cx={70} cy={92} rx={34} ry={8} fill="#176B43" fillOpacity={0.25} />
      <Coin x={54} y={84} r={11} />
      <Coin x={86} y={84} r={11} />
      <path d="M70,82 C70,66 70,56 70,44" fill="none" stroke={LEAF} strokeWidth={5} strokeLinecap="round" />
      <path d="M70,58 C52,58 44,46 46,34 C60,34 70,42 70,58Z" fill="#2FA56E" />
      <path d="M70,48 C88,48 96,36 94,24 C80,24 70,32 70,48Z" fill={LEAF} />
    </svg>
  );
}

export function Spot({ children, tone = "green", className = "" }: { children: ReactNode; tone?: "green" | "sun" | "sky" | "coral"; className?: string }) {
  const bg = { green: "bg-leaf-soft text-leaf-deep", sun: "bg-sun-soft text-ink", sky: "bg-sky-soft text-ink", coral: "bg-coral-soft text-ink" }[tone];
  return (
    <span className={`inline-flex size-14 items-center justify-center rounded-2xl ${bg} ${className}`} aria-hidden="true">
      {children}
    </span>
  );
}
