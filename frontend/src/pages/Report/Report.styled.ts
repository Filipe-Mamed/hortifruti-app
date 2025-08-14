import styled from "styled-components";
import { Fonts } from "../../shared/styles";

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  h3 {
    font-family: ${Fonts.Poppins_SemiBold};
    font-size: 1.4rem;
    color: #333;
    margin-bottom: 1rem;
    border-bottom: 2px solid #eee;
    padding-bottom: 0.5rem;
  }
`;
