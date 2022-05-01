import React from "react";
import ProductList from "../components/ProductList";

const App = () => {

  return (
    <>
      <div className="container py-10 mx-auto flex flex-wrap place-content-center">
        <img src="/assets/icons/banner.png" alt="" />
      </div>
      <ProductList />
    </>
  );
};

export default App;
