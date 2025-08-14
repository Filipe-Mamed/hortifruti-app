import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Products } from "../pages/Products";
import { Categories } from "../pages/Categories";
import { Layout } from "../shared/components/Layout";
import { Dashboard } from "../pages/Dashboard";
import { Report } from "../pages/Report";
import { Profile } from "../pages/Profile";
import { PrivateRoute } from "../shared/components/PrivateRoute";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { useAuth } from "../shared/hooks/useAuth";

export function AppRoutes() {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Register />} />
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="produtos" element={<Products />} />
            <Route path="categorias" element={<Categories />} />
            <Route path="relatorios" element={<Report />} />
            <Route path="perfil" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
