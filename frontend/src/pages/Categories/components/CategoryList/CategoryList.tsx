import {
  SCategoryList,
  SCategoryItem,
  STrashIcon,
} from "./CategoryList.styled";
import { Button } from "../../../../shared/components/Button";
import { Tooltip } from "../../../../shared/components/Tooltip";
import type {ICategory} from "../../../../types"

interface ICategoryListProps {
    categories: ICategory[]
    onDelete: (id: string) => void
}

export function CategoryList({categories, onDelete}: ICategoryListProps) {
  return (
    <SCategoryList>
      {categories.length === 0 ? (
        <p>Nenhuma categoria cadastrada</p>
      ) : (
        categories.map((category) => {
          return (
            <SCategoryItem key={category.id}>
              {category.nome}
              <Tooltip text="Excluir" placement="top">
                <Button
                  type="button"
                  variant="transparent"
                  onClick={() => onDelete(category.id)}
                >
                  <STrashIcon />
                </Button>
              </Tooltip>
            </SCategoryItem>
          );
        })
      )}
    </SCategoryList>
  );
}