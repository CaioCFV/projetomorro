import styled from "styled-components";

export const FullContainer = styled.main`
  background: linear-gradient(to left top, #05070a, #0d1017);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Logo = styled.h1`
  img {
    display: block;
    width: 200px;
    margin: 0 auto 40px;
  }
`;

export const FormContainer = styled.form`
  width: calc(100% - 50px);
  max-width: 500px;
  padding: 50px;
  border-radius: 10px;
  background: #0d1016;
  fieldset + fieldset {
    margin-top: 20px;
  }
  @media all and (max-width: 567px) {
    padding: 40px 30px;
  }
`;

export const PageDescription = styled.h2`
  color: #fff;
  font-weight: 100;
  max-width: 500px;
  text-align: center;
  margin-bottom: 50px;
  line-height: 20px;
`;

export const Cadastro = styled.div`
  width: calc(100% - 50px);
  max-width: 500px;
  margin-top: 20px;
  text-align: center;

  h3 {
    color: #fff;
    font-size: 15px;
  }

  a {
    color: #fff;
    font-weight: 300;
    text-decoration: none;
  }

  @media all and (max-width: 567px) {
    h3,
    a {
      display: block;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;

  &:before {
    content: "";
    display: block;
    height: 1px;
    width: calc(100% - 50px);
    max-width: 400px;
    margin: 80px auto 20px auto;
    background: repeating-linear-gradient(
      to left,
      transparent,
      #fff,
      transparent
    );
  }

  & > div {
    display: flex;
    justify-content: center;
  }

  a + a {
    margin-left: 10px;
  }

  svg {
    font-size: 30px;
    color: #fff;
    text-decoration: none;
    opacity: 0.5;
    transition: 0.5s;
  }

  a:hover svg {
    opacity: 1;
  }
`;
