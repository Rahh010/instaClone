import React, { useState } from 'react';
import Product from './Product'; // Import the updated Product component
import Order from './Order'; // Import the new Order component
import './Purchase.css';

const Purchase = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query
  const [view, setView] = useState('products'); // State to toggle between products and orders

  const products = [
    {
      id: 1,
      image: '/proffesinalai.jpg',
      price: '$10.99',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, laborum?',
      title: 'Professional AI',
      category: 'AI Tools',
    },
    {
      id: 2,
      image: '/proffesinalai.jpg',
      price: '$15.49',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, maiores.',
      title: 'Advanced AI',
      category: 'AI Tools',
    },
    {
      id: 3,
      image: '/proffesinalai.jpg',
      price: '$15.49',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, iure!',
      title: 'AI Assistant',
      category: 'AI Tools',
    },
    {
      id: 4,
      image: '/proffesinalai.jpg',
      price: '$15.49',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, totam.',
      title: 'AI Analyzer',
      category: 'AI Tools',
    },
    {
      id: 5,
      image: '/proffesinalai.jpg',
      price: '$15.49',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, beatae!',
      title: 'AI Generator',
      category: 'AI Tools',
    },
  ];


  // Filter products based on search query
  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const orders = [
    {
      productName: 'AI Assistant',
      productImage: '/proffesinalai.jpg',
      quantity: 2,
      status: 'Shipped'
    },
    {
      productName: 'Advanced AI',
      productImage: '/proffesinalai.jpg',
      quantity: 1,
      status: 'Out for Delivery'
    },
    {
      productName: 'AI Analyzer',
      productImage: '/proffesinalai.jpg',
      quantity: 3,
      status: 'Delivered'
    },
    {
      productName: 'AI Something',
      productImage: '/proffesinalai.jpg',
      quantity: 5,
      status: 'Shipped'
    },
    {
      productName: 'AI Analyzer',
      productImage: '/proffesinalai.jpg',
      quantity: 3,
      status: 'Delivered'
    },
    {
      productName: 'AI Analyzer',
      productImage: '/proffesinalai.jpg',
      quantity: 3,
      status: 'Delivered'
    },
    {
      productName: 'AI Analyzer',
      productImage: '/proffesinalai.jpg',
      quantity: 3,
      status: 'Delivered'
    },
  ];

  return (
    <div className="purchase-main">
      {/* Header Section with Products and Order Buttons */}
      <div className="purchase-header">
        <button className="header-button" onClick={() => setView('products')}>Products</button>
        <button className="header-button" onClick={() => setView('orders')}>Order</button>
      </div>

      {/* Search Bar Section (only shown when viewing products) */}
      {view === 'products' && (
        <div className="purchase-search">
          <input
            type="text"
            placeholder="Search products..."
            className="search-bar"
            value={searchQuery} // Controlled input
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          />
        </div>
      )}

      {/* Render either Products or Orders based on the current view */}
      {view === 'products' ? (
        <div className="purchase-grid">
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              productImage={product.image}
              productPrice={product.price}
              productDescription={product.description}
              productTitle={product.title} // Pass product title
              productCategory={product.category} // Pass product category
            />
          ))}
        </div>
      ) : (
        <Order orders={orders} /> // Pass the orders array to the Order component
      )}
    </div>
  );
};

export default Purchase;
