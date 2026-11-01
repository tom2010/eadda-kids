export interface EventItem {
  slug: string;
  title: string;
  /** Add real dates, venues, ages and booking links here when supplied. Nothing is invented. */
  details: string;
}

/** Events listed on eaddakids.com under "Our Events". */
export const events: EventItem[] = [
  { slug: "global-money-week", title: "Global Money Week", details: "" },
  { slug: "eaddapreneur-summer-camp", title: "Eaddapreneur Summer Camp", details: "" },
];
