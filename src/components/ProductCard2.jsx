import React, { useContext } from "react";
import "../styles/ProductCartStyle.css";
import { CartContext } from "../context/CartContext";

const ProductCard2 = ({ item }) => {
  const { name, price, weight, image, priceXweight, id } = item;

  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="product_card" id={id}>
      <img src={image} alt="product" />
      <p className="product_price">${price}</p>
      <p>{name}</p>
      <p className="product_price_before">
        {weight} <span>(${priceXweight} )</span>
      </p>
      <button onClick={() => addItemToCart(item)} className="product_btn">
        Agregar
      </button>
    </div>
  );
};

export default ProductCard2;
