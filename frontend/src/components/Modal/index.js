import { ModalOverlay, ModalContainer, CloseButton } from "./style.js";
import Close from "@mui/icons-material/Close";

function Modal({ isActive, children, handleModal }) {
  return (
    <div>
      <ModalOverlay
        isActive={isActive}
        onClick={() => handleModal(false)}
      ></ModalOverlay>
      <ModalContainer isActive={isActive}>
        <CloseButton onClick={() => handleModal(false)}>
          <Close />
        </CloseButton>
        {children}
      </ModalContainer>
    </div>
  );
}

export default Modal;
