import type { Metadata } from "next";
import { StoryArticle } from "@/components/story/StoryArticle";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "The house",
  description:
    "How Solenne came to Bedford Street: twelve tables, an open hearth, and a kitchen that buys less and cooks it harder.",
};

export default function StoryPage() {
  return (
    <>
      <PageIntro
        eyebrow="The house"
        title="A carriage house, a hearth, and twelve tables."
        lede="Solenne is the room Elena Voss wanted to eat in after years of other people's kitchens. Small on purpose."
      />
      <StoryArticle />
    </>
  );
}
