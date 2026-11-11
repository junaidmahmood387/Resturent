"use client";

import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";
import { gallery } from "@/data/gallery";
import { colors } from "@/theme/tokens";
import type { GalleryShot } from "@/types/content";

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryShot | null>(null);

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gap: 1.5,
          gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" },
        }}
      >
        {gallery.map((shot) => (
          <Box
            key={shot.id}
            component="button"
            type="button"
            onClick={() => setActive(shot)}
            sx={{
              background: "transparent",
              border: 0,
              color: "inherit",
              cursor: "pointer",
              font: "inherit",
              gridColumn: { xs: "auto", md: shot.column },
              p: 0,
              textAlign: "left",
            }}
          >
            <Box sx={{ aspectRatio: { xs: "4 / 3", md: shot.aspect }, overflow: "hidden", position: "relative" }}>
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(min-width: 900px) 50vw, 100vw"
                quality={75}
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Typography sx={{ color: colors.muted, fontSize: 14, mt: 1.2 }}>{shot.caption}</Typography>
          </Box>
        ))}
      </Box>

      <Dialog open={Boolean(active)} onClose={() => setActive(null)} fullWidth maxWidth="md">
        {active ? (
          <Box>
            <Box sx={{ aspectRatio: "16 / 10", position: "relative" }}>
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="(min-width: 900px) 860px, 100vw"
                quality={75}
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Box sx={{ p: 3 }}>
              <Typography sx={{ fontSize: 18 }}>{active.caption}</Typography>
              <Box
                component="button"
                type="button"
                onClick={() => setActive(null)}
                sx={{
                  background: "transparent",
                  border: 0,
                  color: colors.copper,
                  cursor: "pointer",
                  font: "inherit",
                  mt: 2,
                  p: 0,
                }}
              >
                Close
              </Box>
            </Box>
          </Box>
        ) : null}
      </Dialog>
    </>
  );
}
