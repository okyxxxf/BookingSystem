import React from "react";
import SearchPanel from "./searchPanel";
import './assets/css/searchPage.css';
import Concerts from "./concerts";

const SearchPage = () => {
  return (
    <div className="search-page">
      <SearchPanel/>
      <Concerts/>
    </div>
  )
};

export default SearchPage;