import React from "react";
import ProductList from "./product/ProductList";
import Ads from "./ads/Ads";
import Brand from "./brand/Brand";

const NewArrival = () => {
  return (
    <section className="new-arrival border-line">
      <div className="container">
        <div className="section-wrapper">
          <div className="arrival mb-30">
            <ProductList sectionTitle={"New Arrivals"} />
          </div>
          <Ads />
          <Brand />
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
