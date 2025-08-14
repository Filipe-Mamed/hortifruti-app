import { Outlet } from "react-router";
import { NavBarSide } from "../NavBarSide";
import {
  SLayoutWrapper,
  SSidebarWrapper,
  SContentWrapper,
} from "./Layout.styled";

export function Layout() {
  return (
    <SLayoutWrapper>
      <SSidebarWrapper>
        <NavBarSide />
      </SSidebarWrapper>
      <SContentWrapper>
        <Outlet />
      </SContentWrapper>
    </SLayoutWrapper>
  );
}
