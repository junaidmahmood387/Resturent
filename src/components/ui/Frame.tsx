import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";

export function Frame({
  children,
  component = "div",
  id,
  sx,
}: {
  children: React.ReactNode;
  component?: React.ElementType;
  id?: string;
  sx?: SxProps<Theme>;
}) {
  return (
    <Box
      component={component}
      id={id}
      sx={[
        {
          maxWidth: 1180,
          mx: "auto",
          px: { xs: 2.5, sm: 4 },
          width: "100%",
        },
        ...(sx == null ? [] : Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}
