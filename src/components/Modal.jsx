// src/components/Modal.jsx
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-content">{children}</div>
    </>,
    document.getElementById("modal-root") 
  );
};

export default Modal;
