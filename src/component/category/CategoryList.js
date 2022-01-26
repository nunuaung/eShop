// import React, { useState, useEffect } from "react";
// import "./category.css";
// import { data } from "../../data";
// import Category from "./Category";

// const CategoryList = (props) => {
//   const categories = props.categories;
//   console.log("categories ", categories);
//   const [noOfElement, setNoOfElement] = useState(7);

//   const rowCategories = categories.slice(0, noOfElement);
//   const viewMoreHandler = () => {
//     setNoOfElement(noOfElement + noOfElement);
//   };

//   function handleResize() {
//     if (window.innerWidth <= 768) {
//       setNoOfElement(4);
//     } else {
//       setNoOfElement(7);
//     }
//   }

//   useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       <section className="categories">
//         <div className="container">
//           <div className="section-wrapper">
//             <h1 className="main-title text-center">Categories</h1>
//             <div className="col8-wrapper">
//               <div className="col8-wrap">
//                 {rowCategories.map((cat) => (
//                   <Category key={cat.id} category={cat} />
//                 ))}
//               </div>
//               <div className="view-more">
//                 <div class="more-dot" onClick={viewMoreHandler}>
//                   <span class="circle-dot"></span>
//                   <span class="circle-dot"></span>
//                   <span class="circle-dot"></span>
//                 </div>
//                 <p class="view-btn">View All</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CategoryList;
