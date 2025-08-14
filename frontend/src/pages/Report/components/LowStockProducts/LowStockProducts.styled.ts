import styled from "styled-components";
import { Fonts } from "../../../../shared/styles";

export const TableWrapper = styled.div`
  max-height: 300px;
  overflow-y: auto;
  overflow-x: auto;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

export const SStyledTable = styled.table`
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
