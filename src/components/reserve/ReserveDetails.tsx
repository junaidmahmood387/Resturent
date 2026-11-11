import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { hours, site } from "@/data/site";
import { colors, eyebrowSx } from "@/theme/tokens";

export function ReserveDetails() {
  return (
    <Box>
      <Typography sx={eyebrowSx}>Before you ask</Typography>
      <Box component="ul" sx={{ color: "text.secondary", lineHeight: 1.7, m: 0, pl: 2.2 }}>
        <li>The book opens 21 days ahead.</li>
        <li>Monday the dining room is dark.</li>
        <li>We hold a table for 15 minutes past the seating.</li>
        <li>The front alcove seats six. Ask for it in the note.</li>
        <li>Parties larger than eight are arranged by phone.</li>
      </Box>
      <Typography sx={{ mt: 4, fontFamily: "var(--font-display), Georgia, serif", fontSize: 28 }}>
        {site.phoneDisplay}
      </Typography>
      <Typography sx={{ color: colors.muted }}>{site.email}</Typography>
      <Box sx={{ mt: 4 }}>
        {hours.map((row) => (
          <Box
            key={row.days}
            sx={{
              borderBottom: `1px solid ${colors.line}`,
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
              py: 1.2,
            }}
          >
            <Typography sx={{ color: "text.secondary" }}>{row.days}</Typography>
            <Typography>{row.time}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
