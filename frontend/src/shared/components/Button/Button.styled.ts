import styled, { css } from "styled-components";
import { Button } from "react-bootstrap";
import { Fonts } from "../../styles";

interface IButtonProps {
  variant: "success" | "danger" | "transparent";
  outline?: boolean;
  borderRadius?: string
}

const colors = {
  success: "#198754",
  danger: "#dc3545",
  transparent: "transparent",
};

export const SButton = styled(Button)<IButtonProps>`
  border-radius: ${(props) => props.borderRadius || "0.375rem"};
  

  ${({ variant, outline }) => {
    switch (variant) {
      case "success":
        return css`
          background-color: ${outline ? "transparent" : colors.success};
          color: ${outline ? colors.success : "white"};
          font-family: ${Fonts.Poppins_Regular};
          &:hover {
            opacity: 0.8;
          }
        `;
      case "danger":
        return css`
          background-color: ${outline ? "transparent" : colors.danger};
          color: ${outline ? colors.danger : "white"};
          font-family: ${Fonts.Poppins_Regular};
          &:hover {
            opacity: 0.8;
          }
        `;
      case "transparent":
        return css`
          background-color: ${colors.transparent};
          border: none;
        `;
      default:
        return css``;
    }
  }}
`;
