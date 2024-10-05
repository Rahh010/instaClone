// Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, productDetails }) => {
  if (!isOpen) return null; // Don't render anything if the modal is not open

  const handleOverlayClick = (event) => {
    // Close the modal only if the overlay is clicked (not the modal content)
    if (event.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{productDetails.title}</h2>
        <h3>{productDetails.category}</h3> {/* Added product category */}
        <img src={productDetails.image} alt={productDetails.title} className="modal-image" />
        <p className="modal-price">{productDetails.price}</p>
        <p className="modal-description">{productDetails.description}</p>
      </div>
    </div>
  );
};

export default Modal;
