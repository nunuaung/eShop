import React from "react";
import ProductList from "./product/ProductList";

const Promotion = () => {
  return (
    <section className="promotion border-line">
      <div className="container">
        <div className="section-wrapper">
          <ProductList sectionTitle={"Promotions"} />
        </div>
      </div>
    </section>
  );
};

export default Promotion;
