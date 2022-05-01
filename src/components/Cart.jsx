import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import ItemCart from "./ItemCart";
import "../styles/Cart.css";

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
        <div className="flex justify-center my-6">
          <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
            <div className="flex-1">
              <table className="w-full text-sm lg:text-base" cellspacing="0">
                <thead>
                  <tr className="h-12 uppercase">
                    <th className="hidden md:table-cell"></th>
                    <th className="text-left">Product</th>
                    <th className="lg:text-right text-left pl-5 lg:pl-0">
                      <span className="lg:hidden" title="Quantity">
                        Cant
                      </span>
                      <span className="hidden lg:inline">Cantidad</span>
                    </th>
                    <th className="hidden text-right md:table-cell">Precio</th>
                    <th className="text-right">SubTotal</th>
                    <th className="text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <ItemCart key={item.id} item={item} />
                  ))}
                </tbody>
              </table>
              <hr />
              <h2 className="font-bold text-gray-800 mt-10">Total: ${total}</h2>
              <button
                onClick={handlePay}
                className="flex w-90 px-10 py-3 mt-6 font-medium text-white uppercase bg-orange-600 rounded-full shadow item-center hover:bg-orange-700 focus:shadow-outline focus:outline-none"
              >
                Pagar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
