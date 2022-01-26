import React, { useState } from "react";
import "./loadmore.css";

const LoadMore = (props) => {
  const viewMoreProductHandler = props.viewMoreProductHandler;
  return (
    <>
      <div className="view-more" onClick={viewMoreProductHandler}>
        <button className="more-button">View More</button>
      </div>
    </>
  );
};

export default LoadMore;
