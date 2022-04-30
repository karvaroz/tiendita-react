import React from 'react'
import "../styles/ProducListStyle.css";
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div className="product_list_box">
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default ProductList