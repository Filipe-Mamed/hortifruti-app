import { styled } from "styled-components";
import { Fonts } from "../../shared/styles";
import { IoIosAddCircleOutline } from "react-icons/io";

export const SMainContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  input {
    flex: 1;
    min-width: 30rem;
    max-width: 30rem;
  }
`;

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

export const SNotFoundMessage = styled.span`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #888;
  font-family: ${Fonts.Poppins_Italic};
`;

export const SButtonChildren = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

export const SIconMore = styled(IoIosAddCircleOutline)`
  font-size: 1.5rem;
`

export const ContainerSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
