import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Frame } from "@/components/ui/Frame";
import { HearthBand } from "@/components/home/HearthBand";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/images";
import { colors, displaySx, eyebrowSx } from "@/theme/tokens";

const points = [
  {
    number: "01",
    title: "The hearth",
    copy: "Every seat can see the fire. Nothing is finished under a lamp in the back.",
  },
  {
    number: "02",
    title: "The list",
    copy: "Forty bottles, all of them something the wine director would drink. The non-alcoholic list is just as serious.",
  },
  {
    number: "03",
    title: "The pace",
    copy: "Courses arrive when they are ready. We will not rush a table, and we will not forget one.",
  },
  {
    number: "04",
    title: "The room",
    copy: "Linen, low light, and enough space between tables to have a private conversation.",
  },
];

export function Evening() {
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 8 } }}>
      <Frame>
        <Box
          sx={{
            alignItems: "center",
            display: "grid",
            gap: { xs: 4, md: 7 },
            gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
          }}
        >
          <Reveal>
            <MediaFrame
              src={images.diningRoom}
              alt="Solenne's dining room, lit for the evening service"
              sizes="(min-width: 900px) 42vw, 100vw"
              aspect="4 / 5"
            />
          </Reveal>
          <Box>
            <Typography sx={eyebrowSx}>The evening</Typography>
            <Typography variant="h2" sx={{ ...displaySx, fontSize: { xs: "2.4rem", md: "3.4rem" }, mb: 4 }}>
              A small room, run on purpose.
            </Typography>
            {points.map((point) => (
              <Box
                key={point.number}
                sx={{
                  borderTop: `1px solid ${colors.line}`,
                  display: "grid",
                  gap: 2,
                  gridTemplateColumns: "52px 1fr",
                  py: 2.2,
                }}
              >
                <Typography sx={{ color: colors.copper, fontSize: 13 }}>{point.number}</Typography>
                <Box>
                  <Typography sx={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 24 }}>
                    {point.title}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", lineHeight: 1.6, mt: 0.6 }}>
                    {point.copy}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Frame>
      <HearthBand />
    </Box>
  );
}
