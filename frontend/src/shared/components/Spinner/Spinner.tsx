import type React from "react";
import { Spinner as RBSpinner } from "react-bootstrap";

import { TextSpinner } from "./Spinner.styled";

interface ISpinnerProps {
  children: React.ReactNode;
  fontSize?: string;
}

export function Spinner({ children, fontSize }: ISpinnerProps) {
  return (
    <div className="d-flex align-items-center gap-2">
      <TextSpinner fontSize={fontSize}>{children}</TextSpinner>
      <RBSpinner animation="border" variant="primary" />
    </div>
  );
}
