import type React from "react";
import { OverlayTrigger, Tooltip as TooltipRB } from "react-bootstrap";

interface ITooltipProps {
  text?: string;
  placement: "top" | "right" | "bottom" | "left";
  children: React.ReactNode;
}

export function Tooltip({ text, placement, children }: ITooltipProps) {
  return (
    <>
      <OverlayTrigger
        placement={placement}
        overlay={<TooltipRB>{text}</TooltipRB>}
      >
        <span>{children}</span>
      </OverlayTrigger>
    </>
  );
}
