import { FC } from 'react';
import { ModalBody, ModalBackdrop } from './Modal.style';

interface IModal {
  toggleModal: Function;
}

const Modal: FC<IModal> = (props) => {
  const { toggleModal, children } = props;
  return (
    <>
      <ModalBackdrop onClick={toggleModal} />
      <ModalBody>{children}</ModalBody>
    </>
  );
};

export default Modal;
