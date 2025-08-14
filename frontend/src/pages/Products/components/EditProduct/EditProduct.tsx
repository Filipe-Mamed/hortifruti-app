import { Input } from "../../../../shared/components/Input";
import { Modal } from "../../../../shared/components/Modal";
import { Select } from "../../../../shared/components/Select";
import type { ICategory } from "../../../../types";

import { SFormContainer } from "./EditProduct.styled";

interface FormData {
  id: string;
  nome: string;
  categoriaId: string;
  preco: string;
  estoque: string;
}

interface IProps {
  showModal: boolean;
  editProduct: (id: string, data: Omit<Partial<FormData>, "id">) => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onClose: () => void;
  categories: ICategory[];
  formData: FormData;
}

export function EditProduct({
  showModal,
  categories,
  onClose,
  onChange,
  editProduct,
  formData,
}: IProps) {
  return (
    <Modal
      title="Editar Produto"
      closeLabel="Cancelar"
      saveLabel="Salvar"
      showModal={showModal}
      onClose={onClose}
      onSave={(e) => {
        e.preventDefault();
        editProduct(formData.id, {
          nome: formData.nome,
          categoriaId: formData.categoriaId,
          preco: formData.preco,
          estoque: formData.estoque,
        });
      }}
      centered
    >
      <SFormContainer>
        <Input
          type="text"
          placeholder="Nome do produto"
          onChange={onChange}
          name="nome"
          value={formData.nome}
        />
        <Select
          name="categoriaId"
          value={formData.categoriaId}
          onChange={onChange}
          options={categories.map((category) => ({
            value: category.id,
            label: category.nome,
          }))}
        />
        <Input
          type="number"
          placeholder="Preço"
          onChange={onChange}
          value={String(formData.preco)}
          name="preco"
        />
        <Input
          type="number"
          placeholder="Estoque"
          onChange={onChange}
          value={String(formData.estoque)}
          name="estoque"
        />
      </SFormContainer>
    </Modal>
  );
}
