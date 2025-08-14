import type { IProductsList } from "../../../../types";
import { Button } from "../../../../shared/components/Button";
import { Tooltip } from "../../../../shared/components/Tooltip";
import {
  StyledTable,
  SActionsContainer,
  SEditIcon,
  STrashIcon,
  SEmptyRow,
} from "./ProductTable.styled";

interface FormData {
  id: string;
  nome: string;
  categoriaId: string;
  preco: string;
  estoque: string;
}

interface Props {
  editProduct: (id: string, data: Partial<FormData>) => void;
  deleteProduct: (id: string) => void;
  onEditClick: (product: IProductsList) => void;
  searchProduct: IProductsList[];
  getCategoryName: (categoriaId: string) => string | undefined;
}

export function ProductTable({
  onEditClick,
  deleteProduct,
  searchProduct,
  getCategoryName,
}: Props) {
  const convertToBRL = (value: number) => {
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formatter.format(value);
  };

  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th style={{ textAlign: "center" }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {searchProduct.length === 0 ? (
            <SEmptyRow>
              <td colSpan={5}>Nenhum produto cadastrado</td>
            </SEmptyRow>
          ) : (
            searchProduct.map((product) => (
              <tr key={product.id}>
                <td>{product.nome}</td>
                <td>{getCategoryName(product.categoriaId)}</td>
                <td>{product.preco && convertToBRL(product.preco)}</td>
                <td>{product.estoque}</td>
                <td>
                  <SActionsContainer>
                    <Tooltip text="Editar" placement="top">
                      <Button
                        type="button"
                        variant="transparent"
                        onClick={() => onEditClick(product)}
                      >
                        <SEditIcon size={19} />
                      </Button>
                    </Tooltip>
                    <Tooltip text="Excluir" placement="top">
                      <Button
                        type="button"
                        variant="transparent"
                        onClick={() => deleteProduct(product.id || "")}
                      >
                        <STrashIcon size={19} />
                      </Button>
                    </Tooltip>
                  </SActionsContainer>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </StyledTable>
    </>
  );
}
