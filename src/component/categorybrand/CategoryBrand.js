import React from "react";

const CategoryBrand = (props) => {
  const data = props.data;
  return (
    <div class="col8-box">
      <img src={window.location.origin + data.image} alt={data.name} />
      <p class="category-name">{data.name}</p>
    </div>
  );
};

export default CategoryBrand;
