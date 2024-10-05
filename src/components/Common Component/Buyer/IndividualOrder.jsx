import React from 'react';
import './IndividualOrder.css'; // Create a CSS file for styling

const IndividualOrder = ({ orderNumber, productName, productImage, quantity, status }) => {
  return (
    <div className="individual-order">
      <h3>Order No. {orderNumber}:</h3>
      <div className="order-details">
        <div className="order-info">
          <p><strong>Product Name:</strong> {productName}</p>
          <p><strong>Quantity:</strong> {quantity}</p>
          <p><strong>Status:</strong> {status}</p>
        </div>
        <div className="order-image">
          <img src={productImage} alt={productName} />
        </div>
      </div>
    </div>
  );
};

export default IndividualOrder;
