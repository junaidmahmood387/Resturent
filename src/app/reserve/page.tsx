import type { Metadata } from "next";
import Box from "@mui/material/Box";
import { ReserveDetails } from "@/components/reserve/ReserveDetails";
import { ReserveForm } from "@/components/reserve/ReserveForm";
import { Frame } from "@/components/ui/Frame";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Reserve a table",
  description:
    "Request a seating at Solenne. The dining room is open Tuesday through Sunday. Mondays are dark.",
};

export default function ReservePage() {
  return (
    <>
      <PageIntro
        eyebrow="Reserve"
        title="Tell us when you want to sit."
        lede="A request is not a confirmation. On a live site the house would write back the same day. Here, the form shows you exactly what that moment feels like."
      />
      <Frame>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 5, md: 8 },
            gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" },
            pb: { xs: 8, md: 12 },
          }}
        >
          <ReserveDetails />
          <ReserveForm />
        </Box>
      </Frame>
    </>
  );
}
