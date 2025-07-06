import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomizedDataGrid from "../../components/CustomizedDataGrid";
import { ServiceCurso } from "../../service/api";
import { useEffect, useState } from "react";

const columns = [
  {
    field: "nome_curso",
    headerName: "Nome",
    //flex: 0.5,
    minWidth: 150,
  },
  {
    field: "turno",
    headerName: "Turno",
    //flex: 0.5,
    minWidth: 80,
  },
  {
    field: "descricao",
    headerName: "Descrição",
    flex: 1,
    minWidth: 80,
  },
];

export default function Curso() {
  const [data, setData] = useState([]);

  const getCursos = async () => {
    const api = new ServiceCurso();
    const data = await api.get();
    setData(data);
  };

  useEffect(() => {
    getCursos();
  }, []);

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Cursos
      </Typography>
      <CustomizedDataGrid
        columns={columns}
        rows={data}
        getRowId={(row) => row.idcurso}
      />
    </Box>
  );
}
