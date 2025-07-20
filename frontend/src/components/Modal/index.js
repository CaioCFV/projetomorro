import { ModalOverlay, ModalContainer } from "./style.js";

function Modal({ active, children, handleModal }) {
  return (
    <div>
      <ModalOverlay isActive={active}></ModalOverlay>
      <ModalContainer isActive={active}>
        <button></button>
        {children}
      </ModalContainer>
    </div>
  );
}

export default Modal;
