import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Frame } from "@/components/ui/Frame";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "The room",
  description:
    "Photographs of the dining room, the pass, and the plates at Solenne in the West Village.",
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="The room"
        title="Low light, linen, and the fire in view."
        lede="A look at the dining room and a few plates from recent evenings. Click any photograph to see it larger."
      />
      <Frame sx={{ pb: { xs: 8, md: 12 } }}>
        <GalleryGrid />
      </Frame>
    </>
  );
}
