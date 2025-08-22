import styled from "styled-components";

export const List = styled.main`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 15px;
  color: #fff;
  min-width: 450px;
`;

export const Paragraph = styled.p`
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.5px;
  font-weight: 300;
  color: #fff;
  opacity: 0.7;
  margin-bottom: 15px;
  border-bottom: 1px solid #333b4d99;
  padding-bottom: 15px;
`;

export const Form = styled.form`
  label {
    font-size: 15px;
    height: 20px;
    letter-spacing: 0.5px;
    font-weight: 300;
    color: #fff;
    opacity: 0.7;
    margin-bottom: 5px;
    border-bottom: 1px solid #333b4d99;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  input {
    margin-right: 15px;
  }
`;
