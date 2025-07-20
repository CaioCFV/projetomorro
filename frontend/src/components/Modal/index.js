import { ModalOverlay, ModalContainer } from "./style.js";

function Modal({ active, children }) {
  return (
    <div>
      <ModalOverlay></ModalOverlay>
      <ModalContainer>{children}</ModalContainer>
    </div>
  );
}

export default Modal;
