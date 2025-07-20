import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #05070a;
  opacity: 0.5;
  z-index: 10;
  transition: 0.3s;
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
`;
