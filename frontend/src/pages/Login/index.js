import { useState } from "react";
import {
  FullContainer,
  FormContainer,
  PageDescription,
  Logo,
  Cadastro,
  Footer,
} from "./style.js";
import logo from "../../components/Sidebar/assets/logo.png";
// import { IoIosRocket } from "react-icons/io";
// import { MaxContainer } from "../../util/style-frame";
// import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";
// import { Auth } from "../../api";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { InputField } from "../../components/Input/index.js";

function Login() {
  const [data, setData] = useState({ username: "", password: "" });

  const handleInput = (e) => {
    const objectKey = e.target.name;
    const objectContent = e.target.value;
    const newData = { ...data, [objectKey]: objectContent };
    setData(() => newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Auth.login(data);
  };

  return (
    <FullContainer>
      <div className="gap"></div>

      <Logo>
        <img src={logo} />
      </Logo>

      <PageDescription>Login / Cadastro</PageDescription>

      <FormContainer onSubmit={handleSubmit}>
        <InputField
          id="username"
          label="Usuário"
          type="text"
          name="username"
          required={true}
          value={data.username}
          onChange={handleInput}
          empty={data.username === "" ? true : false}
        />

        <InputField
          id="password"
          label="Senha"
          name="password"
          type="password"
          required={true}
          value={data.password}
          onChange={handleInput}
          empty={data.password === "" ? true : false}
        />

        <Button type="submit" style={{ width: "100%", marginTop: "20px" }}>
          Acessar plataforma
        </Button>
      </FormContainer>

      {/* <Cadastro>
        <h3 className="title">
          Ainda não é cadastrado?
          <Link to="/signup"> Clique aqui, é muito simples!</Link>
        </h3>
      </Cadastro> */}
    </FullContainer>
  );
}

export default Login;
