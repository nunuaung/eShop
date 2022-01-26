import React from "react";

const CategoryBrand = (props) => {
  const data = props.data;
  return (
    <div className="col8-box">
      <img src={`${process.env.PUBLIC_URL}/${data.image}`} alt={data.name} />
      <p className="category-name">{data.name}</p>
    </div>
  );
};

export default CategoryBrand;
