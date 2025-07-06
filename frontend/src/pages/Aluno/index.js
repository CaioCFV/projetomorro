import Box from "@mui/material/Box";
import MainGrid from "../../components/MainGrid";
import Typography from "@mui/material/Typography";
import CustomizedDataGrid from "../../components/CustomizedDataGrid";
import { ServiceAluno } from "../../service/api";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const columns = [
  {
    field: "nome_completo",
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
    field: "celular",
    headerName: "Celular",
    flex: 0.5,
    minWidth: 80,
  },
  {
    field: "renda_familiar",
    headerName: "Renda",
    flex: 0.5,
    minWidth: 80,
  },
];

export default function Aluno() {
  const [data, setData] = useState([]);

  const getAlunos = async () => {
    const api = new ServiceAluno();
    const data = await api.get();
    setData(data);
  };

  useEffect(() => {
    getAlunos();
  }, []);

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Alunos
      </Typography>
      <CustomizedDataGrid
        columns={columns}
        rows={data}
        getRowId={(row) => row.idaluno}
      />
      <Grid sx={{ mt: 2 }}>
        <Button variant="contained">CADASTRAR NOVO</Button>
      </Grid>
    </Box>
  );
}
