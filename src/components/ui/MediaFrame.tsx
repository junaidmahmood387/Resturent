import Box from "@mui/material/Box";
import Image from "next/image";

export function MediaFrame({
  src,
  alt,
  sizes,
  aspect = "4 / 5",
  preload = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  aspect?: string;
  preload?: boolean;
}) {
  return (
    <Box
      sx={{
        aspectRatio: aspect,
        bgcolor: "#1c1915",
        overflow: "hidden",
        position: "relative",
        "& img": {
          transition: "transform 900ms ease",
        },
        "&:hover img": {
          transform: "scale(1.045)",
        },
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={75}
        preload={preload}
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
}
