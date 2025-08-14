import styled from "styled-components";
import { Fonts } from "../../../../shared/styles";
import { FaTrashAlt } from "react-icons/fa";

export const SCategoryList = styled.ul`
  max-height: 466px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin-top: 1rem;

  p {
    font-family: ${Fonts.Poppins_Italic};
    font-size: 1rem;
    color: #999;
    text-align: center;
    margin: 2rem 0;
    opacity: 0.9;
  }

  scrollbar-width: thin; /* Firefox */
  scrollbar-color: #ccc transparent; /* Firefox */

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const SCategoryItem = styled.li`
  background-color: #ecf0f1;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  font-family: ${Fonts.Poppins_SemiBold};
  font-size: 1rem;
  color: #2c3e50;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: #dfe6e9;
  }
`;

export const STrashIcon = styled(FaTrashAlt)`
  color: #708090;
  width: 25px;
  height: 25px;

  &:hover {
    color: #dc3545;
  }
`;
