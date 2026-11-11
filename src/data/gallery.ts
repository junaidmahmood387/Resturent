import { images } from "@/data/images";
import type { GalleryShot } from "@/types/content";

export const gallery: GalleryShot[] = [
  {
    id: "room",
    src: images.diningRoom,
    alt: "The dining room at night, with set tables and warm light",
    caption: "Twelve tables. Every seat can see the hearth.",
    column: "span 7",
    aspect: "16 / 11",
  },
  {
    id: "plate",
    src: images.finePlate,
    alt: "A composed fine-dining plate on a white cloth",
    caption: "Plates leave the pass when they are ready, not when a timer says so.",
    column: "span 5",
    aspect: "4 / 5",
  },
  {
    id: "wine",
    src: images.wine,
    alt: "Stemmed glasses of wine on a wooden table",
    caption: "Forty bottles. A short list, chosen by Claire Huang.",
    column: "span 4",
    aspect: "1 / 1",
  },
  {
    id: "sea",
    src: images.seafood,
    alt: "Seafood with herbs in a shallow bowl",
    caption: "Fish and shellfish come in the morning. We do not freeze them for later.",
    column: "span 4",
    aspect: "1 / 1",
  },
  {
    id: "sweet",
    src: images.dessert,
    alt: "A cream dessert with berries",
    caption: "Dessert stays quiet. Olive oil, citrus, chocolate, cheese.",
    column: "span 4",
    aspect: "1 / 1",
  },
  {
    id: "kitchen",
    src: images.kitchen,
    alt: "A cook working at a prep counter",
    caption: "The kitchen is open to the room. There is nowhere to hide a mistake.",
    column: "span 5",
    aspect: "4 / 5",
  },
  {
    id: "service",
    src: images.service,
    alt: "Guests at a restaurant table during service",
    caption: "Linen, low light, and enough space to actually talk.",
    column: "span 7",
    aspect: "16 / 11",
  },
];
