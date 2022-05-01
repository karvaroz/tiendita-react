import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import ItemCart from "./ItemCart";

const Cart = () => {
  const [productsLength, setProductsLength] = useState(0);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.quantity, 0)
    );
  }, [cartItems]);

  const total = cartItems.reduce(
    (previous, current) => previous + current.quantity * current.price,
    0
  );

  const handlePay = () => {
    Swal.fire({
      title: "Pago Exitoso!",
      text: "Muchas gracias por comprar en nuestra tienda!",
      imageUrl:
        "https://res.cloudinary.com/karvaroz/image/upload/v1651362610/la-tiendita/Tiendita_xvlrib.png",
      imageWidth: 100,
      imageHeight: 30,
      imageAlt: "Custom image",
    });
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      {productsLength === 0 ? (
        "Carrito vacio"
      ) : (
        <div>
          <h2>Productos en el carrito: {productsLength}</h2>
          <div className="">
            {cartItems.map((item) => (
              <ItemCart key={item.id} item={item} />

            ))}
          </div>
          <h2>Total: ${total}</h2>
          <button onClick={handlePay}>Pagar</button>
        </div>
      )}
    </>
  );
};

export default Cart;
