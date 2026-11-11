import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CopperButton } from "@/components/ui/CopperButton";
import { Frame } from "@/components/ui/Frame";
import { colors, displaySx, eyebrowSx } from "@/theme/tokens";

export function ReserveBand() {
  return (
    <Box
      component="section"
      sx={{
        background:
          "radial-gradient(ellipse at center, rgba(201,132,74,0.16), transparent 58%)",
        borderTop: `1px solid ${colors.line}`,
        py: { xs: 10, md: 14 },
      }}
    >
      <Frame>
        <Typography sx={eyebrowSx}>Reservations</Typography>
        <Typography
          variant="h2"
          sx={{ ...displaySx, fontSize: { xs: "2.8rem", md: "4.6rem" }, maxWidth: 760 }}
        >
          A table is waiting, if you ask in time.
        </Typography>
        <Typography sx={{ color: "text.secondary", fontSize: 18, maxWidth: 480, mt: 2 }}>
          We open the book 21 days ahead. Half the room is usually spoken for by the end
          of the first morning.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <CopperButton href="/reserve">Request a seating</CopperButton>
        </Box>
      </Frame>
    </Box>
  );
}
