import type React from "react";
import { SButton } from "./Button.styled";

interface IButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean

  variant?: "success" | "danger" | "transparent";
  outline?: boolean;
  borderRadius?: string
}

export function Button({
  children,
  type,
  onClick,
  disabled,
  variant = "success",
  outline,
  borderRadius,
}: IButtonProps) {
  return (
    <SButton
      type={type}
      variant={variant}
      outline={outline}
      onClick={onClick}
      disabled={disabled}
      borderRadius={borderRadius}
    >
      {children}
    </SButton>
  );
}
