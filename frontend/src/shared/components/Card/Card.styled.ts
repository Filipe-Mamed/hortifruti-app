import { styled } from "styled-components";
import { Card} from "react-bootstrap";

interface ICardeContainer {
  backgroundColor?: string;
}

export const SCardContainer = styled(Card)<ICardeContainer>`
  background-color: #ffffff;
  border: 1;

  
`;

