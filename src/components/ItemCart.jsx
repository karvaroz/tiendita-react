import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemCart = ({ item }) => {
  const { addItemToCart, deleteItemToCart } = useContext(CartContext);

  return (
    <tr className="linea_cart" id={item.id}>
      <td className="hidden pb-4 md:table-cell">
        <img src={item.image} alt={item.name} className="w-20" />
      </td>
      <td>
        <p className="mb-2 md:ml-4">{item.name}</p>
      </td>
      <td className="justify-center md:justify-end md:flex mt-6">
        <div className="w-20 h-10">
          <div className="relative flex flex-row w-full h-8">
            <p className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black">
              {item.quantity}
            </p>
          </div>
        </div>
      </td>
      <td className="hidden text-right md:table-cell">
        <span className="text-sm lg:text-base font-medium">${item.price}</span>
      </td>
      <td className="text-right">
        <span className="text-sm lg:text-base font-medium">
          ${item.price * item.quantity}
        </span>
      </td>
      <td className="text-end">
        <button
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-1 px-1 border rounded ml-2"
          onClick={() => addItemToCart(item)}
        >
          +1
        </button>
        <button
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-1 px-1 border rounded ml-2"
          onClick={() => deleteItemToCart(item)}
        >
          -1
        </button>
      </td>
    </tr>
  );
};

export default ItemCart;
