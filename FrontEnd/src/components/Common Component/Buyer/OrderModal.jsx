// OrderModal.jsx
import React from 'react';
import './OrderModal.css'; // You can create a CSS file for styling

const OrderModal = ({ isOpen, onClose, orderDetails }) => {
  if (!isOpen) return null; // Don't render anything if the modal is not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Order Details</h2>
        <p>Product Name: {orderDetails.productName}</p>
        <p>Quantity: {orderDetails.quantity}</p>
        <p>Price: {orderDetails.price}</p>
        <p>Seller Name: {orderDetails.sellerName}</p>
        
        {/* Progress Bar */}
        <div className="progress-bar">
          <div className={`progress ${orderDetails.status.toLowerCase()}`}></div>
        </div>
        
        <div className="status-labels">
          <span>Order Confirmed</span>
          <span>Shipped</span>
          <span>Out for Delivery</span>
          <span>Delivered</span>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
