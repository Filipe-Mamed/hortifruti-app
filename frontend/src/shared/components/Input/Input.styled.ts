import { styled } from "styled-components";
import { FormControl } from "react-bootstrap";
import { Fonts } from "../../styles";

interface IInputProps {
  width?: string;
  height?: string;
  $hasError?: boolean;
}

export const SInputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const SInput = styled(FormControl)<IInputProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  font-family: ${Fonts.Poppins_Medium};
  border: 2px solid ${(props) => (props.$hasError ? "#dc3545" : "#ccc")};

  &:focus {
    border-color: ${(props) => props.$hasError && "#dc3545"};
    outline: none;
    box-shadow: ${(props) =>
      props.$hasError && "0 0 0 0.25rem rgba(220, 53, 69, 0.25)"};
  }

  &::placeholder {
    color: #a9a9a9;
    font-family: ${Fonts.Poppins_Italic};
  }
`;

export const SIconButton = styled.button`
  position: absolute;
  border: none;
  background: transparent;
  color: #555;
  font-size: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
`;
