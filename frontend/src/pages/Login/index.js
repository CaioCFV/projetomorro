import { useState } from "react";
import {
  FullContainer,
  FormContainer,
  PageDescription,
  Logo,
} from "./style.js";
import logo from "../../components/Sidebar/assets/logo.png";
import { Auth } from "../../service/api.js";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { InputField } from "../../components/Input/index.js";

function Login() {
  const [data, setData] = useState({ username: "", password: "" });
  const auth = new Auth();

  const handleInput = (e) => {
    const objectKey = e.target.name;
    const objectContent = e.target.value;
    const newData = { ...data, [objectKey]: objectContent };
    setData(() => newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const r = await auth.login(data);
    console.log(r, "");
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
          id="email"
          label="E-mail"
          type="text"
          name="email"
          required={true}
          value={data.email}
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
    </FullContainer>
  );
}

export default Login;
