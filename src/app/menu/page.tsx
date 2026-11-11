import type { Metadata } from "next";
import { MenuBoard } from "@/components/menu/MenuBoard";
import { Frame } from "@/components/ui/Frame";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "The menu",
  description:
    "À la carte and a tasting menu at Solenne. Wood fire, market fish, and a short list of bottles in the West Village.",
};

export default function MenuPage() {
  return (
    <>
      <PageIntro
        eyebrow="The menu"
        title="What the fire is doing tonight."
        lede="The card changes when the market does. What you see here is a recent evening, written the way we would hand it to a guest."
      />
      <Frame sx={{ pb: { xs: 8, md: 12 } }}>
        <MenuBoard />
      </Frame>
    </>
  );
}
