import styled from "styled-components";
import { Fonts } from "../../../../shared/styles";

export const SForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;

  input {
    flex: 1;
  }
`;

export const SErrorMessage = styled.span`
  color: red;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  font-family: ${Fonts.Poppins_Medium};
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: -20px;

  input {
    background-color: red;
  }
`;
