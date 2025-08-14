import styled from "styled-components";
import { Fonts } from "../../shared/styles";

export const SContainer = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 5000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const SCard = styled.div`
  background: white;
  padding: 2rem 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    text-align: center;
    font-family: ${Fonts.Poppins_SemiBold};
    color: #198754;
  }
`;

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SParagraph = styled.p`
  font-family: ${Fonts.Poppins_Regular};
  text-align: center;
`;

export const SLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-family: ${Fonts.Poppins_Regular};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`;

export const SErrorMessage = styled.div`
  p {
    color: #e74c3c;
    text-align: left;
    font-family: ${Fonts.Poppins_Medium};
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const SInfoText = styled.span`
  font-family: ${Fonts.Poppins_Regular};
  font-size: 0.85rem;
  color: #888;
  text-align: left;
  margin-top: -9px;
`;
