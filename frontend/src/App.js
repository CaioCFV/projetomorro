import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, GlobalStyle } from "./style";
import { Sidebar } from "./components/Sidebar";
import Aluno from "./pages/Aluno";
import Curso from "./pages/Curso";
import Login from "./pages/Login";
import Matricula from "./pages/Matricula";
import { ProtectedRoute } from "./util/protectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Dashboard>
        <Sidebar />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/alunos" Component={Aluno} />
            <Route path="/cursos" Component={Curso} />
            <Route path="/matricula" Component={Matricula} />
          </Route>
          <Route path="/login" Component={Login} />
        </Routes>
      </Dashboard>
    </BrowserRouter>
  );
}
