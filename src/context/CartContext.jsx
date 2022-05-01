import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const productosEnLocalStorage = localStorage.getItem("cartProducts");
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    console.clear();
    console.log(cartItems);
  }, [cartItems]);

  const addItemToCart = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );

    if (inCart) {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, quantity: inCart.quantity + 1 };
          } else return productInCart;
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const deleteItemToCart = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );
    if (inCart.quantity === 1) {
      cartItems.filter((productInCart) => productInCart.id !== product.id);
    } else {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, quantity: inCart.quantity - 1 };
          } else return productInCart;
        })
      );
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, deleteItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
