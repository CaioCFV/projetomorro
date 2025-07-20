import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #05070a;
  z-index: 10;
  transition: 0.3s;
  ${(props) =>
    props.isActive
      ? "opacity: 0.5; visibility: visible;"
      : "opacity: 0; visibility: hidden;"}
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  box-sizing: border-box;
  background: #0d1017;
  z-index: 20;
  border-radius: 8px;
  ${(props) =>
    props.isActive
      ? "opacity: 0.5; visibility: visible;"
      : "opacity: 0; visibility: hidden;"}
`;
