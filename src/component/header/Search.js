import React from "react";
import SearchIcon from "../../asset/image/navbar/search-icon.png";

const Search = () => {
  return (
    <div class="search_box">
      <input type="text" placeholder="Search Product" />
      <img src={SearchIcon} alt="search-icon" class="search-icon" />
    </div>
  );
};

export default Search;
