import styled from "styled-components";

export const TableStyle = styled.div`
  .MuiDataGrid-root {
    background: #05070a;
    border-color: #333b4d99;
  }
  .MuiDataGrid-columnHeader {
    background: #0e1017 !important;
    border-color: #333b4d99;
  }
  .MuiDataGrid-columnSeparator svg {
    color: #333b4d99;
  }
  .MuiDataGrid-row,
  .MuiDataGrid-cell {
    border-color: #333b4d99;
  }
  .MuiDataGrid-cell {
    border-top: 1px solid #333b4d99 !important;
  }
  .MuiDataGrid-footerContainer,
  .MuiDataGrid-columnHeader {
    border-color: #333b4d99 !important;
  }
  .MuiDataGrid-columnHeaderTitle {
    color: #fff;
    font-size: 14px;
  }
  .MuiCheckbox-root {
    color: #333b4d99;
  }
  .MuiDataGrid-cell,
  .MuiTablePagination-selectLabel,
  .MuiSelect-select,
  .MuiToolbar-gutters,
  .MuiTablePaginationActions-root svg {
    color: #fff;
  }

  MuiTablePaginationActions-root button {
    cursor: pointer;
  }
  .MuiDataGrid-footerContainer {
    background: #0e1017;
  }
`;
