import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import IconHeart from "../../asset/image/icon-whiteheart.png";

const Product = (props) => {
  const product = props.product;
  const [addToCart, setAddToCart] = useState(false);

  const addToCartHandler = () => {
    setAddToCart(!addToCart);
  };
  return (
    <>
      <div className="product-col">
        <div className="single-product">
          <div className="product-img">
            <img src={product.image} alt={product.name} />
            {product.promotion ? (
              <span className="price-dec">{product.promotion}%Off</span>
            ) : (
              ""
            )}
            <div className="wishlist">
              <FontAwesomeIcon
                icon={faHeart}
                className={addToCart ? "icon-heart active" : "icon-heart"}
                onClick={addToCartHandler}
              />
            </div>
          </div>
          <div className="product-content">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">
              {product.promotionPrice
                ? product.promotionPrice
                : product.originPrice}
              <span className="price-unit">Ks</span>
            </p>
            <p className="normal-price">
              {product.originPrice}
              <span className="price-unit">&nbsp;Ks</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
