import React from 'react';
import productsData from './productsData';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './ProductSlider.css';

const selectedProducts = [productsData[0], productsData[1], productsData[2], productsData[3]]; // Example: Selecting products at index 1, 3, and 5

const ProductSlider = () => {
  return (
    <div className="product-slider-container">
      <h2 className="product-slider-title">Product Showcase</h2>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        infiniteLoop
        autoPlay
        interval={4000}
        centerMode
        centerSlidePercentage={33.33}
        showStatus={false} // Hide the slide number text
        swipeable // Enable swipe functionality
        className="product-slider"
      >
        {selectedProducts.map((product) => (
          <div key={product.id} className="product-slider-card">
            <img src={product.image} alt={product.title} className="product-slider-image" />
            <h3 className="product-slider-card-title">{product.title}</h3>
            <p className="product-slider-card-description">{product.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductSlider;
