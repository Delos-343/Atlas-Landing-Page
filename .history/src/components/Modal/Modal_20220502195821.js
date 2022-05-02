import { AnimatePresence } from 'framer-motion';
import React from 'react';

const Modal = () => {
  return (
    <div>
      <AnimatePresence>
        {showModal && (
          <Background>
            <ModalWrapper>
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
