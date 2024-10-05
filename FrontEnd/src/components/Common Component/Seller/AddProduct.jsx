import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = ({ onClose }) => {
  const [productDetails, setProductDetails] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductDetails((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Product added: ' + JSON.stringify(productDetails));
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={productDetails.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={productDetails.category}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={productDetails.price}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={productDetails.description}
            onChange={handleChange}
            required
            rows="4"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {productDetails.image && (
            <img src={productDetails.image} alt="Product Preview" className="product-preview" />
          )}
          <button type="submit">Add Product</button>
        </form>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
