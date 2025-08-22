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
        <div
          style={{ flex: 1, height: "calc(100vh - 60px)", overflow: "hidden" }}
        >
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route
                path="/"
                Component={() => {
                  return (
                    <Content>
                      <p style={{ fontSize: "18px", lineHeight: "25px" }}>
                        <strong style={{ fontWeight: 700 }}>
                          Projeto do Morro
                        </strong>{" "}
                        é uma iniciativa social que conecta moradores de
                        comunidades com oportunidades reais de aprendizado,
                        crescimento e transformação. Através de consultorias
                        gratuitas e cursos acessíveis, oferecidos por
                        profissionais voluntários — incluindo nomes reconhecidos
                        do esporte, da cultura e do mercado — buscamos
                        democratizar o conhecimento e abrir caminhos para quem
                        mais precisa.
                        <br />
                        <br /> Aqui, o morador se cadastra, escolhe sua área de
                        interesse e se matricula em formações que podem mudar
                        sua trajetória. Seja no futebol, na educação financeira,
                        na tecnologia ou no empreendedorismo, nosso compromisso
                        é com a inclusão, a dignidade e o futuro. Do morro, para
                        o mundo.
                        <br />
                        <br />
                        <strong style={{ fontWeight: 700 }}>
                          Com respeito, visão e propósito.
                        </strong>
                      </p>
                    </Content>
                  );
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
