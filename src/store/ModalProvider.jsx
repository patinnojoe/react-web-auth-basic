import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext({
  closeModal: () => {},
  openModal: () => {},
  isModalOpen: false,
});

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState('');
  const openModal = (id) => {
    // the modal id is dynamically used as an object key and set to true
    setModals((prev) => ({ ...prev, [id]: true }));
  };

  const closeModal = (id) => {
    // the modal id is dynamically used as an object key and set to false
    setModals((prev) => ({ ...prev, [id]: false }));
  };

  const isModalOpen = (id) => {
    // to determine if modal is open check if the state has the modal id set, convert the response to a boolean with the double bang !! operator
    return !!modals[id];
  };

  const values = {
    isModalOpen,
    closeModal,
    openModal,
  };
  return <ModalContext.Provider value={values}>{children}</ModalContext.Provider>;
};
// prop validation
ModalProvider.propTypes = {
  children: PropTypes.node,
};
