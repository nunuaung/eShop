import React from "react";
import ProductList from "./product/ProductList";

const Laptop = () => {
  return (
    <section className="laptop border-line">
      <div className="container">
        <div className="section-wrapper">
          <ProductList sectionTitle={"Laptop"} titleLogo={true} />
        </div>
      </div>
    </section>
  );
};

export default Laptop;
