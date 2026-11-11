import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { Frame } from "@/components/ui/Frame";
import { hours, nav, site } from "@/data/site";
import { colors } from "@/theme/tokens";

export function SiteFooter() {
  return (
    <Box
      component="footer"
      sx={{ borderTop: `1px solid ${colors.line}`, mt: { xs: 4, md: 8 }, py: { xs: 6, md: 8 } }}
    >
      <Frame>
        <Box
          sx={{
            display: "grid",
            gap: 5,
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1.3fr 1fr 1fr 1fr" },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: 28,
                letterSpacing: "0.14em",
              }}
            >
              SOLENNE
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.7, mt: 2 }}>
              {site.address[0]}
              <br />
              {site.address[1]}
            </Typography>
            <Box
              component="a"
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: colors.copper, display: "inline-block", mt: 1.5 }}
            >
              Open the map
            </Box>
          </Box>

          <Box>
            <Typography sx={{ letterSpacing: "0.16em", mb: 2, fontSize: 12 }}>HOURS</Typography>
            {hours.map((row) => (
              <Box key={row.days} sx={{ display: "flex", justifyContent: "space-between", gap: 2, py: 0.7 }}>
                <Typography sx={{ color: "text.secondary", fontSize: 14 }}>{row.days}</Typography>
                <Typography sx={{ fontSize: 14 }}>{row.time}</Typography>
              </Box>
            ))}
          </Box>

          <Box>
            <Typography sx={{ letterSpacing: "0.16em", mb: 2, fontSize: 12 }}>EXPLORE</Typography>
            <Box sx={{ display: "grid", gap: 1 }}>
              <FooterLink href="/">The house</FooterLink>
              {nav.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
              <FooterLink href="/reserve">Reserve</FooterLink>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ letterSpacing: "0.16em", mb: 2, fontSize: 12 }}>RESERVATIONS</Typography>
            <Typography>
              <Box component="a" href={site.phoneHref} sx={{ color: "inherit" }}>
                {site.phoneDisplay}
              </Box>
            </Typography>
            <Typography sx={{ color: "text.secondary", mt: 1 }}>{site.email}</Typography>
            <Typography sx={{ color: "text.secondary", mt: 2, lineHeight: 1.6 }}>
              Tables open 21 days ahead. We hold a seating for 15 minutes.
            </Typography>
          </Box>
        </Box>

        <Typography sx={{ color: colors.muted, fontSize: 13, mt: 6 }}>
          © 2026 Solenne. A fictional dining room, built as a portfolio piece.
        </Typography>
      </Frame>
    </Box>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <NextLink href={href} style={{ color: colors.ivory, textDecoration: "none" }}>
      <Box component="span" sx={{ "&:hover": { color: colors.copper } }}>
        {children}
      </Box>
    </NextLink>
  );
}
