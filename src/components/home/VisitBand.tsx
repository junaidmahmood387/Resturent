import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Frame } from "@/components/ui/Frame";
import { hours, site } from "@/data/site";
import { colors, displaySx, eyebrowSx } from "@/theme/tokens";

export function VisitBand() {
  return (
    <Box component="section" id="visit" sx={{ py: { xs: 8, md: 12 } }}>
      <Frame>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 5, md: 8 },
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          }}
        >
          <Box>
            <Typography sx={eyebrowSx}>Visit</Typography>
            <Typography variant="h2" sx={{ ...displaySx, fontSize: { xs: "2.6rem", md: "3.6rem" } }}>
              Bedford Street, after dark.
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 18, lineHeight: 1.7, mt: 2 }}>
              {site.address[0]}
              <br />
              {site.address[1]}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <Box component="a" href={site.phoneHref} sx={{ color: colors.ivory }}>
                {site.phoneDisplay}
              </Box>
            </Typography>
            <Box
              component="a"
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: colors.copper, display: "inline-block", mt: 2 }}
            >
              Get directions
            </Box>
          </Box>
          <Box component="dl" sx={{ m: 0 }}>
            {hours.map((row) => (
              <Box
                key={row.days}
                sx={{
                  borderBottom: `1px solid ${colors.line}`,
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 2,
                  py: 1.6,
                }}
              >
                <Typography component="dt">{row.days}</Typography>
                <Typography component="dd" sx={{ m: 0 }}>
                  {row.time}
                </Typography>
              </Box>
            ))}
            <Typography sx={{ color: "text.secondary", mt: 2.5, lineHeight: 1.6 }}>
              The front alcove seats six. Ask when you reserve. Parties larger than eight
              are arranged by phone.
            </Typography>
          </Box>
        </Box>
      </Frame>
    </Box>
  );
}
