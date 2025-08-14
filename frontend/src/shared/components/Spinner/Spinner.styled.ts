import styled from "styled-components";
import { Fonts } from "../../styles";

interface ISpinner {
  fontSize?: string;
}

export const TextSpinner = styled.span<ISpinner>`
  font-family: ${Fonts.Poppins_Medium};
  font-size: ${(props) => props.fontSize ?? "1rem"};
`;
