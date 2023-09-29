import React from "react";
import SearchPanel from "./searchPanel";
import './assets/css/searchPage.css';
import Concerts from "./concerts";
import ConcertService from "../../services/concertservice";

const SearchPage = () => {
  const service = new ConcertService();
  service.getResourse()
    .then(json => console.log(json));
  return (
    <div className="search-page">
      <SearchPanel/>
      <Concerts/>
    </div>
  )
};

export default SearchPage;