import React from "react";
import "../styles/ProductCartStyle.css";

const ProductCard2 = ({name, price, weight, image, id}) => {
  return (
    <div className="product_card" id={id}>
      <img src={image} alt="product" />
      <p className="product_price">${price}</p>
      <p>{name}</p>
      <p className="product_price_before">{weight} </p>
      <button className="product_btn">Agregar</button>
    </div>
  );
};

export default ProductCard2;
