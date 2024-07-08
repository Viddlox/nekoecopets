import React, { useState } from 'react';
import './Products.css';

const Products = () => {
  // State to track the selected item
  const [selectedItem, setSelectedItem] = useState(null);

  // Array of product names (or any data you want to display)
  const products = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

  // Function to handle item selection
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className='grid-container'>
      <div className='grid-title'>Our Products</div>
      <div className="grid">
        {products.map((product, index) => (
          <div
            key={index}
            className={`item ${index === selectedItem ? 'selected' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            {product}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
