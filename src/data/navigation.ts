export interface NavItem {
  label: string;
  href: string;
  /** Dropdown entries (the live site groups "About us" and "Our Programmes" under "EaddaKids"). */
  children?: { label: string; href: string }[];
}

export const navLinks: NavItem[] = [
  { label: "Home", href: "#home" },
  {
    label: "EaddaKids",
    href: "#/about",
    children: [
      { label: "About us", href: "#/about" },
      { label: "Our Programmes", href: "#/programmes" },
    ],
  },
  { label: "Our Bookstore", href: "#books" },
  { label: "Blog", href: "#blog" },
  { label: "Contact us", href: "#contact" },
];

export const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#/about" },
  { label: "Our Programmes", href: "#/programmes" },
  { label: "Our Bookstore", href: "#books" },
  { label: "Blog", href: "#blog" },
  { label: "Contact us", href: "#contact" },
];
