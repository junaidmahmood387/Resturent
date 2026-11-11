import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Frame } from "@/components/ui/Frame";
import { Reveal } from "@/components/ui/Reveal";
import { displaySx } from "@/theme/tokens";

export function Intro() {
  return (
    <Box component="section" sx={{ py: { xs: 9, md: 14 } }}>
      <Frame>
        <Reveal>
          <Typography
            sx={{
              ...displaySx,
              fontSize: { xs: "2rem", md: "3.15rem" },
              maxWidth: 920,
            }}
          >
            The fire is not a show. It is how the duck gets its skin, how the leeks take
            on smoke, and why the room smells like evening even in June.
          </Typography>
        </Reveal>
      </Frame>
    </Box>
  );
}
