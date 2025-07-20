import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid #333b4d99;
  height: 50px;
  padding: 0px 15px;
  border-radius: 5px;
  transition: 0.3s;
  color: #fff;
  width: 100%;
  background: #05070a;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border: 1px solid #f5f5f5;
    // box-shadow: 0px 0px 2px var(--theme-color-1);
  }

  &:focus ~ label {
    top: 0;
    font-size: 13px;
    color: #fff;
    background: #0d1017;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
  color: #333b4d99;
  transition: 0.3s;
  background: transparent;
  padding: 0px 8px;
`;

export const Fieldset = styled.fieldset`
  position: relative;
  width: 100%;

  &[aria-disabled="false"] label {
    top: 0;
    font-size: 13px;
    color: #fff;
    opacity: 0.7;
    background: #0e1017;
  }
  // #52bc52

  &[aria-disabled="false"] input {
    border: 1px solid #333b4d99;
  }
`;
