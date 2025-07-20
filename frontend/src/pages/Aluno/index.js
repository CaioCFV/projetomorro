import { useEffect, useState } from "react";
import { Heading1 } from "../../components/Typograph";
import { InputField } from "../../components/Input";
import { ServiceAluno } from "../../service/api";
import { Button } from "../../components/Button";
import Modal from "../../components/Modal";
import CadastroAluno from "./components/CadastroAluno";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// // import CustomizedDataGrid from "../../components/CustomizedDataGrid";

// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
// import Modal from "@mui/material/Modal";
// import Fade from "@mui/material/Fade";
// import { fabClasses } from "@mui/material/Fab";
// const columns = [
//   {
//     field: "nome_completo",
//     headerName: "Nome",
//     flex: 0.5,
//     minWidth: 80,
//   },
//   {
//     field: "cpf",
//     headerName: "CPF",
//     flex: 0.5,
//     minWidth: 80,
//   },
//   {
//     field: "celular",
//     headerName: "Celular",
//     flex: 0.5,
//     minWidth: 80,
//   },
//   {
//     field: "renda_familiar",
//     headerName: "Renda",
//     flex: 0.5,
//     minWidth: 80,
//   },
// ];

export default function Aluno() {
  const [data, setData] = useState([]);

  const [aluno, setAluno] = useState({
    foto: null,
  });

  //VALIDAR SE O CPF É O MESMO

  const getAlunos = async () => {
    const api = new ServiceAluno();
    const data = await api.get();
    setData(data);
  };

  const saveAluno = async () => {
    const api = new ServiceAluno();
    const data = await api.post(aluno);
    alert("aluno salve");
  };

  //   {
  // 	"nome_completo": "Caio Felipe Vieira",

  // 	"renda_familiar": 2500,
  // }
  useEffect(() => {
    getAlunos();
  }, []);

  return (
    <>
      <Heading1>Cadastro de alunos</Heading1>
      <CadastroAluno />
    </>
  );
}
