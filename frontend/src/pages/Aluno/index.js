import { useEffect, useState } from "react";
import { Heading1 } from "../../components/Typograph";
import { ServiceAluno } from "../../service/api";
import CadastroAluno from "./components/CadastroAluno";
import { Table } from "../../components/Table";

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
    <>
      <Heading1>Alunos</Heading1>

      <Table data={data} columns={columns} />

      <CadastroAluno initRefetch={getAlunos} />
    </>
  );
}
