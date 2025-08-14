import styled from "styled-components";
import { Fonts } from "../../shared/styles";

export const SContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const STitle = styled.h1`
  font-size: 2rem;
  font-family: ${Fonts.Poppins_Bold};
  margin-bottom: 2rem;
  text-align: center;
  color: #000000;
`;

export const SSectionTitle = styled.h3`
  font-size: 1.5rem;
  font-family: ${Fonts.Poppins_SemiBold};
  margin: 2rem 0 1rem;
  color: #000000;
`;
