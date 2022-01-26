import React from "react";
import { data } from "../../data";
import CategoryBrandList from "../categorybrand/CategoryBrandList";

const Category = () => {
  // const category = props.category;
  // return (
  //   <div class="col8-box">
  //     <img src={window.location.origin + category.image} alt={category.name} />
  //     <p class="category-name">{category.name}</p>
  //   </div>
  // );
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
