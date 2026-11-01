export type ResourceIcon = "tracker" | "needs" | "worksheet" | "lessons";

export interface Resource {
  slug: string;
  title: string;
  description: string;
  age: string;
  icon: ResourceIcon;
  /** "live" = functional on-page activity. "soon" = not created yet. */
  status: "live" | "soon";
  /** Where the button goes. Leave downloadUrl empty until a real file exists. */
  href: string;
  downloadUrl?: string;
}

export const resources: Resource[] = [
  {
    slug: "savings-tracker",
    title: "My First Savings Tracker",
    description: "Track how much you have saved and watch your progress bar grow toward your goal.",
    age: "Ages 5+",
    icon: "tracker",
    status: "live",
    href: "#savings-goal",
  },
  {
    slug: "needs-vs-wants",
    title: "Needs vs. Wants Activity",
    description: "A quick sorting game that helps children tell the difference between things we need and things we want.",
    age: "Ages 5+",
    icon: "needs",
    status: "live",
    href: "#/resources/needs-vs-wants",
  },
  {
    slug: "savings-goal-worksheet",
    title: "My Savings Goal Worksheet",
    description: "A printable worksheet for planning a savings goal. We are still creating this one.",
    age: "Ages 6+",
    icon: "worksheet",
    status: "soon",
    href: "#/resources/savings-goal-worksheet",
  },
  {
    slug: "money-lessons",
    title: "Money Lessons for Everyday Life",
    description: "Simple ideas for turning everyday moments into small money lessons. Coming soon.",
    age: "All ages",
    icon: "lessons",
    status: "soon",
    href: "#/resources/money-lessons",
  },
];

export interface AudienceCard {
  slug: "parents" | "teachers" | "families";
  title: string;
  description: string;
  cta: string;
  accent: "green" | "sky" | "sun";
}

export const audienceCards: AudienceCard[] = [
  {
    slug: "parents",
    title: "For Parents",
    description: "Discover simple ways to introduce saving, budgeting, and money conversations at home.",
    cta: "Explore Parent Resources",
    accent: "green",
  },
  {
    slug: "teachers",
    title: "For Teachers",
    description: "Find ideas for introducing age-appropriate money lessons into classroom activities.",
    cta: "Explore Teaching Ideas",
    accent: "sky",
  },
  {
    slug: "families",
    title: "For Families",
    description: "Try simple saving challenges that help children connect financial lessons with everyday life.",
    cta: "Discover Family Activities",
    accent: "sun",
  },
];
