import React from "react";
import { data } from "../../data";
import CategoryBrandList from "../categorybrand/CategoryBrandList";

const Category = () => {
  const brands = data.categories;
  return (
    <section className="categories">
      <div className="container">
        <div className="section-wrapper">
          <h1 className="main-title text-center">Categories</h1>
          <CategoryBrandList data={brands} />
        </div>
      </div>
    </section>
  );
};

export default Category;
