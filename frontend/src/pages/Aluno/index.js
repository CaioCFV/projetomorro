import { useEffect, useState } from "react";
import { Heading1 } from "../../components/Typograph";
import { ServiceAluno } from "../../service/api";
import CadastroAluno from "./components/CadastroAluno";
import TableAlunos from "./components/TableAlunos";

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
    <>
      <Heading1>Alunos</Heading1>

      <TableAlunos rows={data} />

      <CadastroAluno initRefetch={getAlunos} />
    </>
  );
}
