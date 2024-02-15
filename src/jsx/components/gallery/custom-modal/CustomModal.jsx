import Modal from 'react-modal';

export const CustomModal = ({ isOpen, onRequestClose, selectedImage }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      selectedImage={selectedImage}
    >
      <div>
        <button onClick={onRequestClose}>close</button>
        {selectedImage && (
          <img
            src={selectedImage.urls.regular}
            alt={selectedImage.description}
          />
        )}
      </div>
    </Modal>
  );
};
