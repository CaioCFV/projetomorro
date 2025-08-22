import { useEffect, useState } from "react";
import { Heading1 } from "../../components/Typograph";
import { ServiceCurso } from "../../service/api";
import CadastroCurso from "./components/CadastroCurso";
import { Table } from "../../components/Table";

const columns = [
  {
    field: "name",
    headerName: "Nome",
    minWidth: 150,
  },
  {
    field: "teacher",
    headerName: "Professor",
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
    <>
      <Heading1>Cursos</Heading1>
      <Table data={data} columns={columns}></Table>
      <CadastroCurso initRefetch={getCursos} />
    </>
  );
}
