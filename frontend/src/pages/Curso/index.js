import { useEffect, useState } from "react";
import { Heading1 } from "../../components/Typograph";
import { ServiceCurso } from "../../service/api";
import CadastroCurso from "./components/CadastroCurso";
import TableCursos from "./components/TableCursos";

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
      <TableCursos rows={data} />
      <CadastroCurso initRefetch={getCursos} />
    </>
  );
}
