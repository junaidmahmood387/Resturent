import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Frame } from "@/components/ui/Frame";
import { Reveal } from "@/components/ui/Reveal";
import { displaySx, eyebrowSx } from "@/theme/tokens";

export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <Box component="header" sx={{ pb: { xs: 4, md: 6 }, pt: { xs: 15, md: 18 } }}>
      <Frame>
        <Reveal>
          <Typography sx={eyebrowSx}>{eyebrow}</Typography>
          <Typography
            variant="h1"
            sx={{ ...displaySx, fontSize: { xs: "3rem", md: "5rem" }, maxWidth: 820 }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: { xs: 17, md: 19 },
              lineHeight: 1.65,
              maxWidth: 560,
              mt: 2.5,
            }}
          >
            {lede}
          </Typography>
        </Reveal>
      </Frame>
    </Box>
  );
}
