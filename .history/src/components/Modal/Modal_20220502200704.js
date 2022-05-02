import React, { useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Background, CloseModalButton, ModalWrapper } from './ModalStyles';
import Form from '../Form/Form';

const Modal = () => {
  return (
    <div>
      <AnimatePresence>
        {showModal && (
          <Background
            variants={backgroundVariants}
            animate="animate"
            initial="initial"
            onClick={closeModal}
            ref={modalRef}
            exit={{
              opacity: 0,
            }}
          >
            <ModalWrapper
              variants={modalVariants}
              animate="animate"
              initial="initial"
              exit={{
                opacity: 0,
                y: '-100vh',
              }}
            >
              <Form></Form>
              <CloseModalButton
                aria-label="Close Modal"
                onClick={toggleModal}
              />
            </ModalWrapper>
          </Background>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Modal;
