import React from "react";
import "../styles/ProductCartStyle.css";

const ProductCard = ({ name, price, discount, image, id }) => {
  return (
    <div className="product_card" id={id}>
      <p className="product_discount">{discount} % dto.</p>
      <img src={image} alt="product" />
      <p className="product_price">
        ${price}/kg <span className="product_price_before">$39.9kg</span>
      </p>
      <p>{name}</p>
      <button className="product_btn">Agregar</button>
    </div>
  );
};

export default ProductCard;
