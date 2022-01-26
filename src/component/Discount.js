import React from "react";
import ProductList from "./product/ProductList";

const Discount = () => {
  return (
    <>
      <section className="discount bg-yellow">
        <div className="container">
          <div className="section-wrapper">
            <ProductList sectionTitle={"Buy 1 Get 1"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Discount;
