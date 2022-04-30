import React from 'react'
import "../styles/ProductCartStyle.css";

const ProductCard = () => {
  return (
    <div className="product_card">
      <p className="product_discount">32% dto.</p>
      <img src="/assets/ofertas/limon.png" alt="product" />
      <p className="product_price">$26.82/kg <span className="product_price_before">$39.9kg</span></p>
      <p>Limon con semilla</p>
      <button className="product_btn">Agregar</button>
    </div>
  )
}

export default ProductCard