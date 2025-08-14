import { styled } from "styled-components";
import { Fonts } from "../../styles";
import { Nav, NavLink } from "react-bootstrap";
import { NavLink as NavLinkRouter } from "react-router-dom";

export const SSidebarContainer = styled.div`
  width: 220px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1000;
  background-color: #2e7d32;
`;

export const SSidebarTitle = styled.h2`
  font-family: ${Fonts.Poppins_SemiBold};
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: #ffffff;
`;
export const SNav = styled(Nav)`
  display: flex;
  flex-direction: column;
`;

export const SNavLink = styled(NavLinkRouter)`
  font-family: ${Fonts.Poppins_Regular};
  margin: 1.3rem 0;
  font-size: 1.1rem;
  text-decoration: none;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  &:hover {
    color: #ffeb3b;
    background-color: rgba(255, 255, 255, 0.1);
  }
  &.active {
    color: #2e7d32;
    background-color: #ffffff;
  }
`;

export const SLogout = styled(NavLink)`
  font-family: ${Fonts.Poppins_Regular};
  font-size: 1.2rem;
  text-decoration: none;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #ffeb3b;
    background-color: rgba(255, 255, 255, 0.1);
  }
  &.active {
    color: #2e7d32;
    background-color: #ffffff;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
