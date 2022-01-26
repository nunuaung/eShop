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
      <div class="product-col">
        <div class="single-product">
          <div class="product-img">
            <img
              src={window.location.origin + product.image}
              alt={product.name}
            />
            {product.promotion ? (
              <span class="price-dec">{product.promotion}%Off</span>
            ) : (
              ""
            )}
            <div class="wishlist">
              <FontAwesomeIcon
                icon={faHeart}
                className={addToCart ? "icon-heart active" : "icon-heart"}
                onClick={addToCartHandler}
              />
            </div>
          </div>
          <div class="product-content">
            <h2 class="product-name">{product.name}</h2>
            <p class="product-price">
              {product.promotionPrice
                ? product.promotionPrice
                : product.originPrice}
              <span class="price-unit">Ks</span>
            </p>
            <p class="normal-price">
              {product.originPrice}
              <span class="price-unit">&nbsp;Ks</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
