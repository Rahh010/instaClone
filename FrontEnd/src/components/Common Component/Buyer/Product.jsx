import React, { useState } from 'react';
import './Product.css';
import Modal from './Modal'; // Import the Modal component

const Product = ({ productImage, productPrice, productDescription, productTitle, productCategory }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Product details to pass to the modal
  const productDetails = {
    title: productTitle, // Added product title
    category: productCategory, // Added product category
    image: productImage,
    price: productPrice,
    description: productDescription,
  };

  return (
    <div className="product-item">
      {/* Product Image */}
      <img src={productImage} alt={productTitle} className="product-image" />

      {/* Product Title */}
      <h3 className="product-title">{productTitle}</h3> {/* Display Product Title */}

      {/* Product Category */}
      <p className="product-category">{productCategory}</p> {/* Display Product Category */}

      {/* Product Price */}
      <p className="product-price">{productPrice}</p>

      {/* Product Description */}
      <p className="product-description">{productDescription}</p>

      {/* Button Section */}
      <div className="button-container">
        <button className="btn-primary">Buy</button>
        <button className="btn-secondary" onClick={() => setIsModalOpen(true)}>Details</button>
      </div>

      {/* Modal for product details */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productDetails={productDetails} 
      />
    </div>
  );
};

export default Product;
