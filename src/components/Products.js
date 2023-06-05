import React, { useState } from 'react';
import ProductCard from './ProductCard';
import productsData from './productsData';
import './Products.css';
import category1img from './Images/Images_products/Industrial Storage Rack.jpg';
import category2img from './Images/Images_products/electricalC.jpg';
import category3img from './Images/Images_products/pharmaC.jpg';

const categoriesData = [
  {
    id: 1,
    title: 'Steel Products',
    image: category1img,
  },
  {
    id: 2,
    title: 'Electrical Accessories & Appliances',
    image: category2img,
  },
  {
    id: 3,
    title: 'Healthcare, Pharmacutical & Animal',
    image: category3img,
  },
];

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredProducts = selectedCategory
    ? productsData.filter((product) => product.categoryId === selectedCategory)
    : productsData;

  return (
    <div>
      <h1 className='title1'>Types of Products</h1>
      <div className="categories">
        {categoriesData.map((category) => (
          <div
            key={category.id}
            className={`category-button ${
              selectedCategory === category.id ? 'active' : ''
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            <img
              src={category.image}
              alt={category.title}
              className="category-image"
            />
            <h2 className="category-title">{category.title}</h2>
          </div>
        ))}
      </div>
      <h2 className="products-title">Products</h2> {/* Add products title */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
