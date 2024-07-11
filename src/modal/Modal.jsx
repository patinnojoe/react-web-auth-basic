import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import './modal.css';
import { useContext } from 'react';
import { ModalContext } from '../store/ModalProvider';

const Modal = ({ id, children, isFullScreen = false }) => {
  const { isModalOpen } = useContext(ModalContext);

  // check if the modal is open, if not return nothing
  if (!isModalOpen(id)) return null;

  return ReactDOM.createPortal(
    <div
      className={`__modal_overlay ${isModalOpen(id) ? 'd-flex' : 'd-none'}`}
      // onClick={!isFullScreen ? () => closeModal(id) : null}
    >
      <div className={`__modal_inner ${isFullScreen ? 'full-screen' : ''}`}>{children}</div>
    </div>,
    document.getElementById('modal-root'),
  );
};

export default Modal;
Modal.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isFullScreen: PropTypes.bool,
};

export const ModalButtonTrigger = ({ children, id }) => {
  const { openModal } = useContext(ModalContext);
  return <div onClick={() => openModal(id)}>{children}</div>;
};
ModalButtonTrigger.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};
