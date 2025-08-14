import { styled } from "styled-components";

export const SLayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const SSidebarWrapper = styled.div`
  width: 250px;
  position: fixed; /* fixa a sidebar na tela */
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #2e7d32;
  color: white;
`;

export const SContentWrapper = styled.div`
  margin-left: 250px; /* espaço para sidebar */
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
`;
