/**
 * Central brand configuration.
 * Details below come from the current eaddakids.com site (checked October 2026).
 * Anything left as an empty string is treated as "not supplied yet": the interface shows a clear
 * "to be added" state instead of a broken or invented link.
 */
export const site = {
  brandName: "Eadda Kids",
  authorName: "Gbonjubola Sanni",
  siteTitle: "Financial Education for Kids",

  /** Taken from the live site's welcome text. The site's own wording is longer; extend here if needed. */
  mission: "Our mission is to raise money smart children who will make wise financial decisions.",
  about: "Eadda Kids is committed to resources and events with respect to Financial Intelligence for Kids and Teens.",

  contact: {
    email: "info@eaddakids.com",
    phone: "08072692134",
    location: "Lagos, Nigeria",
  },

  /** Social profile URLs. The live site shows Facebook, Twitter and Instagram icons; paste the real links here. */
  social: {
    facebook: "",
    twitter: "",
    instagram: "",
  },
} as const;
