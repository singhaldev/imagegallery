import React from 'react';
import {
  Button,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Modal,
  ModalFooter,
} from '@chakra-ui/react';

const ImageModal = ({ onClose, isOpen, children }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent
        rounded="15px"
        maxW={[350, 500, 600, 700]}
        className="modal-content"
        marginTop="10px"
      >
        <ModalBody p={0}>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;
