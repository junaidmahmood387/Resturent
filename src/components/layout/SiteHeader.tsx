"use client";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CopperButton } from "@/components/ui/CopperButton";
import { nav, site } from "@/data/site";
import { colors } from "@/theme/tokens";

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const open = openPath === pathname;
  const solid = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      component="header"
      sx={{
        backdropFilter: solid ? "blur(16px)" : "none",
        bgcolor: solid ? "rgba(12, 11, 9, 0.9)" : "transparent",
        borderBottom: `1px solid ${solid ? colors.line : "transparent"}`,
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        transition: "background-color 200ms ease, border-color 200ms ease",
        zIndex: 120,
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          height: 76,
          justifyContent: "space-between",
          mx: "auto",
          maxWidth: 1180,
          px: { xs: 2.5, sm: 4 },
        }}
      >
        <Box
          component={NextLink}
          href="/"
          sx={{ color: "inherit", textDecoration: "none" }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: 22,
              letterSpacing: "0.18em",
              lineHeight: 1,
            }}
          >
            SOLENNE
          </Typography>
          <Typography
            sx={{
              color: colors.muted,
              fontSize: 10,
              letterSpacing: "0.26em",
              mt: 0.5,
            }}
          >
            WEST VILLAGE
          </Typography>
        </Box>

        <Box sx={{ alignItems: "center", display: { xs: "none", md: "flex" }, gap: 4 }}>
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Box
                key={item.href}
                component={NextLink}
                href={item.href}
                aria-current={active ? "page" : undefined}
                sx={{
                  color: active ? colors.ivory : colors.muted,
                  fontSize: 13,
                  letterSpacing: "0.16em",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  "&:hover": { color: colors.ivory },
                }}
              >
                {item.label}
              </Box>
            );
          })}
          <CopperButton href="/reserve">Reserve</CopperButton>
        </Box>

        <IconButton
          aria-label="Open the menu"
          onClick={() => setOpenPath(pathname)}
          sx={{ color: colors.ivory, display: { md: "none" }, mr: -1 }}
        >
          <Box
            aria-hidden
            sx={{ display: "grid", gap: "5px", width: 22 }}
          >
            <Box sx={{ bgcolor: "currentColor", borderRadius: 1, height: "2px" }} />
            <Box sx={{ bgcolor: "currentColor", borderRadius: 1, height: "2px" }} />
            <Box sx={{ bgcolor: "currentColor", borderRadius: 1, height: "2px" }} />
          </Box>
        </IconButton>
      </Box>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpenPath(null)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: colors.bg,
            backgroundImage: "none",
            px: 3,
            py: 3,
            width: "min(100%, 400px)",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 6 }}>
          <Typography sx={{ letterSpacing: "0.18em" }}>SOLENNE</Typography>
          <IconButton aria-label="Close the menu" onClick={() => setOpenPath(null)} sx={{ color: colors.ivory }}>
            <Typography>Close</Typography>
          </IconButton>
        </Box>
        <Box sx={{ display: "grid", gap: 2.5 }}>
          {nav.map((item) => (
            <Box
              key={item.href}
              component={NextLink}
              href={item.href}
              onClick={() => setOpenPath(null)}
              sx={{
                color: colors.ivory,
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: 40,
                textDecoration: "none",
              }}
            >
              {item.label}
            </Box>
          ))}
        </Box>
        <Box sx={{ mt: 5 }}>
          <CopperButton href="/reserve" fullWidth>
            Reserve a table
          </CopperButton>
          <Typography sx={{ color: colors.muted, mt: 3 }}>
            {site.phoneDisplay}
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
}
