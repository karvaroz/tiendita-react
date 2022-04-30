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
          {ofertasData.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        "Cargando..."
      )}

      {popularesData !== null ? (
        <div className="product_list_box">
          {popularesData.map((prod) => (
            <ProductCard2 key={prod.id} {...prod} />
          ))}
        </div>
      ) : (
        "Cargando..."
      )}
    </>
  );
};

export default ProductList;
