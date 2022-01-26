import React from "react";

const CategoryBrand = (props) => {
  const data = props.data;
  return (
    <div className="col8-box">
      <img src={require(`${data.image}`)} alt={data.name} />
      <p className="category-name">{data.name}</p>
    </div>
  );
};

export default CategoryBrand;
