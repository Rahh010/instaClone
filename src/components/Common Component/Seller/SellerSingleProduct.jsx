import React from 'react';
import './SellerSingleProduct.css';

const SellerSingleProduct = ({ imgSrc, name, category, price, description }) => {
  return (
    <div className="product-card">
      <img src={imgSrc} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-category">Category: {category}</p>
      <p className="product-price">${price}</p>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default SellerSingleProduct;
