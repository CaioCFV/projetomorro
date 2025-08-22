import { useEffect, useState } from "react";
import { Heading1 } from "../../components/Typograph";
import { ServiceAluno } from "../../service/api";
import CadastroAluno from "./components/CadastroAluno";
import { Table } from "../../components/Table";
import { Content } from "../Home/style";
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        height: "100%",
      }}
    >
      <Content>
        <Heading1>Alunos</Heading1>
      </Content>
      <Content
        style={{
          height: "100%",
          overflow: "auto",
          height: "100%",
          flex: "unset",
          padding: "0",
        }}
      >
        <Table data={data} columns={columns} />
      </Content>
      <Content>
        <CadastroAluno initRefetch={getAlunos} />
      </Content>
    </div>
  );
}
