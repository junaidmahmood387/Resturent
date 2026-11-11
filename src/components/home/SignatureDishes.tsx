import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { Frame } from "@/components/ui/Frame";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredDishes } from "@/data/menu";
import { formatUsd } from "@/lib/money";
import { colors } from "@/theme/tokens";

export function SignatureDishes() {
  const dishes = featuredDishes();

  return (
    <Box component="section" sx={{ pb: { xs: 8, md: 12 } }}>
      <Frame>
        <SectionHeading
          eyebrow="From a recent evening"
          title="Three plates worth crossing town for."
          lede="The menu moves with the market. These are the dishes guests ask about before they sit down."
        />
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
          }}
        >
          {dishes.map((dish, index) => (
            <Reveal key={dish.id} delay={index * 0.08}>
              <NextLink href="/menu" style={{ color: "inherit", display: "block", height: "100%", textDecoration: "none" }}>
              <Box sx={{ height: "100%" }}>
                {dish.image && dish.imageAlt ? (
                  <MediaFrame
                    src={dish.image}
                    alt={dish.imageAlt}
                    sizes="(min-width: 900px) 33vw, 100vw"
                    aspect="4 / 5"
                    preload={index === 0}
                  />
                ) : null}
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, mt: 2 }}>
                  <Typography sx={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 26 }}>
                    {dish.name}
                  </Typography>
                  <Typography sx={{ color: colors.copper }}>{formatUsd(dish.price)}</Typography>
                </Box>
                <Typography sx={{ color: "text.secondary", mt: 0.5 }}>{dish.detail}</Typography>
              </Box>
              </NextLink>
            </Reveal>
          ))}
        </Box>
      </Frame>
    </Box>
  );
}
