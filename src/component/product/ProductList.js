import React, { useState, useEffect } from "react";
import LoadMore from "../more/LoadMore";
import "./product.css";
import { data } from "../../data";
import Product from "./Product";

const ProductList = (props) => {
  const products = data.products;
  const sectionTitle = props.sectionTitle;
  const titleLogo = props.titleLogo;

  const [noOfProduct, setNoOfProduct] = useState(6);
  const [titleIcon, setTitleIcon] = useState(titleLogo);

  const rowProducts = products.slice(0, noOfProduct);
  const viewMoreProductHandler = () => {
    setNoOfProduct(noOfProduct + noOfProduct);
  };

  function handleResize() {
    if (window.innerWidth <= 480) {
      return setNoOfProduct(2);
    } else if (window.innerWidth <= 768) {
      return setNoOfProduct(4);
    } else {
      return setNoOfProduct(6);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="title-container">
        <div className="title-wrap">
          <h1
            className={titleIcon ? "section-title titleIcon" : "section-title"}
          >
            {sectionTitle}
          </h1>
        </div>
        <LoadMore viewMoreProductHandler={viewMoreProductHandler} />
      </div>
      <div className="product-row">
        {rowProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
