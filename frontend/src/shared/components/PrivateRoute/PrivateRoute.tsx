import { Navigate, Outlet } from "react-router";

interface IPrivateRouteProps {
  isAuthenticated: boolean;
}

export function PrivateRoute({ isAuthenticated }: IPrivateRouteProps) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
