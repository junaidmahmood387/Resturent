"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { MotionConfig } from "framer-motion";
import { theme } from "@/theme/theme";

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
