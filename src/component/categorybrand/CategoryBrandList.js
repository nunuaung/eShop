import React, { useState, useEffect } from "react";
import "./categorybrand.css";
import CategoryBrand from "./CategoryBrand";

const CategoryBrandList = (props) => {
  const data = props.data;
  const [noOfElement, setNoOfElement] = useState(7);

  const dataRow = data.slice(0, noOfElement);
  const viewMoreHandler = () => {
    setNoOfElement(noOfElement + noOfElement);
  };

  function handleResize() {
    if (window.innerWidth <= 768) {
      setNoOfElement(4);
    } else {
      setNoOfElement(7);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="col8-wrapper">
        <div className="col8-wrap">
          {dataRow.map((data) => (
            <CategoryBrand key={data.id} data={data} />
          ))}
        </div>
        <div className="view-more" onClick={viewMoreHandler}>
          <div class="more-dot">
            <span class="circle-dot"></span>
            <span class="circle-dot"></span>
            <span class="circle-dot"></span>
          </div>
          <p class="view-btn">View All</p>
        </div>
      </div>
    </>
  );
};

export default CategoryBrandList;
