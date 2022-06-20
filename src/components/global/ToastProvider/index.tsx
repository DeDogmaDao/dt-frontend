import { ToastContainer } from "react-toastify";
import Modal from "../Modal";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider: React.FC = () => {
  return (
    <Modal
      id="toast-container-document"
      isOpen={true}
      onBackdropClick={() => {}}
    >
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        closeButton={false}
        pauseOnFocusLoss={true}
        pauseOnHover={true}
        bodyStyle={{ zIndex: 9999999, pointerEvents: "auto" }}
      />
    </Modal>
  );
};

export default ToastProvider;
