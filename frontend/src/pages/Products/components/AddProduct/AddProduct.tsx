import type React from "react";
import type { ICategory } from "../../../../types";
import { Modal } from "../../../../shared/components/Modal";
import { Input } from "../../../../shared/components/Input";
import { SFormContainer} from "./AddProduct.styled";
import { Select } from "../../../../shared/components/Select";

interface IProps {
  showModal: boolean;
  newProduct: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onClose: () => void;
  categories: ICategory[];
  value: {
    nome: string;
    categoriaId: string;
    preco: string;
    estoque: string;
  };
}

export function AddProduct({
  showModal,
  newProduct,
  onChange,
  onClose,
  value,
  categories,
}: IProps) {
  return (
    <>
      <Modal
        showModal={showModal}
        title="Cadastrar Produto"
        onSave={newProduct}
        onClose={onClose}
        closeLabel="Cancelar"
        saveLabel="Salvar"
        centered
      >
        <SFormContainer>
          <Input
            type="text"
            placeholder="Nome do produto"
            onChange={onChange}
            name="nome"
            value={value.nome}
          />
          <Select
            name="categoriaId"
            value={value.categoriaId}
            onChange={onChange}
            options={categories.map((category) => ({
              label: category.nome,
              value: category.id,
            }))}
          />
          <Input
            type="number"
            placeholder="Preço"
            onChange={onChange}
            value={String(value.preco)}
            name="preco"
          />
          <Input
            type="number"
            placeholder="Estoque"
            onChange={onChange}
            value={String(value.estoque)}
            name="estoque"
          />
        </SFormContainer>
      </Modal>
    </>
  );
}
