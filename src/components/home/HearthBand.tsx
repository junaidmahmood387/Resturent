"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { colors } from "@/theme/tokens";

const HearthCanvas = dynamic(() => import("@/components/three/HearthCanvas"), {
  ssr: false,
});

export function HearthBand() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setSeen(true);
      },
      { rootMargin: "160px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        height: { xs: 240, md: 300 },
        mt: { xs: 6, md: 8 },
        position: "relative",
      }}
    >
      <Box
        role="img"
        aria-label="Embers turning slowly above a hearth ring."
        sx={{ inset: 0, position: "absolute" }}
      >
        {seen ? (
          <HearthCanvas reduced={reduced} frameloop={visible ? "always" : "never"} />
        ) : null}
      </Box>
      <Typography
        sx={{
          color: colors.muted,
          left: "50%",
          letterSpacing: "0.2em",
          position: "absolute",
          textTransform: "uppercase",
          top: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: 12,
          pointerEvents: "none",
        }}
      >
        Wood, not gas
      </Typography>
    </Box>
  );
}
