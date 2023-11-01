import React, { useState } from "react";
import SearchPanel from "./searchPanel";
import './assets/css/searchPage.css';
import Concerts from "./concerts";
import Filters from "../modals/filters/filters";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isOpenFiltersWindow, openCloseWindow] = useState(false);
  const [category, selectCategory] = useState([]);
  const [date, selectDate] = useState(undefined);

  if (isOpenFiltersWindow) document.body.style.overflowY = 'hidden';
  else document.body.style.overflowY = 'auto';

  return (
    <div className="search-page">
      <SearchPanel 
      searchValue={searchValue} 
      setSearchValue={setSearchValue} 
      openWindow={openCloseWindow}
      category={category}
      date={date}/>
      <Concerts searchValue={searchValue} category={category} date={date}/>
      { 
        isOpenFiltersWindow 
        ? <Filters 
        closeWindow={openCloseWindow} 
        category={category} 
        date={date} 
        selectDate={selectDate} 
        selectCategory={selectCategory}/> 
        : null
      }
    </div>
  )
};

export default SearchPage;