export const courses = [
  "To begin",
  "From the fire",
  "From the water",
  "Garden",
  "To close",
  "By the glass",
] as const;

export type Course = (typeof courses)[number];

export type MenuItem = {
  id: string;
  course: Course;
  name: string;
  detail: string;
  story: string;
  price: number;
  tags: string[];
  pairing?: string;
  image?: string;
  imageAlt?: string;
};

export type GalleryShot = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  column: string;
  aspect: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  detail: string;
};

export type HourRow = {
  days: string;
  time: string;
};
