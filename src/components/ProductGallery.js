import React from 'react';
import ProductCard from './ProductCard';
import './ProductGallery.css';

const ProductGallery = ({ products }) => {
  return (
    <div className="product-gallery">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGallery;
