"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SceneBoundary } from "@/components/three/SceneBoundary";
import { CopperButton } from "@/components/ui/CopperButton";
import { Frame } from "@/components/ui/Frame";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { colors, displaySx, eyebrowSx } from "@/theme/tokens";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
  loading: () => <PlatePlaceholder />,
});

function PlatePlaceholder() {
  return (
    <Box
      aria-hidden
      sx={{
        alignItems: "center",
        display: "flex",
        inset: 0,
        justifyContent: "center",
        position: "absolute",
      }}
    >
      <Box
        sx={{
          animation: "solenne-spin 1.1s linear infinite",
          border: "1px solid rgba(201, 132, 74, 0.45)",
          borderRadius: "50%",
          borderTopColor: "transparent",
          height: 150,
          width: 150,
        }}
      />
    </Box>
  );
}

function PlateFallback() {
  return (
    <Box sx={{ inset: 0, position: "absolute" }}>
      <Image
        src={images.seafood}
        alt="A seafood plate standing in for the 3D dish"
        fill
        sizes="(min-width: 900px) 50vw, 100vw"
        quality={75}
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
}

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const stage = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = stage.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Box component="section" sx={{ minHeight: { md: "100svh" }, position: "relative" }}>
      <Frame>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            minHeight: { md: "100svh" },
            pb: { xs: 5, md: 8 },
            pt: { xs: 14, md: 12 },
            width: { md: "46%" },
          }}
        >
          <Box>
            <Typography sx={eyebrowSx}>
              {site.neighborhood}, {site.city}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                ...displaySx,
                fontSize: { xs: "3.1rem", sm: "4rem", md: "4.35rem" },
                maxWidth: 520,
              }}
            >
              Dinner, held to the pace of the{" "}
              <Box component="em" sx={{ color: colors.copper, fontStyle: "italic" }}>
                fire
              </Box>
              .
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: 17, md: 18 },
                lineHeight: 1.7,
                maxWidth: 460,
                mt: 3,
              }}
            >
              Twelve tables on Bedford Street. An open hearth, a short list of bottles,
              and an evening that is not rushed out the door.
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 4 }}>
              <CopperButton href="/reserve">Reserve a table</CopperButton>
              <CopperButton href="/menu" variant="outlined">
                Read the menu
              </CopperButton>
            </Box>
            <Typography sx={{ color: colors.muted, fontSize: 14, mt: 3.5 }}>
              Tasting menu $145 · À la carte · Jackets optional
            </Typography>
          </Box>
        </Box>
      </Frame>

      <Box
        ref={stage}
        sx={{
          bottom: { md: 0 },
          height: { xs: 480, md: "auto" },
          position: { xs: "relative", md: "absolute" },
          right: { md: 0 },
          top: { md: 0 },
          width: { md: "50%" },
        }}
      >
        <Box
          role="img"
          aria-label="A 3D plate of seared scallops, saffron butter, and a glass of red wine. Drag sideways to turn it."
          sx={{
            background:
              "radial-gradient(ellipse at 55% 45%, rgba(201,132,74,0.16), transparent 62%)",
            height: "100%",
            minHeight: { xs: 480, md: "100%" },
            position: "relative",
          }}
        >
          <SceneBoundary fallback={<PlateFallback />}>
            <HeroCanvas reduced={reduced} frameloop={visible ? "always" : "never"} />
          </SceneBoundary>
          <Box
            sx={{
              background: {
                md: "linear-gradient(90deg, #0c0b09 0%, rgba(12,11,9,0) 22%)",
              },
              inset: 0,
              pointerEvents: "none",
              position: "absolute",
            }}
          />
          <Typography
            sx={{
              bottom: { xs: 16, md: 36 },
              color: colors.muted,
              fontSize: 12,
              left: { xs: 20, md: 48 },
              letterSpacing: "0.16em",
              pointerEvents: "none",
              position: "absolute",
              textTransform: "uppercase",
            }}
          >
            Tonight’s plate · drag to turn
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
