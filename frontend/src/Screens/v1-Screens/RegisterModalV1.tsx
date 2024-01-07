import React from "react";

interface RegisterModalProps {
  onClose: () => void;
}

const RegisterModalV1: React.FC<RegisterModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Registration Modal</h2>
        <p>Some text goes here...</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RegisterModalV1;
