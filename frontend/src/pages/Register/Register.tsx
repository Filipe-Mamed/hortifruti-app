import { useNavigate } from "react-router";
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
  SInfoText,
} from "./Register.styled";
import { api } from "../../shared/services";
import { getErrorMessage } from "../../shared/utils";
import { useState } from "react";
import {useAuth} from "../../shared/hooks/useAuth"

interface IErrors {
  message: string;
}

interface IFormData {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
}

export function Register() {
  const navigate = useNavigate();

  const {login} = useAuth()

  const [formData, setFormData] = useState<IFormData>({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
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
      .post("/auth/registrar", formData)
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
    navigate("/login");
  };

  return (
    <SContainer>
      <SCard>
        <h2>Criar conta</h2>
        <SForm onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome"
            onChange={handleChange}
            name="nome"
            value={formData.nome}
            hasError={!!errors.message}
          />
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
          <Input
            type="password"
            placeholder="Confirmar senha"
            onChange={handleChange}
            name="confirmarSenha"
            value={formData.confirmarSenha}
            hasError={!!errors.message}
          />
          <SInfoText>
            Sua senha deve ter pelo menos 8 caracteres
            <br />
            Sua senha deve conter pelo menos uma letra maiúscula
            <br />
            Sua senha deve conter pelo menos um número
            <br />
            Sua senha deve conter pelo menos um caractere especial
            <br />
          </SInfoText>
          <SErrorMessage>
            {errors.message && (
              <p>
                <FaExclamationCircle />
                {errors.message}
              </p>
            )}
          </SErrorMessage>
          <Button type="submit">Registrar</Button>
        </SForm>
        {
          <SParagraph>
            Já tem uma conta? <SLink onClick={navigation}>Entrar</SLink>
          </SParagraph>
        }
      </SCard>
    </SContainer>
  );
}
