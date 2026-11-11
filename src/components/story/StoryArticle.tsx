import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Frame } from "@/components/ui/Frame";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/images";
import { colors, displaySx, eyebrowSx } from "@/theme/tokens";

const principles = [
  {
    title: "Buy less, cook it harder",
    copy: "The list is short because the fire only has so many hours. If an ingredient is tired, it does not get a plate.",
  },
  {
    title: "The wine list stays small on purpose",
    copy: "Forty bottles, a serious list of ferments, and a wine director who would rather talk than upsell.",
  },
  {
    title: "Twelve tables is a decision",
    copy: "We turned away a larger room. The evening only works if the kitchen can see every table and every table can see the fire.",
  },
];

export function StoryArticle() {
  return (
    <Frame>
      <Box
        sx={{
          display: "grid",
          gap: { xs: 4, md: 8 },
          gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
        }}
      >
        <Reveal>
          <Typography sx={{ fontSize: 18, lineHeight: 1.75 }}>
            Solenne opened in a former carriage house on Bedford Street. The brick was
            already dark. We added the hearth, took out half the seats a landlord would
            have wanted, and left the windows uncovered.
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: 18, lineHeight: 1.75, mt: 2 }}>
            Elena Voss cooked at a seafood house in Copenhagen and a fire restaurant in
            San Sebastián. She wanted a room in New York that felt like those services:
            close, quiet, and serious about the thing on the plate. Marcus Adeyemi runs
            the kitchen beside her. Claire Huang writes the list and pours most of it
            herself.
          </Typography>
        </Reveal>
        <Reveal delay={0.08}>
          <MediaFrame
            src={images.table}
            alt="A set table with wine glasses before service"
            sizes="(min-width: 900px) 40vw, 100vw"
            aspect="4 / 5"
          />
        </Reveal>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Typography
          sx={{
            ...displaySx,
            fontSize: { xs: "2rem", md: "3rem" },
            maxWidth: 860,
          }}
        >
          “We would rather be full at twelve tables than half-empty at thirty.”
        </Typography>
        <Typography sx={{ color: colors.muted, mt: 2 }}>Elena Voss</Typography>
      </Box>

      <Box sx={{ mb: { xs: 6, md: 10 } }}>
        <MediaFrame
          src={images.kitchen}
          alt="Prep underway in the open kitchen"
          sizes="100vw"
          aspect="16 / 8"
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          pb: { xs: 6, md: 10 },
        }}
      >
        {principles.map((item) => (
          <Box key={item.title} sx={{ borderTop: `1px solid ${colors.line}`, pt: 2.5 }}>
            <Typography sx={eyebrowSx}>House rule</Typography>
            <Typography sx={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 28 }}>
              {item.title}
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.65, mt: 1.5 }}>
              {item.copy}
            </Typography>
          </Box>
        ))}
      </Box>
    </Frame>
  );
}
