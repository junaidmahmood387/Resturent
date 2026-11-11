"use client";

import { createTheme } from "@mui/material/styles";
import { colors } from "@/theme/tokens";

const sans = 'var(--font-sans), "Segoe UI", sans-serif';
const display = "var(--font-display), Georgia, serif";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.copper,
      contrastText: colors.ink,
    },
    background: {
      default: colors.bg,
      paper: colors.bgRaised,
    },
    text: {
      primary: colors.ivory,
      secondary: colors.muted,
    },
    divider: colors.line,
  },
  typography: {
    fontFamily: sans,
    h1: {
      fontFamily: display,
      fontWeight: 500,
      letterSpacing: "-0.035em",
      lineHeight: 0.98,
    },
    h2: {
      fontFamily: display,
      fontWeight: 500,
      letterSpacing: "-0.03em",
      lineHeight: 1.02,
    },
    h3: {
      fontFamily: display,
      fontWeight: 500,
      letterSpacing: "-0.02em",
      lineHeight: 1.15,
    },
    button: {
      fontFamily: sans,
      fontWeight: 500,
      letterSpacing: "0.12em",
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.bg,
          color: colors.ivory,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
          minHeight: 48,
          padding: "12px 22px",
          "&.MuiButton-containedPrimary:hover": {
            backgroundColor: colors.copperHover,
            boxShadow: "none",
          },
        },
        outlined: {
          borderColor: "rgba(201, 132, 74, 0.7)",
          color: colors.ivory,
          "&:hover": {
            borderColor: colors.copper,
            backgroundColor: "rgba(201, 132, 74, 0.08)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: "rgba(244, 239, 230, 0.03)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(244, 239, 230, 0.22)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(244, 239, 230, 0.45)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.copper,
            borderWidth: 1,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.muted,
          "&.Mui-focused": {
            color: colors.copper,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: colors.bgRaised,
          backgroundImage: "none",
          border: `1px solid ${colors.line}`,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          color: colors.ivory,
          borderColor: colors.line,
          textTransform: "none",
          letterSpacing: "0.04em",
          "&.Mui-selected": {
            backgroundColor: colors.copper,
            color: colors.ink,
            "&:hover": {
              backgroundColor: colors.copperHover,
            },
          },
        },
      },
    },
  },
});
