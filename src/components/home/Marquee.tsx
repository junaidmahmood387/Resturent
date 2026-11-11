import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { colors } from "@/theme/tokens";

const phrases = [
  "Wood fire",
  "Market fish",
  "Natural wine",
  "Twelve tables",
  "No rush",
  "Seasonal plates",
];

export function Marquee() {
  const line = [...phrases, ...phrases];

  return (
    <Box
      className="marquee"
      aria-hidden
      sx={{ borderBottom: `1px solid ${colors.line}`, borderTop: `1px solid ${colors.line}` }}
    >
      <Box className="marquee-track" sx={{ py: 1.6 }}>
        {line.map((phrase, index) => (
          <Typography
            key={`${phrase}-${index}`}
            component="span"
            sx={{
              color: colors.muted,
              fontSize: 13,
              letterSpacing: "0.18em",
              px: 3,
              textTransform: "uppercase",
            }}
          >
            {phrase}
            <Box component="span" sx={{ color: colors.copper, px: 3 }}>
              ·
            </Box>
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
