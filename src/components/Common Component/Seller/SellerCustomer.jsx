// SellerCustomer.jsx
import React, { useState } from 'react';
import './SellerCustomer.css';

const SellerCustomer = ({ customerId, customerName, productName, quantity, price, status, imgSrc }) => {
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleStatusChange = (e) => {
    setCurrentStatus(e.target.value);
  };

  return (
    <div className="customer-card">
      <img src={imgSrc} alt={productName} className="customer-product-image" />
      <div className="customer-details">
        <p><strong>Customer ID:</strong> {customerId}</p>
        <p><strong>Customer Name:</strong> {customerName}</p>
        <p><strong>Product Ordered:</strong> {productName}</p>
        <p><strong>Quantity:</strong> {quantity}</p>
        <p><strong>Price:</strong> ${price}</p>
        <div className="status-container">
          <strong>Status:</strong>
          <select value={currentStatus} onChange={handleStatusChange} className="status-dropdown">
            <option value="shipped">Shipped</option>
            <option value="out for delivery">Out for Delivery</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SellerCustomer;
