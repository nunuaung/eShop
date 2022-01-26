import React from "react";
import ProductList from "./product/ProductList";

const Tablet = () => {
  return (
    <section className="tablet">
      <div className="container">
        <div className="section-wrapper">
          <ProductList sectionTitle={"Tablet"} titleLogo={true} />
        </div>
      </div>
    </section>
  );
};

export default Tablet;
