import { Main } from "./style";

export const Table = function ({ data, columns = [] }) {
  return (
    <Main>
      <thead>
        {columns.map((item) => (
          <th key={item.headerName}>
            <td>{item.headerName}</td>
          </th>
        ))}
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.cpf}>
            {columns.map((column) => (
              <td>{item[column.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Main>
  );
};
