import styled from "styled-components";
import { Fonts } from "../../shared/styles";

export const SProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background-color: #fafafa;
  border-radius: 12px;

  h2 {
    font-family: ${Fonts.Poppins_SemiBold};
    font-size: 1.6rem;
    color: #222;
    margin-bottom: 0.5rem;
    border-bottom: 3px solid #4cafef;
    padding-bottom: 0.5rem;
  }

  .profile-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h4 {
      font-family: ${Fonts.Poppins_SemiBold};
      font-size: 1rem;
      color: #555;
      margin-bottom: 0.2rem;
    }

    p {
      background-color: #fff;
      padding: 0.8rem 1rem;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
      font-size: 0.95rem;
      color: #333;
    }
  }
`;

export const ModalParagraph = styled.p`
  font-size: 1.1rem;
`;
