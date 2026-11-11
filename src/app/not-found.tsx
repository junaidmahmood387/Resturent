import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CopperButton } from "@/components/ui/CopperButton";
import { Frame } from "@/components/ui/Frame";
import { displaySx, eyebrowSx } from "@/theme/tokens";

export default function NotFound() {
  return (
    <Frame>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "70vh", pt: 12 }}>
        <Typography sx={eyebrowSx}>404</Typography>
        <Typography variant="h1" sx={{ ...displaySx, fontSize: { xs: "3rem", md: "4.5rem" }, maxWidth: 680 }}>
          This table is not on the floor.
        </Typography>
        <Typography sx={{ color: "text.secondary", maxWidth: 460, mt: 2, lineHeight: 1.7 }}>
          The page you asked for is not served. The menu, the room, and the reservation book are still open.
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 4 }}>
          <CopperButton href="/">Back to the house</CopperButton>
          <CopperButton href="/reserve" variant="outlined">
            Reserve
          </CopperButton>
        </Box>
      </Box>
    </Frame>
  );
}
