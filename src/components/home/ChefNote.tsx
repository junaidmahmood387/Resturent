import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Frame } from "@/components/ui/Frame";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/images";
import { colors, displaySx, eyebrowSx } from "@/theme/tokens";

export function ChefNote() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Frame>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 4, md: 8 },
            gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" },
          }}
        >
          <Reveal>
            <MediaFrame
              src={images.chef}
              alt="Chef Elena Voss in the kitchen"
              sizes="(min-width: 900px) 34vw, 100vw"
              aspect="4 / 5"
            />
            <Typography sx={{ mt: 2, fontFamily: "var(--font-display), Georgia, serif", fontSize: 28 }}>
              Elena Voss
            </Typography>
            <Typography sx={{ color: colors.muted }}>Chef and partner</Typography>
          </Reveal>
          <Reveal delay={0.08}>
            <Typography sx={eyebrowSx}>A note from the kitchen</Typography>
            <Typography
              variant="h2"
              sx={{ ...displaySx, fontSize: { xs: "2.3rem", md: "3.2rem" }, mb: 3 }}
            >
              We buy less, and cook it harder.
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 18, lineHeight: 1.75 }}>
              I cooked fish in Copenhagen and fire in San Sebastián before we took the
              carriage house on Bedford Street. Solenne is the room I wanted to eat in:
              small enough to hear the service, serious enough that the duck is worth the
              trip.
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 18, lineHeight: 1.75, mt: 2 }}>
              The menu is short because the fire only does a few things well in one night.
              If a peach is tired, it does not get a plate. If the branzino is beautiful,
              that is dinner.
            </Typography>
          </Reveal>
        </Box>
      </Frame>
    </Box>
  );
}
