import type { SxProps, Theme } from "@mui/material/styles";

export const colors = {
  bg: "#0c0b09",
  bgRaised: "#141210",
  bgSoft: "#1c1915",
  ivory: "#f4efe6",
  muted: "#b7aea3",
  copper: "#c9844a",
  copperHover: "#d79a5e",
  ink: "#1a120c",
  line: "rgba(244, 239, 230, 0.14)",
} as const;

export const eyebrowSx: SxProps<Theme> = {
  color: colors.copper,
  display: "block",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "0.22em",
  lineHeight: 1.4,
  mb: 1.5,
  textTransform: "uppercase",
};

export const displaySx: SxProps<Theme> = {
  fontFamily: "var(--font-display), Georgia, serif",
  fontWeight: 500,
  letterSpacing: "-0.03em",
  lineHeight: 1.02,
};
