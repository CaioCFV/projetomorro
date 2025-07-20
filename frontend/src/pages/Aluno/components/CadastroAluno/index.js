import { useState } from "react";
import { Heading1, Paragraph } from "../../../../components/Typograph";
import { InputField } from "../../../../components/Input";
import { ServiceAluno } from "../../../../service/api";
import { Button } from "../../../../components/Button";
import Modal from "../../../../components/Modal";
import ArrowForward from "@mui/icons-material/ArrowForward";

export default function CadastroAluno({ initRefetch }) {
  const [aluno, setAluno] = useState({
    foto: null,
  });
  const [active, modalActive] = useState(false);
  const [feedback, setFeedback] = useState("");

  const saveAluno = async (e) => {
    e.preventDefault();
    const api = new ServiceAluno();
    const data = await api.post(aluno);

    if (data.error) {
      if (data.error.sqlMessage.includes("cpf_UNIQUE")) {
        setFeedback("Não é possível cadastra aluno com o mesmo CPF");
      }
    } else {
      setFeedback("Aluno cadastrado com sucesso");
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
          onSubmit={saveAluno}
          style={{
            width: "calc(100vw - 100px)",
            maxWidth: "800px",
          }}
        >
          <Heading1>Dados Pessoais</Heading1>
          <div
            style={{
              display: "grid",
              gap: 20,
              gridTemplateColumns: "1fr 1fr",
              marginBottom: "20px",
            }}
          >
            <InputField
              id="nome_completo"
              label="Nome do aluno"
              type="text"
              name="nome_completo"
              required={true}
              value={aluno.nome_completo}
              onChange={(event) => {
                setAluno({ ...aluno, nome_completo: event.target.value });
              }}
              empty={!aluno.nome_completo ? true : false}
              style={{ gridColumn: "1 / 3" }}
            />

            <InputField
              id="tel_fixo"
              label="Telefone"
              name="tel_fixo"
              type="text"
              required={true}
              value={aluno.tel_fixo}
              onChange={(event) => {
                setAluno({ ...aluno, tel_fixo: event.target.value });
              }}
              empty={!aluno.tel_fixo ? true : false}
            />

            <InputField
              id="celular"
              label="Celular"
              name="celular"
              type="text"
              required={true}
              value={aluno.celular}
              onChange={(event) => {
                setAluno({ ...aluno, celular: event.target.value });
              }}
              empty={!aluno.celular ? true : false}
            />

            <InputField
              id="cpf"
              label="CPF"
              name="cpf"
              type="text"
              required={true}
              value={aluno.cpf}
              onChange={(event) => {
                setAluno({ ...aluno, cpf: event.target.value });
              }}
              empty={!aluno.cpf ? true : false}
            />

            <InputField
              id="renda_familiar"
              label="Renda Familiar R$"
              name="renda_familiar"
              type="text"
              required={true}
              value={aluno.renda_familiar}
              onChange={(event) => {
                setAluno({ ...aluno, renda_familiar: event.target.value });
              }}
              empty={!aluno.renda_familiar ? true : false}
            />
          </div>

          <Heading1>Endereço</Heading1>

          <div
            style={{
              display: "grid",
              gap: 20,
              gridTemplateColumns: "1fr 1fr 1fr",
              marginBottom: "20px",
            }}
          >
            <InputField
              id="cep"
              label="CEP"
              name="cep"
              type="text"
              required={true}
              value={aluno.cep}
              onChange={(event) => {
                setAluno({ ...aluno, cep: event.target.value });
              }}
              empty={!aluno.cep ? true : false}
            />
            <InputField
              id="cidade"
              label="Cidade"
              name="cidade"
              type="text"
              required={true}
              value={aluno.cidade}
              onChange={(event) => {
                setAluno({ ...aluno, cidade: event.target.value });
              }}
              empty={!aluno.cidade ? true : false}
            />

            <InputField
              id="estado"
              label="Estado"
              name="estado"
              type="text"
              required={true}
              value={aluno.estado}
              onChange={(event) => {
                setAluno({ ...aluno, estado: event.target.value });
              }}
              empty={!aluno.estado ? true : false}
            />

            <InputField
              id="bairro"
              label="Bairro"
              name="bairro"
              type="text"
              required={true}
              value={aluno.bairro}
              onChange={(event) => {
                setAluno({ ...aluno, bairro: event.target.value });
              }}
              empty={!aluno.bairro ? true : false}
            />

            <InputField
              id="numero_casa"
              label="Número"
              name="numero_casa"
              type="text"
              required={true}
              value={aluno.numero_casa}
              onChange={(event) => {
                setAluno({ ...aluno, numero_casa: event.target.value });
              }}
              empty={!aluno.numero_casa ? true : false}
            />

            <InputField
              id="logradouro"
              label="Logradouro"
              name="logradouro"
              type="text"
              required={true}
              value={aluno.logradouro}
              onChange={(event) => {
                setAluno({ ...aluno, logradouro: event.target.value });
              }}
              empty={!aluno.logradouro ? true : false}
            />
            <InputField
              id="alunocol"
              label="Turno"
              name="alunocol"
              type="text"
              required={true}
              value={aluno.alunocol}
              onChange={(event) => {
                setAluno({ ...aluno, alunocol: event.target.value });
              }}
              empty={!aluno.alunocol ? true : false}
            />
          </div>

          <Button type="submit" style={{ width: "250px", fontSize: "14px" }}>
            Cadastrar aluno
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
