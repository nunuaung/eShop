import React from "react";
import Banner from "../component/banner/Banner";
import Category from "../component/category/Category";
import Discount from "./Discount";
import Laptop from "./Laptop";
import NewArrival from "./NewArrival";
import Phone from "./Phone";
import Promotion from "./Promotion";
import Tablet from "./Tablet";

const Home = (props) => {
  // const data = props.data;
  // console.log("data => ", data);
  return (
    <>
      <Banner />
      <Category />
      <Discount />
      <Promotion />
      <NewArrival />
      <Phone />
      <Laptop />
      <Tablet />
    </>
  );
};

export default Home;
