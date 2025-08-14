import React, { useState } from "react";
import { api } from "../../shared/services";
import { useNavigate } from "react-router-dom";
import { getErrorMessage } from "../../shared/utils";
import { Input } from "../../shared/components/Input";
import { Button } from "../../shared/components/Button";
import { FaExclamationCircle } from "react-icons/fa";
import {
  SContainer,
  SCard,
  SForm,
  SParagraph,
  SLink,
  SErrorMessage,
} from "./Login.styled";
import {useAuth} from "../../shared/hooks/useAuth"

interface IErrors {
  message: string;
}

export function Login() {
  const navigate = useNavigate();

  const {login} = useAuth()

  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });
  const [errors, setErrors] = useState<IErrors>({ message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ message: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    api
      .post("/auth/conectar", formData)
      .then(() => {
        login()
        navigate("/dashboard");
      })
      .catch((error) => {
        setErrors({ message: getErrorMessage(error) });
      });
  };

  const navigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/registrar");
  };

  // useEffect(() => {
  //   const isDev = process.env.NODE_ENV === "development"
  //   if (isDev){
  //     login()
  //     navigate("/dashboard")
  //   }
  // }, [login, navigate])

  return (
    <SContainer>
      <SCard>
        <h2>Entrar</h2>
        <SForm onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            hasError={!!errors.message}
          />
          <Input
            type="password"
            placeholder="Senha"
            onChange={handleChange}
            name="senha"
            value={formData.senha}
            hasError={!!errors.message}
          />
          <SErrorMessage>
            {errors.message && (
              <p>
                <FaExclamationCircle />
                {errors.message}
              </p>
            )}
          </SErrorMessage>
          <Button type="submit">Login</Button>
        </SForm>
        {
          <SParagraph>
            Não tem uma conta? <SLink onClick={navigation}>Cadastra-se</SLink>
          </SParagraph>
        }
      </SCard>
    </SContainer>
  );
}
