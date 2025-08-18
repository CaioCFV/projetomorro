import { DataGrid } from "@mui/x-data-grid";
import { TableStyle } from "./style";
const columns = [
  {
    field: "name",
    headerName: "Nome",
    flex: 0.5,
    minWidth: 80,
  },
  {
    field: "cpf",
    headerName: "CPF",
    flex: 0.5,
    minWidth: 80,
  },
  {
    field: "family_income",
    headerName: "Renda",
    flex: 0.5,
    minWidth: 80,
  },
];

export default function CustomizedDataGrid({ rows }) {
  return (
    <TableStyle>
      <DataGrid
        checkboxSelection
        rows={rows}
        columns={columns}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
        initialState={{
          pagination: { paginationModel: { pageSize: 20 } },
        }}
        pageSizeOptions={[10, 20, 50]}
        disableColumnResize
        density="compact"
        slotProps={{
          filterPanel: {
            filterFormProps: {
              logicOperatorInputProps: {
                variant: "outlined",
                size: "small",
              },
              columnInputProps: {
                variant: "outlined",
                size: "small",
                sx: { mt: "auto" },
              },
              operatorInputProps: {
                variant: "outlined",
                size: "small",
                sx: { mt: "auto" },
              },
              valueInputProps: {
                InputComponentProps: {
                  variant: "outlined",
                  size: "small",
                },
              },
            },
          },
        }}
      />
    </TableStyle>
  );
}
