import { AnimatePresence } from 'framer-motion';
import React from 'react';

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
              <CloseModalButton />
            </ModalWrapper>
          </Background>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Modal;
