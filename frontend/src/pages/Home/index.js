import { Dashboard, Content } from "./style";
import { Sidebar } from "../../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../../util/protectedRoute";
import Aluno from "../Aluno";
import Curso from "../Curso";
import Matricula from "../Matricula";

export default function Home() {
  return (
    <>
      <Dashboard>
        <Sidebar />
        <div style={{ flex: 1, height: "100%", overflow: "hidden" }}>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route
                path="/"
                Component={() => {
                  return <>Projeto morro </>;
                }}
              />
              <Route path="/alunos" Component={Aluno} />
              <Route path="/cursos" Component={Curso} />
              <Route path="/matricula" Component={Matricula} />
            </Route>
          </Routes>
        </div>
      </Dashboard>
    </>
  );
}
