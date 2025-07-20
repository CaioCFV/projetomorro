import { useState } from "react";
import { Heading1, Paragraph } from "../../../../components/Typograph";
import { InputField } from "../../../../components/Input";
import { ServiceCurso } from "../../../../service/api";
import { Button } from "../../../../components/Button";
import Modal from "../../../../components/Modal";
import ArrowForward from "@mui/icons-material/ArrowForward";

export default function CadastroCurso({ initRefetch }) {
  const [curso, setCurso] = useState({});
  const [active, modalActive] = useState(false);
  const [feedback, setFeedback] = useState("");

  const savecurso = async (e) => {
    e.preventDefault();
    const api = new ServiceCurso();
    const data = await api.post(curso);

    if (data.error) {
      if (data.error.sqlMessage.includes("turno")) {
        setFeedback("Não é possível cadastra curso com este turno");
      }
    } else {
      setFeedback("curso cadastrado com sucesso");
      setTimeout(() => {
        handleModal(false);
        initRefetch();
      }, 1000);
    }
  };

  const handleModal = (active) => {
    modalActive(() => active);
  };

  return (
    <>
      <Button
        style={{ marginTop: "25px", width: "200px" }}
        onClick={() => handleModal(true)}
      >
        Cadastrar novo
        <ArrowForward />
      </Button>
      <Modal isActive={active} handleModal={handleModal}>
        <form
          onSubmit={savecurso}
          style={{
            width: "calc(100vw - 100px)",
            maxWidth: "800px",
          }}
        >
          <Heading1>Dados do curso</Heading1>
          <div
            style={{
              display: "grid",
              gap: 20,
              gridTemplateColumns: "1fr 1fr",
              marginBottom: "20px",
            }}
          >
            <InputField
              id="nome_curso"
              label="Nome do curso"
              type="text"
              name="nome_curso"
              required={true}
              value={curso.nome}
              onChange={(event) => {
                setCurso({ ...curso, nome_curso: event.target.value });
              }}
              empty={!curso.nome_completo ? true : false}
              style={{ gridColumn: "1 / 3" }}
            />

            <InputField
              id="descricao"
              label="Descrição"
              name="descricao"
              type="text"
              required={true}
              value={curso.descricao}
              onChange={(event) => {
                setCurso({ ...curso, descricao: event.target.value });
              }}
              empty={!curso.descricao ? true : false}
            />

            <InputField
              id="turno"
              label="Turno"
              name="turno"
              type="text"
              required={true}
              value={curso.turno}
              onChange={(event) => {
                setCurso({ ...curso, turno: event.target.value });
              }}
              empty={!curso.turno ? true : false}
            />
          </div>

          <Button type="submit" style={{ width: "250px", fontSize: "14px" }}>
            Cadastrar curso
            <ArrowForward />
          </Button>
        </form>
        <Paragraph
          style={{
            marginTop: "20px",
          }}
        >
          {feedback}
        </Paragraph>
      </Modal>
    </>
  );
}
