import React, { useContext } from "react";
import "../styles/ProductCartStyle.css";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ item }) => {
  const { name, price, discount, image, before, id } = item;
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="product_card" id={id}>
      <p className="product_discount">{discount} % dto.</p>
      <img src={image} alt="product" />
      <p className="product_price">
        ${price}/kg <span className="product_price_before">${before}kg</span>
      </p>
      <p>{name}</p>
      <button onClick={() => addItemToCart(item)} className="product_btn">
        Agregar
      </button>
    </div>
  );
};

export default ProductCard;
