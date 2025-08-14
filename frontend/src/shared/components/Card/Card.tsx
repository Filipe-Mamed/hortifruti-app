import React from "react";
import { SCardContainer } from "./Card.styled";

interface ICardProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export function Card({ children, backgroundColor }: ICardProps) {
  return (
    <SCardContainer backgroundColor={backgroundColor}>
      {children}
    </SCardContainer>
  );
}
