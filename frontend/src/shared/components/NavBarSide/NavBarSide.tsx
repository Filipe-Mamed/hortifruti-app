import { useNavigate } from "react-router-dom";
import {
  SSidebarContainer,
  SSidebarTitle,
  SNav,
  SNavLink,
  SLogout,
} from "./NavBarSide.styled";
import { IoExitOutline } from "react-icons/io5";
import { api } from "../../services";
import { Toast } from "../Toastify";
import { getErrorMessage } from "../../utils";
import { useAuth } from "../../hooks/useAuth";
import { Spinner } from "../Spinner";
import { useState } from "react";

export function NavBarSide() {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsLoading(true);

    api
      .get("/auth/sair")
      .then(() => {
        logout();
        navigate("/login");
        setIsLoading(false);
      })
      .catch((error) => {
        Toast({ message: getErrorMessage(error), type: "error" });
      });
  };

  return (
    <SSidebarContainer>
      <div>
        <SSidebarTitle> Hortifrúti</SSidebarTitle>
        <SNav>
          <SNavLink to="/dashboard">Dashboard</SNavLink>
          <SNavLink to="/produtos">Produtos</SNavLink>
          <SNavLink to="/categorias">Categorias</SNavLink>
          <SNavLink to="/relatorios">Relatórios</SNavLink>
          <SNavLink to="/perfil">Perfil</SNavLink>
        </SNav>
      </div>
      <SLogout onClick={handleLogout}>
        {isLoading ? (
          <Spinner fontSize="1.2rem">Saindo...</Spinner>
        ) : (
          <div>
            <IoExitOutline size={30} />
            Sair
          </div>
        )}
      </SLogout>
    </SSidebarContainer>
  );
}

{
  /* <IoExitOutline size={30} />
        Sair
        <Spinner fontSize="1.2rem">Saindo...</Spinner> */
}
