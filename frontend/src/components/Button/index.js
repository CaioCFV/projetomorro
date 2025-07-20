import styled from "styled-components";

export const Button = styled.button`
  color: black;
  box-shadow: inset 0 -1px 0 hsl(220, 30%, 80%);
  border: 1px solid hsl(220, 35%, 97%);
  background-color: #f5f6fa;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 8px;
  font-size: 13px;
  font-family: "Inter", sans-serif;
  width: ${(props) => props.width};
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  svg {
    font-size: 18px;
  }
`;
