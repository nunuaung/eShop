import React from "react";
import ProductList from "./product/ProductList";

const Phone = () => {
  return (
    <section className="phone border-line">
      <div className="container">
        <div className="section-wrapper">
          <ProductList sectionTitle={"Phone"} titleLogo={true} />
        </div>
      </div>
    </section>
  );
};

export default Phone;
