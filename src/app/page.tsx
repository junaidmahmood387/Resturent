import { ChefNote } from "@/components/home/ChefNote";
import { Evening } from "@/components/home/Evening";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Marquee } from "@/components/home/Marquee";
import { ReserveBand } from "@/components/home/ReserveBand";
import { SignatureDishes } from "@/components/home/SignatureDishes";
import { Testimonials } from "@/components/home/Testimonials";
import { VisitBand } from "@/components/home/VisitBand";
import { site } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  servesCuisine: "Seasonal hearth cuisine",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 Bedford Street",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10014",
    addressCountry: "US",
  },
  telephone: "+1-212-555-0196",
  priceRange: "$$$",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Marquee />
      <Intro />
      <SignatureDishes />
      <Evening />
      <ChefNote />
      <Testimonials />
      <VisitBand />
      <ReserveBand />
    </>
  );
}
