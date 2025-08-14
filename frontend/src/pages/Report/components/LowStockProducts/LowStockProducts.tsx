import { TableWrapper, SStyledTable, SEmptyRow } from "./LowStockProducts.styled";

interface ILowStock {
  nome: string;
  categoria: string;
  estoque: number;
}

interface Props {
  lowStock: ILowStock[];
}

export function LowStockProducts({ lowStock }: Props) {
  return (
    <TableWrapper>
      <SStyledTable>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Categoria</th>
            <th>Estoque</th>
          </tr>
        </thead>
        <tbody>
          {lowStock.length === 0 ? (
            <SEmptyRow>
              <td colSpan={3}>Sem produtos com estoque baixo</td>
            </SEmptyRow>
          ) : (
            lowStock.map(({ nome, categoria, estoque }) => (
              <tr key={nome}>
                <td>{nome}</td>
                <td>{categoria}</td>
                <td>{estoque}</td>
              </tr>
            ))
          )}
        </tbody>
      </SStyledTable>
    </TableWrapper>
  );
}
