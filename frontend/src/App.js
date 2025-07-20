import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, GlobalStyle } from "./style";
import { Sidebar } from "./components/Sidebar";
import Aluno from "./pages/Aluno";
import Curso from "./pages/Curso";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Dashboard>
        <Sidebar />
        <Routes>
          <Route path="/alunos" Component={Aluno} />
          <Route path="/curso" Component={Curso} />
          <Route path="/" />
        </Routes>
      </Dashboard>
    </Router>
  );
}
