import { useEffect, useState } from "react";
import { Heading1 } from "../../components/Typograph";
import { InputField } from "../../components/Input";
import { ServiceAluno } from "../../service/api";
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

      <form style={{ display: "grid", gap: 25 }}>
        <InputField
          id="nome_completo"
          label="Nome do aluno"
          type="text"
          name="nome_completo"
          required={true}
          value={aluno.nome_completo}
          onChange={(event) => {
            setAluno({ ...aluno, nome_completo: event.target.value });
          }}
          empty={!aluno.nome_completo ? true : false}
        />

        <InputField
          id="cpf"
          label="CPF"
          name="cpf"
          type="text"
          required={true}
          value={aluno.cpf}
          onChange={(event) => {
            setAluno({ ...aluno, cpf: event.target.value });
          }}
          empty={!aluno.cpf ? true : false}
        />

        <InputField
          id="alunocol"
          label="Turno"
          name="alunocol"
          type="text"
          required={true}
          value={aluno.cpf}
          onChange={(event) => {
            setAluno({ ...aluno, alunocol: event.target.value });
          }}
          empty={!aluno.alunocol ? true : false}
        />

        <InputField
          id="celular"
          label="Celular"
          name="celular"
          type="text"
          required={true}
          value={aluno.cpf}
          onChange={(event) => {
            setAluno({ ...aluno, celular: event.target.value });
          }}
          empty={!aluno.celular ? true : false}
        />

        <InputField
          id="tel_fixo"
          label="Telefone"
          name="tel_fixo"
          type="text"
          required={true}
          value={aluno.tel_fixo}
          onChange={(event) => {
            setAluno({ ...aluno, tel_fixo: event.target.value });
          }}
          empty={!aluno.tel_fixo ? true : false}
        />

        <InputField
          id="renda_familiar"
          label="Renda"
          name="renda_familiar"
          type="text"
          required={true}
          value={aluno.renda_familiar}
          onChange={(event) => {
            setAluno({ ...aluno, renda_familiar: event.target.value });
          }}
          empty={!aluno.renda_familiar ? true : false}
        />

        <InputField
          id="cep"
          label="CEP"
          name="cep"
          type="text"
          required={true}
          value={aluno.cep}
          onChange={(event) => {
            setAluno({ ...aluno, cep: event.target.value });
          }}
          empty={!aluno.cep ? true : false}
        />

        <InputField
          id="bairro"
          label="Bairro"
          name="bairro"
          type="text"
          required={true}
          value={aluno.bairro}
          onChange={(event) => {
            setAluno({ ...aluno, bairro: event.target.value });
          }}
          empty={!aluno.bairro ? true : false}
        />

        <InputField
          id="logradouro"
          label="Logradouro"
          name="logradouro"
          type="text"
          required={true}
          value={aluno.logradouro}
          onChange={(event) => {
            setAluno({ ...aluno, logradouro: event.target.value });
          }}
          empty={!aluno.logradouro ? true : false}
        />

        <InputField
          id="numero_casa"
          label="Número"
          name="numero_casa"
          type="text"
          required={true}
          value={aluno.numero_casa}
          onChange={(event) => {
            setAluno({ ...aluno, numero_casa: event.target.value });
          }}
          empty={!aluno.numero_casa ? true : false}
        />

        <InputField
          id="cidade"
          label="Cidade"
          name="cidade"
          type="text"
          required={true}
          value={aluno.cidade}
          onChange={(event) => {
            setAluno({ ...aluno, cidade: event.target.value });
          }}
          empty={!aluno.cidade ? true : false}
        />

        <InputField
          id="estado"
          label="Estado"
          name="estado"
          type="text"
          required={true}
          value={aluno.estado}
          onChange={(event) => {
            setAluno({ ...aluno, estado: event.target.value });
          }}
          empty={!aluno.estado ? true : false}
        />

        <button type="submit">criar acesso</button>
      </form>
    </>
  );
}
