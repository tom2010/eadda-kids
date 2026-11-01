export interface Testimonial {
  quote: string;
  /** Only use a name the reviewer has authorised. Never use a child's name or photo without permission. */
  name?: string;
  role: "Parent" | "Teacher" | "Reader";
  about?: string; // book or resource reviewed
}

/**
 * Add only genuine feedback here. While this list is empty, the site shows an invitation to share feedback.
 */
export const testimonials: Testimonial[] = [];
