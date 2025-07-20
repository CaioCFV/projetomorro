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
  cursor: pointer;
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
      ? "opacity: 1; visibility: visible;"
      : "opacity: 0; visibility: hidden;"}
`;
export const CloseButton = styled.button`
  border: 0;
  padding: 0;
  background: transparent;
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
  border: 0;
  svg {
    color: #fff;
    width: 25px;
  }
`;
