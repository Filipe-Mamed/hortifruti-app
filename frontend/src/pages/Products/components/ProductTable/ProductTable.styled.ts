// ProductTable.styles.ts
import styled from "styled-components";
import { Fonts } from "../../../../shared/styles";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: none;

  thead {
    font-family: ${Fonts.Poppins_Medium};
  }
  th {
    padding: 8px 12px;
    background-color: #c8e6c9;
    text-align: left;
    color: #2e7d32;
  }

  tbody {
    font-family: ${Fonts.Poppins_Medium};
  }
  tr,
  td {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-left: none;
    border-right: none;
    text-align: left;
    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

export const SActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const SEditIcon = styled(FaEdit)`
  &:hover {
    color: #007bff;
  }
`;

export const STrashIcon = styled(FaTrashAlt)`
  &:hover {
    color: red;
  }
`;

export const SFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SSelect = styled.select`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background-color: white;
  transition: border-color 0.2s;

  &:focus {
    border-color: #4f46e5; /* Indigo */
    outline: none;
  }
`;

export const SOption = styled.option`
  font-size: 1rem;
`;

export const SEmptyRow = styled.tr`
  td {
    text-align: center;
    padding: 20px;
    font-size: 16px;
    color: #999;
    background-color: #f9f9f9;
    border-bottom: 1px solid #e0e0e0;
    font-family: ${Fonts.Poppins_SemiBold};
  }
`;
