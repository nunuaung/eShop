import React from "react";
import { data } from "../../data";
import CategoryBrandList from "../categorybrand/CategoryBrandList";

const Brand = () => {
  const brands = data.brands;
  return (
    <div class="brands">
      <h1 class="section-title mb-30">View By Brands</h1>
      <CategoryBrandList data={brands} />
    </div>
  );
};

export default Brand;
