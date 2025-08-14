import { Input } from "../../../../shared/components/Input";
import { Button } from "../../../../shared/components/Button";

import { SForm, SErrorMessage } from "./CategoryForm.styled";
import { FaExclamationCircle } from "react-icons/fa";

interface ICategoryFormProps {
  nome: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errorMessage?: string;
}

export function CategoryForm({
  nome,
  onChange,
  onSubmit,
  errorMessage,
}: ICategoryFormProps) {
  return (
    <>
      <SForm noValidate onSubmit={onSubmit}>
        <Input
          type="text"
          name="nome"
          value={nome}
          onChange={onChange}
          placeholder="Nova categoria"
          height="2.5rem"
          hasError={!!errorMessage}
        />
        <Button type="submit">Adicionar</Button>
      </SForm>
      {errorMessage && (
        <SErrorMessage>
          <FaExclamationCircle />
          {errorMessage}
        </SErrorMessage>
      )}
    </>
  );
}
