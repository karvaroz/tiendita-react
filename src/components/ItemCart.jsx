import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemCart = ({ item }) => {
  const { addItemToCart, deleteItemToCart } = useContext(CartContext);

  return (
    <div className="cart-item" key={item.id}>
      <img src={item.image} alt="product" />
      <div>
        <h4>{item.name}</h4>
        <h4>${item.price}</h4>
        <h4>Quantity: {item.quantity}</h4>
        <h4>Subtotal:{item.price * item.quantity}</h4>
        <button onClick={() => addItemToCart(item)}>+1</button>
        <button onClick={() => deleteItemToCart(item)}>-1</button>
      </div>
    </div>
  );
};

export default ItemCart;
