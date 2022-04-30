import React, { useEffect, useState } from "react";
import "../styles/ProducListStyle.css";
import ProductCard from "./ProductCard";
import { ofertas, populares } from "../helpers/GetData";
import ProductCard2 from "./ProductCard2";

const ProductList = () => {
  const [ofertasData, setOfertasData] = useState(null);
  const [popularesData, setPopularesData] = useState(null);

  useEffect(() => {
    ofertas(setOfertasData);
    populares(setPopularesData);
  }, []);

  return (
    <>
      {ofertasData !== null ? (
        <div className="product_list_box">
          {ofertasData.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        "Cargando..."
      )}

      {popularesData !== null ? (
        <div className="product_list_box">
          {popularesData.map((item) => (
            <ProductCard2 key={item.id} item={item} />
          ))}
        </div>
      ) : (
        "Cargando..."
      )}
    </>
  );
};

export default ProductList;
