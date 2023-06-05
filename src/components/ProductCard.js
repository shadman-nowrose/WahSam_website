import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title, description, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
