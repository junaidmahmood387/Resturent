"use client";

import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";
import { menu } from "@/data/menu";
import { site } from "@/data/site";
import { formatUsd } from "@/lib/money";
import { colors } from "@/theme/tokens";
import { courses, type Course, type MenuItem } from "@/types/content";

type Filter = "All" | Course;

export function MenuBoard() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<MenuItem | null>(null);
  const visibleCourses = filter === "All" ? courses : courses.filter((course) => course === filter);

  return (
    <Box>
      <Box
        sx={{
          bgcolor: "rgba(12,11,9,0.92)",
          border: `1px solid ${colors.line}`,
          mb: 4,
          p: { xs: 2.5, md: 3 },
        }}
      >
        <Typography sx={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: { xs: 28, md: 34 } }}>
          Tasting menu {formatUsd(site.tastingPrice)}
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: 1, maxWidth: 640 }}>
          Or {formatUsd(site.pairingPrice)} with wine. The table orders the tasting together.
          À la carte is below. Wine by the glass is a five-ounce pour. We do not add a
          service charge.
        </Typography>
      </Box>

      <ToggleButtonGroup
        exclusive
        value={filter}
        aria-label="Menu courses"
        onChange={(_, value: Filter | null) => {
          if (value) setFilter(value);
        }}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          mb: 5,
          "& .MuiToggleButtonGroup-grouped": {
            border: `1px solid ${colors.line}`,
            borderRadius: "999px !important",
            m: 0,
          },
        }}
      >
        {(["All", ...courses] as Filter[]).map((course) => (
          <ToggleButton key={course} value={course}>
            {course}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      {visibleCourses.map((course) => {
        const items = menu.filter((item) => item.course === course);
        return (
          <Box key={course} component="section" sx={{ mb: 6 }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: { xs: 32, md: 42 },
                mb: 1,
              }}
            >
              {course}
            </Typography>
            {items.map((item) => (
              <Box
                key={item.id}
                component="button"
                type="button"
                onClick={() => setActive(item)}
                sx={{
                  background: "transparent",
                  border: 0,
                  borderBottom: `1px solid ${colors.line}`,
                  color: "inherit",
                  cursor: "pointer",
                  display: "block",
                  font: "inherit",
                  py: 2.6,
                  textAlign: "left",
                  width: "100%",
                  "&:hover .dish-name": { color: colors.copper },
                }}
              >
                <Box
                  sx={{
                    alignItems: "baseline",
                    display: "grid",
                    gap: 1,
                    gridTemplateColumns: { xs: "1fr", sm: "1fr auto" },
                  }}
                >
                  <Typography className="dish-name" sx={{ fontSize: 20 }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ color: colors.copper }}>{formatUsd(item.price)}</Typography>
                </Box>
                <Typography sx={{ color: "text.secondary", mt: 0.6 }}>{item.detail}</Typography>
                {item.tags.length > 0 ? (
                  <Typography sx={{ color: colors.muted, fontSize: 13, mt: 1 }}>
                    {item.tags.join(" · ")}
                  </Typography>
                ) : null}
              </Box>
            ))}
          </Box>
        );
      })}

      <Dialog open={Boolean(active)} onClose={() => setActive(null)} fullWidth maxWidth="sm">
        {active ? (
          <Box sx={{ p: { xs: 2.5, sm: 3.5 } }}>
            {active.image && active.imageAlt ? (
              <Box sx={{ aspectRatio: "16 / 10", mb: 2.5, position: "relative" }}>
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  sizes="(min-width: 600px) 520px, 100vw"
                  quality={75}
                  style={{ objectFit: "cover" }}
                />
              </Box>
            ) : null}
            <Typography sx={{ color: colors.copper, fontSize: 12, letterSpacing: "0.16em" }}>
              {active.course.toUpperCase()}
            </Typography>
            <Box sx={{ alignItems: "baseline", display: "flex", justifyContent: "space-between", gap: 2, mt: 1 }}>
              <Typography sx={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 36 }}>
                {active.name}
              </Typography>
              <Typography>{formatUsd(active.price)}</Typography>
            </Box>
            <Typography sx={{ color: "text.secondary", mt: 0.5 }}>{active.detail}</Typography>
            <Typography sx={{ fontSize: 17, lineHeight: 1.7, mt: 2 }}>{active.story}</Typography>
            {active.pairing ? (
              <Typography sx={{ mt: 2 }}>
                Pairs with <Box component="span" sx={{ color: colors.copper }}>{active.pairing}</Box>
              </Typography>
            ) : null}
            {active.tags.length > 0 ? (
              <Typography sx={{ color: colors.muted, mt: 2 }}>{active.tags.join(" · ")}</Typography>
            ) : null}
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
                mt: 3,
                p: 0,
              }}
            >
              Close
            </Box>
          </Box>
        ) : null}
      </Dialog>
    </Box>
  );
}
