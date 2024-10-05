// Order.jsx
import React, { useState } from 'react';
import IndividualOrder from './IndividualOrder';
import OrderModal from './OrderModal'; // Import the OrderModal component
import './Order.css';

const Order = ({ orders }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="order-list">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} onClick={() => handleOrderClick(order)}>
            <IndividualOrder
              orderNumber={index + 1}
              productName={order.productName}
              productImage={order.productImage}
              quantity={order.quantity}
              status={order.status}
            />
          </div>
        ))
      )}
      {/* Modal for Order Details */}
      <OrderModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        orderDetails={selectedOrder || {}} // Pass the selected order details to the modal
      />
    </div>
  );
};

export default Order;
