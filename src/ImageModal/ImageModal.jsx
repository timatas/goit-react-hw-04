import Modal from "react-modal";
import { ImCancelCircle } from "react-icons/im";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "70%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "650px",
    height: "650px",
    backgroundColor: "#c5c2c2",
  },
};

export const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <button onClick={onClose}>
        <ImCancelCircle />
      </button>
      <img src={imageUrl} alt="Зображення" />
    </Modal>
  );
};
