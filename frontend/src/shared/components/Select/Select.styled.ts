import { styled } from "styled-components";
import {Fonts} from "../../styles/"

export const SSelect = styled.select`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background-color: white;
  transition: border-color 0.2s;
  font-family: ${Fonts.Poppins_Italic};

  &:focus {
    border-color: #4f46e5;
    outline: none;
  }
`;

export const SOption = styled.option`
  font-size: 1rem;
  font-family: ${Fonts.Poppins_Regular};
`;