import { useEffect, useState } from "react";
import { Heading1 } from "../../components/Typograph";
import { ServiceCurso } from "../../service/api";
import CadastroCurso from "./components/CadastroCurso";
import { Table } from "../../components/Table";
import { Content } from "../Home/style";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        height: "100%",
      }}
    >
      <Content>
        <Heading1>Cursos</Heading1>
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
        <Table data={data} columns={columns}></Table>
      </Content>
      <Content>
        <CadastroCurso initRefetch={getCursos} />
      </Content>
    </div>
  );
}
