import React, { useState } from 'react';
import './SalesMain.css';
import SellerSingleProduct from './SellerSingleProduct';
import SellerCustomer from './SellerCustomer';
import AddProduct from './AddProduct';

const SalesMain = () => {
  const [view, setView] = useState('products'); // State to manage the view
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleAddProduct = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="sales-main" style={{ marginLeft: '250px' }}> {/* Aligning with the 250px left navbar */}
      <div className="buttons-container">
        <button className="insta-button" onClick={() => handleViewChange('products')}>
          Products
        </button>
        <button className="insta-button" onClick={() => handleViewChange('customers')}>
          Customers
        </button>
      </div>

      {view === 'products' ? (
        <div className="products-section">
          <div className="add-product-container">
            <button className="add-product-button" onClick={handleAddProduct}>
              Add Product
            </button>
          </div>
          <div className="products-container">
            <div className="products-column">
              <SellerSingleProduct
                imgSrc="https://via.placeholder.com/200"
                name="Product 1"
                category="Electronics"
                price="299.99"
                description="Great electronic product."
              />
              <SellerSingleProduct
                imgSrc="https://via.placeholder.com/200"
                name="Product 3"
                category="Accessories"
                price="49.99"
                description="Stylish accessories for everyone."
              />
            </div>
            <div className="products-column">
              <SellerSingleProduct
                imgSrc="https://via.placeholder.com/200"
                name="Product 2"
                category="Clothing"
                price="99.99"
                description="Comfortable clothing for all occasions."
              />
              <SellerSingleProduct
                imgSrc="https://via.placeholder.com/200"
                name="Product 4"
                category="Footwear"
                price="79.99"
                description="Trendy and durable footwear."
              />
            </div>
          </div>
          {isModalOpen && <AddProduct onClose={closeModal} />} {/* Modal for adding product */}
        </div>
      ) : (
        <div className="customers-container">
          <SellerCustomer
            customerId="12345"
            customerName="John Doe"
            productName="Laptop"
            quantity="1"
            price="299.99"
            status="shipped"
            imgSrc="https://via.placeholder.com/100"
          />
          <SellerCustomer
            customerId="12346"
            customerName="Jane Smith"
            productName="Headphones"
            quantity="2"
            price="49.99"
            status="out for delivery"
            imgSrc="https://via.placeholder.com/100"
          />
          <SellerCustomer
            customerId="12347"
            customerName="Robert Brown"
            productName="Shoes"
            quantity="1"
            price="79.99"
            status="delivered"
            imgSrc="https://via.placeholder.com/100"
          />
        </div>
      )}
    </div>
  );
};

export default SalesMain;
