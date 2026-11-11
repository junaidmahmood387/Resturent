import type { HourRow } from "@/types/content";

export const site = {
  name: "Solenne",
  neighborhood: "West Village",
  city: "New York",
  tagline: "Hearth dining in the West Village",
  description:
    "Solenne is a twelve-table dining room on Bedford Street. Wood fire, seasonal plates, and a short wine list. This is a portfolio concept, not a real reservation book.",
  address: ["18 Bedford Street", "New York, NY 10014"],
  phoneDisplay: "+1 (212) 555-0196",
  phoneHref: "tel:+12125550196",
  email: "reservations@solenne.example",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=18+Bedford+Street+New+York",
  tastingPrice: 145,
  pairingPrice: 210,
} as const;

export const hours: HourRow[] = [
  { days: "Tuesday – Thursday", time: "5:30 pm – 10:00 pm" },
  { days: "Friday – Saturday", time: "5:00 pm – 11:00 pm" },
  { days: "Sunday", time: "5:00 pm – 9:30 pm" },
  { days: "Monday", time: "Closed" },
];

export const nav = [
  { href: "/menu", label: "Menu" },
  { href: "/story", label: "Story" },
  { href: "/gallery", label: "Gallery" },
] as const;
