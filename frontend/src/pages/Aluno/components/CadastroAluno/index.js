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
      if (data.error.sqlMessage?.includes("cpf_UNIQUE")) {
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
      <Button style={{ width: "200px" }} onClick={() => handleModal(true)}>
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
              value={aluno.name}
              onChange={(event) => {
                setAluno({ ...aluno, name: event.target.value });
              }}
              empty={!aluno.name ? true : false}
              style={{ gridColumn: "1 / 3" }}
            />

            <InputField
              id="phone"
              label="Telefone"
              name="phone"
              type="text"
              required={true}
              value={aluno.phone}
              onChange={(event) => {
                setAluno({ ...aluno, phone: event.target.value });
              }}
              empty={!aluno.phone ? true : false}
            />

            <InputField
              id="celphone"
              label="Celular"
              name="celphone"
              type="text"
              required={true}
              value={aluno.celphone}
              onChange={(event) => {
                setAluno({ ...aluno, celphone: event.target.value });
              }}
              empty={!aluno.celphone ? true : false}
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
              id="family_income"
              label="Renda Familiar R$"
              name="family_income"
              type="text"
              required={true}
              value={aluno.family_income}
              onChange={(event) => {
                setAluno({ ...aluno, family_income: event.target.value });
              }}
              empty={!aluno.family_income ? true : false}
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
              id="city"
              label="Cidade"
              name="city"
              type="text"
              required={true}
              value={aluno.city}
              onChange={(event) => {
                setAluno({ ...aluno, city: event.target.value });
              }}
              empty={!aluno.city ? true : false}
            />

            <InputField
              id="state"
              label="Estado"
              name="state"
              type="text"
              required={true}
              value={aluno.state}
              onChange={(event) => {
                setAluno({ ...aluno, state: event.target.value });
              }}
              empty={!aluno.state ? true : false}
            />

            <InputField
              id="neighborhood"
              label="Bairro"
              name="neighborhood"
              type="text"
              required={true}
              value={aluno.neighborhood}
              onChange={(event) => {
                setAluno({ ...aluno, neighborhood: event.target.value });
              }}
              empty={!aluno.neighborhood ? true : false}
            />

            <InputField
              id="house_number"
              label="Número"
              name="house_number"
              type="text"
              required={true}
              value={aluno.house_number}
              onChange={(event) => {
                setAluno({ ...aluno, house_number: event.target.value });
              }}
              empty={!aluno.house_number ? true : false}
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
