"use client";

import Button from "@mui/material/Button";
import type { SxProps, Theme } from "@mui/material/styles";
import NextLink from "next/link";

type Common = {
  children: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  fullWidth?: boolean;
  disabled?: boolean;
  sx?: SxProps<Theme>;
};

type LinkButton = Common & {
  href: string;
  type?: never;
  onClick?: () => void;
};

type ActionButton = Common & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function CopperButton(props: LinkButton | ActionButton) {
  const shared = {
    variant: props.variant ?? "contained",
    color: "primary" as const,
    disableElevation: true,
    fullWidth: props.fullWidth,
    disabled: props.disabled,
    sx: props.sx,
  };

  if (props.href) {
    return (
      <Button
        {...shared}
        component={NextLink}
        href={props.href}
        onClick={props.onClick}
      >
        {props.children}
      </Button>
    );
  }

  return (
    <Button {...shared} type={props.type ?? "button"} onClick={props.onClick}>
      {props.children}
    </Button>
  );
}
