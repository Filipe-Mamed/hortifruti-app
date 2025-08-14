import { TableWrapper, SStyledTable, SEmptyRow } from "./RecentProducts.styled";

interface IRecentProducts {
  nome: string;
  categoria: string;
  criadoEm: string;
}

interface Props {
  recentProducts: IRecentProducts[];
  formatDate: (date: string) => string;
}

export function RecentProducts({ recentProducts, formatDate }: Props) {
  return (
    <TableWrapper>
      <SStyledTable>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Categoria</th>
            <th>Criado</th>
          </tr>
        </thead>
        <tbody>
          {recentProducts.length === 0 ? (
            <SEmptyRow>
              <td colSpan={3}>Nenhum produto criado recentemente</td>
            </SEmptyRow>
          ) : (
            recentProducts.map(({ nome, categoria, criadoEm }) => (
              <tr key={nome}>
                <td>{nome}</td>
                <td>{categoria}</td>
                <td>{formatDate(criadoEm)}</td>
              </tr>
            ))
          )}
        </tbody>
      </SStyledTable>
    </TableWrapper>
  );
}
