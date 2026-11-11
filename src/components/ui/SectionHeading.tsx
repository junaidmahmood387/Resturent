import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { displaySx, eyebrowSx } from "@/theme/tokens";

export function SectionHeading({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <Box sx={{ maxWidth: 680, mb: { xs: 5, md: 7 } }}>
      <Typography sx={eyebrowSx}>{eyebrow}</Typography>
      <Typography
        variant="h2"
        sx={{ ...displaySx, fontSize: { xs: "2.4rem", md: "3.6rem" } }}
      >
        {title}
      </Typography>
      {lede ? (
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: { xs: 16, md: 18 },
            lineHeight: 1.65,
            mt: 2,
          }}
        >
          {lede}
        </Typography>
      ) : null}
    </Box>
  );
}
