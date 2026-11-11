import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Frame } from "@/components/ui/Frame";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";
import { colors, displaySx } from "@/theme/tokens";

export function Testimonials() {
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 8 } }}>
      <Frame>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          }}
        >
          {testimonials.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <Box
                sx={{
                  border: `1px solid ${colors.line}`,
                  minHeight: { md: 280 },
                  p: { xs: 3, md: 4 },
                }}
              >
                <Typography
                  sx={{
                    ...displaySx,
                    fontSize: { xs: "1.7rem", md: "1.85rem" },
                  }}
                >
                  “{item.quote}”
                </Typography>
                <Typography sx={{ color: colors.muted, mt: 3 }}>
                  {item.name} · {item.detail}
                </Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Frame>
    </Box>
  );
}
